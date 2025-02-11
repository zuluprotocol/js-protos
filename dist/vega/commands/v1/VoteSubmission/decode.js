/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'
import * as _vega_Vote_Value from './../../../Vote/Value.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$proposalId = ''
  let field$value = 0
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$proposalId = string(data)
        break

      case 2:
        field$value = _vega_Vote_Value.decode(data)
        break
    }
  }
  return { proposalId: field$proposalId, value: field$value }
}
