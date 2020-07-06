import { uniq } from 'lodash'

type Properties =
  | 'queryType'
  | 'dataSource'
  | 'descending'
  | 'intervals'
  | 'filter'
  | 'granularity'
  | 'dimension'
  | 'aggregations'
  | 'postAggregations'
  | 'having'
  | 'limit'
  | 'context'
  | 'threshold'
  | 'metric'

export const COMMON_QUERY_PROPERTIES: Properties[] = ['queryType', 'dataSource']

export default abstract class Query {
  private _required: Properties[] = COMMON_QUERY_PROPERTIES

  // @todo: specify every property's interface
  private _query: { [key in Properties]?: any } = {}

  validate() {
    this._required.forEach((property) => {
      if (this._query[property] == null) {
        throw new Error(`missing \`${property}\` field in the query`)
      }
    })
    return true
  }

  require(properties: Properties[]) {
    this._required = this._required.concat(properties)
  }
}
