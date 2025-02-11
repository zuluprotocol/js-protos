/// autogenerated by protoc-plugin-js
import assert from 'nanoassert'
import { enumerable } from 'protobuf-codec/encode/types.js'
import { enumerable as decodeEnumerable } from 'protobuf-codec/decode/types.js'

export const ORDER_ERROR_UNSPECIFIED = 0
export const ORDER_ERROR_INVALID_MARKET_ID = 1
export const ORDER_ERROR_INVALID_ORDER_ID = 2
export const ORDER_ERROR_OUT_OF_SEQUENCE = 3
export const ORDER_ERROR_INVALID_REMAINING_SIZE = 4
export const ORDER_ERROR_TIME_FAILURE = 5
export const ORDER_ERROR_REMOVAL_FAILURE = 6
export const ORDER_ERROR_INVALID_EXPIRATION_DATETIME = 7
export const ORDER_ERROR_INVALID_ORDER_REFERENCE = 8
export const ORDER_ERROR_EDIT_NOT_ALLOWED = 9
export const ORDER_ERROR_AMEND_FAILURE = 10
export const ORDER_ERROR_NOT_FOUND = 11
export const ORDER_ERROR_INVALID_PARTY_ID = 12
export const ORDER_ERROR_MARKET_CLOSED = 13
export const ORDER_ERROR_MARGIN_CHECK_FAILED = 14
export const ORDER_ERROR_MISSING_GENERAL_ACCOUNT = 15
export const ORDER_ERROR_INTERNAL_ERROR = 16
export const ORDER_ERROR_INVALID_SIZE = 17
export const ORDER_ERROR_INVALID_PERSISTENCE = 18
export const ORDER_ERROR_INVALID_TYPE = 19
export const ORDER_ERROR_SELF_TRADING = 20
export const ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES = 21
export const ORDER_ERROR_INCORRECT_MARKET_TYPE = 22
export const ORDER_ERROR_INVALID_TIME_IN_FORCE = 23
export const ORDER_ERROR_CANNOT_SEND_GFN_ORDER_DURING_AN_AUCTION = 24
export const ORDER_ERROR_CANNOT_SEND_GFA_ORDER_DURING_CONTINUOUS_TRADING = 25
export const ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT = 26
export const ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT = 27
export const ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT = 28
export const ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC = 29
export const ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN = 30
export const ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN = 31
export const ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION = 32
export const ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION = 33
export const ORDER_ERROR_MUST_BE_LIMIT_ORDER = 34
export const ORDER_ERROR_MUST_BE_GTT_OR_GTC = 35
export const ORDER_ERROR_WITHOUT_REFERENCE_PRICE = 36
export const ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE = 37
export const ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO = 40
export const ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE = 41
export const ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO = 42
export const ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE = 43
export const ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER = 44
export const ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER = 45
export const ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER = 46
export const ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS = 47
export const ORDER_ERROR_TOO_MANY_PEGGED_ORDERS = 48

