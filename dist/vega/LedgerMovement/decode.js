/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'

import * as _vega_LedgerEntry from './../LedgerEntry/decode.js'
import * as _vega_PostTransferBalance from './../PostTransferBalance/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  const field$entries = []
  const field$balances = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$entries.push(_vega_LedgerEntry.decode(data))
        break

      case 2:
        field$balances.push(_vega_PostTransferBalance.decode(data))
        break
    }
  }
  return { entries: field$entries, balances: field$balances }
}
