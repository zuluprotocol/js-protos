/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string, int64 } from 'protobuf-codec/decode/types'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$ethereumAddress = ''
  let field$vegaPublicKey = ''
  let field$amount = ''
  let field$blockTime = 0n
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$ethereumAddress = string(data)
        break

      case 2:
        field$vegaPublicKey = string(data)
        break

      case 3:
        field$amount = string(data)
        break

      case 4:
        field$blockTime = int64(data)
        break
    }
  }
  return {
    ethereumAddress: field$ethereumAddress,
    vegaPublicKey: field$vegaPublicKey,
    amount: field$amount,
    blockTime: field$blockTime
  }
}
