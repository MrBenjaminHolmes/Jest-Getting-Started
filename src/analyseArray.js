function makeObject(array) {
  return {
    average: array.reduce((a, b) => a + b, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

function analyzeArray(array) {
  return makeObject(array);
}

module.exports = analyzeArray;
