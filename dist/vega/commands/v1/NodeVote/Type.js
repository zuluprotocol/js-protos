/// autogenerated by protoc-plugin-js
import assert from 'nanoassert'
import { enumerable } from 'protobuf-codec/encode/types.js'
import { enumerable as decodeEnumerable } from 'protobuf-codec/decode/types.js'

export const TYPE_UNSPECIFIED = 0
export const TYPE_STAKE_DEPOSITED = 1
export const TYPE_STAKE_REMOVED = 2
export const TYPE_FUNDS_DEPOSITED = 3
export const TYPE_SIGNER_ADDED = 4
export const TYPE_SIGNER_REMOVED = 5
export const TYPE_BRIDGE_STOPPED = 6
export const TYPE_BRIDGE_RESUMED = 7
export const TYPE_ASSET_LISTED = 8
export const TYPE_LIMITS_UPDATED = 9
export const TYPE_STAKE_TOTAL_SUPPLY = 10
export const TYPE_SIGNER_THRESHOLD_SET = 11
export const TYPE_GOVERNANCE_VALIDATE_ASSET = 12

const enumValues = new Map([
  [0, 'TYPE_UNSPECIFIED'],
  [1, 'TYPE_STAKE_DEPOSITED'],
  [2, 'TYPE_STAKE_REMOVED'],
  [3, 'TYPE_FUNDS_DEPOSITED'],
  [4, 'TYPE_SIGNER_ADDED'],
  [5, 'TYPE_SIGNER_REMOVED'],
  [6, 'TYPE_BRIDGE_STOPPED'],
  [7, 'TYPE_BRIDGE_RESUMED'],
  [8, 'TYPE_ASSET_LISTED'],
  [9, 'TYPE_LIMITS_UPDATED'],
  [10, 'TYPE_STAKE_TOTAL_SUPPLY'],
  [11, 'TYPE_SIGNER_THRESHOLD_SET'],
  [12, 'TYPE_GOVERNANCE_VALIDATE_ASSET']
])
const enumNames = new Map([
  ['TYPE_UNSPECIFIED', 0],
  ['TYPE_STAKE_DEPOSITED', 1],
  ['TYPE_STAKE_REMOVED', 2],
  ['TYPE_FUNDS_DEPOSITED', 3],
  ['TYPE_SIGNER_ADDED', 4],
  ['TYPE_SIGNER_REMOVED', 5],
  ['TYPE_BRIDGE_STOPPED', 6],
  ['TYPE_BRIDGE_RESUMED', 7],
  ['TYPE_ASSET_LISTED', 8],
  ['TYPE_LIMITS_UPDATED', 9],
  ['TYPE_STAKE_TOTAL_SUPPLY', 10],
  ['TYPE_SIGNER_THRESHOLD_SET', 11],
  ['TYPE_GOVERNANCE_VALIDATE_ASSET', 12]
])

export function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null) throw new Error('Invalid Type value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

export function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

export function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid Type value (' + value + ')')

  if (0 <= value && value <= 12) return 1

  // enumerable max value in case of unknown value
  return 5
}

/**
 * Convert an enum value to it's human readable name.
 * Returns undefined on an unknown value.
 */
export function stringify(int) {
  return enumValues.get(int)
}

/**
 * Convert an enum string names to it's machine integer value.
 * Returns undefined on an unknown name.
 */
export function parse(str) {
  return enumNames.get(str)
}