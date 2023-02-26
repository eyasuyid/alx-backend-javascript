function calculateNumber (a, b = 0) {
  return Math.round(Number(a)) + Math.round(Number(b));
}

module.exports = {calculateNumber};
