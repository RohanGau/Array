var minPathSum = function(grid) {
    if(!grid && (grid.length === 0 || grid.length === 1)) return 0;
    const m = grid.length;
    const n = grid[0].length;

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            console.log("[" + i + "," + j + "]")
            if(i > 0 && j > 0) {
                grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
            } else if(i > 0) {
                grid[i][j] += grid[i-1][j];
            } else if(j > 0){
                grid[i][j] += grid[i][j-1];
            }
        }
    }
    return grid[m-1][n-1];
};
