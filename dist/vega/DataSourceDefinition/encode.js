/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'

import * as _vega_DataSourceDefinitionInternal from './../DataSourceDefinitionInternal/encode.js'
import * as _vega_DataSourceDefinitionExternal from './../DataSourceDefinitionExternal/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.source_type) {
    const _o = obj.source_type
    if (_o.internal)
      writer.bytes(1, _vega_DataSourceDefinitionInternal.encode(_o.internal))
    if (_o.external)
      writer.bytes(2, _vega_DataSourceDefinitionExternal.encode(_o.external))
  }

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
