/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'

import * as _vega_DataSourceDefinitionInternal from './../DataSourceDefinitionInternal/decode.js'
import * as _vega_DataSourceDefinitionExternal from './../DataSourceDefinitionExternal/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$source_type = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$source_type = {
          internal: _vega_DataSourceDefinitionInternal.decode(data)
        }
        break

      case 2:
        field$source_type = {
          external: _vega_DataSourceDefinitionExternal.decode(data)
        }
        break
    }
  }
  return { source_type: field$source_type }
}
