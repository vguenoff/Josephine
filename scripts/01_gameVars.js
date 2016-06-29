/*
    --- GAME VARS --- 
*/
// Get a reference to the stage
var cell,
    tree,
    numberOfAcorns = 0,
    acorn,
    stage = document.getElementById("stage"),
    chinchilla = document.getElementById("josephine"),
    // monster = document.getElementById("monster"),
    trees = 0,
    chX = 0,
    chY = 0,
    chRow = 0,
    chColumn = 0,
    newMoInterval,
    moMoveINterval,
    chExit;

// The size of each cell and the chinchilla move
var SIZE = 46,
    chMove = 46,
    moMove = 46;

// Display the array
var ROWS = 10,
    COLUMNS = 20;

// map size
var mapWidth = 920,
    mapHeight = 460;

// 2D array that defines the pattern
var pattern = [],
    patternCh = [],
    patternMo = [];

// 
var monsterNumber = 0;

// 
var drawExit = true;
var lastKey = "right";

var level = 1000;
var count = 0;

var statred = false;

