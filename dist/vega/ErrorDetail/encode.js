/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { int32, string } from 'protobuf-codec/encode/types'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.code) writer.varint(1, obj.code, int32)
  if (obj.message) writer.bytes(2, obj.message, string)
  if (obj.inner) writer.bytes(3, obj.inner, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
