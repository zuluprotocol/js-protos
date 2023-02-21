/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'
import * as _vega_ValidatorNodeStatus from './../ValidatorNodeStatus.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$rawValidatorScore = ''
  let field$performanceScore = ''
  let field$multisigScore = ''
  let field$validatorScore = ''
  let field$normalisedScore = ''
  let field$validatorStatus = 0
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$rawValidatorScore = string(data)
        break

      case 2:
        field$performanceScore = string(data)
        break

      case 3:
        field$multisigScore = string(data)
        break

      case 4:
        field$validatorScore = string(data)
        break

      case 5:
        field$normalisedScore = string(data)
        break

      case 6:
        field$validatorStatus = _vega_ValidatorNodeStatus.decode(data)
        break
    }
  }
  return {
    rawValidatorScore: field$rawValidatorScore,
    performanceScore: field$performanceScore,
    multisigScore: field$multisigScore,
    validatorScore: field$validatorScore,
    normalisedScore: field$normalisedScore,
    validatorStatus: field$validatorStatus
  }
}
