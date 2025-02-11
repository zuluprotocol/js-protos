/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { string, uint64, int64 } from 'protobuf-codec/encode/types'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.marketId) writer.bytes(1, obj.marketId, string)
  if (obj.indicativePrice) writer.bytes(2, obj.indicativePrice, string)
  if (obj.indicativeVolume) writer.varint(3, obj.indicativeVolume, uint64)
  if (obj.auctionStart) writer.varint(4, obj.auctionStart, int64)
  if (obj.auctionEnd) writer.varint(5, obj.auctionEnd, int64)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
