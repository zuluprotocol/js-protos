/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const TYPE_UNSPECIFIED = 0
export const TYPE_DEFAULT = 1
export const TYPE_NETWORK_CLOSE_OUT_GOOD = 2
export const TYPE_NETWORK_CLOSE_OUT_BAD = 3

export type Values = 0 | 1 | 2 | 3
export type Names =
  | 'TYPE_UNSPECIFIED'
  | 'TYPE_DEFAULT'
  | 'TYPE_NETWORK_CLOSE_OUT_GOOD'
  | 'TYPE_NETWORK_CLOSE_OUT_BAD'

export const enum Type {
  TYPE_UNSPECIFIED = 0,
  TYPE_DEFAULT = 1,
  TYPE_NETWORK_CLOSE_OUT_GOOD = 2,
  TYPE_NETWORK_CLOSE_OUT_BAD = 3
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