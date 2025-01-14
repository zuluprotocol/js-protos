/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const PROPOSAL_ERROR_UNSPECIFIED = 0
export const PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON = 1
export const PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE = 2
export const PROPOSAL_ERROR_ENACT_TIME_TOO_SOON = 3
export const PROPOSAL_ERROR_ENACT_TIME_TOO_LATE = 4
export const PROPOSAL_ERROR_INSUFFICIENT_TOKENS = 5
export const PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY = 6
export const PROPOSAL_ERROR_NO_PRODUCT = 7
export const PROPOSAL_ERROR_UNSUPPORTED_PRODUCT = 8
export const PROPOSAL_ERROR_NO_TRADING_MODE = 11
export const PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE = 12
export const PROPOSAL_ERROR_NODE_VALIDATION_FAILED = 13
export const PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD = 14
export const PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS = 15
export const PROPOSAL_ERROR_INVALID_ASSET = 16
export const PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS = 17
export const PROPOSAL_ERROR_NO_RISK_PARAMETERS = 18
export const PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY = 19
export const PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE = 20
export const PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED = 21
export const PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL = 22
export const PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE = 23
export const PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET = 25
export const PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT = 26
export const PROPOSAL_ERROR_INVALID_RISK_PARAMETER = 30
export const PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED = 31
export const PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED = 32
export const PROPOSAL_ERROR_INVALID_ASSET_DETAILS = 33
export const PROPOSAL_ERROR_UNKNOWN_TYPE = 34
export const PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE = 35
export const PROPOSAL_ERROR_INVALID_FREEFORM = 36
export const PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE = 37
export const PROPOSAL_ERROR_INVALID_MARKET = 38
export const PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES = 39
export const PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS = 40
export const PROPOSAL_ERROR_ERC20_ADDRESS_ALREADY_IN_USE = 41
export const PROPOSAL_ERROR_LP_PRICE_RANGE_NONPOSITIVE = 42
export const PROPOSAL_ERROR_LP_PRICE_RANGE_TOO_LARGE = 43
export const PROPOSAL_ERROR_LINEAR_SLIPPAGE_FACTOR_OUT_OF_RANGE = 44
export const PROPOSAL_ERROR_QUADRATIC_SLIPPAGE_FACTOR_OUT_OF_RANGE = 45

export type Values =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 25
  | 26
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
export type Names =
  | 'PROPOSAL_ERROR_UNSPECIFIED'
  | 'PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON'
  | 'PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE'
  | 'PROPOSAL_ERROR_ENACT_TIME_TOO_SOON'
  | 'PROPOSAL_ERROR_ENACT_TIME_TOO_LATE'
  | 'PROPOSAL_ERROR_INSUFFICIENT_TOKENS'
  | 'PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY'
  | 'PROPOSAL_ERROR_NO_PRODUCT'
  | 'PROPOSAL_ERROR_UNSUPPORTED_PRODUCT'
  | 'PROPOSAL_ERROR_NO_TRADING_MODE'
  | 'PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE'
  | 'PROPOSAL_ERROR_NODE_VALIDATION_FAILED'
  | 'PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD'
  | 'PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS'
  | 'PROPOSAL_ERROR_INVALID_ASSET'
  | 'PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS'
  | 'PROPOSAL_ERROR_NO_RISK_PARAMETERS'
  | 'PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY'
  | 'PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE'
  | 'PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED'
  | 'PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL'
  | 'PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE'
  | 'PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET'
  | 'PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT'
  | 'PROPOSAL_ERROR_INVALID_RISK_PARAMETER'
  | 'PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED'
  | 'PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED'
  | 'PROPOSAL_ERROR_INVALID_ASSET_DETAILS'
  | 'PROPOSAL_ERROR_UNKNOWN_TYPE'
  | 'PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE'
  | 'PROPOSAL_ERROR_INVALID_FREEFORM'
  | 'PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE'
  | 'PROPOSAL_ERROR_INVALID_MARKET'
  | 'PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES'
  | 'PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS'
  | 'PROPOSAL_ERROR_ERC20_ADDRESS_ALREADY_IN_USE'
  | 'PROPOSAL_ERROR_LP_PRICE_RANGE_NONPOSITIVE'
  | 'PROPOSAL_ERROR_LP_PRICE_RANGE_TOO_LARGE'
  | 'PROPOSAL_ERROR_LINEAR_SLIPPAGE_FACTOR_OUT_OF_RANGE'
  | 'PROPOSAL_ERROR_QUADRATIC_SLIPPAGE_FACTOR_OUT_OF_RANGE'

export const enum ProposalError {
  PROPOSAL_ERROR_UNSPECIFIED = 0,
  PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON = 1,
  PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE = 2,
  PROPOSAL_ERROR_ENACT_TIME_TOO_SOON = 3,
  PROPOSAL_ERROR_ENACT_TIME_TOO_LATE = 4,
  PROPOSAL_ERROR_INSUFFICIENT_TOKENS = 5,
  PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY = 6,
  PROPOSAL_ERROR_NO_PRODUCT = 7,
  PROPOSAL_ERROR_UNSUPPORTED_PRODUCT = 8,
  PROPOSAL_ERROR_NO_TRADING_MODE = 11,
  PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE = 12,
  PROPOSAL_ERROR_NODE_VALIDATION_FAILED = 13,
  PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD = 14,
  PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS = 15,
  PROPOSAL_ERROR_INVALID_ASSET = 16,
  PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS = 17,
  PROPOSAL_ERROR_NO_RISK_PARAMETERS = 18,
  PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY = 19,
  PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE = 20,
  PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED = 21,
  PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL = 22,
  PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE = 23,
  PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET = 25,
  PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT = 26,
  PROPOSAL_ERROR_INVALID_RISK_PARAMETER = 30,
  PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED = 31,
  PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED = 32,
  PROPOSAL_ERROR_INVALID_ASSET_DETAILS = 33,
  PROPOSAL_ERROR_UNKNOWN_TYPE = 34,
  PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE = 35,
  PROPOSAL_ERROR_INVALID_FREEFORM = 36,
  PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE = 37,
  PROPOSAL_ERROR_INVALID_MARKET = 38,
  PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES = 39,
  PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS = 40,
  PROPOSAL_ERROR_ERC20_ADDRESS_ALREADY_IN_USE = 41,
  PROPOSAL_ERROR_LP_PRICE_RANGE_NONPOSITIVE = 42,
  PROPOSAL_ERROR_LP_PRICE_RANGE_TOO_LARGE = 43,
  PROPOSAL_ERROR_LINEAR_SLIPPAGE_FACTOR_OUT_OF_RANGE = 44,
  PROPOSAL_ERROR_QUADRATIC_SLIPPAGE_FACTOR_OUT_OF_RANGE = 45
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
