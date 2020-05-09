var rows = 40;
var cols = 100;
var playing = false;

var grid = new Array(rows);
var nextGrid = new Array(rows);

var timer;
var reproductionTime = 100;

var gen=0;
var pop=0;


function initializeGrids() {
    for (var i = 0; i < rows; i++) {
        grid[i] = new Array(cols);
        nextGrid[i] = new Array(cols);
    }
}

function resetGrids() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            grid[i][j] = 0;
            nextGrid[i][j] = 0;
        }
    }
}

function clearCount(){
    gen=0;
    pop=0;
    var generationButton = document.getElementById('count');
        generationButton.innerHTML = gen; 
    var populationButton = document.getElementById('count1');
        populationButton.innerHTML = pop; 
}


function copyAndResetGrid() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            grid[i][j] = nextGrid[i][j];
            nextGrid[i][j] = 0;
        }
    }
}

// Initialize
function initialize() {
    createTable();
    initializeGrids();
    resetGrids();
    setupControlButtons();
}

// Lay out the board
function createTable() {
    var gridContainer = document.getElementById('gridContainer');
    if (!gridContainer) {
        // Throw error
        console.error("Problem: No div for the drid table!");
    }
    
    var table = document.createElement("table");

    for (var i = 0; i < rows; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < cols; j++) {//
            var cell = document.createElement("td");
            cell.setAttribute("id", i + "_" + j);
            cell.setAttribute("class", "dead");
            cell.onclick = cellClickHandler;
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    gridContainer.appendChild(table);
    }
    function removeee() {
        var gridContainer = document.getElementById('gridContainer');
        gridContainer.innerHTML=" ";
    }

    function var_size1Handler() { 
        removeee();
        rows = 30;
        cols = 100; 

        initialize();
    
    
    }

    function var_size2Handler() { 
        removeee();
        rows = 40;
        cols = 100; 

        initialize();
    
    
    }

    function var_size3Handler() { 
        removeee();
        rows = 48;
        cols = 100; 

        initialize();
    
    
    }


    function cellClickHandler() {
        var rowcol = this.id.split("_");
        var row = rowcol[0];
        var col = rowcol[1];
        
        var classes = this.getAttribute("class");
        if(classes.indexOf("live") > -1) {
            this.setAttribute("class", "dead");
            grid[row][col] = 0;
        } else {
            this.setAttribute("class", "live");
            grid[row][col] = 1;
        }
    }

    function populationCount() {
        var pop=0;
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                if(grid[i][j] == 1){
                    pop++;
                }
            }
        }
        var populationButton = document.getElementById('count1');
        populationButton.innerHTML = pop;
        return pop;
    }

    function updateView() {
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                var cell = document.getElementById(i + "_" + j);
                if (grid[i][j] == 0) {
                    cell.setAttribute("class", "dead");
                } else {
                    cell.setAttribute("class", "live");
                }
            }
        }
    }

function setupControlButtons() {
    // button to start
    var startButton = document.getElementById('start');
    startButton.onclick = startButtonHandler;
    
    // button to clear
    var clearButton = document.getElementById('clear');
    clearButton.onclick = clearButtonHandler;
    
    // button to set random initial state
    var randomButton = document.getElementById("random");
    randomButton.onclick = randomButtonHandler;

    // button to set Still Life
    var stilButton = document.getElementById("stil");
    stilButton.onclick = stilButtonHandler;

    var gunsButton = document.getElementById("guns");
    gunsButton.onclick = gunsButtonHandler;

    var gliderButton = document.getElementById("glider");
    gliderButton.onclick = gliderButtonHandler;

    var oscillatorButton = document.getElementById("oscillator");
    oscillatorButton.onclick = oscillatorButtonHandler;

    //button to setup increment function
    var stepButton = document.getElementById('step');
    stepButton.onclick = stepButtonHandler;

    //button to setup increment for 23 times
    var stepTwoButton = document.getElementById('steptwo');
    stepTwoButton.onclick = stepTwoButtonHandler;

    var var_size1Button = document.getElementById("var_size1");
    var_size1Button.onclick = var_size1Handler;

    var var_size2Button = document.getElementById("var_size2");
    var_size2Button.onclick = var_size2Handler;

    var var_size3Button = document.getElementById("var_size3");
    var_size3Button.onclick = var_size3Handler;


}



