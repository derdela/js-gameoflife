const
  expect = require('chai').expect,
  app = require(__dirname + '/../src/app.js');

describe('livingCellWithNoBros', function() {
  it('dies', function() {
  	const noBros = [[false, false, false], [false, true, false], [false, false, false]];
    expect(app.isAlive(noBros, 1, 1)).to.be.false;
  });
});


describe('livingCellWithNoBros', function() {
  it('dies', function() {
  	const noBros = [[false, false, false], [true, true, true], [false, false, false]];
    expect(app.isAlive(noBros, 1, 1)).to.be.true;
  });
});
