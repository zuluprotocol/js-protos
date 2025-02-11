/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { string } from 'protobuf-codec/encode/types'
import * as _vega_Vote from './../../Vote/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.key) writer.bytes(1, obj.key, string)
  if (obj.value) writer.bytes(2, _vega_Vote.encode(obj.value))

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
