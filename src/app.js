module.exports = {
	isAlive: function(grid, x, y) {
		rows = grid.map(function(row) {
			return row.reduce(function(sum, x) {
				return x ? sum + 1 : sum;
			}, 0)
		})
		var broCount = rows.reduce(function(sum, x) {
			return x ? sum + 1 : sum;
		}, 0)

		broCount = grid[x, y] ? broCount - 1 : broCount;

		return !(broCount < 2);
	}
};