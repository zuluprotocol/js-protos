/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'

import * as _vega_DataSourceSpecConfigurationTime from './../DataSourceSpecConfigurationTime/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.source_type) {
    const _o = obj.source_type
    if (_o.time)
      writer.bytes(1, _vega_DataSourceSpecConfigurationTime.encode(_o.time))
  }

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
