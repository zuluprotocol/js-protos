import Writer from "protobuf-codec/encode/writer.mjs"
import { bool, uint32, int64 } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.canProposeMarket) writer.varint(1, obj.canProposeMarket, bool)
  if (obj.canProposeAsset) writer.varint(2, obj.canProposeAsset, bool)
  if (obj.bootstrapFinished) writer.varint(3, obj.bootstrapFinished, bool)
  if (obj.proposeMarketEnabled) writer.varint(4, obj.proposeMarketEnabled, bool)
  if (obj.proposeAssetEnabled) writer.varint(5, obj.proposeAssetEnabled, bool)
  if (obj.bootstrapBlockCount) writer.varint(6, obj.bootstrapBlockCount, uint32)
  if (obj.genesisLoaded) writer.varint(7, obj.genesisLoaded, bool)
  if (obj.proposeMarketEnabledFrom)
    writer.varint(8, obj.proposeMarketEnabledFrom, int64)
  if (obj.proposeAssetEnabledFrom)
    writer.varint(9, obj.proposeAssetEnabledFrom, int64)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
