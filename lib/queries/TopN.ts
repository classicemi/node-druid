import Query from '../query'

class TopNQuery extends Query {
  constructor() {
    super()
    this.require([
      'intervals',
      'granularity',
      'dimension',
      'threshold',
      'metric'
    ])
  }
}

export default TopNQuery
