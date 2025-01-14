/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'
import * as _vega_Vote from './../../Vote/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$key = ''
  let field$value = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$key = string(data)
        break

      case 2:
        field$value = _vega_Vote.decode(data)
        break
    }
  }
  return { key: field$key, value: field$value }
}
