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
//   {
//     entityId: 'finsec-policy.sarb.co.za',
//     name: 'ZA CFC Policy CA Interim',
//     certificate: `-----BEGIN CERTIFICATE-----
// MIIHKzCCBBOgAwIBAgIQD1MotsFwB4J8GWARROOgRjANBgkqhkiG9w0BAQwFADA9
// MQswCQYDVQQGEwJaQTERMA8GA1UEChMITmF0aW9uYWwxGzAZBgNVBAMTElpBIFJv
// b3QgQ0EgSW50ZXJpbTAeFw0yNTExMjExMDAwNTdaFw0zMDEwMjExMDMwNTdaMEMx
// CzAJBgNVBAYTAlpBMREwDwYDVQQKEwhOYXRpb25hbDEhMB8GA1UEAxMYRklOU0VD
// IFBvbGljeSBDQSBJbnRlcmltMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKC
// AgEA4dmG7TNPU6G8OdUvt+8OUKj4lmgCMWTaiVWOgENQxthFoPzAWfO/zawt5hc1
// lV8zSgWzQJ1BqRunGIAD0qhJGdjqEf6GpAXudyeWPUeXmVE4CZQMN/YVxt+X/FiB
// Mo1EhmlvUHKg/j8chwhwaADKeh2AvURlXfo/IVVHptZkT4YMLWeNqx+39QuNWinZ
// iqRTc7xzOq8C6P6UxsLbrhVyP2PPyoans5Wklr3q5pi8/4acSD15Hrp5jfA/fryw
// sRJ2sKt3OV5UldGC/VJOq6tEzUWRD74D/rvKncusGOr4PnyLWqzfAGx5IJDf59Eq
// 27F3NwuucFpSubPScwHF6fSC8D3Hn1tBm8eOVb6daXzD3xf9CmUeLc1Gc9ERrKW3
// R+jPguo7wg+5La04DcyBsxhHlVqAimrBLupZ2amwvuDYDjcPuDgKTR5jpm1OU5Wj
// apqRK1OukEv/e6JeT34vrWQ0QgMwPuD/C3yJEKbSPA/c76Dy3jUbTmsO0iITfBnT
// Rb8U9JEK5FIYb7H+mr8tskBOhLLbkgPxDYIC0BRuapuKHv8J/hh+eI1ag46hER2v
// jxdGLVJGTqzgjqTubfeRRBSHpgyk/VTZ64cBsuY0yg0mHkj32BHt5tBWTSCOo7v6
// 0CBLsHlXF+d2f9Ne0EkZLvx5IL+r3xkYcHNnNg77cLIHLSECAwEAAaOCAR8wggEb
// MBIGA1UdEwEB/wQIMAYBAf8CAQEwDgYDVR0PAQH/BAQDAgEGMFoGCCsGAQUFBwEB
// BE4wTDBKBggrBgEFBQcwAoY+aHR0cDovL2NlcnQuaW50ZXJpbS5kaGEuZ292Lnph
// L3Jvb3RfY2FfaW50ZXJpbV9uYXRpb25hbF96YS5jcnQwWQYDVR0fBFIwUDBOoEyg
// SoZIaHR0cDovL2NybC5pbnRlcmltLmRoYS5nb3YuemEvemFfcm9vdF9jYV9pbnRl
// cmltX25hdGlvbmFsX3phX2NybGZpbGUuY3JsMB8GA1UdIwQYMBaAFEpr8OoZ999e
// LxmmrQm1WAXn77eRMB0GA1UdDgQWBBQWMLZygerRjstobAYeX/WbG7/QdjANBgkq
// hkiG9w0BAQwFAAOCAwEApkHU/F7+bQU20tcD5ty36vz8ohPGGpkZdd33TwcFw0X9
// Mmla2bvUYYrrRE+NfE3QLa6LwbXY9pvlr7NMGyleq1LBBd2bMtSafJog0jHRNT2q
// UsfCzoywgIdYuPVBmnrZcYwMLQWi2MEBKCseum82lmtsL/qoWwz485eA+h2r7yXa
// VSfwtD076puuYNSAJPdWN/+a3ixYXHK9PYxaUCoAIniKuRTw6kRx/1DXsiFQHSkA
// aj1wrMsnfbPAOM4j+SgRmTr7hNmyJhjKTnEMAki6RNWj27MyUbNJfNREaHGHE7fu
// LRb5ty8nDt2lc63bX18WL/+aD2I3JLTSgf5Y958jsOiL27buQk/FXg4uEyVLojXI
// ywkR8Qp2SsUt6Fid8NVBWPCB00pRF+A6ePSUJbtaB3rsbuNO1iemW7ypqgCD/TW5
// Zt/ZLwOfr+cXiVcqp3c2d3QOyVE+GDbptoYpntVUzfqiXzqAroaEK/C7Wbt7+NgX
// bv8iv7OLktoyusuwZhNYROUMVT9U+TFL9wXvOGgPVvRXZjI4hMSKWoEnHjFc6FsQ
// ij9fst9Md7rjAOoi08AFgFFAW2geig/VVP5qE3M4cP+ZqHiAqvcCurFHoI7pGZXp
// /AihtrLdpBq52/kgjrBP6ybb0JGVTbRo7HdGNfLGgkXRL0Wf0trYa+8LaC4sDaHA
// egVAF/1Kc/gjUjbKfxZY1PJjSk7G90uBfmZQqK5hNfuK2Oa9kyRfmzoJoB5ARzZD
// jAu0co9b6RRrk4f23LihHvSE3scq5wBEwKNecnS4HAeKA0vzOM6qOXfd2FWxAI6G
// zFCo9Il73idGyDeEWL1FeIEjDrOkf2YBFPXgCFWE77M0DJ4MtbYi6M6pjxxZsQmz
// 4MKZbnQ81v+t9jT9sBG1H7z0FuGEyrxPX2MCGIBogu6b/5aK7aFFbYudZamI0Pez
// w/imnyRi3khHixZmPOMyNzxxEkxUzzNnxV/6xLWkfNaMhN5z9bHn73fu1XWEPMcu
// Vh+jZPT2h+VLuXmJ8so/
// -----END CERTIFICATE-----`,
//     url: 'https://sarb.didx.co.za',
//     logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
//     demo: true,
//   },
  {
    entityId: 'finsec-issuing.sarb.co.za',
    name: 'FinSec Issuing CA1 Interim — P-521 (EC)',
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
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'sa-csca-mdoc_issuing_root.sarb.co.za',
    name: 'SA CSCA — P-521 (EC)',
    certificate: `-----BEGIN CERTIFICATE-----
MIICWzCCAb2gAwIBAgIQBCiFwfcNRgXCsI4js1GT8jAKBggqhkjOPQQDAjAyMQsw
CQYDVQQGEwJaQTERMA8GA1UEChMITmF0aW9uYWwxEDAOBgNVBAMTB1NBIENTQ0Ew
HhcNMjYwMzIwMTQxNDA3WhcNMzEwMzIwMTQ0NDA3WjAyMQswCQYDVQQGEwJaQTER
MA8GA1UEChMITmF0aW9uYWwxEDAOBgNVBAMTB1NBIENTQ0EwgZswEAYHKoZIzj0C
AQYFK4EEACMDgYYABAHQLSg9ATiUbStqNJCgxvI39tUl9oS3D1KM58s27Vw8jMuP
FeL2AEeGcpgEfg4Bps9qtuWfKfVFdIVQK+OlK2TABQG7cfgsGsV4+Esj3NwlO842
WVZH7Vt5IBIxwLFUorcXY4VzEQL20Aq7+6Q5vcvooAP7MZ0CnSJK+kltK7xosWvA
b6NyMHAwDgYDVR0PAQH/BAQDAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwKwYDVR0Q
BCQwIoAPMjAyNjAzMjAxNDE0MDdagQ8yMDMxMDMyMDE0NDQwN1owHQYDVR0OBBYE
FHpnUTsCYEwz/KHLYxf1fPjhoLC9MAoGCCqGSM49BAMCA4GLADCBhwJCAL+jScVr
ML69wn5/2VGC5xZO+ic/TbrQnRmJdCaCaLUlFeXV5i+kGAip4635ypRNAG8RZsot
t4HgLCKVX3uEIMVeAkEbmG1FeI9bLZljW6KXryDJbvkI0uEqyRjQ+rzTuOf5gJci
v2Gd28RqsR4Cr5NtWuYSUAu361TJY287H2wYVgS0fw==
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'blue-bank-verifier.sarb.didx.co.za',
    name: 'SARB Blue Bank Verifier Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDojCCAwOgAwIBAgIRANpZUgZt0rmBKz7RFRhp6HQwCgYIKoZIzj0EAwIwVjEL
MAkGA1UEBhMCWkExETAPBgNVBAoTCE5hdGlvbmFsMQ8wDQYDVQQLEwZGaW5TZWMx
IzAhBgNVBAMTGkZpblNlYyBJc3N1aW5nIENBMSBJbnRlcmltMB4XDTI2MDMyNDEx
MjM1OFoXDTI3MDMyNDExNTM1OFowKjEbMBkGA1UEAxMSQmx1ZSBCYW5rIFZlcmlm
aWVyMQswCQYDVQQGEwJaQTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABK3AzmHG
ZeycF0Wl9Qh2vUJrnXvEOPMMG+5VwJ3ZdL+MgDnY+cp2NUo8hDAy2Q0tS+ZBYgO5
K+NfSUoWACLH6nOjggHcMIIB2DAOBgNVHQ8BAf8EBAMCB4AwJgYDVR0RBB8wHYIb
Y3JlZHMtYWdlbnQuc2FyYi5kaWR4LmNvLnphMIGbBggrBgEFBQcBAQSBjjCBizBY
BggrBgEFBQcwAoZMaHR0cDovL2NlcnQuaW50ZXJpbS50cmVhc3VyeS5nb3YuemEv
Zmluc2VjX2lzc3VpbmdfY2ExX2ludGVyaW1fZmluc2VjX3phLmNydDAvBggrBgEF
BQcwAYYjaHR0cDovL29jc3AuaW50ZXJpbS50cmVhc3VyeS5nb3YuemEwIgYDVR0S
BBswGYEXYXNlYy5zdXBwb3J0QGFsdHJvbi5jb20wZAYDVR0fBF0wWzBZoFegVYZT
aHR0cDovL2NybC5pbnRlcmltLnRyZWFzdXJ5Lmdvdi56YS9maW5zZWNfaXNzdWlu
Z19jYTFfaW50ZXJpbV9maW5zZWNfemFfY3JsZmlsZS5jcmwwKwYDVR0QBCQwIoAP
MjAyNjAzMjQxMTIzNThagQ8yMDI3MDMyNDExNTM1OFowHwYDVR0jBBgwFoAUbUkT
rPCa6oU8VDlGoM7lp2S2v1YwHQYDVR0OBBYEFHA4zCxSo52YoiVlyhr8s+KNemRe
MAkGA1UdEwQCMAAwCgYIKoZIzj0EAwIDgYwAMIGIAkIBttondhcxQMs2OW/ydM2j
yjX65zCuDXPWwHLTubKsN16aFu5n3yoy5w/3FA6RcX4ClRmXUq57ds4RT7EwQZlP
0PYCQgEr9Uqebojoz9IgpzZ2Vbssze2cvNTeLfFfCgLnPU1OyBxKRhHrijENJK+t
HDPIkQVlB//R4TnY5ytOt2/vqcj+HQ==
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'student-aid-verifier.sarb.didx.co.za',
    name: 'SARB Student Aid Verifier Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDpDCCAwWgAwIBAgIRAJpAvjaGbnAG19jCz4qo0QwwCgYIKoZIzj0EAwIwVjEL
MAkGA1UEBhMCWkExETAPBgNVBAoTCE5hdGlvbmFsMQ8wDQYDVQQLEwZGaW5TZWMx
IzAhBgNVBAMTGkZpblNlYyBJc3N1aW5nIENBMSBJbnRlcmltMB4XDTI2MDMyNDEx
MzI1MVoXDTI3MDMyNDEyMDI1MVowLDEdMBsGA1UEAxMUU3R1ZGVudCBBaWQgVmVy
aWZpZXIxCzAJBgNVBAYTAlpBMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE2h60
HaVwO54lN4Lpgc2vbxRhfXTE5jdPRd1L7O6gfHGI8i7ofAJuQqsvr6Y31qR5KIcM
KZdzWk8AhQe8QnkraqOCAdwwggHYMA4GA1UdDwEB/wQEAwIHgDAmBgNVHREEHzAd
ghtjcmVkcy1hZ2VudC5zYXJiLmRpZHguY28uemEwgZsGCCsGAQUFBwEBBIGOMIGL
MFgGCCsGAQUFBzAChkxodHRwOi8vY2VydC5pbnRlcmltLnRyZWFzdXJ5Lmdvdi56
YS9maW5zZWNfaXNzdWluZ19jYTFfaW50ZXJpbV9maW5zZWNfemEuY3J0MC8GCCsG
AQUFBzABhiNodHRwOi8vb2NzcC5pbnRlcmltLnRyZWFzdXJ5Lmdvdi56YTAiBgNV
HRIEGzAZgRdhc2VjLnN1cHBvcnRAYWx0cm9uLmNvbTBkBgNVHR8EXTBbMFmgV6BV
hlNodHRwOi8vY3JsLmludGVyaW0udHJlYXN1cnkuZ292LnphL2ZpbnNlY19pc3N1
aW5nX2NhMV9pbnRlcmltX2ZpbnNlY196YV9jcmxmaWxlLmNybDArBgNVHRAEJDAi
gA8yMDI2MDMyNDExMzI1MVqBDzIwMjcwMzI0MTIwMjUxWjAfBgNVHSMEGDAWgBRt
SROs8JrqhTxUOUagzuWnZLa/VjAdBgNVHQ4EFgQUO9ODmO/ONNJsj/c4ykMKXIyB
PmkwCQYDVR0TBAIwADAKBggqhkjOPQQDAgOBjAAwgYgCQgDZjc/VeCB5NYXIW8uK
YYhjt/9yFCr6GYr+9JEa88L+9xU+2cRJ0J7e5ddNFW3jN735dJGmsspgC5M4xVti
rUXdaAJCAK8HFwUqKKlTKNizCdeASXUsiQg03UzysTjA6vla2AiJt1ZLgIfF6AWa
EO69c1loCNRAu0+iQMjfiO2iKRIEeLhj
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'identity-authority-verifier.sarb.didx.co.za',
    name: 'SARB Identity Authority Verifier Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDqzCCAwygAwIBAgIRAOFmxiukYPHJzzOcUL5Nf2kwCgYIKoZIzj0EAwIwVjEL
MAkGA1UEBhMCWkExETAPBgNVBAoTCE5hdGlvbmFsMQ8wDQYDVQQLEwZGaW5TZWMx
IzAhBgNVBAMTGkZpblNlYyBJc3N1aW5nIENBMSBJbnRlcmltMB4XDTI2MDMyNDEx
MjgzMVoXDTI3MDMyNDExNTgzMVowMzEkMCIGA1UEAxMbSWRlbnRpdHkgQXV0aG9y
aXR5IFZlcmlmaWVyMQswCQYDVQQGEwJaQTBZMBMGByqGSM49AgEGCCqGSM49AwEH
A0IABLA9iFKjBwt0JwN/WZ7iwJLZlDXg2X0USBdIq02bKR5JT8TM3LcCW0e2qiz4
wNjaDcoOpIogZOfXod1HfVCm5z+jggHcMIIB2DAOBgNVHQ8BAf8EBAMCB4AwJgYD
VR0RBB8wHYIbY3JlZHMtYWdlbnQuc2FyYi5kaWR4LmNvLnphMIGbBggrBgEFBQcB
AQSBjjCBizBYBggrBgEFBQcwAoZMaHR0cDovL2NlcnQuaW50ZXJpbS50cmVhc3Vy
eS5nb3YuemEvZmluc2VjX2lzc3VpbmdfY2ExX2ludGVyaW1fZmluc2VjX3phLmNy
dDAvBggrBgEFBQcwAYYjaHR0cDovL29jc3AuaW50ZXJpbS50cmVhc3VyeS5nb3Yu
emEwIgYDVR0SBBswGYEXYXNlYy5zdXBwb3J0QGFsdHJvbi5jb20wZAYDVR0fBF0w
WzBZoFegVYZTaHR0cDovL2NybC5pbnRlcmltLnRyZWFzdXJ5Lmdvdi56YS9maW5z
ZWNfaXNzdWluZ19jYTFfaW50ZXJpbV9maW5zZWNfemFfY3JsZmlsZS5jcmwwKwYD
VR0QBCQwIoAPMjAyNjAzMjQxMTI4MzFagQ8yMDI3MDMyNDExNTgzMVowHwYDVR0j
BBgwFoAUbUkTrPCa6oU8VDlGoM7lp2S2v1YwHQYDVR0OBBYEFMG0xIkV+OTeIuVz
V5FSgQKvrbStMAkGA1UdEwQCMAAwCgYIKoZIzj0EAwIDgYwAMIGIAkIAxSOdC+wg
KRJAeviwLmFeNuUkQSKv4+uNT+KJSRNuRTjM13J11yOkrn59U7kpbQTgaCs7DSIX
Ap43n/SoXUV5+m0CQgFd5mx150uGc77oud7LmTjLPhrrCn8reyB43+7UrF47trDi
Aw06xNmZRJpuP3L8fSGYuAi5dlltgZ2tPdqLsl8L5w==
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'sarb-verifier.sarb.didx.co.za',
    name: 'SARB Verifier Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDnDCCAv2gAwIBAgIQSzxnyqSzeyfU4T7NxFr1nTAKBggqhkjOPQQDAjBWMQsw
CQYDVQQGEwJaQTERMA8GA1UEChMITmF0aW9uYWwxDzANBgNVBAsTBkZpblNlYzEj
MCEGA1UEAxMaRmluU2VjIElzc3VpbmcgQ0ExIEludGVyaW0wHhcNMjYwMzI0MTEz
MDM0WhcNMjcwMzI0MTIwMDM0WjAlMRYwFAYDVQQDEw1TQVJCIFZlcmlmaWVyMQsw
CQYDVQQGEwJaQTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABLSTUw6StghZNRHr
gsSY91P9kNfqaI7oEwnpvf2RX2vmaoJxiMX0eiZUENkaI/Ifk1ikBoMqDrR+k6rm
xW/eNGejggHcMIIB2DAOBgNVHQ8BAf8EBAMCB4AwJgYDVR0RBB8wHYIbY3JlZHMt
YWdlbnQuc2FyYi5kaWR4LmNvLnphMIGbBggrBgEFBQcBAQSBjjCBizBYBggrBgEF
BQcwAoZMaHR0cDovL2NlcnQuaW50ZXJpbS50cmVhc3VyeS5nb3YuemEvZmluc2Vj
X2lzc3VpbmdfY2ExX2ludGVyaW1fZmluc2VjX3phLmNydDAvBggrBgEFBQcwAYYj
aHR0cDovL29jc3AuaW50ZXJpbS50cmVhc3VyeS5nb3YuemEwIgYDVR0SBBswGYEX
YXNlYy5zdXBwb3J0QGFsdHJvbi5jb20wZAYDVR0fBF0wWzBZoFegVYZTaHR0cDov
L2NybC5pbnRlcmltLnRyZWFzdXJ5Lmdvdi56YS9maW5zZWNfaXNzdWluZ19jYTFf
aW50ZXJpbV9maW5zZWNfemFfY3JsZmlsZS5jcmwwKwYDVR0QBCQwIoAPMjAyNjAz
MjQxMTMwMzRagQ8yMDI3MDMyNDEyMDAzNFowHwYDVR0jBBgwFoAUbUkTrPCa6oU8
VDlGoM7lp2S2v1YwHQYDVR0OBBYEFANE7kGWEej6uBeqaMNhOp1THKOCMAkGA1Ud
EwQCMAAwCgYIKoZIzj0EAwIDgYwAMIGIAkIAq0F84vmVnFXstEsqHhjQnCP4sSuQ
MvZPSPH1aJA9vPcVctnfYAzayb/LfoILLGParvZeMP4H05WZx2eB50XJJjwCQgE1
e6CJNdc2LvoBtYYXb1Ee9xJwprWuQGC9r2tny4zXpKqeSdlBETwEtGn/16H436nH
0JpAqHULg+4sZVnNY7JMuw==
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'revenue-service-verifier.sarb.didx.co.za',
    name: 'SARB Revenue Service Verifier Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDpjCCAwigAwIBAgIQclavGoLawz1q2hWdH4/EEjAKBggqhkjOPQQDAjBWMQsw
CQYDVQQGEwJaQTERMA8GA1UEChMITmF0aW9uYWwxDzANBgNVBAsTBkZpblNlYzEj
MCEGA1UEAxMaRmluU2VjIElzc3VpbmcgQ0ExIEludGVyaW0wHhcNMjYwMzI0MTEy
OTUyWhcNMjcwMzI0MTE1OTUyWjAwMSEwHwYDVQQDExhSZXZlbnVlIFNlcnZpY2Ug
VmVyaWZpZXIxCzAJBgNVBAYTAlpBMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE
WxqjGr+9HWhAMprbT+VpQBOXsrW9ft3/oqQIaF4khil+OdiSEtVYrdy1sqwcgcjK
eknECB51I6LUnvEZ3rLgR6OCAdwwggHYMA4GA1UdDwEB/wQEAwIHgDAmBgNVHREE
HzAdghtjcmVkcy1hZ2VudC5zYXJiLmRpZHguY28uemEwgZsGCCsGAQUFBwEBBIGO
MIGLMFgGCCsGAQUFBzAChkxodHRwOi8vY2VydC5pbnRlcmltLnRyZWFzdXJ5Lmdv
di56YS9maW5zZWNfaXNzdWluZ19jYTFfaW50ZXJpbV9maW5zZWNfemEuY3J0MC8G
CCsGAQUFBzABhiNodHRwOi8vb2NzcC5pbnRlcmltLnRyZWFzdXJ5Lmdvdi56YTAi
BgNVHRIEGzAZgRdhc2VjLnN1cHBvcnRAYWx0cm9uLmNvbTBkBgNVHR8EXTBbMFmg
V6BVhlNodHRwOi8vY3JsLmludGVyaW0udHJlYXN1cnkuZ292LnphL2ZpbnNlY19p
c3N1aW5nX2NhMV9pbnRlcmltX2ZpbnNlY196YV9jcmxmaWxlLmNybDArBgNVHRAE
JDAigA8yMDI2MDMyNDExMjk1MlqBDzIwMjcwMzI0MTE1OTUyWjAfBgNVHSMEGDAW
gBRtSROs8JrqhTxUOUagzuWnZLa/VjAdBgNVHQ4EFgQUpboWTdl+BsC2+Vx6JX69
Jg4B8qowCQYDVR0TBAIwADAKBggqhkjOPQQDAgOBiwAwgYcCQgCryaG76Xc3BAo3
EA9lFjvJKy2YfFZQ5HeqoYld/Qc1ueU/0JSsYWx/J1xgkv2nH052FNTh/l8i0SfN
fcUbPOSoFQJBcWfvuEu/lzV5ityCyZXtIgEPbhw596/pPGRH2GtBWThN7zcDGmqF
/26+0CGn7rvDfQNn1nEnXzANpvBxSsS00pI=
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'contactable-sarb-verifier.sarb.didx.co.za',
    name: 'Contactable SARB Verifier Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDpzCCAwmgAwIBAgIQAxDMxOBpXlBvci7BGNHvWTAKBggqhkjOPQQDAjBWMQsw
CQYDVQQGEwJaQTERMA8GA1UEChMITmF0aW9uYWwxDzANBgNVBAsTBkZpblNlYzEj
MCEGA1UEAxMaRmluU2VjIElzc3VpbmcgQ0ExIEludGVyaW0wHhcNMjYwMzI0MTEy
NTQ0WhcNMjcwMzI0MTE1NTQ0WjAxMSIwIAYDVQQDExlDb250YWN0YWJsZSBTQVJC
IFZlcmlmaWVyMQswCQYDVQQGEwJaQTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IA
BDksAIty7ZGrBr9LTYtMK3uCXabSYq/CczchWoZG9JLzGO/kg0aijQWLqMthoz9q
nM7t/siQo3557n3Cci2wEVmjggHcMIIB2DAOBgNVHQ8BAf8EBAMCB4AwJgYDVR0R
BB8wHYIbY3JlZHMtYWdlbnQuc2FyYi5kaWR4LmNvLnphMIGbBggrBgEFBQcBAQSB
jjCBizBYBggrBgEFBQcwAoZMaHR0cDovL2NlcnQuaW50ZXJpbS50cmVhc3VyeS5n
b3YuemEvZmluc2VjX2lzc3VpbmdfY2ExX2ludGVyaW1fZmluc2VjX3phLmNydDAv
BggrBgEFBQcwAYYjaHR0cDovL29jc3AuaW50ZXJpbS50cmVhc3VyeS5nb3YuemEw
IgYDVR0SBBswGYEXYXNlYy5zdXBwb3J0QGFsdHJvbi5jb20wZAYDVR0fBF0wWzBZ
oFegVYZTaHR0cDovL2NybC5pbnRlcmltLnRyZWFzdXJ5Lmdvdi56YS9maW5zZWNf
aXNzdWluZ19jYTFfaW50ZXJpbV9maW5zZWNfemFfY3JsZmlsZS5jcmwwKwYDVR0Q
BCQwIoAPMjAyNjAzMjQxMTI1NDRagQ8yMDI3MDMyNDExNTU0NFowHwYDVR0jBBgw
FoAUbUkTrPCa6oU8VDlGoM7lp2S2v1YwHQYDVR0OBBYEFILAqTyylmV9JoWh2crB
b3KGVPMqMAkGA1UdEwQCMAAwCgYIKoZIzj0EAwIDgYsAMIGHAkFJktzeph4QFjbq
yNGiMG650KtvxfuRo2fYY/nI3wmZTGm9S4bAONgZp8cObjxs4fVf52bTyy8p/heP
NRygX3yr0QJCAUNugxNBrHekBKrb/gW6pzcnmY0ROqOjy+9p1HGB/VGwUHo1uJNp
ENml/xYc4AfqikAZiO51POTcigKzpZAn2Ksp
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'highschool-xyx-verifier.sarb.didx.co.za',
    name: 'Highschool XYZ Verifier Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDpjCCAwmgAwIBAgIRAI1mS/wAYF0kq9kSGlKnmrswCgYIKoZIzj0EAwIwVjEL
MAkGA1UEBhMCWkExETAPBgNVBAoTCE5hdGlvbmFsMQ8wDQYDVQQLEwZGaW5TZWMx
IzAhBgNVBAMTGkZpblNlYyBJc3N1aW5nIENBMSBJbnRlcmltMB4XDTI2MDMyNDEx
MjczOFoXDTI3MDMyNDExNTczOFowMDEhMB8GA1UEAxMYSGlnaCBTY2hvb2wgWFla
IFZlcmlmaWVyMQswCQYDVQQGEwJaQTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IA
BOQQRPLOVIFegBSHw8kW7kv2mL62eitOkwyQ7WJDT3O92wR8vy+AbrmJpTg8nC+Q
EHv0Bna2Y0C4hH/s2OTR1KKjggHcMIIB2DAOBgNVHQ8BAf8EBAMCB4AwJgYDVR0R
BB8wHYIbY3JlZHMtYWdlbnQuc2FyYi5kaWR4LmNvLnphMIGbBggrBgEFBQcBAQSB
jjCBizBYBggrBgEFBQcwAoZMaHR0cDovL2NlcnQuaW50ZXJpbS50cmVhc3VyeS5n
b3YuemEvZmluc2VjX2lzc3VpbmdfY2ExX2ludGVyaW1fZmluc2VjX3phLmNydDAv
BggrBgEFBQcwAYYjaHR0cDovL29jc3AuaW50ZXJpbS50cmVhc3VyeS5nb3YuemEw
IgYDVR0SBBswGYEXYXNlYy5zdXBwb3J0QGFsdHJvbi5jb20wZAYDVR0fBF0wWzBZ
oFegVYZTaHR0cDovL2NybC5pbnRlcmltLnRyZWFzdXJ5Lmdvdi56YS9maW5zZWNf
aXNzdWluZ19jYTFfaW50ZXJpbV9maW5zZWNfemFfY3JsZmlsZS5jcmwwKwYDVR0Q
BCQwIoAPMjAyNjAzMjQxMTI3MzhagQ8yMDI3MDMyNDExNTczOFowHwYDVR0jBBgw
FoAUbUkTrPCa6oU8VDlGoM7lp2S2v1YwHQYDVR0OBBYEFBoO3JCQoKM1PH4ZldiM
uaDus7rAMAkGA1UdEwQCMAAwCgYIKoZIzj0EAwIDgYoAMIGGAkFf1fupvofT2oq0
9aYepX/I5f/ScD4HUSipJrJRfGSTrp57AqlIFASkTJfmzAaq1ClhqB+LjW43je0R
pzW7Rb9XKwJBIMbO6YS6MP7e0AK44mgXb8SxTIJOiQBls9+A/1BcB7FK4IcXbHSX
Y5E/CheIjSTxdAy7RlXvNDnjEGPv6oBy8uM=
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'social-dev-org-verifier.sarb.didx.co.za',
    name: 'Social Dev Org Verifier Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDrjCCAw+gAwIBAgIQGkvM4MgXnfX9J5FIOsNK3TAKBggqhkjOPQQDAjBWMQsw
CQYDVQQGEwJaQTERMA8GA1UEChMITmF0aW9uYWwxDzANBgNVBAsTBkZpblNlYzEj
MCEGA1UEAxMaRmluU2VjIElzc3VpbmcgQ0ExIEludGVyaW0wHhcNMjYwMzI0MTEz
MTUwWhcNMjcwMzI0MTIwMTUwWjA3MSgwJgYDVQQDEx9Tb2NpYWwgRGV2ZWxvcG1l
bnQgT3JnIFZlcmlmaWVyMQswCQYDVQQGEwJaQTBZMBMGByqGSM49AgEGCCqGSM49
AwEHA0IABH2fXWCdMXAeNR0yD2rgTGvd21ErIwcCc1ONsIFfCxhEG3izaPO88Tig
mOC9hfui7Iza/dWerZx13F8txlBoSxCjggHcMIIB2DAOBgNVHQ8BAf8EBAMCB4Aw
JgYDVR0RBB8wHYIbY3JlZHMtYWdlbnQuc2FyYi5kaWR4LmNvLnphMIGbBggrBgEF
BQcBAQSBjjCBizBYBggrBgEFBQcwAoZMaHR0cDovL2NlcnQuaW50ZXJpbS50cmVh
c3VyeS5nb3YuemEvZmluc2VjX2lzc3VpbmdfY2ExX2ludGVyaW1fZmluc2VjX3ph
LmNydDAvBggrBgEFBQcwAYYjaHR0cDovL29jc3AuaW50ZXJpbS50cmVhc3VyeS5n
b3YuemEwIgYDVR0SBBswGYEXYXNlYy5zdXBwb3J0QGFsdHJvbi5jb20wZAYDVR0f
BF0wWzBZoFegVYZTaHR0cDovL2NybC5pbnRlcmltLnRyZWFzdXJ5Lmdvdi56YS9m
aW5zZWNfaXNzdWluZ19jYTFfaW50ZXJpbV9maW5zZWNfemFfY3JsZmlsZS5jcmww
KwYDVR0QBCQwIoAPMjAyNjAzMjQxMTMxNTBagQ8yMDI3MDMyNDEyMDE1MFowHwYD
VR0jBBgwFoAUbUkTrPCa6oU8VDlGoM7lp2S2v1YwHQYDVR0OBBYEFCJvYoIr6P6z
Qs6uLGDwAp+IwQvTMAkGA1UdEwQCMAAwCgYIKoZIzj0EAwIDgYwAMIGIAkIAgWhC
9UHmOeLvNFi5r4aV1HC1YXBZE9ufibYV+PhhVWUFFCkha1hSyasisGzpFidTOJfm
y+c8R3yV9D362ALV+BMCQgEeNKjLAyFP4b5rUcdq5fAcM+ZqqP66OH3Q03FUYtTI
/7fcZcL2JWvwgT5hCorcBddzdMDAkEnP3NNSg5meak4+Xg==
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },     
  {
    entityId: 'blue-bank-issuer.sarb.didx.co.za',
    name: 'SARB Blue Bank Issuer Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDnzCCAwCgAwIBAgIQXNX/3ZjvFnPWinF/qb/kFzAKBggqhkjOPQQDAjBWMQsw
CQYDVQQGEwJaQTERMA8GA1UEChMITmF0aW9uYWwxDzANBgNVBAsTBkZpblNlYzEj
MCEGA1UEAxMaRmluU2VjIElzc3VpbmcgQ0ExIEludGVyaW0wHhcNMjYwMzI0MTEy
MDAwWhcNMjcwMzI0MTE1MDAwWjAoMRkwFwYDVQQDExBCbHVlIEJhbmsgSXNzdWVy
MQswCQYDVQQGEwJaQTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABBR8AYgABTd+
oV8hUe7hzaNDjkymHlWqJhpLOXcm3GoZwYGYIiSQbant9zdfvM3mDtk3GH3Ipzm1
VCJ9/7M4qCqjggHcMIIB2DAOBgNVHQ8BAf8EBAMCB4AwJgYDVR0RBB8wHYIbY3Jl
ZHMtYWdlbnQuc2FyYi5kaWR4LmNvLnphMIGbBggrBgEFBQcBAQSBjjCBizBYBggr
BgEFBQcwAoZMaHR0cDovL2NlcnQuaW50ZXJpbS50cmVhc3VyeS5nb3YuemEvZmlu
c2VjX2lzc3VpbmdfY2ExX2ludGVyaW1fZmluc2VjX3phLmNydDAvBggrBgEFBQcw
AYYjaHR0cDovL29jc3AuaW50ZXJpbS50cmVhc3VyeS5nb3YuemEwIgYDVR0SBBsw
GYEXYXNlYy5zdXBwb3J0QGFsdHJvbi5jb20wZAYDVR0fBF0wWzBZoFegVYZTaHR0
cDovL2NybC5pbnRlcmltLnRyZWFzdXJ5Lmdvdi56YS9maW5zZWNfaXNzdWluZ19j
YTFfaW50ZXJpbV9maW5zZWNfemFfY3JsZmlsZS5jcmwwKwYDVR0QBCQwIoAPMjAy
NjAzMjQxMTIwMDBagQ8yMDI3MDMyNDExNTAwMFowHwYDVR0jBBgwFoAUbUkTrPCa
6oU8VDlGoM7lp2S2v1YwHQYDVR0OBBYEFKvozvw3YktrSV1b4zQWCmePPWJ5MAkG
A1UdEwQCMAAwCgYIKoZIzj0EAwIDgYwAMIGIAkIBIYiFbZ0cNH1xVqE9fch0Lq/U
b4vAUN3NuSeqe9CKywJyekYkqVKWaGyYsVK0Dfc7jFWBXMlO9QiYyPb4dRZq+IgC
QgHloSw7pvlqvBOeCUYnQ9a2zQa5dR1eJGU7qKz/neI9bwwoWaSTTKxZZiJbV4eX
keB7+LApz79GL7llrNuRg1nHUQ==
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'student-aid-issuer.sarb.didx.co.za',
    name: 'SARB Student Aid Issuer Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDojCCAwOgAwIBAgIRAKmr0El3+kVSvXLSkt3qaeYwCgYIKoZIzj0EAwIwVjEL
MAkGA1UEBhMCWkExETAPBgNVBAoTCE5hdGlvbmFsMQ8wDQYDVQQLEwZGaW5TZWMx
IzAhBgNVBAMTGkZpblNlYyBJc3N1aW5nIENBMSBJbnRlcmltMB4XDTI2MDMyNDEx
MzIyMVoXDTI3MDMyNDEyMDIyMVowKjEbMBkGA1UEAxMSU3R1ZGVudCBBaWQgSXNz
dWVyMQswCQYDVQQGEwJaQTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABCTYCvbY
Ydb42/RiLe/NilJpTig39uH3XV788y9zar82jY/9N13PjKqdInGy9cnxmxebDRzz
ytVJuWXorOgC8oqjggHcMIIB2DAOBgNVHQ8BAf8EBAMCB4AwJgYDVR0RBB8wHYIb
Y3JlZHMtYWdlbnQuc2FyYi5kaWR4LmNvLnphMIGbBggrBgEFBQcBAQSBjjCBizBY
BggrBgEFBQcwAoZMaHR0cDovL2NlcnQuaW50ZXJpbS50cmVhc3VyeS5nb3YuemEv
Zmluc2VjX2lzc3VpbmdfY2ExX2ludGVyaW1fZmluc2VjX3phLmNydDAvBggrBgEF
BQcwAYYjaHR0cDovL29jc3AuaW50ZXJpbS50cmVhc3VyeS5nb3YuemEwIgYDVR0S
BBswGYEXYXNlYy5zdXBwb3J0QGFsdHJvbi5jb20wZAYDVR0fBF0wWzBZoFegVYZT
aHR0cDovL2NybC5pbnRlcmltLnRyZWFzdXJ5Lmdvdi56YS9maW5zZWNfaXNzdWlu
Z19jYTFfaW50ZXJpbV9maW5zZWNfemFfY3JsZmlsZS5jcmwwKwYDVR0QBCQwIoAP
MjAyNjAzMjQxMTMyMjFagQ8yMDI3MDMyNDEyMDIyMVowHwYDVR0jBBgwFoAUbUkT
rPCa6oU8VDlGoM7lp2S2v1YwHQYDVR0OBBYEFJF5iylBuramSV3OiBqxEkO8HaEc
MAkGA1UdEwQCMAAwCgYIKoZIzj0EAwIDgYwAMIGIAkIBwgzz+zYLISARxAUtc1iW
weQ6MMylTaLiZE8URsHCMiuJh0qYEJulVu3QmUFxVDq4ecgiNAI59VEmBEjeCefg
KZICQgHSBVl6sFPybkml078v8ZJlA3fFQaHNL/2VbqTnh5Uw4j30AaOYZmdqqNgW
pClvUH78FjATdbqI7oiqsQOxi1hB9A==
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'identity-authority-issuer.sarb.didx.co.za',
    name: 'SARB Identity Authority Issuer Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDvzCCAyGgAwIBAgIRAJVyhsSYETRBgbN8aOssO0QwCgYIKoZIzj0EAwIwVjEL
MAkGA1UEBhMCWkExETAPBgNVBAoTCE5hdGlvbmFsMQ8wDQYDVQQLEwZGaW5TZWMx
IzAhBgNVBAMTGkZpblNlYyBJc3N1aW5nIENBMSBJbnRlcmltMB4XDTI2MDMyNDA1
MDU1N1oXDTI3MDMyNDA1MzU1N1owMTEiMCAGA1UEAxMZSWRlbnRpdHkgQXV0aG9y
aXR5IElzc3VlcjELMAkGA1UEBhMCWkEwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNC
AATmMmPNjIRUIFsgEHdpjNmLg/LgBDWqDO/gaOsetpyyJH1tD3QLyVyjq/aWTbfd
rqmHnBAZHCCb9BmqClueRaAoo4IB8zCCAe8wDgYDVR0PAQH/BAQDAgeAMBUGA1Ud
JQEB/wQLMAkGByiBjF0FAQIwJgYDVR0RBB8wHYIbY3JlZHMtYWdlbnQuc2FyYi5k
aWR4LmNvLnphMIGbBggrBgEFBQcBAQSBjjCBizBYBggrBgEFBQcwAoZMaHR0cDov
L2NlcnQuaW50ZXJpbS50cmVhc3VyeS5nb3YuemEvZmluc2VjX2lzc3VpbmdfY2Ex
X2ludGVyaW1fZmluc2VjX3phLmNydDAvBggrBgEFBQcwAYYjaHR0cDovL29jc3Au
aW50ZXJpbS50cmVhc3VyeS5nb3YuemEwIgYDVR0SBBswGYEXYXNlYy5zdXBwb3J0
QGFsdHJvbi5jb20wZAYDVR0fBF0wWzBZoFegVYZTaHR0cDovL2NybC5pbnRlcmlt
LnRyZWFzdXJ5Lmdvdi56YS9maW5zZWNfaXNzdWluZ19jYTFfaW50ZXJpbV9maW5z
ZWNfemFfY3JsZmlsZS5jcmwwKwYDVR0QBCQwIoAPMjAyNjAzMjQwNTA1NTdagQ8y
MDI3MDMyNDA1MzU1N1owHwYDVR0jBBgwFoAUbUkTrPCa6oU8VDlGoM7lp2S2v1Yw
HQYDVR0OBBYEFNjSUUSDABugfMZEoQ9SoWM6Z9WpMAkGA1UdEwQCMAAwCgYIKoZI
zj0EAwIDgYsAMIGHAkIAv9Z/mYPilHWdrI594158MFLLujjwLtUmT3GF3h6sFdTe
MIZshJ8bClSIyRxTyKpgQj+oe1wv7k4YIyD8egDmz+MCQTQ+5mCOMDfQJv2XY4sr
wejGQGXRZn51JGXL3OWV5VKDfLhheAV5XSSaZSA6NhDavF83pfxtJ11xxKvN3W6Y
HIpd
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'sarb-issuer.sarb.didx.co.za',
    name: 'SARB Issuer Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDsjCCAxOgAwIBAgIRAO4fNmgp0bajUcGFsLy0MRUwCgYIKoZIzj0EAwIwVjEL
MAkGA1UEBhMCWkExETAPBgNVBAoTCE5hdGlvbmFsMQ8wDQYDVQQLEwZGaW5TZWMx
IzAhBgNVBAMTGkZpblNlYyBJc3N1aW5nIENBMSBJbnRlcmltMB4XDTI2MDMyNDA1
Mzc1OVoXDTI3MDMyNDA2MDc1OVowIzEUMBIGA1UEAxMLU0FSQiBJc3N1ZXIxCzAJ
BgNVBAYTAlpBMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEH+LW7vYXVG8t5IwU
6UcpKOumh0VE9vmkerKGoRr/vdJ1+xbQsfj/+CSZL0SBjy0GyRiJFG0EiGZ9hRxC
xYpvj6OCAfMwggHvMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUBAf8ECzAJBgcogYxd
BQECMCYGA1UdEQQfMB2CG2NyZWRzLWFnZW50LnNhcmIuZGlkeC5jby56YTCBmwYI
KwYBBQUHAQEEgY4wgYswWAYIKwYBBQUHMAKGTGh0dHA6Ly9jZXJ0LmludGVyaW0u
dHJlYXN1cnkuZ292LnphL2ZpbnNlY19pc3N1aW5nX2NhMV9pbnRlcmltX2ZpbnNl
Y196YS5jcnQwLwYIKwYBBQUHMAGGI2h0dHA6Ly9vY3NwLmludGVyaW0udHJlYXN1
cnkuZ292LnphMCIGA1UdEgQbMBmBF2FzZWMuc3VwcG9ydEBhbHRyb24uY29tMGQG
A1UdHwRdMFswWaBXoFWGU2h0dHA6Ly9jcmwuaW50ZXJpbS50cmVhc3VyeS5nb3Yu
emEvZmluc2VjX2lzc3VpbmdfY2ExX2ludGVyaW1fZmluc2VjX3phX2NybGZpbGUu
Y3JsMCsGA1UdEAQkMCKADzIwMjYwMzI0MDUzNzU5WoEPMjAyNzAzMjQwNjA3NTla
MB8GA1UdIwQYMBaAFG1JE6zwmuqFPFQ5RqDO5adktr9WMB0GA1UdDgQWBBQQUe/y
shYSmxPyjNg8FpF8Az8EOjAJBgNVHRMEAjAAMAoGCCqGSM49BAMCA4GMADCBiAJC
AQhzeGFNKgrAcgdUixm4LlINSNigLUoHamHDhLVD1PTqJQcrw5JCKmvSA8FXMsJG
8wcl8LB+al2LfCnh5+zMGVInAkIBy7OUOifkIujsttcnvLwpoUPvNlQGzptVxbv2
dmlBsWGM42KBfJWu7q78o5G9o/9TuorKUAx5AufYgSIDursFB3I=
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'revenue-service-issuer.sarb.didx.co.za',
    name: 'SARB Revenue Service Issuer Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDpTCCAwagAwIBAgIQMh5ey/Mqb13mVKHMNYUqQjAKBggqhkjOPQQDAjBWMQsw
CQYDVQQGEwJaQTERMA8GA1UEChMITmF0aW9uYWwxDzANBgNVBAsTBkZpblNlYzEj
MCEGA1UEAxMaRmluU2VjIElzc3VpbmcgQ0ExIEludGVyaW0wHhcNMjYwMzI0MTEy
OTIwWhcNMjcwMzI0MTE1OTIwWjAuMR8wHQYDVQQDExZSZXZlbnVlIFNlcnZpY2Ug
SXNzdWVyMQswCQYDVQQGEwJaQTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABO9J
x4vC8+GwSBUvx70W+Q5edpKOqIj5f4CeUo0lCbxgUzEVykW5AdcY1XLAiq+RVER1
s0uL4FzFnixbB622KLujggHcMIIB2DAOBgNVHQ8BAf8EBAMCB4AwJgYDVR0RBB8w
HYIbY3JlZHMtYWdlbnQuc2FyYi5kaWR4LmNvLnphMIGbBggrBgEFBQcBAQSBjjCB
izBYBggrBgEFBQcwAoZMaHR0cDovL2NlcnQuaW50ZXJpbS50cmVhc3VyeS5nb3Yu
emEvZmluc2VjX2lzc3VpbmdfY2ExX2ludGVyaW1fZmluc2VjX3phLmNydDAvBggr
BgEFBQcwAYYjaHR0cDovL29jc3AuaW50ZXJpbS50cmVhc3VyeS5nb3YuemEwIgYD
VR0SBBswGYEXYXNlYy5zdXBwb3J0QGFsdHJvbi5jb20wZAYDVR0fBF0wWzBZoFeg
VYZTaHR0cDovL2NybC5pbnRlcmltLnRyZWFzdXJ5Lmdvdi56YS9maW5zZWNfaXNz
dWluZ19jYTFfaW50ZXJpbV9maW5zZWNfemFfY3JsZmlsZS5jcmwwKwYDVR0QBCQw
IoAPMjAyNjAzMjQxMTI5MjBagQ8yMDI3MDMyNDExNTkyMFowHwYDVR0jBBgwFoAU
bUkTrPCa6oU8VDlGoM7lp2S2v1YwHQYDVR0OBBYEFB3Edo7EcR0/q7mePXYtZ0/i
NQ5WMAkGA1UdEwQCMAAwCgYIKoZIzj0EAwIDgYwAMIGIAkIB2D/JXH3AKHs7t2ct
9cqlRnZ7CBVMC2Yh6PKImJcn5YFhME91jQg9xVBEf+vrvYkdacxLFR40PEqjZKPl
vw0nGB0CQgFc3iolDDG7iXnC84IeCPQVXvopmgzAgNgZx+MLRz3S+elPJlwh40RN
hsRq/RdnzL70yjXSNJ8qtcPTMa4+u4WQNA==
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'contactable-sarb-issuer.sarb.didx.co.za',
    name: 'Contactable SARB Issuer Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDpjCCAwigAwIBAgIRAICOO8DmUNGqEflNl1yLJUMwCgYIKoZIzj0EAwIwVjEL
MAkGA1UEBhMCWkExETAPBgNVBAoTCE5hdGlvbmFsMQ8wDQYDVQQLEwZGaW5TZWMx
IzAhBgNVBAMTGkZpblNlYyBJc3N1aW5nIENBMSBJbnRlcmltMB4XDTI2MDMyNDEx
MjQ0OVoXDTI3MDMyNDExNTQ0OVowLzEgMB4GA1UEAxMXQ29udGFjdGFibGUgU0FS
QiBJc3N1ZXIxCzAJBgNVBAYTAlpBMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE
iBf3+rqvJ+0kq/LKoucHUt3Z2PZ5upaWbAjsX7FUGpuv9tUMf0iwfMhAaHaTHsA1
yocQvp2eL4X1T7Ki28VmM6OCAdwwggHYMA4GA1UdDwEB/wQEAwIHgDAmBgNVHREE
HzAdghtjcmVkcy1hZ2VudC5zYXJiLmRpZHguY28uemEwgZsGCCsGAQUFBwEBBIGO
MIGLMFgGCCsGAQUFBzAChkxodHRwOi8vY2VydC5pbnRlcmltLnRyZWFzdXJ5Lmdv
di56YS9maW5zZWNfaXNzdWluZ19jYTFfaW50ZXJpbV9maW5zZWNfemEuY3J0MC8G
CCsGAQUFBzABhiNodHRwOi8vb2NzcC5pbnRlcmltLnRyZWFzdXJ5Lmdvdi56YTAi
BgNVHRIEGzAZgRdhc2VjLnN1cHBvcnRAYWx0cm9uLmNvbTBkBgNVHR8EXTBbMFmg
V6BVhlNodHRwOi8vY3JsLmludGVyaW0udHJlYXN1cnkuZ292LnphL2ZpbnNlY19p
c3N1aW5nX2NhMV9pbnRlcmltX2ZpbnNlY196YV9jcmxmaWxlLmNybDArBgNVHRAE
JDAigA8yMDI2MDMyNDExMjQ0OVqBDzIwMjcwMzI0MTE1NDQ5WjAfBgNVHSMEGDAW
gBRtSROs8JrqhTxUOUagzuWnZLa/VjAdBgNVHQ4EFgQU7Zr8XKTbS3BEcnlvd9+Z
R5hjnhYwCQYDVR0TBAIwADAKBggqhkjOPQQDAgOBiwAwgYcCQgDH9m8Hq2W0eJqR
4Mfhu03OuOSOC+me3Zuewos62gntTaHKLkSwYKJvMH9cXrZyMQ7B0oyEB5Fjzolg
CWFn905c6QJBE+TN/fQyBVZjTsTUIOToPc6IiK2MQGaO+VXOqEamPV+a83i1zQc/
N7EXero+urAiG25wmAx4J5NRE8GkGbhGSDs=
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'highschool-xyx-issuer.sarb.didx.co.za',
    name: 'Highschool XYZ Issuer Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDpjCCAwegAwIBAgIRANP2heJj9Ad6zF+WQm1O/3gwCgYIKoZIzj0EAwIwVjEL
MAkGA1UEBhMCWkExETAPBgNVBAoTCE5hdGlvbmFsMQ8wDQYDVQQLEwZGaW5TZWMx
IzAhBgNVBAMTGkZpblNlYyBJc3N1aW5nIENBMSBJbnRlcmltMB4XDTI2MDMyNDEx
MjYyNloXDTI3MDMyNDExNTYyNlowLjEfMB0GA1UEAxMWSGlnaCBTY2hvb2wgWFla
IElzc3VlcjELMAkGA1UEBhMCWkEwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAATf
aA1GWUzpw7i+IjdvaF5BSP3Und3AAAD2+o4XyrFlSmX21NKfKTAn8y+iJBU3h7Ii
WLM6QD8vU6ZW2/q+gjCUo4IB3DCCAdgwDgYDVR0PAQH/BAQDAgeAMCYGA1UdEQQf
MB2CG2NyZWRzLWFnZW50LnNhcmIuZGlkeC5jby56YTCBmwYIKwYBBQUHAQEEgY4w
gYswWAYIKwYBBQUHMAKGTGh0dHA6Ly9jZXJ0LmludGVyaW0udHJlYXN1cnkuZ292
LnphL2ZpbnNlY19pc3N1aW5nX2NhMV9pbnRlcmltX2ZpbnNlY196YS5jcnQwLwYI
KwYBBQUHMAGGI2h0dHA6Ly9vY3NwLmludGVyaW0udHJlYXN1cnkuZ292LnphMCIG
A1UdEgQbMBmBF2FzZWMuc3VwcG9ydEBhbHRyb24uY29tMGQGA1UdHwRdMFswWaBX
oFWGU2h0dHA6Ly9jcmwuaW50ZXJpbS50cmVhc3VyeS5nb3YuemEvZmluc2VjX2lz
c3VpbmdfY2ExX2ludGVyaW1fZmluc2VjX3phX2NybGZpbGUuY3JsMCsGA1UdEAQk
MCKADzIwMjYwMzI0MTEyNjI2WoEPMjAyNzAzMjQxMTU2MjZaMB8GA1UdIwQYMBaA
FG1JE6zwmuqFPFQ5RqDO5adktr9WMB0GA1UdDgQWBBSMo2OlJeUUnHrZ+NLamcXx
nXQhzzAJBgNVHRMEAjAAMAoGCCqGSM49BAMCA4GMADCBiAJCAKRbsm0+bO3/IZQN
WaEXv5J1Ywfv0r9XXwC+NM1ew5FQb48qXhsM7BzOFEpZbe3J3lUP7Z2aLZGm1YQA
3AFy6hFdAkIBLutHUnVYUCKqC+n0DHe7oEy1OvT4P9wS5KjDqdmelCkr3mXYP0c3
lhGPfSeDoQ1vlwGdWAk2hr5M5xLCZZQHh8I=
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },
  {
    entityId: 'social-dev-org-issuer.sarb.didx.co.za',
    name: 'Social Dev Org Issuer Leaf Certificate',
    certificate: `-----BEGIN CERTIFICATE-----
MIIDrTCCAw6gAwIBAgIRAPIpVk/QsZTNGMW+mRLTS/gwCgYIKoZIzj0EAwIwVjEL
MAkGA1UEBhMCWkExETAPBgNVBAoTCE5hdGlvbmFsMQ8wDQYDVQQLEwZGaW5TZWMx
IzAhBgNVBAMTGkZpblNlYyBJc3N1aW5nIENBMSBJbnRlcmltMB4XDTI2MDMyNDEx
MzExNFoXDTI3MDMyNDEyMDExNFowNTEmMCQGA1UEAxMdU29jaWFsIERldmVsb3Bt
ZW50IE9yZyBJc3N1ZXIxCzAJBgNVBAYTAlpBMFkwEwYHKoZIzj0CAQYIKoZIzj0D
AQcDQgAEm2FbUD0haisJzsPVC3nuDwYfmp1j8LiEwnX+X7Q51h/HcpIQvBhnHMc3
uCWw0nKmzXCUh4SL9FYZuVEv9mZGHqOCAdwwggHYMA4GA1UdDwEB/wQEAwIHgDAm
BgNVHREEHzAdghtjcmVkcy1hZ2VudC5zYXJiLmRpZHguY28uemEwgZsGCCsGAQUF
BwEBBIGOMIGLMFgGCCsGAQUFBzAChkxodHRwOi8vY2VydC5pbnRlcmltLnRyZWFz
dXJ5Lmdvdi56YS9maW5zZWNfaXNzdWluZ19jYTFfaW50ZXJpbV9maW5zZWNfemEu
Y3J0MC8GCCsGAQUFBzABhiNodHRwOi8vb2NzcC5pbnRlcmltLnRyZWFzdXJ5Lmdv
di56YTAiBgNVHRIEGzAZgRdhc2VjLnN1cHBvcnRAYWx0cm9uLmNvbTBkBgNVHR8E
XTBbMFmgV6BVhlNodHRwOi8vY3JsLmludGVyaW0udHJlYXN1cnkuZ292LnphL2Zp
bnNlY19pc3N1aW5nX2NhMV9pbnRlcmltX2ZpbnNlY196YV9jcmxmaWxlLmNybDAr
BgNVHRAEJDAigA8yMDI2MDMyNDExMzExNFqBDzIwMjcwMzI0MTIwMTE0WjAfBgNV
HSMEGDAWgBRtSROs8JrqhTxUOUagzuWnZLa/VjAdBgNVHQ4EFgQUwm7W0jSjDHa1
BeOLD1Oi5b00tDYwCQYDVR0TBAIwADAKBggqhkjOPQQDAgOBjAAwgYgCQgDs8ZDP
N5KWwHkFq/q2VLp+AowWPYaCaWKZ28Qzv6fgPbQm94yrl446fbbvCIva4vpgBOcv
iNeV8myo5SF7Gq2SVwJCASiu0+rDG2Afc2ckVth1dZskGaZfyu4C8V36OuLgUQaE
PlyuXq0h1fTZsYphwcLVEPFy/WCw04MHj9XqdnEaIUXX
-----END CERTIFICATE-----`,
    url: 'https://creds-app.sarb.didx.co.za',
    logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
    demo: true,
  },   
  // {
  //   entityId: 'test.za.finsec.cfc-issuer.gov.za',
  //   name: 'Test FinSec Issuing CA1 Interim — P-521 (EC)',
  //   certificate: ``,
  //   url: 'https://za.finsec.cfc-issuer.gov.za',
  //   logoUri: 'https://creds-app.didx.co.za/assets/issuers/bdr/issuer.png',
  //   demo: true,
  // },  
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
    entityId: 'did:web:sarb.didx.co.za:metadata:058ab0dc-4c1a-48bf-92a1-9e4001be95ac',
    did: 'did:web:sarb.didx.co.za:metadata:058ab0dc-4c1a-48bf-92a1-9e4001be95ac',
    logoUri: 'https://identity-authority.didx.co.za/images/logo-identity-authority.png',
    name: 'Identity Authority',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },  
  {
    entityId: 'did:web:sarb.didx.co.za:metadata:111d9887-3ee2-48b1-ba0b-6bc5e6920a0f',
    did: 'did:web:sarb.didx.co.za:metadata:111d9887-3ee2-48b1-ba0b-6bc5e6920a0f',
    logoUri: 'https://sarb.didx.co.za/images/logo-sarb.png',
    name: 'SARB CFC',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },
  {
    entityId: 'did:web:sarb.didx.co.za:metadata:c8a4b48a-1e6f-4d2d-8c62-155033ac9311',
    did: 'did:web:sarb.didx.co.za:metadata:c8a4b48a-1e6f-4d2d-8c62-155033ac9311',
    logoUri: 'https://student-aid.didx.co.za/images/logo-student-aid.png',
    name: 'Student Aid',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },  
  {
    entityId: 'did:web:sarb.didx.co.za:metadata:d861d8f1-6924-479e-aa82-66738a81278b',
    did: 'did:web:sarb.didx.co.za:metadata:d861d8f1-6924-479e-aa82-66738a81278b',
    logoUri: 'https://contactable-sarb.didx.co.za/images/logo-contactable-sarb.png',
    name: 'Contactable SARB',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },   
  {
    entityId: 'did:web:sarb.didx.co.za:metadata:a5f2cbe9-5d34-4188-b454-6096ad67ece1',
    did: 'did:web:sarb.didx.co.za:metadata:a5f2cbe9-5d34-4188-b454-6096ad67ece1',
    logoUri: 'https://blue-bank.didx.co.za/images/logo-blue-bank.png',
    name: 'Blue Bank',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },
  {
    entityId: 'did:web:sarb.didx.co.za:metadata:6b5a9bd9-128f-42ff-97eb-afe91ce95820',
    did: 'did:web:sarb.didx.co.za:metadata:6b5a9bd9-128f-42ff-97eb-afe91ce95820',
    logoUri: 'https://highschool-xyz.didx.co.za/images/logo-highschool-xyz.png',
    name: 'High School XYZ',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },
  {
    entityId: 'did:web:sarb.didx.co.za:metadata:748fc590-9b92-4e5d-9af1-c9bc491029f1',
    did: 'did:web:sarb.didx.co.za:metadata:748fc590-9b92-4e5d-9af1-c9bc491029f1',
    logoUri: 'https://social-dev-org.didx.co.za/images/logo-social-dev-org.png',
    name: 'Social Dev Org',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },  
  {
    entityId: 'did:web:sarb.didx.co.za:metadata:a9c37117-58b1-4b2b-86f5-52516fd3ee3c',
    did: 'did:web:sarb.didx.co.za:metadata:a9c37117-58b1-4b2b-86f5-52516fd3ee3c',
    logoUri: 'https://revenue-service.didx.co.za/images/logo-revenue-service.png',
    name: 'Revenue Service',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },                
] satisfies Array<TrustedDidEntity>

export const trustedOpenId4VciIssuerEntities = [
  {
    entityId: 'https://creds-agent.sarb.didx.co.za/oid4vci/ad1316f3-43cd-496d-b5b6-f4615a4b5c4b',
    issuer: 'https://creds-agent.sarb.didx.co.za/oid4vci/ad1316f3-43cd-496d-b5b6-f4615a4b5c4b',
    logoUri: 'https://identity-authority.didx.co.za/images/logo-identity-authority.png',
    name: 'Identity Authority',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },  
  {
    entityId: 'https://creds-agent.sarb.didx.co.za/oid4vci/dfd23742-758f-43d6-856c-e7e6031edabf',
    issuer: 'https://creds-agent.sarb.didx.co.za/oid4vci/dfd23742-758f-43d6-856c-e7e6031edabf',
    logoUri: 'https://sarb-cfc.didx.co.za/images/logo-sarb-cfc.png',
    name: 'SARB CFC',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },    
  {
    entityId: 'https://creds-agent.sarb.didx.co.za/oid4vci/fa39b1eb-1c10-48a8-8efd-97cdffced809',
    issuer: 'https://creds-agent.sarb.didx.co.za/oid4vci/fa39b1eb-1c10-48a8-8efd-97cdffced809',
    logoUri: 'https://student-aid.didx.co.za/images/logo-student-aid.png',
    name: 'Student Aid',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },   
  {
    entityId: 'https://creds-agent.sarb.didx.co.za/oid4vci/1a21294f-5a2b-4352-812d-6d7fc2347f7f',
    issuer: 'https://creds-agent.sarb.didx.co.za/oid4vci/1a21294f-5a2b-4352-812d-6d7fc2347f7f',
    logoUri: 'https://contactable-sarb.didx.co.za/images/logo-contactable-sarb.png',
    name: 'Contactable SARB',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },     
  {
    entityId: 'https://creds-agent.sarb.didx.co.za/oid4vci/5b7335da-f813-4593-b826-7f39ec564d92',
    issuer: 'https://creds-agent.sarb.didx.co.za/oid4vci/5b7335da-f813-4593-b826-7f39ec564d92',
    logoUri: 'https://blue-bank.didx.co.za/images/logo-blue-bank.png',
    name: 'Blue Bank',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },    
  {
    entityId: 'https://creds-agent.sarb.didx.co.za/oid4vci/4eb9643e-e54a-4a42-8524-be031be651d9',
    issuer: 'https://creds-agent.sarb.didx.co.za/oid4vci/4eb9643e-e54a-4a42-8524-be031be651d9',
    logoUri: 'https://highschool-xyz.didx.co.za/images/logo-highschool-xyz.png',
    name: 'High School XYZ',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },   
  {
    entityId: 'https://creds-agent.sarb.didx.co.za/oid4vci/a92ab596-b858-4b88-a4ca-0e29edceea3e',
    issuer: 'https://creds-agent.sarb.didx.co.za/oid4vci/a92ab596-b858-4b88-a4ca-0e29edceea3e',
    logoUri: 'https://social-dev-org.didx.co.za/images/logo-social-dev-org.png',
    name: 'Social Dev Org',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },   
  {
    entityId: 'https://creds-agent.sarb.didx.co.za/oid4vci/a5a4eb75-21a0-4038-b3d2-9ba8b885bad1',
    issuer: 'https://creds-agent.sarb.didx.co.za/oid4vci/a5a4eb75-21a0-4038-b3d2-9ba8b885bad1',
    logoUri: 'https://revenue-service.didx.co.za/images/logo-revenue-service.png',
    name: 'Revenue Service',
    url: 'https://sarb.didx.co.za',
    demo: true,
  },   
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
