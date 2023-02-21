/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'

import * as _vega_Instrument from './../Instrument/encode.js'
import * as _vega_MarginCalculator from './../MarginCalculator/encode.js'
import * as _vega_LogNormalRiskModel from './../LogNormalRiskModel/encode.js'
import * as _vega_SimpleRiskModel from './../SimpleRiskModel/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.instrument) writer.bytes(1, _vega_Instrument.encode(obj.instrument))
  if (obj.marginCalculator)
    writer.bytes(2, _vega_MarginCalculator.encode(obj.marginCalculator))

  if (obj.risk_model) {
    const _o = obj.risk_model
    if (_o.logNormalRiskModel)
      writer.bytes(100, _vega_LogNormalRiskModel.encode(_o.logNormalRiskModel))
    if (_o.simpleRiskModel)
      writer.bytes(101, _vega_SimpleRiskModel.encode(_o.simpleRiskModel))
  }

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
