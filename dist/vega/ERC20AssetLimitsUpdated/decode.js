/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$vegaAssetId = ''
  let field$sourceEthereumAddress = ''
  let field$lifetimeLimits = ''
  let field$withdrawThreshold = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$vegaAssetId = string(data)
        break

      case 2:
        field$sourceEthereumAddress = string(data)
        break

      case 3:
        field$lifetimeLimits = string(data)
        break

      case 4:
        field$withdrawThreshold = string(data)
        break
    }
  }
  return {
    vegaAssetId: field$vegaAssetId,
    sourceEthereumAddress: field$sourceEthereumAddress,
    lifetimeLimits: field$lifetimeLimits,
    withdrawThreshold: field$withdrawThreshold
  }
}