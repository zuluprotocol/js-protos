/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { int64, uint64 } from 'protobuf-codec/decode/types'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$duration = 0n
  let field$volume = 0n
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$duration = int64(data)
        break

      case 2:
        field$volume = uint64(data)
        break
    }
  }
  return { duration: field$duration, volume: field$volume }
}
