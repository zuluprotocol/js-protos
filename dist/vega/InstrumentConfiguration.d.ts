/// autogenerated by protoc-plugin-js
import type { FutureProduct } from './FutureProduct'

export * from './InstrumentConfiguration/encode.js'
export * from './InstrumentConfiguration/decode.js'

export type InstrumentConfiguration = {
  name: string
  code: string
  product: { future: FutureProduct } | null
}
