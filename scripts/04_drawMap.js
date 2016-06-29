/*
    --- DRAW THE MAP --- 
*/
function drawMap() {
    for(var row = 0; row < ROWS; row++) {
        // feed the pattern
        pattern.push([]);
        for(var column = 0; column < COLUMNS; column++) {
            // feed the pattern
            pattern[row].push(0);

            // Create a div HTML element called cell
            cell = document.createElement("div");
            var cSt = cell.style;
            // Set it's class to "cell"
            cell.className = "cell";

            // Position the cell in the correct cell
            cSt.left = column * SIZE + "px";
            cSt.top = row * SIZE + "px";

            // cSt.backgroundColor = "#007c46";
            cSt.backgroundColor = "#0e8447";
            // draw different shade of green
            cSt.opacity = getRandomArbitrary(0.85, 1);

            // Add the div element to the stage
            stage.appendChild(cell);

            drawMapObjects(row, column);
        }
    }
    /*
        --- DRAW THE MAP OBJECTS--- 
    */
    function drawMapObjects(row, column) {
        var chance = getRandomInt(0, 100);
        if (chance >= 93) {
            tree = document.createElement("img");
            tree.src = "assets/tree.png";
            tree.style.left = column * SIZE + "px";
            tree.style.top = row * SIZE + "px";
            tree.style.position = "absolute";
            tree.className = "tree" + row + column;
            stage.appendChild(tree);

            pattern[row][column] = "tree";
        } else if (chance <= 10) {
            numberOfAcorns+=1;
            acorn = document.createElement("img");
            acorn.src = "assets/acorn.png";
            acorn.style.left = column * SIZE + "px";
            acorn.style.top = row * SIZE + "px";
            acorn.style.position = "absolute";
            acorn.style.transition = acorn.style.webkitTransition = "0.3s all";
            acorn.className = "acorn" + row + column;
            stage.appendChild(acorn);

            pattern[row][column] = "acorn";
        }
    }
}  