const enumValues = new Map([
  [0, 'ORDER_ERROR_UNSPECIFIED'],
  [1, 'ORDER_ERROR_INVALID_MARKET_ID'],
  [2, 'ORDER_ERROR_INVALID_ORDER_ID'],
  [3, 'ORDER_ERROR_OUT_OF_SEQUENCE'],
  [4, 'ORDER_ERROR_INVALID_REMAINING_SIZE'],
  [5, 'ORDER_ERROR_TIME_FAILURE'],
  [6, 'ORDER_ERROR_REMOVAL_FAILURE'],
  [7, 'ORDER_ERROR_INVALID_EXPIRATION_DATETIME'],
  [8, 'ORDER_ERROR_INVALID_ORDER_REFERENCE'],
  [9, 'ORDER_ERROR_EDIT_NOT_ALLOWED'],
  [10, 'ORDER_ERROR_AMEND_FAILURE'],
  [11, 'ORDER_ERROR_NOT_FOUND'],
  [12, 'ORDER_ERROR_INVALID_PARTY_ID'],
  [13, 'ORDER_ERROR_MARKET_CLOSED'],
  [14, 'ORDER_ERROR_MARGIN_CHECK_FAILED'],
  [15, 'ORDER_ERROR_MISSING_GENERAL_ACCOUNT'],
  [16, 'ORDER_ERROR_INTERNAL_ERROR'],
  [17, 'ORDER_ERROR_INVALID_SIZE'],
  [18, 'ORDER_ERROR_INVALID_PERSISTENCE'],
  [19, 'ORDER_ERROR_INVALID_TYPE'],
  [20, 'ORDER_ERROR_SELF_TRADING'],
  [21, 'ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES'],
  [22, 'ORDER_ERROR_INCORRECT_MARKET_TYPE'],
  [23, 'ORDER_ERROR_INVALID_TIME_IN_FORCE'],
  [24, 'ORDER_ERROR_CANNOT_SEND_GFN_ORDER_DURING_AN_AUCTION'],
  [25, 'ORDER_ERROR_CANNOT_SEND_GFA_ORDER_DURING_CONTINUOUS_TRADING'],
  [26, 'ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT'],
  [27, 'ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT'],
  [28, 'ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT'],
  [29, 'ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC'],
  [30, 'ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN'],
  [31, 'ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN'],
  [32, 'ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION'],
  [33, 'ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION'],
  [34, 'ORDER_ERROR_MUST_BE_LIMIT_ORDER'],
  [35, 'ORDER_ERROR_MUST_BE_GTT_OR_GTC'],
  [36, 'ORDER_ERROR_WITHOUT_REFERENCE_PRICE'],
  [37, 'ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE'],
  [40, 'ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO'],
  [41, 'ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE'],
  [42, 'ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO'],
  [43, 'ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE'],
  [44, 'ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER'],
  [45, 'ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER'],
  [46, 'ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER'],
  [47, 'ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS'],
  [48, 'ORDER_ERROR_TOO_MANY_PEGGED_ORDERS']
])
const enumNames = new Map([
  ['ORDER_ERROR_UNSPECIFIED', 0],
  ['ORDER_ERROR_INVALID_MARKET_ID', 1],
  ['ORDER_ERROR_INVALID_ORDER_ID', 2],
  ['ORDER_ERROR_OUT_OF_SEQUENCE', 3],
  ['ORDER_ERROR_INVALID_REMAINING_SIZE', 4],
  ['ORDER_ERROR_TIME_FAILURE', 5],
  ['ORDER_ERROR_REMOVAL_FAILURE', 6],
  ['ORDER_ERROR_INVALID_EXPIRATION_DATETIME', 7],
  ['ORDER_ERROR_INVALID_ORDER_REFERENCE', 8],
  ['ORDER_ERROR_EDIT_NOT_ALLOWED', 9],
  ['ORDER_ERROR_AMEND_FAILURE', 10],
  ['ORDER_ERROR_NOT_FOUND', 11],
  ['ORDER_ERROR_INVALID_PARTY_ID', 12],
  ['ORDER_ERROR_MARKET_CLOSED', 13],
  ['ORDER_ERROR_MARGIN_CHECK_FAILED', 14],
  ['ORDER_ERROR_MISSING_GENERAL_ACCOUNT', 15],
  ['ORDER_ERROR_INTERNAL_ERROR', 16],
  ['ORDER_ERROR_INVALID_SIZE', 17],
  ['ORDER_ERROR_INVALID_PERSISTENCE', 18],
  ['ORDER_ERROR_INVALID_TYPE', 19],
  ['ORDER_ERROR_SELF_TRADING', 20],
  ['ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES', 21],
  ['ORDER_ERROR_INCORRECT_MARKET_TYPE', 22],
  ['ORDER_ERROR_INVALID_TIME_IN_FORCE', 23],
  ['ORDER_ERROR_CANNOT_SEND_GFN_ORDER_DURING_AN_AUCTION', 24],
  ['ORDER_ERROR_CANNOT_SEND_GFA_ORDER_DURING_CONTINUOUS_TRADING', 25],
  ['ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT', 26],
  ['ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT', 27],
  ['ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT', 28],
  ['ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC', 29],
  ['ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN', 30],
  ['ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN', 31],
  ['ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION', 32],
  ['ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION', 33],
  ['ORDER_ERROR_MUST_BE_LIMIT_ORDER', 34],
  ['ORDER_ERROR_MUST_BE_GTT_OR_GTC', 35],
  ['ORDER_ERROR_WITHOUT_REFERENCE_PRICE', 36],
  ['ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE', 37],
  ['ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO', 40],
  ['ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE', 41],
  ['ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO', 42],
  ['ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE', 43],
  ['ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER', 44],
  ['ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER', 45],
  ['ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER', 46],
  ['ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS', 47],
  ['ORDER_ERROR_TOO_MANY_PEGGED_ORDERS', 48]
])

export function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null) throw new Error('Invalid OrderError value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

export function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

export function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid OrderError value (' + value + ')')

  if (0 <= value && value <= 48) return 1

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
