import { Filter } from './filter'

export type Aggregator =
  | CountAggregator
  | SumAggregator
  | MinMaxAggregator
  | FirstLastAggregator
  | AnyAggregator
  | JavaScriptAggregator
  | FilteredAggregator

export type CountAggregator = {
  type: 'count'
  name: string
}

export type SumTypes = 'longSum' | 'doubleSum' | 'floatSum'
export type SumAggregator = {
  type: SumTypes
  name: string
  fieldName: string
}

export type MinMaxTypes =
  | 'doubleMin'
  | 'doubleMax'
  | 'floatMin'
  | 'floatMax'
  | 'longMin'
  | 'longMax'
  | 'doubleMean'
export type MinMaxAggregator = {
  type: MinMaxTypes
  name: string
  fieldName: string
}

export type FirstLastTypes =
  | 'doubleFirst'
  | 'doubleLast'
  | 'floatFirst'
  | 'floatLast'
  | 'longFirst'
  | 'longLast'
  | 'stringFirst'
  | 'stringLast'
export type FirstLastAggregator = {
  type: FirstLastTypes
  name: string
  fieldName: string
}

export type AnyTypes = 'doubleAny' | 'floatAny' | 'longAny' | 'stringAny'
// @todo: how to omit 'stringAny' from AnyTypes?
export type AnyAggregator =
  | {
      type: AnyTypes
      name: string
      fieldName: string
    }
  | {
      type: 'stringAny'
      name: string
      fieldName: string
      maxStringBytes?: number
    }

export type JavaScriptAggregator = {
  type: 'javascript'
  name: string
  fieldNames: string[]
  fnAggregate: string
  fnCombine: string
  fnReset: string
}

export type FilteredAggregator = {
  type: 'filtered'
  filter: Filter
  aggregator: Aggregator
}
