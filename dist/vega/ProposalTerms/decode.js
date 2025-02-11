/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { int64 } from 'protobuf-codec/decode/types'
import * as _vega_UpdateMarket from './../UpdateMarket/decode.js'
import * as _vega_NewMarket from './../NewMarket/decode.js'
import * as _vega_UpdateNetworkParameter from './../UpdateNetworkParameter/decode.js'
import * as _vega_NewAsset from './../NewAsset/decode.js'
import * as _vega_NewFreeform from './../NewFreeform/decode.js'
import * as _vega_UpdateAsset from './../UpdateAsset/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$closingTimestamp = 0n
  let field$enactmentTimestamp = 0n
  let field$validationTimestamp = 0n
  let field$change = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$closingTimestamp = int64(data)
        break

      case 2:
        field$enactmentTimestamp = int64(data)
        break

      case 3:
        field$validationTimestamp = int64(data)
        break

      case 101:
        field$change = { updateMarket: _vega_UpdateMarket.decode(data) }
        break

      case 102:
        field$change = { newMarket: _vega_NewMarket.decode(data) }
        break

      case 103:
        field$change = {
          updateNetworkParameter: _vega_UpdateNetworkParameter.decode(data)
        }
        break

      case 104:
        field$change = { newAsset: _vega_NewAsset.decode(data) }
        break

      case 105:
        field$change = { newFreeform: _vega_NewFreeform.decode(data) }
        break

      case 106:
        field$change = { updateAsset: _vega_UpdateAsset.decode(data) }
        break
    }
  }
  return {
    closingTimestamp: field$closingTimestamp,
    enactmentTimestamp: field$enactmentTimestamp,
    validationTimestamp: field$validationTimestamp,
    change: field$change
  }
}
