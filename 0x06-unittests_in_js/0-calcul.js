function calculateNumber (a, b = 0) {
  a = Math.round(Number(a))
  b = Math.round(Number(b));
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw TypeError('Parameters must be numbers');
  }
  return  a + b;
}

module.exports = {calculateNumber};