function oscillatorButtonHandler() {
    if (playing) return;
    clearButtonHandler();
    grid[16][21]=1;
    grid[16][22]=1;
    grid[16][23]=1;
    grid[15][27]=1;
    grid[14][27]=1;

    grid[14][28]=1;
    grid[17][29]=1;
    grid[17][30]=1;
    grid[16][30]=1;

    grid[16][34]=1;
    grid[16][35]=1;
    grid[16][36]=1;
    grid[15][37]=1;
    grid[15][35]=1;
    grid[15][36]=1;
    updateView();
}

function gliderButtonHandler()  {
    if (playing) return;
    clearButtonHandler();
    grid[13][40]=1;
    grid[14][41]=1;
    grid[15][41]=1;
    grid[15][40]=1;
    grid[15][39]=1;

    grid[13][50]=1;
    grid[12][49]=1;
    grid[14][50]=1;
    grid[14][46]=1;
    grid[15][47]=1;
    grid[15][48]=1;
    grid[15][49]=1;
    grid[15][50]=1;
    grid[12][46]=1;

    updateView();

}
function gunsButtonHandler() {
    if (playing) return;
    clearButtonHandler();
    grid[11][52]=1;
    grid[11][54]=1;

    grid[12][50]=1;
    grid[12][54]=1;

    grid[13][42]=1;
    grid[13][50]=1;
    grid[13][63]=1;
    grid[13][64]=1;

    grid[14][41]=1;
    grid[14][42]=1;
    grid[14][43]=1;
    grid[14][44]=1;
    grid[14][49]=1;
    grid[14][54]=1;
    grid[14][63]=1;
    grid[14][64]=1;

    grid[15][29]=1;
    grid[15][30]=1;
    grid[15][40]=1;
    grid[15][41]=1;
    grid[15][43]=1;
    grid[15][45]=1;
    grid[15][50]=1;

    grid[16][29]=1;
    grid[16][30]=1;
    grid[16][39]=1;
    grid[16][40]=1;
    grid[16][41]=1;
    grid[16][43]=1;
    grid[16][46]=1;
    grid[16][50]=1;
    grid[16][54]=1;

    grid[17][40]=1;
    grid[17][41]=1;
    grid[17][43]=1;
    grid[17][45]=1;
    grid[17][52]=1;
    grid[17][54]=1;

    grid[18][41]=1;
    grid[18][42]=1;
    grid[18][43]=1;
    grid[18][44]=1;

    grid[19][42]=1;

    grid[20][53]=1;

    grid[21][51]=1;
    grid[21][53]=1;

    grid[22][52]=1;
    grid[22][53]=1;

    updateView();
}

function stilButtonHandler() {
    if (playing) return;
    clearButtonHandler();
     grid[6][14]=1;
     grid[6][15]=1;
     grid[7][14]=1;
     grid[7][15]=1;

     grid[6][18]=1;
     grid[6][19]=1;
     grid[7][18]=1;
     grid[7][20]=1;
     grid[8][19]=1;


     grid[6][25]=1;
     grid[6][26]=1;
     grid[7][24]=1;
     grid[8][25]=1;
     grid[9][26]=1;
     grid[7][27]=1;
     grid[8][27]=1;


     grid[6][32]=1;
     grid[6][33]=1;
     grid[7][31]=1;
     grid[7][34]=1;
     grid[8][32]=1;
     grid[8][33]=1;

    updateView();

    
    }

