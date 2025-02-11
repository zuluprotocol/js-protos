/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'
import * as _vega_KeyValueBundle from './../KeyValueBundle/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$stateVarId = ''
  let field$eventId = ''
  const field$kvb = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$stateVarId = string(data)
        break

      case 2:
        field$eventId = string(data)
        break

      case 3:
        field$kvb.push(_vega_KeyValueBundle.decode(data))
        break
    }
  }
  return {
    stateVarId: field$stateVarId,
    eventId: field$eventId,
    kvb: field$kvb
  }
}
