import type { TrustedEntity } from '../trustMechanism'

// TODO(sdk): is this the best location for this type?
export type TrustedOpenId4VciIssuerEntity = {
  issuer: string
  name: string
  logoUri: string
  url: string
  demo?: boolean
  entityId: string
  /**
   * Optional PEM-encoded certificate to associate with this issuer.
   * Reserved for future cryptographic verification (e.g. via signed_metadata JWT).
   */
  certificate?: string
}

export type GetTrustedEntitiesForOpenId4VciIssuerOptions = {
  credentialIssuerUrl: string
  trustedIssuers: TrustedOpenId4VciIssuerEntity[]
  walletTrustedEntity?: TrustedEntity
}

/**
 * Determines trust for an OID4VCI credential issuer by matching the full
 * credential_issuer URL against the configured trusted issuer entities.
 *
 * Note: Unlike OID4VP, credential offers are unsigned, so cryptographic chain
 * validation is not performed here. When a certificate is attached to the issuer
 * entity it is available for future signed_metadata verification.
 */
export const getTrustedEntitiesForOpenId4VciIssuer = ({
  credentialIssuerUrl,
  trustedIssuers,
  walletTrustedEntity,
}: GetTrustedEntitiesForOpenId4VciIssuerOptions) => {
  const trustedEntities: TrustedEntity[] = []
  let organizationName: string | undefined
  let logoUri: string | undefined
  let entityId = credentialIssuerUrl

  const trustedIssuer = trustedIssuers.find((e) => e.entityId === credentialIssuerUrl)

  if (trustedIssuer) {
    organizationName = trustedIssuer.name
    logoUri = trustedIssuer.logoUri
    entityId = trustedIssuer.entityId

    trustedEntities.push({
      entityId: trustedIssuer.entityId,
      organizationName: trustedIssuer.name,
      logoUri: trustedIssuer.logoUri,
      uri: trustedIssuer.url,
      demo: trustedIssuer.demo,
    })

    if (walletTrustedEntity) trustedEntities.push(walletTrustedEntity)
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
