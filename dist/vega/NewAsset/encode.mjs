import Writer from "protobuf-codec/encode/writer.mjs"
import {} from "protobuf-codec/encode/types.mjs"
import * as AssetDetails from "./../AssetDetails/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.changes) writer.bytes(1, AssetDetails.encode(obj.changes))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
