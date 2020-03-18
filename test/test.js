var assert = require('assert');
var since = require('../dist/since.js');

describe('since.js testing routine', function() {
    it('should return false invalid language code', function() {
        assert.equal(since(Date.now(), 'enfdf'), false);
      });
    it('should return just now in english', function() {
      assert.equal(since(Date.now(), 'en'), 'just now');
    });
    it('should return just now in german', function() {
        assert.equal(since(Date.now(), 'de'), 'gerade eben');
    });
});