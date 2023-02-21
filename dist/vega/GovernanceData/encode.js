/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'

import * as _vega_Proposal from './../Proposal/encode.js'
import * as _vega_Vote from './../Vote/encode.js'
import * as _vega_GovernanceData_YesPartyEntry from './YesPartyEntry/encode.js'
import * as _vega_GovernanceData_NoPartyEntry from './NoPartyEntry/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.proposal) writer.bytes(1, _vega_Proposal.encode(obj.proposal))
  if (obj.yes?.length)
    obj.yes.forEach((v) => writer.bytes(2, _vega_Vote.encode(v)))
  if (obj.no?.length)
    obj.no.forEach((v) => writer.bytes(3, _vega_Vote.encode(v)))
  if (obj.yesParty?.length)
    obj.yesParty.forEach((v) =>
      writer.bytes(4, _vega_GovernanceData_YesPartyEntry.encode(v))
    )
  if (obj.noParty?.length)
    obj.noParty.forEach((v) =>
      writer.bytes(5, _vega_GovernanceData_NoPartyEntry.encode(v))
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
