const
  expect = require('chai').expect,
  app = require(__dirname + '../src/app.js');

describe('some context', function() {
  it('should fail', function() {
    expect(true).to.be.false;
  });
});
