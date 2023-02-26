const assert = require('assert');
const cal = require('./1-calcul');

describe('Module 1-calcul', function () {

  describe('SUM TYPE', function () {
    it('test sum of numbers', function () {
      assert.equal(cal('SUM', 1, 2), 3);
    });
    it('test sum of rounded float', function () {
      assert.equal(cal('SUM', 1.6, 2.1), 4);
    });
  });

  describe('SUBTRACT TYPE', function () {
    it('test difference of numbers', function () {
      assert.equal(cal('SUBTRACT', 5, 2), 3);
    });

    it('test difference of rounded floats', function () {
      assert.equal(cal('SUBTRACT', 1.8, 5.9), -4);
    })
  });

  describe('DIVIDE TYPE', function () {
    it('test division of numbers', function () {
      assert.equal(cal('DIVIDE', 4, 2), 2);
    });

    it('test divided by zero', function () {
      assert.equal(cal('DIVIDE', 2, 0), 'Error');
    });
  });

});