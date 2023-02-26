const assert = require('assert');
const calcul = require('./0-calcul');
const sum = calcul;

describe('0-calcul module test', function () {

  it('calculateNumber: two numbers sum', function () {
    assert.equal(sum(1, 3), 4);
    assert.equal(sum(1, -3), -2);
  });

  it('calculateNumber: two rounded float sum', function () {
    assert.equal(sum(1.3, 10.3), 11);
    assert.equal(sum(1.9, 10.3), 12);
    assert.equal(sum(1.9, 10.6), 13);
    assert.equal(sum(1.9, 10), 12);
  });

  it('calculateNumber: cast none Numbers', function () {
    assert.equal(sum(true, '1'), 2);
  });

  it('calculateNumber: not Number parms', function () {
    assert.throws(() => sum('hello'), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
  });

});
