/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$maxFaucetAmountMint = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$maxFaucetAmountMint = string(data)
        break
    }
  }
  return { maxFaucetAmountMint: field$maxFaucetAmountMint }
}
