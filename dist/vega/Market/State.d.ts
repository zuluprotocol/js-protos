/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const STATE_UNSPECIFIED = 0
export const STATE_PROPOSED = 1
export const STATE_REJECTED = 2
export const STATE_PENDING = 3
export const STATE_CANCELLED = 4
export const STATE_ACTIVE = 5
export const STATE_SUSPENDED = 6
export const STATE_CLOSED = 7
export const STATE_TRADING_TERMINATED = 8
export const STATE_SETTLED = 9

export type Values = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type Names =
  | 'STATE_UNSPECIFIED'
  | 'STATE_PROPOSED'
  | 'STATE_REJECTED'
  | 'STATE_PENDING'
  | 'STATE_CANCELLED'
  | 'STATE_ACTIVE'
  | 'STATE_SUSPENDED'
  | 'STATE_CLOSED'
  | 'STATE_TRADING_TERMINATED'
  | 'STATE_SETTLED'

export const enum State {
  STATE_UNSPECIFIED = 0,
  STATE_PROPOSED = 1,
  STATE_REJECTED = 2,
  STATE_PENDING = 3,
  STATE_CANCELLED = 4,
  STATE_ACTIVE = 5,
  STATE_SUSPENDED = 6,
  STATE_CLOSED = 7,
  STATE_TRADING_TERMINATED = 8,
  STATE_SETTLED = 9
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
