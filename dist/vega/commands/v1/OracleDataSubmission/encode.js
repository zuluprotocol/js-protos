/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { bytes } from 'protobuf-codec/encode/types'
import * as _vega_commands_v1_OracleDataSubmission_OracleSource from './OracleSource.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.source)
    writer.varint(
      1,
      obj.source,
      _vega_commands_v1_OracleDataSubmission_OracleSource
    )
  if (obj.payload) writer.bytes(2, obj.payload, bytes)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
