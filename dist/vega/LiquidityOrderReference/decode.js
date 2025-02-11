/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'
import * as _vega_LiquidityOrder from './../LiquidityOrder/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$orderId = ''
  let field$liquidityOrder = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$orderId = string(data)
        break

      case 2:
        field$liquidityOrder = _vega_LiquidityOrder.decode(data)
        break
    }
  }
  return { orderId: field$orderId, liquidityOrder: field$liquidityOrder }
}
