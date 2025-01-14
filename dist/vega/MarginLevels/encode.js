/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { string, int64 } from 'protobuf-codec/encode/types'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.maintenanceMargin) writer.bytes(1, obj.maintenanceMargin, string)
  if (obj.searchLevel) writer.bytes(2, obj.searchLevel, string)
  if (obj.initialMargin) writer.bytes(3, obj.initialMargin, string)
  if (obj.collateralReleaseLevel)
    writer.bytes(4, obj.collateralReleaseLevel, string)
  if (obj.partyId) writer.bytes(5, obj.partyId, string)
  if (obj.marketId) writer.bytes(6, obj.marketId, string)
  if (obj.asset) writer.bytes(7, obj.asset, string)
  if (obj.timestamp) writer.varint(8, obj.timestamp, int64)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
