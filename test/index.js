const expect = require('chai').expect;
const validate = require('../index.js');


describe('NIRPP Validator', () => {
  it('validates a correct number, born in Calvados - 14', () => {
    const validNirpp = '255081416802538';

    const result = validate(validNirpp);

    expect(result).to.be.true;
  });

  it('validates a correct number, born in Corsica - 2A', () => {
    const validNirpp = '255082A16802597';

    const result = validate(validNirpp);

    expect(result).to.be.true;
  });

  it('invalidates an incorrect number', () => {
    const invalidNirpp = '255081416802539';

    const result = validate(invalidNirpp);

    expect(result).to.be.false;
  });

  it('cleans and validates a correct number', () => {
    const validNirppWithSpaces = '2 55 08 14 168 025 38';

    const result = validate(validNirppWithSpaces);

    expect(result).to.be.true;
  });

  it('does not try to clean a correct number if shoudClean is forced to false', () => {
    const validNirppWithSpaces = '2 55 08 14 168 025 38';

    const result = validate(validNirppWithSpaces, { shoudClean: false });

    expect(result).to.be.false;
  });
});
