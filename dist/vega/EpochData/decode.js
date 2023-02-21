/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { int32 } from 'protobuf-codec/decode/types'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$total = 0
  let field$offline = 0
  let field$online = 0
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$total = int32(data)
        break

      case 2:
        field$offline = int32(data)
        break

      case 3:
        field$online = int32(data)
        break
    }
  }
  return { total: field$total, offline: field$offline, online: field$online }
}
