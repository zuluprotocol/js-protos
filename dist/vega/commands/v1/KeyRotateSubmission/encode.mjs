import Writer from "protobuf-codec/encode/writer.mjs"
import { uint32, uint64, string } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.newPubKeyIndex) writer.varint(1, obj.newPubKeyIndex, uint32)
  if (obj.targetBlock) writer.varint(2, obj.targetBlock, uint64)
  if (obj.newPubKey) writer.bytes(3, obj.newPubKey, string)
  if (obj.currentPubKeyHash) writer.bytes(4, obj.currentPubKeyHash, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
