import Writer from "protobuf-codec/encode/writer.mjs"
import { double } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.searchLevel) writer.fixed64(1, obj.searchLevel, double)
  if (obj.initialMargin) writer.fixed64(2, obj.initialMargin, double)
  if (obj.collateralRelease) writer.fixed64(3, obj.collateralRelease, double)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
