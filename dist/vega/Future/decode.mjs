import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint32 } from "protobuf-codec/decode/types.mjs"
import * as OracleSpec from "./../../oracles/v1/OracleSpec/decode.mjs"
import * as OracleSpecToFutureBinding from "./../OracleSpecToFutureBinding/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let settlementAsset = {}
  let quoteName = {}
  let oracleSpecForSettlementPrice = {}
  let oracleSpecForTradingTermination = {}
  let oracleSpecBinding = {}
  let settlementPriceDecimals = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 2:
        settlementAsset = data
        break
      case 4:
        quoteName = data
        break
      case 5:
        oracleSpecForSettlementPrice = data
        break
      case 6:
        oracleSpecForTradingTermination = data
        break
      case 7:
        oracleSpecBinding = data
        break
      case 8:
        settlementPriceDecimals = data
        break
    }
  }

  return {
    settlementAsset,
    quoteName,
    oracleSpecForSettlementPrice,
    oracleSpecForTradingTermination,
    oracleSpecBinding,
    settlementPriceDecimals,
  }
}
