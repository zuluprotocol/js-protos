/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'
import * as _vega_UpdateInstrumentConfiguration from './../UpdateInstrumentConfiguration/decode.js'
import * as _vega_PriceMonitoringParameters from './../PriceMonitoringParameters/decode.js'
import * as _vega_LiquidityMonitoringParameters from './../LiquidityMonitoringParameters/decode.js'
import * as _vega_SimpleModelParams from './../SimpleModelParams/decode.js'
import * as _vega_LogNormalRiskModel from './../LogNormalRiskModel/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$instrument = {}
  const field$metadata = []
  let field$priceMonitoringParameters = {}
  let field$liquidityMonitoringParameters = {}
  let field$lpPriceRange = ''
  let field$linearSlippageFactor = ''
  let field$quadraticSlippageFactor = ''
  let field$risk_parameters = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$instrument = _vega_UpdateInstrumentConfiguration.decode(data)
        break

      case 2:
        field$metadata.push(string(data))
        break

      case 3:
        field$priceMonitoringParameters =
          _vega_PriceMonitoringParameters.decode(data)
        break

      case 4:
        field$liquidityMonitoringParameters =
          _vega_LiquidityMonitoringParameters.decode(data)
        break

      case 100:
        field$risk_parameters = { simple: _vega_SimpleModelParams.decode(data) }
        break

      case 101:
        field$risk_parameters = {
          logNormal: _vega_LogNormalRiskModel.decode(data)
        }
        break

      case 5:
        field$lpPriceRange = string(data)
        break

      case 6:
        field$linearSlippageFactor = string(data)
        break

      case 7:
        field$quadraticSlippageFactor = string(data)
        break
    }
  }
  return {
    instrument: field$instrument,
    metadata: field$metadata,
    priceMonitoringParameters: field$priceMonitoringParameters,
    liquidityMonitoringParameters: field$liquidityMonitoringParameters,
    lpPriceRange: field$lpPriceRange,
    linearSlippageFactor: field$linearSlippageFactor,
    quadraticSlippageFactor: field$quadraticSlippageFactor,
    risk_parameters: field$risk_parameters
  }
}
