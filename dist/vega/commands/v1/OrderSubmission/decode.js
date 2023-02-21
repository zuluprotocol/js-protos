/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string, uint64, int64 } from 'protobuf-codec/decode/types'
import * as _vega_Side from './../../../Side.js'
import * as _vega_Order_TimeInForce from './../../../Order/TimeInForce.js'
import * as _vega_Order_Type from './../../../Order/Type.js'
import * as _vega_PeggedOrder from './../../../PeggedOrder/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$marketId = ''
  let field$price = ''
  let field$size = 0n
  let field$side = 0
  let field$timeInForce = 0
  let field$expiresAt = 0n
  let field$type = 0
  let field$reference = ''
  let field$peggedOrder = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$marketId = string(data)
        break

      case 2:
        field$price = string(data)
        break

      case 3:
        field$size = uint64(data)
        break

      case 4:
        field$side = _vega_Side.decode(data)
        break

      case 5:
        field$timeInForce = _vega_Order_TimeInForce.decode(data)
        break

      case 6:
        field$expiresAt = int64(data)
        break

      case 7:
        field$type = _vega_Order_Type.decode(data)
        break

      case 8:
        field$reference = string(data)
        break

      case 9:
        field$peggedOrder = _vega_PeggedOrder.decode(data)
        break
    }
  }
  return {
    marketId: field$marketId,
    price: field$price,
    size: field$size,
    side: field$side,
    timeInForce: field$timeInForce,
    expiresAt: field$expiresAt,
    type: field$type,
    reference: field$reference,
    peggedOrder: field$peggedOrder
  }
}
