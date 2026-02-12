import type { CredentialForDisplay } from '@package/agent'
import { HeroIcons, Image, Paragraph, StatusBadge, XStack, YStack } from '@package/ui'

interface DidxCredentialRowCardProps {
  credential: CredentialForDisplay
  onPress: () => void
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' })
}

function getCredentialEmoji(type?: string): string {
  if (!type) return '📄'
  const lower = type.toLowerCase()
  if (lower.includes('pid') || lower.includes('identity') || lower.includes('id')) return '🪪'
  if (lower.includes('license') || lower.includes('mdl')) return '🪪'
  if (lower.includes('education') || lower.includes('diploma') || lower.includes('degree')) return '🎓'
  if (lower.includes('bank') || lower.includes('finance')) return '🏦'
  if (lower.includes('employ')) return '💼'
  if (lower.includes('health') || lower.includes('medical')) return '🏥'
  return '📄'
}

export function DidxCredentialRowCard({ credential, onPress }: DidxCredentialRowCardProps) {
  const issuerName = credential.display.issuer?.name ?? ''
  const issuedDate = formatDate(credential.metadata.issuedAt)
  const hasExpired = credential.metadata.validUntil ? new Date(credential.metadata.validUntil) < new Date() : false
  const status = hasExpired ? 'expired' : 'active'

  return (
    <XStack
      ai="center"
      gap="$3"
      w="100%"
      p="$3"
      bg="white"
      borderWidth={1}
      borderColor="$grey-100"
      br={16}
      pressStyle={{ borderColor: '$primary-400', opacity: 0.9 }}
      onPress={onPress}
      cursor="pointer"
    >
      {/* Credential icon */}
      <YStack w={44} h={44} br={12} bg="$grey-50" ai="center" jc="center" flexShrink={0}>
        {credential.display.issuer?.logo?.url ? (
          <Image src={credential.display.issuer.logo.url} width={28} height={28} style={{ borderRadius: 6 }} />
        ) : (
          <Paragraph fontSize={18}>{getCredentialEmoji(credential.metadata.type)}</Paragraph>
        )}
      </YStack>

      {/* Content */}
      <YStack f={1} minWidth={0}>
        <Paragraph fontSize={14} fontWeight="$semiBold" color="$grey-900" numberOfLines={1} textOverflow="ellipsis">
          {credential.display.name}
        </Paragraph>
        <XStack ai="center" gap="$2" mt="$0.5">
          <Paragraph fontSize={12} color="$grey-300" numberOfLines={1}>
            {issuerName}
          </Paragraph>
          {issuedDate ? (
            <>
              <YStack w={3} h={3} br={1.5} bg="$grey-200" />
              <Paragraph fontSize={12} color="$grey-300">
                {issuedDate}
              </Paragraph>
            </>
          ) : null}
        </XStack>
      </YStack>

      {/* Status + Chevron */}
      <XStack ai="center" gap="$2" flexShrink={0}>
        <StatusBadge status={status} />
        <HeroIcons.ChevronRight color="$grey-200" size={16} />
      </XStack>
    </XStack>
  )
}
