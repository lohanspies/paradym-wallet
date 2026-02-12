import { Circle, XStack } from 'tamagui'

import { Paragraph } from '../base/Paragraph'

export interface StatusBadgeProps {
  status: 'active' | 'expired' | 'revoked'
}

const statusStyles = {
  active: { bg: '$positive-300', text: '$positive-700', label: 'Active', showDot: true },
  expired: { bg: '$warning-300', text: '$warning-700', label: 'Expired', showDot: false },
  revoked: { bg: '$danger-300', text: '$danger-700', label: 'Revoked', showDot: false },
} as const

export function StatusBadge({ status }: StatusBadgeProps) {
  const style = statusStyles[status] ?? statusStyles.active

  return (
    <XStack ai="center" gap="$1" px="$2" py={2} br={20} bg={style.bg}>
      {style.showDot && <Circle size={5} bg={style.text} />}
      <Paragraph fontSize={11} fontWeight="$semiBold" color={style.text} letterSpacing={0.02}>
        {style.label}
      </Paragraph>
    </XStack>
  )
}
