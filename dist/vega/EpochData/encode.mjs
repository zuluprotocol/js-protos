import Writer from "protobuf-codec/encode/writer.mjs"
import { int32 } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.total) writer.varint(1, obj.total, int32)
  if (obj.offline) writer.varint(2, obj.offline, int32)
  if (obj.online) writer.varint(3, obj.online, int32)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
