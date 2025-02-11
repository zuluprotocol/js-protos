/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { string } from 'protobuf-codec/encode/types'
import * as _vega_Vote_Value from './../../../Vote/Value.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.proposalId) writer.bytes(1, obj.proposalId, string)
  if (obj.value) writer.varint(2, obj.value, _vega_Vote_Value)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
