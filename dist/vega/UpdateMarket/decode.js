/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'
import * as _vega_UpdateMarketConfiguration from './../UpdateMarketConfiguration/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$marketId = ''
  let field$changes = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$marketId = string(data)
        break

      case 2:
        field$changes = _vega_UpdateMarketConfiguration.decode(data)
        break
    }
  }
  return { marketId: field$marketId, changes: field$changes }
}
