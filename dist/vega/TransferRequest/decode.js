/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'
import * as _vega_Account from './../Account/decode.js'
import * as _vega_TransferType from './../TransferType.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  const field$fromAccount = []
  const field$toAccount = []
  let field$amount = ''
  let field$minAmount = ''
  let field$asset = ''
  let field$type = 0
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$fromAccount.push(_vega_Account.decode(data))
        break

      case 2:
        field$toAccount.push(_vega_Account.decode(data))
        break

      case 3:
        field$amount = string(data)
        break

      case 4:
        field$minAmount = string(data)
        break

      case 5:
        field$asset = string(data)
        break

      case 7:
        field$type = _vega_TransferType.decode(data)
        break
    }
  }
  return {
    fromAccount: field$fromAccount,
    toAccount: field$toAccount,
    amount: field$amount,
    minAmount: field$minAmount,
    asset: field$asset,
    type: field$type
  }
}
