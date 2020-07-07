export type PostAggregator =
  | ArithmeticPostAggregator
  | FieldAccessorPostAggregator
  | ConstantPostAggregator
  | GreatestLeastPostAggregator
  | JavaScriptPostAggregator
  | HyperUniqueCardinalityPostAggregator

export type ArithmeticPostAggregator = {
  type: 'arithmetic'
  name: string
  fn: '+' | '-' | '*' | '/' | 'quotient'
  fields: PostAggregator[]
  ordering: 'numericFirst' | null
}

export type FieldAccessorPostAggregator = {
  type: 'fieldAccess' | 'finalizingFieldAccess'
  name: string
  fieldName: string
}

export type ConstantPostAggregator = {
  type: 'constant'
  name: string
  value: number
}

export type GreatestLeastPostAggregator = {
  type: 'doubleGreatest' | 'longGreatest' | 'doubleLeast' | 'longLeast'
  name: string
  fields: PostAggregator[]
}

export type JavaScriptPostAggregator = {
  type: 'javascript'
  name: string
  fieldNames: string[]
  function: string
}

export type HyperUniqueCardinalityPostAggregator = {
  type: 'hyperUniqueCardinality'
  name: string
  fieldName: string // @todo: see hyperUnique aggregator
}
