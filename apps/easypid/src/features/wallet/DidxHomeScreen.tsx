import { useFirstNameFromPidCredential } from '@easypid/hooks'
import { Trans } from '@lingui/react/macro'
import { useActivities, useCredentialsForDisplay } from '@package/agent'
import { useHaptics } from '@package/app/hooks'
import { Button, CustomIcons, Heading, HeroIcons, Paragraph, ScrollView, XStack, YStack } from '@package/ui'
import { useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DidxActivityItem } from '../activity/DidxActivityItem'
import { DidxCredentialRowCard } from './components/DidxCredentialRowCard'
import { DidxHeader } from './components/DidxHeader'

export function DidxHomeScreen() {
  const { push } = useRouter()
  const { withHaptics } = useHaptics()
  const { userName } = useFirstNameFromPidCredential()
  const { credentials } = useCredentialsForDisplay()
  const { activities } = useActivities()
  const insets = useSafeAreaInsets()

  const pushToScanner = withHaptics(() => push('/scan'))
  const pushToOffline = () => {
    withHaptics(() => push('/offline'))()
  }

  const recentCredentials = credentials.slice(0, 3)
  const recentActivities = activities.slice(0, 3)

  return (
    <YStack fg={1} bg="$background">
      <DidxHeader userName={userName} />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}>
        <YStack px="$4" gap="$6" pt="$3">
          {/* Greeting */}
          <YStack gap="$1">
            <Paragraph color="$grey-300" fontSize={14}>
              <Trans id="home.welcomeBack">Welcome back</Trans>
            </Paragraph>
            <Heading heading="h1" fontSize={22} fontWeight="$bold" color="$grey-900">
              {userName || <Trans id="home.defaultName">there</Trans>}
            </Heading>
          </YStack>

          {/* Action Buttons */}
          <XStack gap="$3">
            <YStack
              f={1}
              ai="center"
              gap="$2.5"
              py="$4"
              px="$3"
              br={18}
              bg="$grey-900"
              pressStyle={{ opacity: 0.85, scale: 0.98 }}
              onPress={pushToScanner}
              cursor="pointer"
            >
              <CustomIcons.Qr color="white" />
              <Paragraph fontSize={13} fontWeight="$semiBold" color="white">
                <Trans id="home.scanQr">Scan QR</Trans>
              </Paragraph>
            </YStack>
            <YStack
              f={1}
              ai="center"
              gap="$2.5"
              py="$4"
              px="$3"
              br={18}
              bg="$accent-500"
              pressStyle={{ opacity: 0.85, scale: 0.98 }}
              onPress={pushToOffline}
              cursor="pointer"
            >
              <HeroIcons.PaperAirplane color="white" size={24} />
              <Paragraph fontSize={13} fontWeight="$semiBold" color="white">
                <Trans id="home.present">Present</Trans>
              </Paragraph>
            </YStack>
          </XStack>

          {/* Recent Activity Section */}
          {recentActivities.length > 0 && (
            <YStack gap="$3">
              <XStack jc="space-between" ai="center">
                <Paragraph fontSize={15} fontWeight="$bold" color="$grey-900">
                  <Trans id="home.recentActivity">Recent Activity</Trans>
                </Paragraph>
                <Button.Text
                  scaleOnPress
                  bg="transparent"
                  fontSize={13}
                  fontWeight="$semiBold"
                  color="$accent-300"
                  p={0}
                  onPress={() => push('/(tabs)/activity')}
                >
                  <Trans id="home.viewAll">View All</Trans>
                </Button.Text>
              </XStack>
              <YStack bg="white" br={16} borderWidth={1} borderColor="$grey-100" px="$3" py="$1">
                {recentActivities.map((activity, i) => (
                  <YStack key={activity.id}>
                    <DidxActivityItem activity={activity} />
                    {i < recentActivities.length - 1 && <YStack h={1} bg="$grey-100" />}
                  </YStack>
                ))}
              </YStack>
            </YStack>
          )}

          {/* Recent Credentials Section */}
          {recentCredentials.length > 0 && (
            <YStack gap="$3">
              <XStack jc="space-between" ai="center">
                <Paragraph fontSize={15} fontWeight="$bold" color="$grey-900">
                  <Trans id="home.recentCredentials">Recent Credentials</Trans>
                </Paragraph>
                <Button.Text
                  scaleOnPress
                  bg="transparent"
                  fontSize={13}
                  fontWeight="$semiBold"
                  color="$accent-300"
                  p={0}
                  onPress={() => push('/(tabs)/credentials')}
                >
                  <Trans id="home.viewAll2">View All</Trans>
                </Button.Text>
              </XStack>
              <YStack gap="$2">
                {recentCredentials.map((credential) => (
                  <DidxCredentialRowCard
                    key={credential.id}
                    credential={credential}
                    onPress={() => push(`/credentials/${credential.id}`)}
                  />
                ))}
              </YStack>
            </YStack>
          )}

          {/* Empty state when no credentials */}
          {credentials.length === 0 && activities.length === 0 && (
            <YStack ai="center" py="$8" gap="$3">
              <Paragraph fontSize={32}>📭</Paragraph>
              <Paragraph fontSize={14} fontWeight="$medium" color="$grey-300">
                <Trans id="home.emptyState">No credentials yet. Scan a QR code to get started.</Trans>
              </Paragraph>
            </YStack>
          )}
        </YStack>
      </ScrollView>
    </YStack>
  )
}
