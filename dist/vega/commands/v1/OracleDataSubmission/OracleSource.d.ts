/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const ORACLE_SOURCE_UNSPECIFIED = 0
export const ORACLE_SOURCE_OPEN_ORACLE = 1
export const ORACLE_SOURCE_JSON = 2

export type Values = 0 | 1 | 2
export type Names =
  | 'ORACLE_SOURCE_UNSPECIFIED'
  | 'ORACLE_SOURCE_OPEN_ORACLE'
  | 'ORACLE_SOURCE_JSON'

export const enum OracleSource {
  ORACLE_SOURCE_UNSPECIFIED = 0,
  ORACLE_SOURCE_OPEN_ORACLE = 1,
  ORACLE_SOURCE_JSON = 2
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
