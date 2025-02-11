/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { uint64, string } from 'protobuf-codec/decode/types'
import * as _vega_DispatchStrategy from './../../../DispatchStrategy/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$startEpoch = 0n
  let field$endEpoch = null
  let field$factor = ''
  let field$dispatchStrategy = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$startEpoch = uint64(data)
        break

      case 2:
        field$endEpoch = uint64(data)
        break

      case 3:
        field$factor = string(data)
        break

      case 4:
        field$dispatchStrategy = _vega_DispatchStrategy.decode(data)
        break
    }
  }
  return {
    startEpoch: field$startEpoch,
    endEpoch: field$endEpoch,
    factor: field$factor,
    dispatchStrategy: field$dispatchStrategy
  }
}
