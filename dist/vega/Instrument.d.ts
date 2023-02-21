/// autogenerated by protoc-plugin-js
import type { InstrumentMetadata } from './InstrumentMetadata'
import type { Future } from './Future'

export * from './Instrument/encode.js'
export * from './Instrument/decode.js'

export type Instrument = {
  id: string
  code: string
  name: string
  metadata: InstrumentMetadata
  product: { future: Future } | null
}