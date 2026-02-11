import { useLingui } from '@lingui/react/macro'
import type { Activity } from '@package/agent'
import { getActivityInteraction } from '@package/app'
import { commonMessages } from '@package/translations'
import { Paragraph, XStack, YStack } from '@package/ui'
import { formatRelativeDate } from '@package/utils'

interface DidxActivityItemProps {
  activity: Activity
  onPress?: () => void
}

export function DidxActivityItem({ activity, onPress }: DidxActivityItemProps) {
  const { t } = useLingui()
  const { entity } = activity
  const date = new Date(activity.date)
  const interaction = getActivityInteraction(activity)
  const title = t(interaction.text)
  const subtitle = entity.name ?? entity.host ?? t(commonMessages.unknownOrganization)

  return (
    <XStack
      ai="center"
      gap="$3"
      py="$2.5"
      pressStyle={{ opacity: 0.7 }}
      onPress={onPress}
      cursor={onPress ? 'pointer' : undefined}
    >
      <YStack w={36} h={36} br={10} bg={interaction.color} ai="center" jc="center" flexShrink={0} opacity={0.15}>
        <YStack pos="absolute" ai="center" jc="center">
          <interaction.icon size={18} color={interaction.color} strokeWidth={2.5} />
        </YStack>
      </YStack>
      <YStack f={1} minWidth={0}>
        <Paragraph fontSize={13} fontWeight="$medium" color="$grey-900" numberOfLines={1}>
          {title} — {subtitle}
        </Paragraph>
        <Paragraph fontSize={11} color="$grey-300" mt="$0.5">
          {formatRelativeDate(date)}
        </Paragraph>
      </YStack>
    </XStack>
  )
}
