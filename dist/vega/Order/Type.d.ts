/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const TYPE_UNSPECIFIED = 0
export const TYPE_LIMIT = 1
export const TYPE_MARKET = 2
export const TYPE_NETWORK = 3

export type Values = 0 | 1 | 2 | 3
export type Names =
  | 'TYPE_UNSPECIFIED'
  | 'TYPE_LIMIT'
  | 'TYPE_MARKET'
  | 'TYPE_NETWORK'

export const enum Type {
  TYPE_UNSPECIFIED = 0,
  TYPE_LIMIT = 1,
  TYPE_MARKET = 2,
  TYPE_NETWORK = 3
}

declare const enumValues: Map<Names, Values>
declare const enumNames: Map<Values, Names>

export function encode(
  value: Values | Names,
  buf: Uint8Array,
  byteOffset: number
): Uint8Array

export function decode(varint: bigint): LiteralUnion<Names, number>

export function encodingLength(value: LiteralUnion<Values, number>): number

export function stringify(int: Values): LiteralUnion<Names, undefined>

export function parse(str: Names): LiteralUnion<Values, undefined>
