/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { double } from 'protobuf-codec/decode/types'
import * as _vega_LogNormalModelParams from './../LogNormalModelParams/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$riskAversionParameter = 0
  let field$tau = 0
  let field$params = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$riskAversionParameter = double(data)
        break

      case 2:
        field$tau = double(data)
        break

      case 3:
        field$params = _vega_LogNormalModelParams.decode(data)
        break
    }
  }
  return {
    riskAversionParameter: field$riskAversionParameter,
    tau: field$tau,
    params: field$params
  }
}
