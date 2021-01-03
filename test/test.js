const assert = require('assert');
const { reverser } = require('../dist/typesenges');

describe('Typesenges', function() {
  describe('reverser', function() {
    it('return the same strig if is 1 length', function() {
      assert.equal(reverser('a'), 'a');
    });
  });
});
