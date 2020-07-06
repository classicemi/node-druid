const chai = require('chai')
const expect = chai.expect
const Druid = require('../dist/index')

describe('Query', () => {
  describe('TopN', () => {
    let topNQuery
    beforeEach(() => {
      topNQuery = new Druid.TopNQuery()
    })

    it('has required properties', () => {
      const membersShouldHave = [
        'queryType',
        'dataSource',
        'intervals',
        'granularity',
        'dimension',
        'threshold',
        'metric'
      ]
      expect(topNQuery._required).to.have.members(membersShouldHave)
    })
  })
})
