/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { string, uint64, int64 } from 'protobuf-codec/encode/types'
import * as _vega_TradableInstrument from './../TradableInstrument/encode.js'
import * as _vega_Fees from './../Fees/encode.js'
import * as _vega_AuctionDuration from './../AuctionDuration/encode.js'
import * as _vega_PriceMonitoringSettings from './../PriceMonitoringSettings/encode.js'
import * as _vega_LiquidityMonitoringParameters from './../LiquidityMonitoringParameters/encode.js'
import * as _vega_Market_TradingMode from './TradingMode.js'
import * as _vega_Market_State from './State.js'
import * as _vega_MarketTimestamps from './../MarketTimestamps/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.tradableInstrument)
    writer.bytes(2, _vega_TradableInstrument.encode(obj.tradableInstrument))
  if (obj.decimalPlaces) writer.varint(3, obj.decimalPlaces, uint64)
  if (obj.fees) writer.bytes(4, _vega_Fees.encode(obj.fees))
  if (obj.openingAuction)
    writer.bytes(5, _vega_AuctionDuration.encode(obj.openingAuction))
  if (obj.priceMonitoringSettings)
    writer.bytes(
      6,
      _vega_PriceMonitoringSettings.encode(obj.priceMonitoringSettings)
    )
  if (obj.liquidityMonitoringParameters)
    writer.bytes(
      7,
      _vega_LiquidityMonitoringParameters.encode(
        obj.liquidityMonitoringParameters
      )
    )
  if (obj.tradingMode)
    writer.varint(8, obj.tradingMode, _vega_Market_TradingMode)
  if (obj.state) writer.varint(9, obj.state, _vega_Market_State)
  if (obj.marketTimestamps)
    writer.bytes(10, _vega_MarketTimestamps.encode(obj.marketTimestamps))
  if (obj.positionDecimalPlaces)
    writer.varint(11, obj.positionDecimalPlaces, int64)
  if (obj.lpPriceRange) writer.bytes(12, obj.lpPriceRange, string)
  if (obj.linearSlippageFactor)
    writer.bytes(13, obj.linearSlippageFactor, string)
  if (obj.quadraticSlippageFactor)
    writer.bytes(14, obj.quadraticSlippageFactor, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
