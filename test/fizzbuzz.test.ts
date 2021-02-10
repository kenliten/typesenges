import { assert } from 'chai'
import { FizzBuzz } from '../src/typesenges'

describe('Typesenges', function () {
  describe('FizzBuzz', function () {
    it('return an array', function () {
      const arr = [1, 2, 4, 5, 6, 7, 8, 9, 10]
      assert.equal(typeof FizzBuzz(arr), typeof arr)
    })
  })
})
