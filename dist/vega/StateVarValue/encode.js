/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'

import * as _vega_ScalarValue from './../ScalarValue/encode.js'
import * as _vega_VectorValue from './../VectorValue/encode.js'
import * as _vega_MatrixValue from './../MatrixValue/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.value) {
    const _o = obj.value
    if (_o.scalarVal) writer.bytes(1, _vega_ScalarValue.encode(_o.scalarVal))
    if (_o.vectorVal) writer.bytes(2, _vega_VectorValue.encode(_o.vectorVal))
    if (_o.matrixVal) writer.bytes(3, _vega_MatrixValue.encode(_o.matrixVal))
  }

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
