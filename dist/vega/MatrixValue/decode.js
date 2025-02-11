/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'

import * as _vega_VectorValue from './../VectorValue/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  const field$value = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$value.push(_vega_VectorValue.decode(data))
        break
    }
  }
  return { value: field$value }
}
