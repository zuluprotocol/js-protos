/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { string } from 'protobuf-codec/encode/types'
import * as _vega_AccountType from './../AccountType.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.owner) writer.bytes(2, obj.owner, string)
  if (obj.balance) writer.bytes(3, obj.balance, string)
  if (obj.asset) writer.bytes(4, obj.asset, string)
  if (obj.marketId) writer.bytes(5, obj.marketId, string)
  if (obj.type) writer.varint(6, obj.type, _vega_AccountType)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }