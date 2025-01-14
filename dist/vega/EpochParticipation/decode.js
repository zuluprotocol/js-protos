/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { uint64, double } from 'protobuf-codec/decode/types'
import * as _vega_Epoch from './../Epoch/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$epoch = {}
  let field$offline = 0n
  let field$online = 0n
  let field$totalRewards = 0
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$epoch = _vega_Epoch.decode(data)
        break

      case 2:
        field$offline = uint64(data)
        break

      case 3:
        field$online = uint64(data)
        break

      case 4:
        field$totalRewards = double(data)
        break
    }
  }
  return {
    epoch: field$epoch,
    offline: field$offline,
    online: field$online,
    totalRewards: field$totalRewards
  }
}
