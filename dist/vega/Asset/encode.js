/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { string } from 'protobuf-codec/encode/types'
import * as _vega_AssetDetails from './../AssetDetails/encode.js'
import * as _vega_Asset_Status from './Status.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.details) writer.bytes(2, _vega_AssetDetails.encode(obj.details))
  if (obj.status) writer.varint(3, obj.status, _vega_Asset_Status)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
