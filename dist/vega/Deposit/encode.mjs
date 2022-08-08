import Writer from "protobuf-codec/encode/writer.mjs"
import { string, int64 } from "protobuf-codec/encode/types.mjs"
import * as Status from "./Status.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.status) writer.varint(2, obj.status, Status)
  if (obj.partyId) writer.bytes(3, obj.partyId, string)
  if (obj.asset) writer.bytes(4, obj.asset, string)
  if (obj.amount) writer.bytes(5, obj.amount, string)
  if (obj.txHash) writer.bytes(6, obj.txHash, string)
  if (obj.creditedTimestamp) writer.varint(7, obj.creditedTimestamp, int64)
  if (obj.createdTimestamp) writer.varint(8, obj.createdTimestamp, int64)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
