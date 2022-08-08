import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.receiverAddress) writer.bytes(1, obj.receiverAddress, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
