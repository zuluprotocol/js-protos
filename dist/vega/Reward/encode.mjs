import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint64, int64 } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.assetId) writer.bytes(1, obj.assetId, string)
  if (obj.partyId) writer.bytes(2, obj.partyId, string)
  if (obj.epoch) writer.varint(3, obj.epoch, uint64)
  if (obj.amount) writer.bytes(4, obj.amount, string)
  if (obj.percentageOfTotal) writer.bytes(5, obj.percentageOfTotal, string)
  if (obj.receivedAt) writer.varint(6, obj.receivedAt, int64)
  if (obj.marketId) writer.bytes(7, obj.marketId, string)
  if (obj.rewardType) writer.bytes(8, obj.rewardType, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
