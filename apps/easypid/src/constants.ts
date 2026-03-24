import type { TrustedDidEntity, TrustedOpenId4VciIssuerEntity, TrustedX509Entity, TrustList } from '@paradym/wallet-sdk'
import ExpoConstants from 'expo-constants'
import { isParadymWallet } from './hooks/useFeatureFlag'

export const mediatorDid = ExpoConstants.expoConfig?.extra?.mediatorDid
export const appScheme = ExpoConstants.expoConfig?.scheme as string
export const allowedRedirectBaseUrls = ExpoConstants.expoConfig?.extra?.allowedRedirectBaseUrls as string[] | undefined

export const EASYPID_WALLET_PID_PIN_KEY_ID = 'EASYPID_WALLET_PID_PIN_KEY_ID_NO_BIOMETRICS'
export const EASYPID_WALLET_INSTANCE_LONG_TERM_AES_KEY_ID = 'EASYPID_WALLET_INSTANCE_LONG_TERM_AES_KEY_ID'

export const walletClient = {
  // For easypid we don't want to update yet, as it will break integration with the playground
  clientId: isParadymWallet() ? appScheme : 'wallet',
  // Take first redirect if available
  redirectUri: allowedRedirectBaseUrls?.[0] ?? `${appScheme}:///wallet/redirect`,
}

