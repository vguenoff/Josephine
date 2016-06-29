(function(){
    "use strict";
    /*
        --- MAIN INIT --- 
    */
    function init(level) {

        drawMap();

        var monsterFabric = [];

        newMoInterval = setInterval(function(){
            count+=1;

            var nnn = new MonsterMovement();

            monsterFabric.push(nnn);
            nnn.create(monsterFabric.indexOf(nnn));

            moMoveINterval = setInterval(function(){
               nnn.animate(monsterFabric.indexOf(nnn));
            }, 200);

            if (count >= level) clearInterval(newMoInterval);
        
        }, 3000);

        console.log(numberOfAcorns);
    }    

    /*
        --- LOAD THE JS ---
    */
    window.addEventListener("keydown", startGame, false);
    function startGame() {
        if (statred === false) {
            statred = true;
            $("#startScreen").style.opacity = "0";
            $("body").style.background = "#8fb24a";
            // $("#container").style.border = "none";

            init(level);
        }

        $("#press_any_key").style.display = "none";
    }

    // window.onload = function() {
    //     init(level);
    // };

}());
