import Writer from "protobuf-codec/encode/writer.mjs"
import { string, int64 } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.newSigner) writer.bytes(1, obj.newSigner, string)
  if (obj.nonce) writer.bytes(2, obj.nonce, string)
  if (obj.blockTime) writer.varint(3, obj.blockTime, int64)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
