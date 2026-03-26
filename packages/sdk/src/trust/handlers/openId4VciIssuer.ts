import type { TrustedEntity } from '../trustMechanism'
import type { TrustedX509Entity } from './x509'

// TODO(sdk): is this the best location for this type?
export type TrustedOpenId4VciIssuerEntity = {
  issuer: string
  name: string
  logoUri: string
  url: string
  demo?: boolean
  entityId: string
}

export type GetTrustedEntitiesForOpenId4VciIssuerOptions = {
  credentialIssuerUrl: string
  trustedX509Entities: TrustedX509Entity[]
  walletTrustedEntity?: TrustedEntity
}

/**
 * Determines trust for an OID4VCI credential issuer by matching the issuer URL's
 * hostname against the configured trusted X.509 entities by entityId.
 *
 * Note: Unlike OID4VP, credential offers are not signed, so cryptographic chain
 * validation is not possible here. This is domain/URL-based matching only.
 * Signed issuer metadata (signed_metadata JWT) would enable cryptographic verification.
 */
export const getTrustedEntitiesForOpenId4VciIssuer = ({
  credentialIssuerUrl,
  trustedX509Entities,
  walletTrustedEntity,
}: GetTrustedEntitiesForOpenId4VciIssuerOptions) => {
  const trustedEntities: TrustedEntity[] = []
  let organizationName: string | undefined
  let logoUri: string | undefined
  let entityId = credentialIssuerUrl

  try {
    const issuerHost = new URL(credentialIssuerUrl).hostname
    const trustedEntity = trustedX509Entities.find((e) => e.entityId === issuerHost)

    if (trustedEntity) {
      organizationName = trustedEntity.name
      logoUri = trustedEntity.logoUri
      entityId = trustedEntity.entityId

      trustedEntities.push({
        entityId: trustedEntity.entityId,
        organizationName: trustedEntity.name,
        logoUri: trustedEntity.logoUri,
        uri: trustedEntity.url,
        demo: trustedEntity.demo,
      })

      if (walletTrustedEntity) trustedEntities.push(walletTrustedEntity)
    }
  } catch (_error) {
    // no-op - invalid URL
  }

  return {
    issuer: {
      organizationName,
      logoUri,
      uri: credentialIssuerUrl,
      entityId,
    },
    trustedEntities,
  }
}
