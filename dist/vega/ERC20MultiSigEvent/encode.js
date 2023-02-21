/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { uint64 } from 'protobuf-codec/encode/types'
import * as _vega_ERC20SignerAdded from './../ERC20SignerAdded/encode.js'
import * as _vega_ERC20SignerRemoved from './../ERC20SignerRemoved/encode.js'
import * as _vega_ERC20ThresholdSet from './../ERC20ThresholdSet/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.index) writer.varint(1, obj.index, uint64)
  if (obj.block) writer.varint(2, obj.block, uint64)

  if (obj.action) {
    const _o = obj.action
    if (_o.signerAdded)
      writer.bytes(1001, _vega_ERC20SignerAdded.encode(_o.signerAdded))
    if (_o.signerRemoved)
      writer.bytes(1002, _vega_ERC20SignerRemoved.encode(_o.signerRemoved))
    if (_o.thresholdSet)
      writer.bytes(1003, _vega_ERC20ThresholdSet.encode(_o.thresholdSet))
  }

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }