var assert = require('assert');
var since = require('../dist/since.js');

var today = new Date(Date.now());

describe('since.js testing routine', function() {
  describe('English Testing routine', function() {
    it('should return just now in english', function() {
      assert.equal(since(today, 'en'), 'just now');
    });
    it('should return one minute ago in english', function() {
      assert.equal(since((Date.now() - 65000), 'en'), 'one minute ago');
    });
    it('should return two minutes ago in english', function() {
      assert.equal(since((Date.now() - 130000), 'en'), 'two minutes ago');
    });
    it('should return one hour ago', function() {
      assert.equal(since((Date.now() - 4000000), 'en'), 'an hour ago');
    });
    it('should return three hours ago', function() {
      assert.equal(since((Date.now() - 11000000), 'en'), 'three hours ago');
    });
    it('should return yesterday', function() {
      assert.equal(since((Date.now() - 24*60*60*1000), 'en'), 'yesterday');
    });
    it('should return four days ago', function() {
      assert.equal(since((Date.now() - (4*24*3700*1000)), 'en'), 'four days ago');
    });
    it('should return last week', function() {
      assert.equal(since((Date.now() - (8*24*3600*1000)), 'en'), 'last week');
    });
    it('should return three weeks ago', function() {
      assert.equal(since((Date.now() - (3*7*24*3600*1000)), 'en'), 'three weeks ago');
    });
    it('should return last month', function() {
      assert.equal(since((new Date(today.getFullYear(), today.getMonth() - 1, 1)), 'en'), 'last month');
    });
    it('should return two months ago', function() {
      assert.equal(since((new Date(today.getFullYear(), today.getMonth() - 2, 1)).getTime(), 'en'), 'two months ago');
    });
    it('should return last year', function() {
      assert.equal(since((new Date(today.getFullYear() - 1, today.getMonth(), 1)), 'en'), 'last year');
    });
    it('should return 12 years ago', function() {
      assert.equal(since((new Date(today.getFullYear() - 12, today.getMonth(), 1)).getTime(), 'en'), '12 years ago');
    });
  });
  describe('German Testing routine', function() {
    it('should return just now in german', function() {
      assert.equal(since(Date.now(), 'de'), 'gerade eben');
    });
    it('should return one minute ago in german', function() {
      assert.equal(since((Date.now() - 65000), 'de'), 'vor einer Minute');
    });
    it('should return two minutes ago in german', function() {
      assert.equal(since((Date.now() - 130000), 'de'), 'vor zwei Minuten');
    });
    it('should return one hour ago in german', function() {
      assert.equal(since((Date.now() - 4000000), 'de'), 'vor einer Stunde');
    });
    it('should return three hours ago in german', function() {
      assert.equal(since((Date.now() - 11000000), 'de'), 'vor drei Stunden');
    });
    it('should return yesterday in german', function() {
      assert.equal(since((Date.now() - (26*3600*1000)), 'de'), 'gestern');
    });
    it('should return four days ago in german', function() {
      assert.equal(since((Date.now() - (4*24*3700*1000)), 'de'), 'vor vier Tagen');
    });
    it('should return last week in german', function() {
      assert.equal(since((Date.now() - (8*24*3600*1000)), 'de'), 'letzte Woche');
    });
    it('should return three weeks ago in german', function() {
      assert.equal(since((Date.now() - (3*7*24*3600*1000)), 'de'), 'vor drei Wochen');
    });
    it('should return last month in german', function() {
      assert.equal(since((new Date(today.getFullYear(), today.getMonth() - 1, 1)), 'de'), 'letzten Monat');
    });
    it('should return two months ago in german', function() {
      assert.equal(since((new Date(today.getFullYear(), today.getMonth() - 2, 1)), 'de'), 'vor zwei Monaten');
    });
    it('should return last year in german', function() {
      assert.equal(since((new Date(today.getFullYear() - 1, today.getMonth(), 1)), 'de'), 'letztes Jahr');
    });
    it('should return 12 years ago in german', function() {
      assert.equal(since((new Date(today.getFullYear() - 12, today.getMonth(), 1).getTime()), 'de'), 'vor 12 Jahren');
    });
  });
});
