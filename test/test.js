const
  expect = require('chai').expect,
  app = require(__dirname + '/../src/app.js');

describe('in 3x3 Grid cell is Living', function() {
  it('dies without bros', function() {
    const noBros = [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 1, 0],
      [1, 0, 0, 0],
    ];

    expect(app.stayAlive(noBros, 2, 2)).to.be.false;
  });

  it('lives on with 2', function() {
    const noBros = [
      [1, 1, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];

    expect(app.stayAlive(noBros, 1, 1)).to.be.true;
  });

  it('lives on with 3', function() {
    const noBros = [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0]
    ];

    expect(app.stayAlive(noBros, 1, 1)).to.be.true;
  });

  it('dies with 4', function() {
    const noBros = [
      [1, 1, 1],
      [0, 1, 1],
      [0, 0, 0]
    ];

    expect(app.stayAlive(noBros, 1, 1)).to.be.false;
  });
});

describe('in 3x3 Grid cell is dead', function() {
  it('should stay dead with 2 bros', function() {
    const noBros = [
      [1, 1, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

    expect(app.stayAlive(noBros, 1, 1)).to.be.false;
  });

  it('should stay dead with 4 bros', function() {
    const noBros = [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 0]
    ];

    expect(app.stayAlive(noBros, 1, 1)).to.be.false;
  });
  it('should come alive with 3 bros', function() {
    const noBros = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0]
    ];

    expect(app.stayAlive(noBros, 1, 1)).to.be.true;
  });
});

describe('extract bros', function() {
  it('should extract bros', function() {
    const env = [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 1, 0],
      [1, 0, 0, 0],
    ];

    const expected = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];

    expect(app.extractBros(env, 2, 2)).to.deep.equal(expected);

  });

  it('should set out of range cells to 0', function() {
  	const expected = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];

    const env = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 1],
    ];

    
  })
});

describe('count bros', function() {
  it('should have 0 bros', function() {
    const noBros = [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 1, 0],
      [1, 0, 0, 0],
    ];
    expect(app.countBros(noBros, 2, 2)).to.equal(0);
  });

  it('should have 3 bros', function() {
    const threeBros = [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1]
    ];
    expect(app.countBros(threeBros, 1, 1)).to.equal(3);
  });

  it('should have 6 bros', function() {
    const sixBros = [
      [1, 1, 1],
      [0, 1, 0],
      [1, 1, 1]
    ];
    expect(app.countBros(sixBros, 1, 1)).to.equal(6);

  });

  describe('Generate Grid', function() {
    it('should have 10 x 10 and only 1 or 0 values', function() {
      var grid = app.generateRandomGrid(10, 10);
      expect(grid.length).to.equal(10);
      expect(grid[0].length).to.equal(10);

      grid.forEach(function(row) {
        row.forEach(function(cell) {
          expect(cell === 1 || cell === 0).to.be.true;
        });
      });
    });
  });

})
