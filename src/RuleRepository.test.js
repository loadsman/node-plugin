const express = require('express')
const RuleRepository = require('./RuleRepository')

describe('RuleRepository', () => {
  test('getCollectionFromRouter', () => {
    const app = express()
    app.get('/hello', () => '')
    const ruleCollection = RuleRepository.getCollectionFromRouter(app._router.stack)
    expect(ruleCollection.length).toBe(1)
  })
  describe('transformRoutesToRules', () => {
    const testHttpMethod = (method, expectedMethod) => {
      test(method, () => {
        const app = express()
        app[method]('/hello', () => '')
        const ruleCollection = RuleRepository.getCollectionFromRouter(app._router.stack)
        const rules = RuleRepository.transformRoutesToRules(ruleCollection)
        expect(rules[0].methods).toEqual(expectedMethod)
      })
    }

    testHttpMethod('get', ['GET'])
    testHttpMethod('post', ['POST'])
    testHttpMethod('put', ['PUT'])
    testHttpMethod('delete', ['DELETE'])
    testHttpMethod('all', [])
  })
})