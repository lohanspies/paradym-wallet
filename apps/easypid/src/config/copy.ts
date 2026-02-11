import { defineMessage } from '@lingui/core/macro'
import { useAssets } from 'expo-asset'
import { type AppType, CURRENT_APP_TYPE } from './appType'

export const copy = {
  FUNKE_WALLET: {
    about: {
      description: defineMessage({
        id: 'funkeWallet.about.description',
        message:
          'This app was created by Animo Solutions in the context of the SPRIN-D Funke ‘EUDI Wallet Prototypes’. It serves as a prototype for future wallet providers. All code is available under Apache 2.0.',
        comment: 'About screen description text for the Funke wallet',
      }),
      emailHeader: defineMessage({
        id: 'funkeWallet.about.emailHeader',
        message: 'Reach out from Funke EUDI Wallet',
        comment: 'Email subject when contacting support from Funke wallet',
      }),
    },
  },
  PARADYM_WALLET: {
    about: {
      description: defineMessage({
        id: 'paradymWallet.about.description',
        message:
          'This app was created by Animo Solutions as a companion app for Paradym. All code is available under Apache 2.0.',
        comment: 'About screen description text for the Paradym wallet',
      }),
      emailHeader: defineMessage({
        id: 'paradymWallet.about.emailHeader',
        message: 'Reach out from Paradym Wallet',
        comment: 'Email subject when contacting support from Paradym wallet',
      }),
    },
  },
  DIDX_WALLET: {
    about: {
      description: defineMessage({
        id: 'didxWallet.about.description',
        message:
          'This app was created by Animo Solutions as the didx:me identity wallet. All code is available under Apache 2.0.',
        comment: 'About screen description text for the didx:me wallet',
      }),
      emailHeader: defineMessage({
        id: 'didxWallet.about.emailHeader',
        message: 'Reach out from didx:me Wallet',
        comment: 'Email subject when contacting support from didx:me wallet',
      }),
    },
  },
} satisfies Record<AppType, Record<string, unknown>>

const appNames: Record<AppType, string> = {
  FUNKE_WALLET: 'Funke Wallet',
  PARADYM_WALLET: 'Paradym Wallet',
  DIDX_WALLET: 'didx:me',
}

export const APP_NAME = appNames[CURRENT_APP_TYPE]

export function useAppCopy() {
  return copy[CURRENT_APP_TYPE]
}

export function useAppIcon() {
  const [assets] = useAssets([
    require('../../assets/funke/icon.png'),
    require('../../assets/paradym/icon.png'),
    require('../../assets/didx/icon.png'),
  ])
  if (CURRENT_APP_TYPE === 'FUNKE_WALLET') {
    return assets?.[0]
  }
  if (CURRENT_APP_TYPE === 'DIDX_WALLET') {
    return assets?.[2]
  }
  return assets?.[1]
}
