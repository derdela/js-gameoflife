module.exports = {
	isAlive: function(grid, x, y) {
		var broCount = 0;
		for(var offx = -1; offx <= 1; offx++) {
			for(var offy = -1; offy <= 1; offy++) {
				if(grid[x + offx][y + offy]) {
					broCount++;
				}
			}
		}

		broCount = grid[x, y] ? broCount - 1 : broCount;

		console.log(broCount);
		return !(broCount < 2) || (broCount === 2 || broCount === 3);
	}
};