const assert = require('assert');
const { reverser, doors } = require('../dist/typesenges');

describe('Typesenges', function() {
  describe('reverser', function() {
    it('return the same strig if is 1 length', function() {
      assert.equal(reverser('a'), 'a');
    });

    it('reverse a string', function() {
      assert.equal(reverser('string'), 'gnirts');
    });

    it('reverse large strings', function() {
      assert.equal(reverser('this is a large string to reverse'), 'esrever ot gnirts egral a si siht');
    });

    it('reverse numbers', function() {
      assert.equal(reverser(4585), '5854');
    });

    it('reverse booleans', function() {
      assert.equal(reverser(true), 'eurt');
      assert.equal(reverser(false), 'eslaf');
    });

    it('returns null with objects', function() {
      assert.equal(reverser({one: 'one'}), null);
      assert.equal(reverser(['a string that won\'t be reversed']), null);
    });
  });

  describe('100doors', function() {
    it('returns an array', function() {
      assert.equal(typeof doors(), typeof []);
    });

    it('returns an array of perfect squares', function() {
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
      ];
      assert.deepEqual(doors(), squares);
    });
  });
});
