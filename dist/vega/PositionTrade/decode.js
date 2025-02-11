/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { int64, string } from 'protobuf-codec/decode/types'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$volume = 0n
  let field$price = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$volume = int64(data)
        break

      case 2:
        field$price = string(data)
        break
    }
  }
  return { volume: field$volume, price: field$price }
}
