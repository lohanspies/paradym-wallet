import { Paragraph, XStack, YStack } from '@package/ui'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface DidxHeaderProps {
  userName?: string
}

export function DidxHeader({ userName }: DidxHeaderProps) {
  const insets = useSafeAreaInsets()
  const initial = userName ? userName.charAt(0).toUpperCase() : '?'

  return (
    <XStack
      jc="space-between"
      ai="center"
      px="$4"
      py="$3"
      pt={insets.top + 8}
      bg="$background"
      borderBottomWidth={1}
      borderBottomColor="$grey-100"
    >
      <XStack ai="center" gap="$2">
        <YStack w={28} h={28} br={8} bg="$grey-900" ai="center" jc="center">
          <Paragraph fontSize={11} fontWeight="$bold" color="$primary-500" letterSpacing={-0.02}>
            dx
          </Paragraph>
        </YStack>
        <Paragraph fontSize={16} fontWeight="$bold" color="$grey-900" letterSpacing={-0.02}>
          didx:me
        </Paragraph>
      </XStack>
      <YStack w={32} h={32} br={16} bg="$accent-400" ai="center" jc="center">
        <Paragraph fontSize={13} fontWeight="$bold" color="white">
          {initial}
        </Paragraph>
      </YStack>
    </XStack>
  )
}
