/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { uint64, string } from 'protobuf-codec/encode/types'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.upgradeBlockHeight) writer.varint(1, obj.upgradeBlockHeight, uint64)
  if (obj.vegaReleaseTag) writer.bytes(2, obj.vegaReleaseTag, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