export const trustedX509Entities = [
//   {
//     entityId: 'za.pid-issuer.gov.za',
//     name: 'ZA Root CA Interim',
//     certificate: `-----BEGIN CERTIFICATE-----
// MIIHkTCCBHmgAwIBAgIRAONKLXORgiMAfOP6waVYv/cwDQYJKoZIhvcNAQENBQAw
// PTELMAkGA1UEBhMCWkExETAPBgNVBAoTCE5hdGlvbmFsMRswGQYDVQQDExJaQSBS
// b290IENBIEludGVyaW0wHhcNMjUxMTIxMDgxMDQ0WhcNMzAxMTIxMDg0MDQ0WjA9
// MQswCQYDVQQGEwJaQTERMA8GA1UEChMITmF0aW9uYWwxGzAZBgNVBAMTElpBIFJv
// b3QgQ0EgSW50ZXJpbTCCAyIwDQYJKoZIhvcNAQEBBQADggMPADCCAwoCggMBALbv
// Sbv1FafBb4Gr0RIsmQ+JckEq1oVxO4EzO7UbzLnCkOqIsOlnmHEiVtwEtsyKXbRo
// krjbzDgT8USW7Zlgq8CQMoqZhP3d59gCok4Xyaixd0naZlBvq2z1xw6Ys3FLvWXF
// /ai+3V+aRZ0jQ709lMLcCLuN/XcnnXHo0oStBVyMJDkdcElrFynbUEOO9jFmawFV
// m3ofrhxrjeLnKXwDOevU8QVO/9uBNUPvBPU2B6U8TAIdEs44ldglt9DlEUFMqf26
// ry6jG82Z9P58BhTBX0HXuZKdDypbhmnHEOTnyJijRSyiSjfoz/pCfSBmt87C91fW
// Qm4J8FFbMsSnQMZm2yGrLMxv8f3dUVrR+tqyO6tCz1XPOv6/4KCJoiGvXE+dNoCQ
// K9ngHYW+dbCkXRPMY7JUYczREu4yCQnO/vGT+DKiltf7IIIgpev1j+NlRaHa+e0E
// HZIeEcK64ZoGpsjvMD0BpYwnf0XhFUKxzEOSayy+r4tpqX/ByMlNTTBjMsIyvzXq
// KBdIuCEEnYgYWZifqwL8aUjOT59m6rzQjciapvfkWBGlqZ/aXhmZmaNrE54LFkjp
// Esnp4rGTiIfoqKorgwmh1sCGnnGp3A2kZxlMTOMaZ6hakjjb7j/nS9NTH4okNpzq
// ojIWww2qGfMMgoxBpDYZJiSDuLtkGja7QsD8xoM/P83vnPYg/vgQLOUcHuGM0sB+
// RQbalgC1Q5MDL4v/cmyTBaSslTyYTQuTad3dKFYQbfhaIGqryF7TJlzgCMm8z5K0
// 10eheMvGqLLX+7iZ9BQs5Ueq7GTgCjv9Wy4NkUCPc7Wj3IZN6tTn6cmjhUafvlB8
// mCMaf+17jycyV4RiftTfQrtkkS58SXrGw3J8zByxnbrODuz0UTjUfhPJKs6wYL6k
// 5o8FjaKmOofuNyHz6DMISpXwGNPTqXnDsaCLBzehYVIVID/6dlTQeHV5Cq7CEdub
// 3YvjamJ76aJg0F9nJcWa/X50BPKIfnV/l/X31NgU/ZjGfSh0qDsRIbjgCgcRwQID
// AQABo4GLMIGIMCsGA1UdEAQkMCKADzIwMjUxMTIxMDgxMDQ0WoEPMjAzMDExMjEw
// ODQwNDRaMAsGA1UdDwQEAwIBBjAfBgNVHSMEGDAWgBRKa/DqGfffXi8Zpq0JtVgF
// 5++3kTAdBgNVHQ4EFgQUSmvw6hn3314vGaatCbVYBefvt5EwDAYDVR0TBAUwAwEB
// /zANBgkqhkiG9w0BAQ0FAAOCAwEAKgV+3xbOcT/mnZRYEqsIQHdS2ZdAEWRtDi9Y
// qDg6IzuHz/mClAB9tsLdSmBRQDdlAsTpKuAgRV472FOmSte2F23/Js2/SpsQ6s+i
// 5u0FRIHvjsjOdCe4gT2ipNROmAdXjW6T/ttKdjCMjklVf7I+lyf4CyvISwkAG8DZ
// 6L+PDl7mhmw/GGH5tkl9CYPvg4i6jtLsj4Q7VXmXwePFpn+D0X8qmSWX2z6AdeM1
// RSozMsGvmXvgfqZyWsnVJYoUwTecRdNq83McdYb27XxzOeujWgLHC+ZioOOIE6gp
// LtL4dZP9fSsFr5HC/p4L6pSHbt+r1YTEY9UQN3CMXxrH3lmeEYJLbQuuWV+KNTbR
// QyTrQ4iBvbUw1xzKyzHFJom5LQ7w/A7j0LCgTqsSsvUBhfNvYZuv7tldJIOedHdg
// iBrR/rHtzAo+oUOPuasgDnttGJ/68a7/SuPDoH799P/D+q5qXUbCRgH4oulXrXKd
// aOfCp+mNP2y7IgUGlb00vXAaodwhGiUDT+e5gNcQpTFdlnYKyRRaL+RGfi0z5I9/
// 5pQdA3twvMrkoBS6XU27JjYMG4mJSJishi5Z30sD+1Pd+PJImTn7czAmRf4AhO/s
// LApo2kHKDwcTIJW0wj/9DQ8j3CGAS6+C/b/OPE5DF5F4KLnZRKxlb/Onj9kSxlYL
// wxWsQN/pvhLWKVhlYqma3+Spi37fCd4U79nx4UsAuaUji0xuDlLApnEFZCmfgm1v
// V0DPmgYmBW07H3XQWdCWB3TpQD0TIRs1B82ZwBfEv3+oZB5EviBoITYJC0FNIgp4
// 2a7cm+x0DX1pEXpYay7Ovpopm4v1GF9JD31jjJ6J3H6UCSAKzYvtXhl61+3cI8oZ
// JgA817UGxljUHGw1xWyv1/HMQTMkyfLkCR8Qy3/jdVdlPjYP0BlY9Ajpf+P/PGpv
// mAmGG+zMt/69Wo0TTkLf6KdwzLEDQo0Q9djGgGL2su0V9IQ9uGrOn/W34WGIydE9
// XHnG6mbbwOJSV4dWvIIcfFDFzk7q
// -----END CERTIFICATE-----`,
//     url: 'https://za.pid-issuer.gov.za',
//     logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
//     demo: true,
//   },
  {
    entityId: 'za.cfc-issuer.gov.za',
    name: 'ZA CFC Policy CA Interim',
    certificate: `-----BEGIN CERTIFICATE-----
MIIFCTCCAvGgAwIBAgIRAIL65somyFmQnCApojB+AyAwDQYJKoZIhvcNAQEMBQAw
QzELMAkGA1UEBhMCWkExETAPBgNVBAoTCE5hdGlvbmFsMSEwHwYDVQQDExhGSU5T
RUMgUG9saWN5IENBIEludGVyaW0wHhcNMjUxMTI0MDY1ODAyWhcNMzAwOTI0MDcy
ODAyWjBWMQswCQYDVQQGEwJaQTERMA8GA1UEChMITmF0aW9uYWwxDzANBgNVBAsT
BkZpblNlYzEjMCEGA1UEAxMaRmluU2VjIElzc3VpbmcgQ0ExIEludGVyaW0wgZsw
EAYHKoZIzj0CAQYFK4EEACMDgYYABAG/fhYUBTFSayPF8IyGtter3XjQ+jO+vAE9
HHneIj4xX5WiU914hSeH3M4bl4IclFwMnzs/qGkiXQ462JnW8zraKwFTMDQJvvuP
IIw3hRj2CkkPejTq6AqkE6bezACJn0mwoqYt7+4+PzggTPtIQ3Bu78FUh2N5bY3p
JxYCKCUdsQk886OCAWswggFnMBIGA1UdEwEB/wQIMAYBAf8CAQAwDgYDVR0PAQH/
BAQDAgEGMIGaBggrBgEFBQcBAQSBjTCBijAvBggrBgEFBQcwAYYjaHR0cDovL29j
c3AuaW50ZXJpbS50cmVhc3VyeS5nb3YuemEwVwYIKwYBBQUHMAKGS2h0dHA6Ly9j
ZXJ0LmludGVyaW0udHJlYXN1cnkuZ292LnphL2ludGVybWVkaWF0ZV9jYV9pbnRl
cmltX25hdGlvbmFsX3phLmNydDBkBgNVHR8EXTBbMFmgV6BVhlNodHRwOi8vY3Js
LmludGVyaW0udHJlYXN1cnkuZ292LnphL2ZpbnNlY19wb2xpY3lfY2FfaW50ZXJp
bV9uYXRpb25hbF96YV9jcmxmaWxlLmNybDAfBgNVHSMEGDAWgBQWMLZygerRjsto
bAYeX/WbG7/QdjAdBgNVHQ4EFgQUbUkTrPCa6oU8VDlGoM7lp2S2v1YwDQYJKoZI
hvcNAQEMBQADggIBAKao4/O1p/TK4AVqLjZ2rI04bqlnDN47x4B2ljySlV18T6xy
CbWyUqBPKRN20iPAZUkwktCiUBhrY5MesNyVPcS8abotEogAj4MP6R5JdQK9TwEQ
w1FUACKUTdvbEoJxy1HE4QsODHCrD+9Ocy5BWDPIV12a0KVdKgcX4TjBEPyMmSUD
oz5X+5WP2DYOzu8usqEcyzS/GxP+ZSkD3th52x200lFIggCRfxJjqLR0n8V41f1i
jN3+yuQ5aff3NG2ovtmhCAWj1nSz1uMNW4oYv2JfbNLMUTBQjvK8zBukvwSZ3YSk
wAFWS+Y34wKAI5KfNw6MlxOu0Y7cd8UoL9p3tz++d8vMggOMWyYcv1MGz503HG3a
TY8rugDKRytoFq32HlmBW3Dm4OApQCKwVgPVluFgyqCq3DA52n93W99CU3Hd0GXc
2Kpii+SDnSfCfzq5tOrM17Kqwt2QsO6md5b2brPij6oZLfermOLNyYmXNeohXGNC
U66+spE4p04htXJMcuw7GHrBLUBWpEkjgoQN/nx7YubLNZ8KSpirpAMwGaz5FjdO
OMPLfDRjxhx2AdcO75EppYZk02LpPYnMvvR5EuozxZqaPG+NNQon+4EhncPjJaFC
gpTMMGlR3/I5t9LYr+D0v82MHFRqJGpGYxeF11zxlstMHTKgbVK5ZnysQPVE
-----END CERTIFICATE-----`,
    url: 'https://za.cfc-issuer.gov.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'demo.pid-issuer.bundesdruckerei.de',
    name: 'Bundesdruckerei',
    certificate: `-----BEGIN CERTIFICATE-----
MIICeTCCAiCgAwIBAgIUB5E9QVZtmUYcDtCjKB/H3VQv72gwCgYIKoZIzj0EAwIwgYgxCzAJBgNVBAYTAkRFMQ8wDQYDVQQHDAZCZXJsaW4xHTAbBgNVBAoMFEJ1bmRlc2RydWNrZXJlaSBHbWJIMREwDwYDVQQLDAhUIENTIElERTE2MDQGA1UEAwwtU1BSSU5EIEZ1bmtlIEVVREkgV2FsbGV0IFByb3RvdHlwZSBJc3N1aW5nIENBMB4XDTI0MDUzMTA2NDgwOVoXDTM0MDUyOTA2NDgwOVowgYgxCzAJBgNVBAYTAkRFMQ8wDQYDVQQHDAZCZXJsaW4xHTAbBgNVBAoMFEJ1bmRlc2RydWNrZXJlaSBHbWJIMREwDwYDVQQLDAhUIENTIElERTE2MDQGA1UEAwwtU1BSSU5EIEZ1bmtlIEVVREkgV2FsbGV0IFByb3RvdHlwZSBJc3N1aW5nIENBMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEYGzdwFDnc7+Kn5ibAvCOM8ke77VQxqfMcwZL8IaIA+WCROcCfmY/giH92qMru5p/kyOivE0RC/IbdMONvDoUyaNmMGQwHQYDVR0OBBYEFNRWGMCJOOgOWIQYyXZiv6u7xZC+MB8GA1UdIwQYMBaAFNRWGMCJOOgOWIQYyXZiv6u7xZC+MBIGA1UdEwEB/wQIMAYBAf8CAQAwDgYDVR0PAQH/BAQDAgGGMAoGCCqGSM49BAMCA0cAMEQCIGEm7wkZKHt/atb4MdFnXW6yrnwMUT2u136gdtl10Y6hAiBuTFqvVYth1rbxzCP0xWZHmQK9kVyxn8GPfX27EIzzsw==
-----END CERTIFICATE-----`,
    url: 'https://demo.pid-issuer.bundesdruckerei.de',
    logoUri: 'https://funke.animo.id/assets/issuers/bdr/issuer.png',
    demo: true,
  },  
  {
    entityId: 'funke-wallet.de',
    name: 'German Registrar',
    certificate: `-----BEGIN CERTIFICATE-----
MIIBdTCCARugAwIBAgIUHsSmbGuWAVZVXjqoidqAVClGx4YwCgYIKoZIzj0EAwIw
GzEZMBcGA1UEAwwQR2VybWFuIFJlZ2lzdHJhcjAeFw0yNTAzMzAxOTU4NTFaFw0y
NjAzMzAxOTU4NTFaMBsxGTAXBgNVBAMMEEdlcm1hbiBSZWdpc3RyYXIwWTATBgcq
hkjOPQIBBggqhkjOPQMBBwNCAASQWCESFd0Ywm9sK87XxqxDP4wOAadEKgcZFVX7
npe3ALFkbjsXYZJsTGhVp0+B5ZtUao2NsyzJCKznPwTz2wJcoz0wOzAaBgNVHREE
EzARgg9mdW5rZS13YWxsZXQuZGUwHQYDVR0OBBYEFMxnKLkGifbTKrxbGXcFXK6R
FQd3MAoGCCqGSM49BAMCA0gAMEUCIQD4RiLJeuVDrEHSvkPiPfBvMxAXRC6PuExo
pUGCFdfNLQIgHGSa5u5ZqUtCrnMiaEageO71rjzBlov0YUH4+6ELioY=
-----END CERTIFICATE-----`,
    url: 'https://funke-wallet.de',
    logoUri: 'https://funke.animo.id/assets/verifiers/bunde.png',
    demo: true,
  },
  {
    entityId: 'funke.animo.id',
    certificate:
      'MIIBzzCCAXWgAwIBAgIQVwAFolWQim94gmyCic3bCTAKBggqhkjOPQQDAjAdMQ4wDAYDVQQDEwVBbmltbzELMAkGA1UEBhMCTkwwHhcNMjQwNTAyMTQyMzMwWhcNMjgwNTAyMTQyMzMwWjAdMQ4wDAYDVQQDEwVBbmltbzELMAkGA1UEBhMCTkwwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAAQC/YyBpcRQX8ZXpHfra1TNdSbS7qzgHYHJ3msbIr8TJLPNZI8Ul8zJlFdQVIVls5+5ClCbN+J9FUvhPGs4AzA+o4GWMIGTMB0GA1UdDgQWBBQv3zBo1i/1CfEgdvkIWDGO9lS1SzAOBgNVHQ8BAf8EBAMCAQYwIQYDVR0SBBowGIYWaHR0cHM6Ly9mdW5rZS5hbmltby5pZDASBgNVHRMBAf8ECDAGAQH/AgEAMCsGA1UdHwQkMCIwIKAeoByGGmh0dHBzOi8vZnVua2UuYW5pbW8uaWQvY3JsMAoGCCqGSM49BAMCA0gAMEUCIQCTg80AmqVHJLaZt2uuhAtPqKIXafP2ghtd9OCmdD51ZwIgKvVkrgTYlxSRAbmKY6MlkH8mM3SNcnEJk9fGVwJG++0=',
    name: 'Animo Playground',
    logoUri: 'https://funke.animo.id/assets/verifiers/animo/verifier.jpg',
    url: 'https://funke.animo.id',
    demo: true,
  },
  {
    entityId: 'playground.animo.id',
    certificate:
      'MIIB2zCCAYCgAwIBAgIRALanVqNUK4dgPlUmlAasZ24wCgYIKoZIzj0EAwIwHTEOMAwGA1UEAxMFQW5pbW8xCzAJBgNVBAYTAk5MMB4XDTI0MTEyODE2MjgzMFoXDTI4MTEyODE2MjgzMFowHTEOMAwGA1UEAxMFQW5pbW8xCzAJBgNVBAYTAk5MMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEwDpb2uNodErbJfEWteLF6pGiqaxNfF9rFyttjJy+No0gmzn4wkgYqvGtcX5W4blXT1PQubGml5QUmpm5d41zd6OBoDCBnTAdBgNVHQ4EFgQUVC5XW1PTYNo6yWnkJGgvBVCtWZUwDgYDVR0PAQH/BAQDAgEGMCYGA1UdEgQfMB2GG2h0dHBzOi8vcGxheWdyb3VuZC5hbmltby5pZDASBgNVHRMBAf8ECDAGAQH/AgEAMDAGA1UdHwQpMCcwJaAjoCGGH2h0dHBzOi8vcGxheWdyb3VuZC5hbmltby5pZC9jcmwwCgYIKoZIzj0EAwIDSQAwRgIhAJvXTWWteCIeZPbzn+Y++Lpf4eFTmxP2M5o4phGsLuZcAiEAuiL89d9a2CQbQo8dzNpnV+P9JrUnKRQuP5ZZ9VJcoJI=',
    name: 'Animo Playground',
    logoUri: 'https://playground.animo.id/assets/verifiers/animo/verifier.jpg',
    url: 'https://playground.animo.id',
    demo: true,
  },
  {
    entityId: 'verifier.eudiw.dev',
    name: 'EUDI Reference Verifier',
    certificate:
      'MIIDHTCCAqOgAwIBAgIUVqjgtJqf4hUYJkqdYzi+0xwhwFYwCgYIKoZIzj0EAwMwXDEeMBwGA1UEAwwVUElEIElzc3VlciBDQSAtIFVUIDAxMS0wKwYDVQQKDCRFVURJIFdhbGxldCBSZWZlcmVuY2UgSW1wbGVtZW50YXRpb24xCzAJBgNVBAYTAlVUMB4XDTIzMDkwMTE4MzQxN1oXDTMyMTEyNzE4MzQxNlowXDEeMBwGA1UEAwwVUElEIElzc3VlciBDQSAtIFVUIDAxMS0wKwYDVQQKDCRFVURJIFdhbGxldCBSZWZlcmVuY2UgSW1wbGVtZW50YXRpb24xCzAJBgNVBAYTAlVUMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEFg5Shfsxp5R/UFIEKS3L27dwnFhnjSgUh2btKOQEnfb3doyeqMAvBtUMlClhsF3uefKinCw08NB31rwC+dtj6X/LE3n2C9jROIUN8PrnlLS5Qs4Rs4ZU5OIgztoaO8G9o4IBJDCCASAwEgYDVR0TAQH/BAgwBgEB/wIBADAfBgNVHSMEGDAWgBSzbLiRFxzXpBpmMYdC4YvAQMyVGzAWBgNVHSUBAf8EDDAKBggrgQICAAABBzBDBgNVHR8EPDA6MDigNqA0hjJodHRwczovL3ByZXByb2QucGtpLmV1ZGl3LmRldi9jcmwvcGlkX0NBX1VUXzAxLmNybDAdBgNVHQ4EFgQUs2y4kRcc16QaZjGHQuGLwEDMlRswDgYDVR0PAQH/BAQDAgEGMF0GA1UdEgRWMFSGUmh0dHBzOi8vZ2l0aHViLmNvbS9ldS1kaWdpdGFsLWlkZW50aXR5LXdhbGxldC9hcmNoaXRlY3R1cmUtYW5kLXJlZmVyZW5jZS1mcmFtZXdvcmswCgYIKoZIzj0EAwMDaAAwZQIwaXUA3j++xl/tdD76tXEWCikfM1CaRz4vzBC7NS0wCdItKiz6HZeV8EPtNCnsfKpNAjEAqrdeKDnr5Kwf8BA7tATehxNlOV4Hnc10XO1XULtigCwb49RpkqlS2Hul+DpqObUs',
    logoUri: 'https://issuer.eudiw.dev/ic-logo.png',
    url: 'https://verifier.eudiw.dev',
    demo: true,
  },
  {
    entityId: 'docusign.com',
    name: 'Docusign',
    certificate:
      'MIIC9jCCApugAwIBAgIULJzqL8PyHb0JXERTUfpqfOcLsa4wCgYIKoZIzj0EAwIwgYAxLjAsBgNVBAMMJWRvY3VzaWduLXdhbGxldC12ZXJpZmllci5kb2N1c2lnbi5uZXQxCzAJBgNVBAYTAkZSMRcwFQYDVQQIDA7DjmxlLWRlLUZyYW5jZTEOMAwGA1UEBwwFUGFyaXMxGDAWBgNVBAoMD0RvY3VzaWduIEZyYW5jZTAeFw0yNTA0MDExMDAzMTlaFw0yODAzMzExMDAzMTlaMIGAMS4wLAYDVQQDDCVkb2N1c2lnbi13YWxsZXQtdmVyaWZpZXIuZG9jdXNpZ24ubmV0MQswCQYDVQQGEwJGUjEXMBUGA1UECAwOw45sZS1kZS1GcmFuY2UxDjAMBgNVBAcMBVBhcmlzMRgwFgYDVQQKDA9Eb2N1c2lnbiBGcmFuY2UwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAATKs8uiLftrFSaQtB87XTYq0YiFZPFEmVKQ2CFeQ3j5zG0kJefW4ktgxn69g7eX9PTB1siakMSGwe48mE9BdfFLo4HwMIHtMB0GA1UdDgQWBBSaNNjHj2ZyRbU0QiqxufROmNzFPzAfBgNVHSMEGDAWgBSaNNjHj2ZyRbU0QiqxufROmNzFPzAOBgNVHQ8BAf8EBAMCBaAwIAYDVR0lAQH/BBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMHkGA1UdEQRyMHCCQWV1ZGl3YWxsZXRwb2MtYTNhNWdnaDRhN2R3aDNnaC5mcmFuY2VjZW50cmFsLTAxLmF6dXJld2Vic2l0ZXMubmV0giVkb2N1c2lnbi13YWxsZXQtdmVyaWZpZXIuZG9jdXNpZ24ubmV0hwTAqAK+MAoGCCqGSM49BAMCA0kAMEYCIQDOSfhPlPBsEZcaBwy7+ZQ2Iqdfvwk5IrA3QAQErI/pwQIhAI8x3fFVGgbKW2qywGwbjd5WwsEUW8FOdeNvbp9RQn8s',
    url: 'https://docusign.com',
    logoUri: 'https://www.docusign.com/assets/images/android-chrome-192x192.png',
    demo: true,
  },
  {
    entityId: 'vodafone.com',
    name: 'Vodafone',
    certificate:
      'MIIBlzCCAT2gAwIBAgIJAITl3Hy6AsSiMAoGCCqGSM49BAMCMDQxMjAwBgNVBAMMKXN0YWdpbmdyZWYuZGUtc3NpLmlkLmF3cy5jcHMudm9kYWZvbmUuY29tMB4XDTI1MDIxMzA5MjQ0NloXDTI3MDIwMzA5MjQ0NlowNDEyMDAGA1UEAwwpc3RhZ2luZ3JlZi5kZS1zc2kuaWQuYXdzLmNwcy52b2RhZm9uZS5jb20wWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAAQZfGLORj1J0/GrpzX+pGBgsYklNphDdifn8Ibtn1Tda+YFsB5crY1BNENUNCWm8bFajvyo+Lwa9H/UkaSDNwXxozgwNjA0BgNVHREELTArgilzdGFnaW5ncmVmLmRlLXNzaS5pZC5hd3MuY3BzLnZvZGFmb25lLmNvbTAKBggqhkjOPQQDAgNIADBFAiB6lIaJ9JI3ct13vVeDshB5bOycP2Ujhd5gRU7Aok9aOQIhALgux4FW+s8nmdNGLmeyKDzu9FACNCuu1F+xu31ytB72',
    url: 'https://vodafone.de',
    logoUri: 'https://www.vodafone.de/media/img/icons/mid-render/New_VF_Icon_RGB_RED.svg',
    demo: true,
  },
  {
    entityId: 'lapid.de',
    name: 'LapID Service GmbH',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDUzCCAvqgAwIBAgIIEJwOS9viWVowCgYIKoZIzj0EAwIwbTELMAkGA1UEBhMC
REUxHDAaBgNVBAgTE05vcmRyaGVpbi1XZXN0ZmFsZW4xEDAOBgNVBAcTB05ldHBo
ZW4xGzAZBgNVBAoTEkxhcElEIFNlcnZpY2UgR21iSDERMA8GA1UEAxMIbGFwaWQu
ZGUwHhcNMjUwNjI3MTUwNjAwWhcNMzUwNjI3MTUwNjAwWjBtMQswCQYDVQQGEwJE
RTEcMBoGA1UECBMTTm9yZHJoZWluLVdlc3RmYWxlbjEQMA4GA1UEBxMHTmV0cGhl
bjEbMBkGA1UEChMSTGFwSUQgU2VydmljZSBHbWJIMREwDwYDVQQDEwhsYXBpZC5k
ZTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABGjv5WwRe2H7xS7YF0B0qGXyA3o8
Ds/CxcdBK8QyWHLcrngw70mF/1c6bPkGssoOPKTtNqD+rq5W1w7TrXh21DqjggGC
MIIBfjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBTlfcboYdSaKjeC0Y7N
5QflO0S6FzAOBgNVHQ8BAf8EBAMCAQYwWQYDVR0RBFIwUIIIbGFwaWQuZGWCC2xh
cGlkZGV2LmRlggxsYXBpZHRlc3QuZGWCCioubGFwaWQuZGWCDSoubGFwaWRkZXYu
ZGWCDioubGFwaWR0ZXN0LmRlMCUGA1UdEgQeMByCCGxhcGlkLmRlhhBodHRwczov
L2xhcGlkLmRlMIG2BgNVHR8Ega4wgaswU6BRoE+GTWh0dHA6Ly9tZWRpYS5sYXBp
ZC5kZS9zaGFyZS9lbnR3aWNrbHVuZy9jZXJ0aWZpY2F0ZXMvY2FfY2Ffcl9kZV9s
YXBpZF8wMDAuY3JsMFSgUqBQhk5odHRwczovL21lZGlhLmxhcGlkLmRlL3NoYXJl
L2VudHdpY2tsdW5nL2NlcnRpZmljYXRlcy9jYV9jYV9yX2RlX2xhcGlkXzAwMC5j
cmwwCgYIKoZIzj0EAwIDRwAwRAIgUrY+CTWdCIQRFD2Zmm/aUGV8SavZ2VltmdwK
zl7B9gcCICAougCYFMfxe4kSjIOcMfV/u+cG3wrF5HzHSQx2qK15
-----END CERTIFICATE-----
`,
    url: 'https://lapid.de',
    logoUri: 'https://www.lapid.de/wp-content/uploads/2022/03/LapID-Logo_RBG_400px.png',
    demo: true,
  },
  {
    entityId: 'netlight.com',
    name: 'Netlight',
    certificate: `-----BEGIN CERTIFICATE-----
MIIB8jCCAZmgAwIBAgIUVLA1pyMxWyZ6sSGLzX6XQ8mFbf4wCgYIKoZIzj0EAwIw
EjEQMA4GA1UEAxMHUm9vdCBDQTAeFw0yNTEwMDIwNzAzMjNaFw0yOTEwMDEwNzAz
NTNaMBIxEDAOBgNVBAMTB1Jvb3QgQ0EwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNC
AASox/z833PVTEsJNEGxgJ+fPghQppOezMNuS/xDOMQiGORexX3LV4sVfHEo0t8X
WDbw4/NbfI1W9/tNwJ9vU+v0o4HMMIHJMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB
Af8EBTADAQH/MB0GA1UdDgQWBBTrb/aSv4fp6IQpIhIesfNDIB16ezAfBgNVHSME
GDAWgBTrb/aSv4fp6IQpIhIesfNDIB16ezA3BggrBgEFBQcBAQQrMCkwJwYIKwYB
BQUHMAKGG2h0dHA6Ly92YXVsdDo4MjAwL3YxL3BraS9jYTAtBgNVHR8EJjAkMCKg
IKAehhxodHRwOi8vdmF1bHQ6ODIwMC92MS9wa2kvY3JsMAoGCCqGSM49BAMCA0cA
MEQCIBYeAXvlQGRvBGPyKriyokhlzhSfmGX3KLWNcfTuj7hDAiBXKKKmD6a1qESO
SSEvZdjQ1YFEB9fdwof5kkokEEz2qw==
-----END CERTIFICATE-----`,
    url: 'https://www.netlight.com/',
    logoUri:
      'https://media.licdn.com/dms/image/v2/D4D0BAQHZ2gM5cWHJxQ/company-logo_200_200/company-logo_200_200/0/1708350843808/netlight_consulting_logo?e=1762992000&v=beta&t=2Qpgj26VRA_7AOWGvzQL7_xvyQ2c1Ic8auzAce6lVS8',
    demo: true,
  },
  {
    name: 'Animo Playground',
    url: 'https://playground.animo.id',
    certificate:
      'MIIB2zCCAYCgAwIBAgIRALanVqNUK4dgPlUmlAasZ24wCgYIKoZIzj0EAwIwHTEOMAwGA1UEAxMFQW5pbW8xCzAJBgNVBAYTAk5MMB4XDTI0MTEyODE2MjgzMFoXDTI4MTEyODE2MjgzMFowHTEOMAwGA1UEAxMFQW5pbW8xCzAJBgNVBAYTAk5MMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEwDpb2uNodErbJfEWteLF6pGiqaxNfF9rFyttjJy+No0gmzn4wkgYqvGtcX5W4blXT1PQubGml5QUmpm5d41zd6OBoDCBnTAdBgNVHQ4EFgQUVC5XW1PTYNo6yWnkJGgvBVCtWZUwDgYDVR0PAQH/BAQDAgEGMCYGA1UdEgQfMB2GG2h0dHBzOi8vcGxheWdyb3VuZC5hbmltby5pZDASBgNVHRMBAf8ECDAGAQH/AgEAMDAGA1UdHwQpMCcwJaAjoCGGH2h0dHBzOi8vcGxheWdyb3VuZC5hbmltby5pZC9jcmwwCgYIKoZIzj0EAwIDSQAwRgIhAJvXTWWteCIeZPbzn+Y++Lpf4eFTmxP2M5o4phGsLuZcAiEAuiL89d9a2CQbQo8dzNpnV+P9JrUnKRQuP5ZZ9VJcoJI=',
    logoUri: 'https://playground.animo.id/logo.svg',
    entityId: 'Animo_Playground',
    demo: true,
  },
] satisfies Array<TrustedX509Entity>

export const trustedX509Certificates = trustedX509Entities.map((e) => e.certificate)

export const trustedDidEntities = [
  {
    entityId: 'did:web:metadata.dev.paradym.id:41708c95-743b-48d1-b4d5-23547f67e192',
    did: 'did:web:metadata.dev.paradym.id:41708c95-743b-48d1-b4d5-23547f67e192',
    logoUri: 'https://hva.animo.id/images/logo-hva-klein.png',
    name: 'Hogeschool van Amsterdam',
    url: 'https://hva.nl',
    demo: true,
  },
  {
    entityId: 'did:web:metadata.paradym.id:f976c06e-da46-4b79-bc6e-bfda07c97f91',
    did: 'did:web:metadata.paradym.id:f976c06e-da46-4b79-bc6e-bfda07c97f91',
    logoUri: 'https://hva.animo.id/images/logo-hva-klein.png',
    name: 'Hogeschool van Amsterdam',
    url: 'https://hva.nl',
    demo: false,
  },
  {
    entityId: 'did:web:metadata.paradym.id:2ea1c471-af99-4d3a-b07c-57e29abf8cea',
    did: 'did:web:metadata.paradym.id:2ea1c471-af99-4d3a-b07c-57e29abf8cea',
    logoUri: 'https://legoland.animo.id/images/university-logo.png',
    name: 'Legoland University',
    url: 'https://legoland.animo.id',
    demo: true,
  },
] satisfies Array<TrustedDidEntity>

export const trustedOpenId4VciIssuerEntities = [
  {
    entityId: 'https://agent.dev.paradym.id/oid4vci/43700792-bc9f-4b8c-be2f-59a227d7a6cb',
    issuer: 'https://agent.dev.paradym.id/oid4vci/43700792-bc9f-4b8c-be2f-59a227d7a6cb',
    logoUri: 'https://hva.animo.id/images/logo-hva-klein.png',
    name: 'Hogeschool van Amsterdam',
    url: 'https://hva.nl',
    demo: true,
  },
  {
    entityId: 'https://agent.paradym.id/oid4vci/655913d0-e655-4b3f-9335-a8af00922270',
    issuer: 'https://agent.paradym.id/oid4vci/655913d0-e655-4b3f-9335-a8af00922270',
    logoUri: 'https://hva.animo.id/images/logo-hva-klein.png',
    name: 'Hogeschool van Amsterdam',
    url: 'https://hva.nl',
    demo: false,
  },
  {
    entityId: 'https://issuer.dev.eduid.nl/eduid',
    issuer: 'https://issuer.dev.eduid.nl/eduid',
    logoUri: 'https://static.dev.eduid.nl/images/eduid_credential_logo.png',
    name: 'eduID',
    url: 'https://dev.eduid.nl',
    demo: true,
  },
  {
    entityId: 'https://issuer.eduid.nl/eduid',
    issuer: 'https://issuer.eduid.nl/eduid',
    logoUri: 'https://static.eduid.nl/images/eduid_credential_logo.png',
    name: 'eduID',
    url: 'https://eduid.nl',
    demo: false,
  },
] satisfies Array<TrustedOpenId4VciIssuerEntity>

// https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/blob/main/docs/annexes/annex-3/annex-3.01-pid-rulebook.md#221-eu-wide-attestation-type-and-namespace-for-pid
export const pidSchemes = {
  sdJwtVcVcts: ['urn:eudi:pid:1'],
  msoMdocDoctypes: ['eu.europa.ec.eudi.pid.1'],
}

export const mdlSchemes = {
  mdlMdocDoctypes: ['org.iso.18013.5.1.mDL'],
}

export const eudiTrustList: TrustList = {
  entityId: 'EU',
  organizationName: 'European Union',
  logoUri: require('../assets/eu.png'),
  demo: true,
  trustList: [
    {
      entityId: 'germany',
      organizationName: 'German Government',
      logoUri: require('../assets/germany.png'),
      demo: true,
      trustedRelyingPartyRegistrars: [
        {
          entityId: 'funke-wallet.de',
          logoUri: 'https://funke.animo.id/assets/verifiers/bunde.png',
          organizationName: 'Funke Registrar',
          demo: true,
        },
      ],
    },
  ],
}

const BASE_URL = 'https://funke.animo.id/oid4vp'

export const trustedEntityIds = [
  `${BASE_URL}/0193687b-0c27-7b82-a686-ff857dc6bbb3`,
  `${BASE_URL}/0193687f-20d8-720a-9139-ed939ba510fa`,
  `${BASE_URL}/019368ed-3787-7669-b7f4-8c012238e90d`,
  `${BASE_URL}/01936907-56a3-7007-a61f-44bff8b5d175`,
  `${BASE_URL}/01936903-8879-733f-8eaf-6f2fa862099c`,
] satisfies [string, ...string[]]
