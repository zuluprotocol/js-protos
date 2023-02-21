/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string, uint64, int64 } from 'protobuf-codec/decode/types'
import * as _vega_Market_TradingMode from './../Market/TradingMode.js'
import * as _vega_AuctionTrigger from './../AuctionTrigger.js'
import * as _vega_PriceMonitoringBounds from './../PriceMonitoringBounds/decode.js'
import * as _vega_LiquidityProviderFeeShare from './../LiquidityProviderFeeShare/decode.js'
import * as _vega_Market_State from './../Market/State.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$markPrice = ''
  let field$bestBidPrice = ''
  let field$bestBidVolume = 0n
  let field$bestOfferPrice = ''
  let field$bestOfferVolume = 0n
  let field$bestStaticBidPrice = ''
  let field$bestStaticBidVolume = 0n
  let field$bestStaticOfferPrice = ''
  let field$bestStaticOfferVolume = 0n
  let field$midPrice = ''
  let field$staticMidPrice = ''
  let field$market = ''
  let field$timestamp = 0n
  let field$openInterest = 0n
  let field$auctionEnd = 0n
  let field$auctionStart = 0n
  let field$indicativePrice = ''
  let field$indicativeVolume = 0n
  let field$marketTradingMode = 0
  let field$trigger = 0
  let field$extensionTrigger = 0
  let field$targetStake = ''
  let field$suppliedStake = ''
  const field$priceMonitoringBounds = []
  let field$marketValueProxy = ''
  const field$liquidityProviderFeeShare = []
  let field$marketState = 0
  let field$nextMarkToMarket = 0n
  let field$lastTradedPrice = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$markPrice = string(data)
        break

      case 2:
        field$bestBidPrice = string(data)
        break

      case 3:
        field$bestBidVolume = uint64(data)
        break

      case 4:
        field$bestOfferPrice = string(data)
        break

      case 5:
        field$bestOfferVolume = uint64(data)
        break

      case 6:
        field$bestStaticBidPrice = string(data)
        break

      case 7:
        field$bestStaticBidVolume = uint64(data)
        break

      case 8:
        field$bestStaticOfferPrice = string(data)
        break

      case 9:
        field$bestStaticOfferVolume = uint64(data)
        break

      case 10:
        field$midPrice = string(data)
        break

      case 11:
        field$staticMidPrice = string(data)
        break

      case 12:
        field$market = string(data)
        break

      case 13:
        field$timestamp = int64(data)
        break

      case 14:
        field$openInterest = uint64(data)
        break

      case 15:
        field$auctionEnd = int64(data)
        break

      case 16:
        field$auctionStart = int64(data)
        break

      case 17:
        field$indicativePrice = string(data)
        break

      case 18:
        field$indicativeVolume = uint64(data)
        break

      case 19:
        field$marketTradingMode = _vega_Market_TradingMode.decode(data)
        break

      case 20:
        field$trigger = _vega_AuctionTrigger.decode(data)
        break

      case 21:
        field$extensionTrigger = _vega_AuctionTrigger.decode(data)
        break

      case 22:
        field$targetStake = string(data)
        break

      case 23:
        field$suppliedStake = string(data)
        break

      case 24:
        field$priceMonitoringBounds.push(
          _vega_PriceMonitoringBounds.decode(data)
        )
        break

      case 25:
        field$marketValueProxy = string(data)
        break

      case 26:
        field$liquidityProviderFeeShare.push(
          _vega_LiquidityProviderFeeShare.decode(data)
        )
        break

      case 27:
        field$marketState = _vega_Market_State.decode(data)
        break

      case 28:
        field$nextMarkToMarket = int64(data)
        break

      case 29:
        field$lastTradedPrice = string(data)
        break
    }
  }
  return {
    markPrice: field$markPrice,
    bestBidPrice: field$bestBidPrice,
    bestBidVolume: field$bestBidVolume,
    bestOfferPrice: field$bestOfferPrice,
    bestOfferVolume: field$bestOfferVolume,
    bestStaticBidPrice: field$bestStaticBidPrice,
    bestStaticBidVolume: field$bestStaticBidVolume,
    bestStaticOfferPrice: field$bestStaticOfferPrice,
    bestStaticOfferVolume: field$bestStaticOfferVolume,
    midPrice: field$midPrice,
    staticMidPrice: field$staticMidPrice,
    market: field$market,
    timestamp: field$timestamp,
    openInterest: field$openInterest,
    auctionEnd: field$auctionEnd,
    auctionStart: field$auctionStart,
    indicativePrice: field$indicativePrice,
    indicativeVolume: field$indicativeVolume,
    marketTradingMode: field$marketTradingMode,
    trigger: field$trigger,
    extensionTrigger: field$extensionTrigger,
    targetStake: field$targetStake,
    suppliedStake: field$suppliedStake,
    priceMonitoringBounds: field$priceMonitoringBounds,
    marketValueProxy: field$marketValueProxy,
    liquidityProviderFeeShare: field$liquidityProviderFeeShare,
    marketState: field$marketState,
    nextMarkToMarket: field$nextMarkToMarket,
    lastTradedPrice: field$lastTradedPrice
  }
}
