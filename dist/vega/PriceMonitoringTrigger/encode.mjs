import Writer from "protobuf-codec/encode/writer.mjs"
import { int64, string } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.horizon) writer.varint(1, obj.horizon, int64)
  if (obj.probability) writer.bytes(2, obj.probability, string)
  if (obj.auctionExtension) writer.varint(3, obj.auctionExtension, int64)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
