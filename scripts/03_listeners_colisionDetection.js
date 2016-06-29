/*
--- LISTENERS ---
*/
window.addEventListener("keydown", enterKey, false);
var ch = chinchilla.style;

function enterKey(event) {    
    switch(event.keyCode) {
        case 37: //left
            if (chX !== 0) {
                chX -= chMove;
                chRow -= 1;
                chinchilla.src = "assets/josephine.png";
                ch.transform = ch.webkitTransform = "scaleX(-1)";
                lastKey = "left";
            }
            ch.left = chX + "px";
            break;
        case 38: //up
            if (chY !== 0) {
                chY -= chMove;
                chColumn -= 1;
                chinchilla.src = "assets/josephine_up.png";
                // ch.transform = ch.webkitTransform = "scaleY(-1)";
            //     setTimeout(function(){
            //         chinchilla.src = "assets/josephine.png";
            //         if (lastKey === "left") {
            //             ch.transform = ch.webkitTransform = "scaleX(-1)";
            //         } else {
            //             ch.transform = ch.webkitTransform = "scaleX(1)";
            //         }
            //     }, 100);
            }
            ch.top = chY + "px";
            break;
        case 39: //right
            if (chX !== (mapWidth - SIZE)) {
                chX += chMove;
                chRow += 1;
                chinchilla.src = "assets/josephine.png";
                ch.transform = ch.webkitTransform = "scaleX(1)";
                lastKey = "right";
            }
            ch.left = chX + "px";
            break;
        case 40: //down
            if (chY !== (mapHeight - SIZE)) {
                chY += chMove;
                chColumn += 1;
                chinchilla.src = "assets/josephine_down.png";
                ch.transform = ch.webkitTransform = "scaleY(1)";
                // setTimeout(function(){
                //     chinchilla.src = "assets/josephine.png";
                //     if (lastKey === "left") {
                //         ch.transform = ch.webkitTransform = "scaleX(-1)";
                //     } else {
                //         ch.transform = ch.webkitTransform = "scaleX(1)";
                //     }
                // }, 100);
            }
            ch.top = chY + "px";
            break;
    }
    colisionDetection();
}
/*
    --- colisionDetection ---
*/
function colisionDetection() {
    if (pattern[chColumn][chRow] === "tree") {
        // the tree blocks the path

        switch(event.keyCode) {
            case 37: //left
                chX += chMove;
                chRow += 1;
                ch.left = chX + "px";
                break;
            case 38: //up
                chY += chMove;
                chColumn += 1;
                ch.top = chY + "px";
                break;
            case 39: //right
                chX -= chMove;
                chRow -= 1;
                ch.left = chX + "px";
                break;
            case 40: //down
                chY -= chMove;
                chColumn -= 1;
                ch.top = chY + "px";
                break;
        }
    } else if (pattern[chColumn][chRow] === "acorn") {
        var acornClass = "acorn" + chColumn + chRow;
        document.getElementsByClassName(acornClass)[0].style.opacity = 0;
        pattern[chColumn][chRow] = "0";
        numberOfAcorns-=1;
        console.log(numberOfAcorns);
    }
    if (numberOfAcorns === 0 && drawExit) {
            drawExit = false;
            ch.zIndex = "1";
            chExit = document.createElement("div");
            var chSt = chExit.style;
            // Set it's class to "chExit"
            chExit.className = "chExit";
            // chExit.backgroundImage = "assets/exit.png";

            chSt.width = chSt.height = SIZE + "px";

            var exitXPos = getRandomInt(0, 19);
            var exitYPos = getRandomInt(0, 9);

            chSt.left = exitXPos * SIZE + "px";
            chSt.top =  exitYPos * SIZE + "px";
            chSt.background = "url(assets/exit.png)";
            chSt.position = "absolute";

            $("#container").appendChild(chExit);
            pattern[exitYPos][exitXPos] = "exit";
    }
    if (pattern[chColumn][chRow] === "exit") {
        nextLevel();
    }
}


function nextLevel() {
    console.log("win");

    $("#winScreen").style.opacity = "1";
    
    // $("#container").style.opacity = "0.5";
    window.removeEventListener("keydown", enterKey, false);
    clearAll();

}



