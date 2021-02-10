import { assert } from 'chai'
import { doors } from '../src/typesenges'

describe('Typesenges', function () {
  describe('100doors', function () {
    it('returns an array', function () {
      assert.equal(typeof doors(), typeof [])
    })

    it('returns an array of perfect squares', function () {
      const squares = [
        { id: 1, open: true },
        { id: 4, open: true },
        { id: 9, open: true },
        { id: 16, open: true },
        { id: 25, open: true },
        { id: 36, open: true },
        { id: 49, open: true },
        { id: 64, open: true },
        { id: 81, open: true },
        { id: 100, open: true }
      ]
      assert.deepEqual(doors(), squares)
    })
  })
})
