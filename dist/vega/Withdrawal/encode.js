/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { string, int64 } from 'protobuf-codec/encode/types'
import * as _vega_Withdrawal_Status from './Status.js'
import * as _vega_WithdrawExt from './../WithdrawExt/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.partyId) writer.bytes(2, obj.partyId, string)
  if (obj.amount) writer.bytes(3, obj.amount, string)
  if (obj.asset) writer.bytes(4, obj.asset, string)
  if (obj.status) writer.varint(5, obj.status, _vega_Withdrawal_Status)
  if (obj.ref) writer.bytes(6, obj.ref, string)
  if (obj.txHash) writer.bytes(8, obj.txHash, string)
  if (obj.createdTimestamp) writer.varint(9, obj.createdTimestamp, int64)
  if (obj.withdrawnTimestamp) writer.varint(10, obj.withdrawnTimestamp, int64)
  if (obj.ext) writer.bytes(11, _vega_WithdrawExt.encode(obj.ext))

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }