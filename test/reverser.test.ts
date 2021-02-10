import { assert } from 'chai'
import { reverser } from '../src/typesenges'

describe('Typesenges', function () {
  describe('reverser', function () {
    it('return the same strig if is 1 length', function () {
      assert.equal(reverser('a'), 'a')
    })

    it('reverse a string', function () {
      assert.equal(reverser('string'), 'gnirts')
    })

    it('reverse large strings', function () {
      assert.equal(reverser('this is a large string to reverse'), 'esrever ot gnirts egral a si siht')
    })

    it('reverse numbers', function () {
      assert.equal(reverser(4585), '5854')
    })

    it('reverse booleans', function () {
      assert.equal(reverser(true), 'eurt')
      assert.equal(reverser(false), 'eslaf')
    })

    it('returns null with objects', function () {
      assert.equal(reverser({ one: 'one' }), null)
      assert.equal(reverser(['a string that won\'t be reversed']), null)
    })
  })
})
