import { SearchQuery } from './searchQuery'

type ExtractionFunction =
  | RegularExpressionExtraction
  | PartialExtractionFunction
  | SearchQueryExtraction
  | SubstringExtraction
  | StrlenExtraction
  | TimeFormatExtraction
  | TimeParsingExtraction
  | JavaScriptExtraction
  | RegisteredLookupExtraction
  | CascadeExtraction
  | StringFormatExtraction
  | UpperLowerExtraction
  | BucketExtraction

type RegularExpressionExtraction = {
  type: 'regex'
  expr: string
  index: number
  replaceMissingValue: boolean
  replaceMissingValueWith: string
}

type PartialExtractionFunction = {
  type: 'partial'
  expr: string
}

type SearchQueryExtraction = {
  type: 'searchQuery'
  query: SearchQuery
}

type SubstringExtraction = {
  type: 'substring'
  index: number
  length?: number
}

type StrlenExtraction = {
  type: 'strlen'
}

type TimeFormatExtraction = {
  type: 'timeFormat'
  format?: string
  timeZone?: string
  locale?: string
  // @todo: grunularity?
  asMills?: boolean
}

type TimeParsingExtraction = {
  type: 'time'
  timeFormat: string
  resultFormat: string
  joda?: boolean
}

type JavaScriptExtraction = {
  type: 'javascript'
  function: string
  injective?: boolean
}

// https://druid.apache.org/docs/latest/querying/lookups.html
// @todo: inline lookup
type RegisteredLookupExtraction = {
  type: 'registeredLookup'
  lookup: string
  retainMissingValue?: boolean
  replaceMissingValueWith?: string
}

type CascadeExtraction = {
  type: 'cascade'
  extractionFns: ExtractionFunction[]
}

type StringFormatExtraction = {
  type: 'stringFormat'
  format: string
  nullHandling: 'nullString' | 'emptyString' | 'returnNull'
}

type UpperLowerExtraction = {
  type: 'upper' | 'lower'
  locale: string
}

type BucketExtraction = {
  type: 'bucket'
  size?: number
  offset?: number
}
