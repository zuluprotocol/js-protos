import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.makerFee) writer.bytes(1, obj.makerFee, string)
  if (obj.infrastructureFee) writer.bytes(2, obj.infrastructureFee, string)
  if (obj.liquidityFee) writer.bytes(3, obj.liquidityFee, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
