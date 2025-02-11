/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { uint64 } from 'protobuf-codec/decode/types'
import * as _vega_EpochTimestamps from './../EpochTimestamps/decode.js'
import * as _vega_Node from './../Node/decode.js'
import * as _vega_Delegation from './../Delegation/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$seq = 0n
  let field$timestamps = {}
  const field$validators = []
  const field$delegations = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$seq = uint64(data)
        break

      case 2:
        field$timestamps = _vega_EpochTimestamps.decode(data)
        break

      case 3:
        field$validators.push(_vega_Node.decode(data))
        break

      case 4:
        field$delegations.push(_vega_Delegation.decode(data))
        break
    }
  }
  return {
    seq: field$seq,
    timestamps: field$timestamps,
    validators: field$validators,
    delegations: field$delegations
  }
}
