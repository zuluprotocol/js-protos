/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { string } from 'protobuf-codec/encode/types'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.marketId) writer.bytes(1, obj.marketId, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
