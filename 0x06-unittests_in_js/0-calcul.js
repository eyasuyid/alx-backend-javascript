function calculateNumber (a, b = 0) {
  a = Number(a);
  b = Number(b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw TypeError('Parameters must be numbers');
  }
  return  Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
