import Writer from "protobuf-codec/encode/writer.mjs"
import { string, int64 } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.ethereumAddress) writer.bytes(1, obj.ethereumAddress, string)
  if (obj.vegaPublicKey) writer.bytes(2, obj.vegaPublicKey, string)
  if (obj.amount) writer.bytes(3, obj.amount, string)
  if (obj.blockTime) writer.varint(4, obj.blockTime, int64)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
