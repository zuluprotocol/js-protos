/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'

import * as _vega_ScalarValue from './../ScalarValue/decode.js'
import * as _vega_VectorValue from './../VectorValue/decode.js'
import * as _vega_MatrixValue from './../MatrixValue/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$value = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$value = { scalarVal: _vega_ScalarValue.decode(data) }
        break

      case 2:
        field$value = { vectorVal: _vega_VectorValue.decode(data) }
        break

      case 3:
        field$value = { matrixVal: _vega_MatrixValue.decode(data) }
        break
    }
  }
  return { value: field$value }
}
