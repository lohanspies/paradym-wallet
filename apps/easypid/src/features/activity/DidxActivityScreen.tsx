import { Trans } from '@lingui/react/macro'
import { useActivities } from '@package/agent'
import { Heading, Paragraph, ScrollView, YStack } from '@package/ui'
import { useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DidxActivityItem } from './DidxActivityItem'

interface DidxActivityScreenProps {
  entityId?: string
}

export function DidxActivityScreen({ entityId }: DidxActivityScreenProps) {
  const { activities } = useActivities({ filters: { entityId } })
  const { push } = useRouter()
  const insets = useSafeAreaInsets()

  return (
    <YStack fg={1} bg="$background">
      <YStack px="$4" pt={insets.top + 16}>
        <Heading heading="h1" fontSize={22} fontWeight="$bold" color="$grey-900">
          <Trans id="activity.title">Activity</Trans>
        </Heading>
        <Paragraph fontSize={13} color="$grey-300" mt="$0.5">
          <Trans id="activity.subtitle">Your credential history</Trans>
        </Paragraph>
      </YStack>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}>
        <YStack px="$4" pt="$4">
          {activities.length > 0 ? (
            <YStack bg="white" br={16} borderWidth={1} borderColor="$grey-100" px="$3" py="$1">
              {activities.map((activity, i) => (
                <YStack key={activity.id}>
                  <DidxActivityItem activity={activity} onPress={() => push(`/activity/${activity.id}`)} />
                  {i < activities.length - 1 && <YStack h={1} bg="$grey-100" />}
                </YStack>
              ))}
            </YStack>
          ) : (
            <YStack ai="center" py="$8" gap="$2">
              <Paragraph fontSize={32}>📭</Paragraph>
              <Paragraph fontSize={14} fontWeight="$medium" color="$grey-300">
                <Trans id="activity.empty">No activity yet</Trans>
              </Paragraph>
            </YStack>
          )}
        </YStack>
      </ScrollView>
    </YStack>
  )
}
