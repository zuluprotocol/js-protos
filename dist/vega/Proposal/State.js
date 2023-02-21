/// autogenerated by protoc-plugin-js
import assert from 'nanoassert'
import { enumerable } from 'protobuf-codec/encode/types.js'
import { enumerable as decodeEnumerable } from 'protobuf-codec/decode/types.js'

export const STATE_UNSPECIFIED = 0
export const STATE_FAILED = 1
export const STATE_OPEN = 2
export const STATE_PASSED = 3
export const STATE_REJECTED = 4
export const STATE_DECLINED = 5
export const STATE_ENACTED = 6
export const STATE_WAITING_FOR_NODE_VOTE = 7

const enumValues = new Map([
  [0, 'STATE_UNSPECIFIED'],
  [1, 'STATE_FAILED'],
  [2, 'STATE_OPEN'],
  [3, 'STATE_PASSED'],
  [4, 'STATE_REJECTED'],
  [5, 'STATE_DECLINED'],
  [6, 'STATE_ENACTED'],
  [7, 'STATE_WAITING_FOR_NODE_VOTE']
])
const enumNames = new Map([
  ['STATE_UNSPECIFIED', 0],
  ['STATE_FAILED', 1],
  ['STATE_OPEN', 2],
  ['STATE_PASSED', 3],
  ['STATE_REJECTED', 4],
  ['STATE_DECLINED', 5],
  ['STATE_ENACTED', 6],
  ['STATE_WAITING_FOR_NODE_VOTE', 7]
])

export function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null) throw new Error('Invalid State value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

export function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

export function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid State value (' + value + ')')

  if (0 <= value && value <= 7) return 1

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
