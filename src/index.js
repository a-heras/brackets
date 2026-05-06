module.exports = function check(str, bracketsConfig) {
  const pairs = bracketsConfig.map((pair) => pair.join(''));
  let current = str;
  let lastLength = -1;

  while (current.length !== lastLength) {
    lastLength = current.length;
    for (let i = 0; i < pairs.length; i += 1) {
      current = current.replace(pairs[i], '');
    }
  }

  return current.length === 0;
};
