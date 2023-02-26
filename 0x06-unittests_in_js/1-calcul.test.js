const assert = require('assert');
const cal = require('./1-calcul');

describe('Module 1-calcul', function () {

  describe('SUM TYPE', function () {
    it('test sum of numbers', function () {
      assert.equal(cal(1, 2, 'SUM'), 3);
    });
    it('test sum of rounded float', function () {
      assert.equal(cal(1.6, 2.1, 'SUM'), 4);
    });
  });

  describe('SUBTRACT TYPE', function () {
    it('test difference of numbers', function () {
      assert.equal(cal(5, 2, 'SUBTRACT'), 3);
    });

    it('test difference of rounded floats', function () {
      assert.equal(cal(1.8, 5.9, 'SUBTRACT'), -4);
    })
  });

  describe('DIVIDE TYPE', function () {
    it('test division of numbers', function () {
      assert.equal(cal(4, 2, 'DIVIDE'), 2);
    });

    it('test divided by zero', function () {
      assert.equal(cal(2, 0, 'DIVIDE'), 'Error');
    });
  });

});