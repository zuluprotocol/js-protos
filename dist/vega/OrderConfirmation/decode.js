/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'

import * as _vega_Order from './../Order/decode.js'
import * as _vega_Trade from './../Trade/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$order = {}
  const field$trades = []
  const field$passiveOrdersAffected = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$order = _vega_Order.decode(data)
        break

      case 2:
        field$trades.push(_vega_Trade.decode(data))
        break

      case 3:
        field$passiveOrdersAffected.push(_vega_Order.decode(data))
        break
    }
  }
  return {
    order: field$order,
    trades: field$trades,
    passiveOrdersAffected: field$passiveOrdersAffected
  }
}
