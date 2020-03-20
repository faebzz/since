var assert = require('assert');
var since = require('../dist/since.js');

var today = new Date(Date.now());

describe('since.js testing routine', function() {
  describe('English Testing routine', function() {
    it('should return false invalid time', function() {
        assert.equal(since(Date.now() + 120, 'en'), false);
      });
    it('should return just now in english', function() {
      assert.equal(since(Date.now(), 'en'), 'just now');
    });
    it('should return one minute ago in english', function() {
      assert.equal(since((Date.now() - 65), 'en'), 'one minute ago');
    });
    it('should return two minutes ago in english', function() {
      assert.equal(since((Date.now() - 130), 'en'), 'two minutes ago');
    });
    it('should return one hour ago', function() {
      assert.equal(since((Date.now() - 4000), 'en'), 'an hour ago');
    });
    it('should return three hours ago', function() {
      assert.equal(since((Date.now() - 11000), 'en'), 'three hours ago');
    });
    it('should return yesterday', function() {
      assert.equal(since((Date.now() - (26*3600)), 'en'), 'yesterday');
    });
    it('should return four days ago', function() {
      assert.equal(since((Date.now() - (4*24*3700)), 'en'), 'four days ago');
    });
    it('should return last week', function() {
      assert.equal(since((Date.now() - (8*24*3600)), 'en'), 'last week');
    });
    it('should return three weeks ago', function() {
      assert.equal(since((Date.now() - (3*7*24*3600)), 'en'), 'three weeks ago');
    });
    it('should return last month', function() {
      assert.equal(since((new Date(today.getFullYear(), today.getMonth() - 1, 1)), 'en'), 'last month');
    });
    it('should return two months ago', function() {
      assert.equal(since((new Date(today.getFullYear(), today.getMonth() - 2, 1)), 'en'), 'two months ago');
    });
    it('should return last year', function() {
      assert.equal(since((new Date(today.getFullYear() - 1, today.getMonth(), 1)), 'en'), 'last year');
    });
    it('should return 12 years ago', function() {
      assert.equal(since((new Date(today.getFullYear() - 12, today.getMonth(), 1)), 'en'), '12 years ago');
    });
  });
});