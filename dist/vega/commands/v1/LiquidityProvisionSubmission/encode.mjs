import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as LiquidityOrder from "./../../../LiquidityOrder/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.marketId) writer.bytes(1, obj.marketId, string)
  if (obj.commitmentAmount) writer.bytes(2, obj.commitmentAmount, string)
  if (obj.fee) writer.bytes(3, obj.fee, string)
  if (obj.sells?.length)
    obj.sells.forEach((v) => writer.bytes(4, LiquidityOrder.encode(v)))
  if (obj.buys?.length)
    obj.buys.forEach((v) => writer.bytes(5, LiquidityOrder.encode(v)))
  if (obj.reference) writer.bytes(6, obj.reference, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
