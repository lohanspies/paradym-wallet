import { useWalletReset } from '@easypid/hooks/useWalletReset'
import { Trans, useLingui } from '@lingui/react/macro'
import { useHaptics } from '@package/app/hooks'
import { commonMessages } from '@package/translations'
import { Heading, HeroIcons, Paragraph, ScrollView, XStack, YStack } from '@package/ui'
import { router } from 'expo-router'
import { Linking } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface SettingsRowProps {
  label: string
  onPress: () => void
  variant?: 'default' | 'danger'
}

function SettingsRow({ label, onPress, variant = 'default' }: SettingsRowProps) {
  return (
    <XStack
      jc="space-between"
      ai="center"
      py="$3"
      px="$3"
      pressStyle={{ opacity: 0.7 }}
      onPress={onPress}
      cursor="pointer"
    >
      <Paragraph fontSize={14} fontWeight="$medium" color={variant === 'danger' ? '$danger-500' : '$grey-900'}>
        {label}
      </Paragraph>
      {variant !== 'danger' && <HeroIcons.ChevronRight color="$grey-200" size={16} />}
    </XStack>
  )
}

export function DidxSettingsScreen() {
  const { t } = useLingui()
  const { withHaptics } = useHaptics()
  const onResetWallet = useWalletReset()
  const insets = useSafeAreaInsets()

  const handlePush = (path: string) => withHaptics(() => router.push(path))
  const handleFeedback = withHaptics(() => Linking.openURL('mailto:ana@animo.id?subject=Feedback on the Wallet'))

  const settingsItems = [
    {
      label: t({ id: 'settings.item.settings', message: 'Settings' }),
      onPress: handlePush('/menu/settings'),
    },
    {
      label: t({ id: 'settings.item.feedback', message: 'Feedback' }),
      onPress: handleFeedback,
    },
    {
      label: t({ id: 'settings.item.about', message: 'About didx:me' }),
      onPress: handlePush('/menu/about'),
    },
  ]

  return (
    <YStack fg={1} bg="$background">
      <YStack px="$4" pt={insets.top + 16} pb="$3">
        <Heading heading="h1" fontSize={22} fontWeight="$bold" color="$grey-900">
          <Trans id="settings.title">Settings</Trans>
        </Heading>
      </YStack>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}>
        <YStack px="$4" gap="$5">
          {/* Settings list */}
          <YStack bg="white" br={16} borderWidth={1} borderColor="$grey-100" overflow="hidden">
            {settingsItems.map((item, i) => (
              <YStack key={item.label}>
                <SettingsRow label={item.label} onPress={item.onPress} />
                {i < settingsItems.length - 1 && <YStack h={1} bg="$grey-100" mx="$3" />}
              </YStack>
            ))}
          </YStack>

          {/* Reset wallet */}
          <YStack bg="white" br={16} borderWidth={1} borderColor="$grey-100" overflow="hidden">
            <SettingsRow label={t(commonMessages.reset)} onPress={onResetWallet} variant="danger" />
          </YStack>

          {/* Self-Custodial Mode info */}
          <XStack bg="$grey-50" br={14} p="$3" ai="center" gap="$2.5">
            <YStack>
              <HeroIcons.ShieldCheck color="$accent-300" size={20} />
            </YStack>
            <YStack f={1}>
              <Paragraph fontSize={13} fontWeight="$semiBold" color="$grey-900">
                <Trans id="settings.selfCustodial.title">Self-Custodial Mode</Trans>
              </Paragraph>
              <Paragraph fontSize={11} color="$grey-300" mt="$0.5">
                <Trans id="settings.selfCustodial.description">Your keys, your credentials, your data</Trans>
              </Paragraph>
            </YStack>
          </XStack>
        </YStack>
      </ScrollView>
    </YStack>
  )
}
