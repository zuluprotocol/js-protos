/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { int64 } from 'protobuf-codec/encode/types'
import * as _vega_UpdateMarket from './../UpdateMarket/encode.js'
import * as _vega_NewMarket from './../NewMarket/encode.js'
import * as _vega_UpdateNetworkParameter from './../UpdateNetworkParameter/encode.js'
import * as _vega_NewAsset from './../NewAsset/encode.js'
import * as _vega_NewFreeform from './../NewFreeform/encode.js'
import * as _vega_UpdateAsset from './../UpdateAsset/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.closingTimestamp) writer.varint(1, obj.closingTimestamp, int64)
  if (obj.enactmentTimestamp) writer.varint(2, obj.enactmentTimestamp, int64)
  if (obj.validationTimestamp) writer.varint(3, obj.validationTimestamp, int64)

  if (obj.change) {
    const _o = obj.change
    if (_o.updateMarket)
      writer.bytes(101, _vega_UpdateMarket.encode(_o.updateMarket))
    if (_o.newMarket) writer.bytes(102, _vega_NewMarket.encode(_o.newMarket))
    if (_o.updateNetworkParameter)
      writer.bytes(
        103,
        _vega_UpdateNetworkParameter.encode(_o.updateNetworkParameter)
      )
    if (_o.newAsset) writer.bytes(104, _vega_NewAsset.encode(_o.newAsset))
    if (_o.newFreeform)
      writer.bytes(105, _vega_NewFreeform.encode(_o.newFreeform))
    if (_o.updateAsset)
      writer.bytes(106, _vega_UpdateAsset.encode(_o.updateAsset))
  }

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
