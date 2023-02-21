/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { string, int64 } from 'protobuf-codec/encode/types'
import * as _vega_AccountDetails from './../AccountDetails/encode.js'
import * as _vega_TransferType from './../TransferType.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.fromAccount)
    writer.bytes(1, _vega_AccountDetails.encode(obj.fromAccount))
  if (obj.toAccount) writer.bytes(2, _vega_AccountDetails.encode(obj.toAccount))
  if (obj.amount) writer.bytes(3, obj.amount, string)
  if (obj.type) writer.varint(4, obj.type, _vega_TransferType)
  if (obj.timestamp) writer.varint(5, obj.timestamp, int64)
  if (obj.fromAccountBalance) writer.bytes(6, obj.fromAccountBalance, string)
  if (obj.toAccountBalance) writer.bytes(7, obj.toAccountBalance, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }