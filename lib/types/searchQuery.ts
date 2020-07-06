export type InsensitiveContainsSearchQuery = {
  type: 'insensitive_contains'
  value: string
}

export type FragmentSearchQuery = {
  type: 'fragment'
  values: string[]
  caseSensitive?: boolean
}

export type ContainsSearchQuery = {
  type: 'contains'
  value: string
  caseSensitive?: boolean
}

export type RegexSearchQuery = {
  type: 'regex'
  pattern: string
}

export type SearchQuery =
  | InsensitiveContainsSearchQuery
  | FragmentSearchQuery
  | ContainsSearchQuery
  | RegexSearchQuery
