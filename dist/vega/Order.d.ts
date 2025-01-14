/// autogenerated by protoc-plugin-js
import type { Side } from './Side'
import type { TimeInForce } from './Order/TimeInForce'
import type { Type } from './Order/Type'
import type { Status } from './Order/Status'
import type { OrderError } from './OrderError'
import type { PeggedOrder } from './PeggedOrder'

export * from './Order/encode.js'
export * from './Order/decode.js'
export * as TimeInForce from './Order/TimeInForce.js'
export * as Type from './Order/Type.js'
export * as Status from './Order/Status.js'

export type Order = {
  id: string
  marketId: string
  partyId: string
  side: Side
  price: string
  size: bigint
  remaining: bigint
  timeInForce: TimeInForce
  type: Type
  createdAt: bigint
  status: Status
  expiresAt: bigint
  reference: string
  reason: OrderError | null
  updatedAt: bigint
  version: bigint
  batchId: bigint
  peggedOrder: PeggedOrder
  liquidityProvisionId: string
}
