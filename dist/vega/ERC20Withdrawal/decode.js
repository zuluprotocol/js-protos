/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$vegaAssetId = ''
  let field$targetEthereumAddress = ''
  let field$referenceNonce = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$vegaAssetId = string(data)
        break

      case 2:
        field$targetEthereumAddress = string(data)
        break

      case 3:
        field$referenceNonce = string(data)
        break
    }
  }
  return {
    vegaAssetId: field$vegaAssetId,
    targetEthereumAddress: field$targetEthereumAddress,
    referenceNonce: field$referenceNonce
  }
}
