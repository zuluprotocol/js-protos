import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.reference) writer.bytes(2, obj.reference, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
