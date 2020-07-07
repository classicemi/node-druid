import { SearchQuery } from './searchQuery'
import { ExtractionFunction } from './extraction'

export type Filter =
  | SelectorFilter
  | ColumnComparisonFilter
  | RegularExpressionFilter
  | LogicalExpressionFilter
  | JavaScriptFilter
  | ExtractionFilter
  | SearchFilter
  | InFilter
  | LikeFilter
  | BoundFilter
  | IntervalFilter
  | TrueFilter

export type SelectorFilter = {
  type: 'selector'
  dimension: string
  value: string
}

export type ColumnComparisonFilter = {
  type: 'columnComparison'
  dimensions: [string, string]
}

export type RegularExpressionFilter = {
  type: 'regex'
  dimension: string
  pattern: string
}

export type AndExpressionFilter = {
  type: 'and'
  fields: Filter[]
}

export type OrExpressionFilter = {
  type: 'or'
  fields: Filter[]
}

export type NotExpressionFilter = {
  type: 'not'
  field: Filter
}

export type LogicalExpressionFilter =
  | AndExpressionFilter
  | OrExpressionFilter
  | NotExpressionFilter

export type JavaScriptFilter = {
  type: 'javascript'
  dimension: string
  function: string
}

// The extraction filter is now deprecated.
// The selector filter with an extraction function specified provides identical functionality
// and should be used instead.
export type ExtractionFilter = {
  type: 'extraction'
  dimension: string
  value: string
  extractionFn: ExtractionFunction
}

export type SearchFilter = {
  type: 'search'
  dimension: string
  query: SearchQuery
}

export type InFilter = {
  type: 'in'
  dimension: string
  values: string[]
}

export type LikeFilter = {
  type: 'like'
  dimension: string
  pattern: string
  escape?: string
  extractionFn?: ExtractionFunction
}

export type BoundFilter = {
  type: 'bound'
  dimension: string
  lower?: string
  upper?: string
  lowerStrict?: boolean
  upperStrict?: boolean
  ordering?: string
  extractionFn?: ExtractionFunction
}

export type IntervalFilter = {
  type: 'interval'
  dimension: string
  intervals: string[]
  extractionFn?: ExtractionFunction
}

export type TrueFilter = {
  type: 'true'
}
