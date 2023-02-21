/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'

import * as _vega_DataSourceSpec from './../DataSourceSpec/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$spec = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$spec = _vega_DataSourceSpec.decode(data)
        break
    }
  }
  return { spec: field$spec }
}
