/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'
import * as _vega_ProposalTerms from './../../../ProposalTerms/decode.js'
import * as _vega_ProposalRationale from './../../../ProposalRationale/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$reference = ''
  let field$terms = {}
  let field$rationale = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$reference = string(data)
        break

      case 2:
        field$terms = _vega_ProposalTerms.decode(data)
        break

      case 3:
        field$rationale = _vega_ProposalRationale.decode(data)
        break
    }
  }
  return {
    reference: field$reference,
    terms: field$terms,
    rationale: field$rationale
  }
}
