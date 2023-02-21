/// autogenerated by protoc-plugin-js
import type { Side } from './../../Side'
import type { TimeInForce } from './../../Order/TimeInForce'
import type { Type } from './../../Order/Type'
import type { PeggedOrder } from './../../PeggedOrder'

export * from './OrderSubmission/encode.js'
export * from './OrderSubmission/decode.js'

export type OrderSubmission = {
  marketId: string
  price: string
  size: bigint
  side: Side
  timeInForce: TimeInForce
  expiresAt: bigint
  type: Type
  reference: string
  peggedOrder: PeggedOrder
}
