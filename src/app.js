const _ = require('lodash');

run();

function run() {
  console.reset = function() {
    return process.stdout.write('\033c');
  }

  var grid = generateRandomGrid(50, 200);
  console.reset();

  start(grid);

  function start(grid) {
    setTimeout(function() {
      grid = iterate(grid)
      console.reset();
      render(grid);
      start(grid);
    }, 10)
  }
}



module.exports = {
  stayAlive: stayAlive,
  countBros: countBros,
  extractBros: extractBros,
  generateRandomGrid: generateRandomGrid,
  render: render
};

function stayAlive(grid, x, y) {
  const count = countBros(grid, x, y);
  const ruleMap = [deadRules, aliveRules];
  return ruleMap[grid[x][y]](count);
}

function aliveRules(count) {
  return count === 2 || count === 3;
}

function deadRules(count) {
  return count === 3;
}

function extractBros(grid, x, y) {
  return _.range(-1, 2).map(function(offsetX) {
    return _.range(-1, 2).map(function(offsetY) {
      return _.get(grid, [x + offsetX, y + offsetY], 0);
    })
  });

}

function countBros(grid, x, y) {
  const count = _.chain(extractBros(grid, x, y))
    .flatten()
    .sum()
    .value();

  return count - grid[x][y];
};

function generateRandomGrid(width, height) {
  return _.range(0, width).map(function(x) {
    return _.range(0, height).map(function(y) {
      return Math.round(Math.random());
    })
  })
}

function iterate(grid) {
  return mapGrid(grid, function(x, y) {
    return +stayAlive(grid, x, y);
  });
}

function mapGrid(grid, fn) {
  return _.range(0, grid.length).map(function(x) {
    return _.range(0, grid[0].length).map(function(y) {
      return fn(x, y);
    })
  })
}

function render(grid) {
  const placeholders = [' ', '█'];
  grid.forEach(function(row) {
    console.log(row.map(function(cell) {
      return placeholders[cell];
    }).join(''));
  })
}
