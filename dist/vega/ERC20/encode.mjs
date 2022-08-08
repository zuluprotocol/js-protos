import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.contractAddress) writer.bytes(1, obj.contractAddress, string)
  if (obj.lifetimeLimit) writer.bytes(2, obj.lifetimeLimit, string)
  if (obj.withdrawThreshold) writer.bytes(3, obj.withdrawThreshold, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
