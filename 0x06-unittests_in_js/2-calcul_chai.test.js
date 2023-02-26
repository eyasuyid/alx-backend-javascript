const expect = require('chai').expect;
const cal = require('./1-calcul');

describe('Module 2-calcul', function () {

  describe('SUM TYPE', function () {
    it('test sum of numbers', function () {
      expect(cal('SUM', 2, 1)).to.equal(3);
    });

    it('test sum of rounded float', function () {
      expect(cal('SUM', 1.6, 2.1)).to.equal(4);
    });
  });

  describe('SUBTRACT TYPE', function () {
    it('test difference of numbers', function () {
      expect(cal('SUBTRACT', 5, 2)).to.equal(3);
    });

    it('test difference of rounded floats', function () {
      expect(cal('SUBTRACT', 1.8, 5.9)).to.equal(-4);
    })
  });

  describe('DIVIDE TYPE', function () {
    it('test division of numbers', function () {
      expect(cal('DIVIDE', 4, 3)).to.equal(4/3);
    });

    it('test divided by zero', function () {
      expect(cal('DIVIDE', 2, 0)).to.equal('Error');
    });
  });

});