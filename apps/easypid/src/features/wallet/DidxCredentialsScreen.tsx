import { Trans } from '@lingui/react/macro'
import { useCredentialsForDisplay } from '@package/agent'
import { Heading, Paragraph, ScrollView, TypeChip, XStack, YStack } from '@package/ui'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DidxCredentialRowCard } from './components/DidxCredentialRowCard'
import { DidxHeader } from './components/DidxHeader'

function getCredentialCategory(type?: string): string {
  if (!type) return 'other'
  const lower = type.toLowerCase()
  if (
    lower.includes('pid') ||
    lower.includes('identity') ||
    lower.includes('id') ||
    lower.includes('license') ||
    lower.includes('mdl') ||
    lower.includes('address') ||
    lower.includes('verification')
  )
    return 'identity'
  if (
    lower.includes('education') ||
    lower.includes('diploma') ||
    lower.includes('degree') ||
    lower.includes('certificate')
  )
    return 'education'
  if (lower.includes('bank') || lower.includes('finance') || lower.includes('account')) return 'finance'
  if (lower.includes('employ') || lower.includes('work')) return 'employment'
  if (lower.includes('health') || lower.includes('medical')) return 'health'
  return 'other'
}

const FILTER_CATEGORIES = ['all', 'identity', 'education', 'finance', 'employment', 'health'] as const
type FilterCategory = (typeof FILTER_CATEGORIES)[number]

const categoryLabels: Record<FilterCategory, string> = {
  all: 'All',
  identity: 'Identity',
  education: 'Education',
  finance: 'Finance',
  employment: 'Employment',
  health: 'Health',
}

export function DidxCredentialsScreen() {
  const { credentials } = useCredentialsForDisplay()
  const [filter, setFilter] = useState<FilterCategory>('all')
  const { push } = useRouter()
  const insets = useSafeAreaInsets()

  const activeCount = credentials.filter((c) => {
    const hasExpired = c.metadata.validUntil ? new Date(c.metadata.validUntil) < new Date() : false
    return !hasExpired
  }).length

  const filtered =
    filter === 'all' ? credentials : credentials.filter((c) => getCredentialCategory(c.metadata.type) === filter)

  // Determine which categories have credentials
  const presentCategories = new Set(credentials.map((c) => getCredentialCategory(c.metadata.type)))
  const visibleFilters = FILTER_CATEGORIES.filter((cat) => cat === 'all' || presentCategories.has(cat))

  return (
    <YStack fg={1} bg="$background">
      <DidxHeader />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}>
        <YStack px="$4" gap="$5" pt="$3">
          {/* Title */}
          <YStack>
            <Heading heading="h1" fontSize={22} fontWeight="$bold" color="$grey-900">
              <Trans id="didx.credentials.title">Credentials</Trans>
            </Heading>
            <Paragraph fontSize={13} color="$grey-300" mt="$0.5">
              {credentials.length} total · {activeCount} active
            </Paragraph>
          </YStack>

          {/* Filter chips */}
          {visibleFilters.length > 2 && (
            <XStack gap="$2" flexWrap="wrap">
              {visibleFilters.map((cat) => (
                <TypeChip
                  key={cat}
                  label={categoryLabels[cat]}
                  active={filter === cat}
                  onPress={() => setFilter(cat)}
                />
              ))}
            </XStack>
          )}

          {/* Credentials list */}
          <YStack gap="$2">
            {filtered.map((credential) => (
              <DidxCredentialRowCard
                key={credential.id}
                credential={credential}
                onPress={() => push(`/credentials/${credential.id}`)}
              />
            ))}
          </YStack>

          {/* Empty state */}
          {filtered.length === 0 && (
            <YStack ai="center" py="$8" gap="$2">
              <Paragraph fontSize={32}>📭</Paragraph>
              <Paragraph fontSize={14} fontWeight="$medium" color="$grey-300">
                {filter === 'all' ? (
                  <Trans id="credentials.emptyAll">No credentials yet</Trans>
                ) : (
                  <Trans id="credentials.emptyCategory">No credentials in this category</Trans>
                )}
              </Paragraph>
            </YStack>
          )}
        </YStack>
      </ScrollView>
    </YStack>
  )
}
