import { configInput, fontDmSans, hexColors } from '@package/ui/config/tamagui.config'
import { radius, size, space, zIndex } from '@tamagui/themes'
import { createTamagui, createTokens } from 'tamagui'

export const tokensInput = {
  color: hexColors,
  radius: {
    ...radius,
    button: 16,
  },
  size,
  zIndex,
  space,
} as const

const tokens = createTokens({
  ...tokensInput,
  size: {
    ...tokensInput.size,
    buttonHeight: 56,
  },
  color: {
    ...hexColors, // Re-use existing colors for positive/warnings etc.
    background: '#F3F2F0',

    // didx:me neutral/brown scale
    'grey-50': '#F3F2F0',
    'grey-100': '#DEDDD9',
    'grey-200': '#C5BCB7',
    'grey-300': '#82736E',
    'grey-400': '#564440',
    'grey-500': '#38231E',
    'grey-600': '#565251',
    'grey-700': '#38231E',
    'grey-800': '#1D1C1A',
    'grey-900': '#111111',

    // didx:me primary (orange)
    'primary-50': '#FCDFD1',
    'primary-100': '#FCDFD1',
    'primary-200': '#FCC1A3',
    'primary-300': '#FC9C6C',
    'primary-400': '#F6724B',
    'primary-500': '#F14C2E',
    'primary-600': '#F14C2E',
    'primary-700': '#B92D0C',
    'primary-800': '#F14C2E',
    'primary-900': '#B92D0C',

    // didx:me accent (purple)
    'accent-50': '#E7C2F8',
    'accent-100': '#E7C2F8',
    'accent-200': '#AC79C4',
    'accent-300': '#662A84',
    'accent-400': '#441774',
    'accent-500': '#2D0F65',
    'accent-600': '#2D0F65',
    'accent-700': '#2D0F65',
    'accent-800': '#2D0F65',
    'accent-900': '#2D0F65',

    // Keep feature colors mapped to purple accent for backward compat
    'feature-300': '#E7C2F8',
    'feature-400': '#AC79C4',
    'feature-500': '#662A84',
    'feature-600': '#441774',
    'feature-700': '#2D0F65',
  },
})

const config = createTamagui({
  ...configInput,
  tokens,
  fonts: {
    default: fontDmSans,
    heading: fontDmSans,
    body: fontDmSans,
  },
  themes: {
    light: {
      ...tokens.color,
      tableBackgroundColor: tokens.color['grey-50'],
      tableBorderColor: '#ffffff',
      idCardBackground: '#F1F2F0',
    },
  },
})

type ConfIg = typeof config
declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends ConfIg {}
}

export default config
