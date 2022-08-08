import Writer from "protobuf-codec/encode/writer.mjs"
import { double } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.factorLong) writer.fixed64(1, obj.factorLong, double)
  if (obj.factorShort) writer.fixed64(2, obj.factorShort, double)
  if (obj.maxMoveUp) writer.fixed64(3, obj.maxMoveUp, double)
  if (obj.minMoveDown) writer.fixed64(4, obj.minMoveDown, double)
  if (obj.probabilityOfTrading)
    writer.fixed64(5, obj.probabilityOfTrading, double)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
