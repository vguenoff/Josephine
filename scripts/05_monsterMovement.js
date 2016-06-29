/*
    --- MONSTER MOVE ---
*/
function MonsterMovement() {

    this.moRow = 19;
    this.moColumn = getRandomInt(0, 9);

    this.moX = 874;
    this.moY = this.moColumn * SIZE;

    this.create = function(id) {
        var monster = document.createElement("img");
        monster.src = "assets/monster_" + getRandomInt(1,3) + ".png";
        monster.style.left = this.moX + "px";
        monster.style.top = this.moY + "px";
        monster.style.position = "absolute";
        monster.style.transition = monster.style.webkitTransition = "0.2s all";
        monster.className = "monster" + id;
        container.appendChild(monster);
    };
    this.animate = function(id) {
        var mo = $(".monster" + id).style;
        this.nn = getRandomInt(2, 5);
        // me = this;
        
        // left
        if (this.nn === 2 && this.moX !== 0) {
            this.moX -= moMove;
            this.moRow -= 1;
            mo.left = this.moX + "px";
        }
        // up
        else if (this.nn === 3 && this.moY !== 0) {
            this.moY -= moMove;
            this.moColumn -= 1;
            mo.top = this.moY + "px";
        }
        // down
        else if (this.nn === 5 && this.moY !== (mapHeight - SIZE)) {
            this.moY += moMove;
            this.moColumn += 1;
            mo.top = this.moY + "px";
        } 
        else if (this.moX <= 0) {
            mo.left = -46 + "px";
        }
        if (pattern[this.moColumn][this.moRow] === "tree") {
            // left
            if (this.nn === 2) {
                this.moX += moMove;
                this.moRow += 1;
                mo.left = this.moX + "px";
            }
            // up
            else if (this.nn === 3) {
                this.moY += moMove;
                this.moColumn += 1;
                mo.top = this.moY + "px";
            }
            // right
            else if (this.nn === 4) {
                this.moX -= moMove;
                this.moRow -= 1;
                mo.left = this.moX + "px";
            }
            // down
            else if (this.nn === 5) {
                this.moY -= moMove;
                this.moColumn -= 1;
                mo.top = this.moY + "px";
            }
        }
        if (chColumn === this.moColumn && chRow === this.moRow) {
            gameOver();
        }
    };
}

function gameOver() {
    console.log("game over");

    $("#loseScreen").style.opacity = "1";
    // $("#container").style.opacity = "0.5";
    window.removeEventListener("keydown", enterKey, false);
    clearAll();
}

function clearAll() {
    for (newMoInterval; newMoInterval > 0; newMoInterval--) {
        clearTimeout(newMoInterval);
    }
    for (moMoveINterval; moMoveINterval > 0; moMoveINterval--) {
        clearTimeout(moMoveINterval);
    }
}


