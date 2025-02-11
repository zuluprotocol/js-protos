/// autogenerated by protoc-plugin-js

export * from './Reward/encode.js'
export * from './Reward/decode.js'

export type Reward = {
  assetId: string
  partyId: string
  epoch: bigint
  amount: string
  percentageOfTotal: string
  receivedAt: bigint
  marketId: string
  rewardType: string
}
