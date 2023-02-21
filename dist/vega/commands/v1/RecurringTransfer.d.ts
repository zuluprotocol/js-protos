/// autogenerated by protoc-plugin-js
import type { DispatchStrategy } from './../../DispatchStrategy'

export * from './RecurringTransfer/encode.js'
export * from './RecurringTransfer/decode.js'

export type RecurringTransfer = {
  startEpoch: bigint
  endEpoch: bigint | null
  factor: string
  dispatchStrategy: DispatchStrategy
}
