/// autogenerated by protoc-plugin-js
import type { Status } from './Withdrawal/Status'
import type { WithdrawExt } from './WithdrawExt'

export * from './Withdrawal/encode.js'
export * from './Withdrawal/decode.js'
export * as Status from './Withdrawal/Status.js'

export type Withdrawal = {
  id: string
  partyId: string
  amount: string
  asset: string
  status: Status
  ref: string
  txHash: string
  createdTimestamp: bigint
  withdrawnTimestamp: bigint
  ext: WithdrawExt
}