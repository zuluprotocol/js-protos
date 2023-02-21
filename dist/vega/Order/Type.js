/// autogenerated by protoc-plugin-js
import assert from 'nanoassert'
import { enumerable } from 'protobuf-codec/encode/types.js'
import { enumerable as decodeEnumerable } from 'protobuf-codec/decode/types.js'

export const TYPE_UNSPECIFIED = 0
export const TYPE_LIMIT = 1
export const TYPE_MARKET = 2
export const TYPE_NETWORK = 3

const enumValues = new Map([
  [0, 'TYPE_UNSPECIFIED'],
  [1, 'TYPE_LIMIT'],
  [2, 'TYPE_MARKET'],
  [3, 'TYPE_NETWORK']
])
const enumNames = new Map([
  ['TYPE_UNSPECIFIED', 0],
  ['TYPE_LIMIT', 1],
  ['TYPE_MARKET', 2],
  ['TYPE_NETWORK', 3]
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

  if (0 <= value && value <= 3) return 1

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
