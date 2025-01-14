/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'

import * as _vega_data_v1_Signer from './../data/v1/Signer/encode.js'
import * as _vega_data_v1_Filter from './../data/v1/Filter/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.signers?.length)
    obj.signers.forEach((v) => writer.bytes(1, _vega_data_v1_Signer.encode(v)))
  if (obj.filters?.length)
    obj.filters.forEach((v) => writer.bytes(2, _vega_data_v1_Filter.encode(v)))

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
