import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint32 } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.value) writer.bytes(1, obj.value, string)
  if (obj.algo) writer.bytes(2, obj.algo, string)
  if (obj.version) writer.varint(3, obj.version, uint32)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
