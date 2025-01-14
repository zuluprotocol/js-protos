/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string, uint32 } from 'protobuf-codec/decode/types'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$value = ''
  let field$algo = ''
  let field$version = 0
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$value = string(data)
        break

      case 2:
        field$algo = string(data)
        break

      case 3:
        field$version = uint32(data)
        break
    }
  }
  return { value: field$value, algo: field$algo, version: field$version }
}