function randomButtonHandler() {
    if (playing) return;
    clearButtonHandler();
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var isLive = Math.round(Math.random());
            if (isLive == 1) {
                var cell = document.getElementById(i + "_" + j);
                cell.setAttribute("class", "live");
                grid[i][j] = 1;
            }
        }
    }
}

// clear the grid
function clearButtonHandler() {
    console.log("Clear the game: stop playing, clear the grid");
    playing = false;
    var startButton = document.getElementById('start');
    startButton.innerHTML = "Start";    
    clearTimeout(timer);
    
    var cellsList = document.getElementsByClassName("live");
    // convert to array first, otherwise, you're working on a live node list
    // and the update doesn't work!
    var cells = [];
    for (var i = 0; i < cellsList.length; i++) {
        cells.push(cellsList[i]);
    }
    
    for (var i = 0; i < cells.length; i++) {
        cells[i].setAttribute("class", "dead");
    }
    resetGrids();
    clearCount();
}

// start/pause/continue the game
function startButtonHandler() {
    if (playing) {
        console.log("Pause the game");
        playing = false;
        this.innerHTML = "Continue";
        clearTimeout(timer);
    } else {
        console.log("Continue the game");
        playing = true;
        this.innerHTML = "Pause";
        play();

    }
}

// step the game
function stepButtonHandler() {
    computeNextGen();
    var k =populationCount();
    if (k!=0){
        gen++;
    }
    else {
        console.log("population is zero");
    }
    var generationButton = document.getElementById('count');
    generationButton.innerHTML = gen; 

    if (playing) {
        timer = setTimeout(play, reproductionTime);
    }
}

function stepTwoButtonHandler(){
    var i;
    for (i = 0; i < 23; i++) {
        computeNextGen();
        populationCount();
    gen++;
    var generationButton = document.getElementById('count');
    generationButton.innerHTML = gen; 

    if (playing) {
        timer = setTimeout(play, reproductionTime);
    }
    }

}


// run the life game
function play() {
    computeNextGen();
    populationCount();
    gen++;
    var generationButton = document.getElementById('count');
    generationButton.innerHTML = gen; 

    if (playing) {
        timer = setTimeout(play, reproductionTime);
    }
}

function computeNextGen() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            applyRules(i, j);
        }
    }
    
    // copy NextGrid to grid, and reset nextGrid
    copyAndResetGrid();
    // copy all 1 values to "live" in the table
    updateView();
}

// RULES
// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

function applyRules(row, col) {
    var numNeighbors = countNeighbors(row, col);
    if (grid[row][col] == 1) {
        if (numNeighbors < 2) {
            nextGrid[row][col] = 0;
        } else if (numNeighbors == 2 || numNeighbors == 3) {
            nextGrid[row][col] = 1;
        } else if (numNeighbors > 3) {
            nextGrid[row][col] = 0;
        }
    } else if (grid[row][col] == 0) {
            if (numNeighbors == 3) {
                nextGrid[row][col] = 1;
            }
        }
    }
    
function countNeighbors(row, col) {
    var count = 0;
    if (row-1 >= 0) {
        if (grid[row-1][col] == 1) count++;
    }
    if (row-1 >= 0 && col-1 >= 0) {
        if (grid[row-1][col-1] == 1) count++;
    }
    if (row-1 >= 0 && col+1 < cols) {
        if (grid[row-1][col+1] == 1) count++;
    }
    if (col-1 >= 0) {
        if (grid[row][col-1] == 1) count++;
    }
    if (col+1 < cols) {
        if (grid[row][col+1] == 1) count++;
    }
    if (row+1 < rows) {
        if (grid[row+1][col] == 1) count++;
    }
    if (row+1 < rows && col-1 >= 0) {
        if (grid[row+1][col-1] == 1) count++;
    }
    if (row+1 < rows && col+1 < cols) {
        if (grid[row+1][col+1] == 1) count++;
    }
    return count;
}

// Start everything

window.onload = initialize;