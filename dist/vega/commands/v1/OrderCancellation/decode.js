/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$orderId = ''
  let field$marketId = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$orderId = string(data)
        break

      case 2:
        field$marketId = string(data)
        break
    }
  }
  return { orderId: field$orderId, marketId: field$marketId }
}
