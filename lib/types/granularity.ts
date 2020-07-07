type LiteralGranularity =
  | 'all'
  | 'none'
  | 'second'
  | 'minute'
  | 'fifteen_minute'
  | 'thirty_minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'quarter'
  | 'year'

type DurationGranularity = {
  type: 'duration'
  duration: number
  origin: string
}

type PeriodGranularity = {
  type: 'period'
  period: string // https://en.wikipedia.org/wiki/ISO_8601
  timeZone: string
  origin: string
}

export type Granularity =
  | LiteralGranularity
  | DurationGranularity
  | PeriodGranularity
