/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'
import * as _vega_DataSourceDefinition from './../DataSourceDefinition/decode.js'
import * as _vega_DataSourceSpecToFutureBinding from './../DataSourceSpecToFutureBinding/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$quoteName = ''
  let field$dataSourceSpecForSettlementData = {}
  let field$dataSourceSpecForTradingTermination = {}
  let field$dataSourceSpecBinding = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$quoteName = string(data)
        break

      case 2:
        field$dataSourceSpecForSettlementData =
          _vega_DataSourceDefinition.decode(data)
        break

      case 3:
        field$dataSourceSpecForTradingTermination =
          _vega_DataSourceDefinition.decode(data)
        break

      case 4:
        field$dataSourceSpecBinding =
          _vega_DataSourceSpecToFutureBinding.decode(data)
        break
    }
  }
  return {
    quoteName: field$quoteName,
    dataSourceSpecForSettlementData: field$dataSourceSpecForSettlementData,
    dataSourceSpecForTradingTermination:
      field$dataSourceSpecForTradingTermination,
    dataSourceSpecBinding: field$dataSourceSpecBinding
  }
}
