import type { ColorTokens } from 'tamagui'

import { Paragraph } from '../base/Paragraph'
import { Stack } from '../base/Stacks'

export interface TypeChipProps {
  label: string
  active: boolean
  onPress: () => void
  activeColor?: ColorTokens
}

export function TypeChip({ label, active, onPress, activeColor = '$grey-900' }: TypeChipProps) {
  return (
    <Stack
      tag="button"
      onPress={onPress}
      px="$3"
      py="$1.5"
      br={20}
      bg={active ? activeColor : '$grey-100'}
      pressStyle={{ opacity: 0.7 }}
      cursor="pointer"
    >
      <Paragraph fontSize={13} fontWeight="$semiBold" color={active ? 'white' : '$grey-300'} whiteSpace="nowrap">
        {label}
      </Paragraph>
    </Stack>
  )
}
