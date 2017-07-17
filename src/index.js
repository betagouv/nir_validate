function handleSpecialCodes(nirpp) {
  if (nirpp.indexOf('A') !== -1) {
    return {
      withoutLetters: nirpp.replace('A', '0'),
      offset: 1000000,
    };
  }

  if (nirpp.indexOf('B') !== -1) {
    return {
      withoutLetters: nirpp.replace('B', '0'),
      offset: 2000000,
    };
  }

  return {
    withoutLetters: nirpp,
    offset: 0,
  };
}

function parse(nirpp) {
  const { withoutLetters, offset } = handleSpecialCodes(nirpp);
  return parseInt(withoutLetters) - offset;
}

function generateControlKey(nirpp) {
  return 97 - parse(nirpp) % 97;
}

function clean(nirpp) {
  return nirpp
    .toUpperCase()
    .replace(/\s+/g, '');
}

function validate(input, options = {}) {
  const { shoudClean } = options;
  const cleanedInput = shoudClean === false ? input : clean(input);
  const key = cleanedInput.slice(-2);
  const withoutKey = cleanedInput.slice(0, -2);
  const computedKey = generateControlKey(withoutKey);

  return computedKey == key;
}

module.exports = validate;
