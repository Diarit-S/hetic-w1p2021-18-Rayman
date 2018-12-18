oxo.screens.loadScreen('game', function() {
    game();
});

function game() {
    //initialisation des variables
    var character = document.getElementById('character');
    var finishline = document.getElementById('finishline');
    var smoke = document.getElementById('smoke');
    var obstacles = document.querySelectorAll('.game__obstacle');
    var yellowjacket = document.getElementById('yellowjacket');
    var scorejacket = 0;
    document.querySelector('.game__score--jacket').innerText += " " +scorejacket + "/1";
    

    //bouger character avec les keys directionnelles
    oxo.animation.moveElementWithArrowKeys(character, 30);
    
    obstacles.forEach(obstacle => {
        oxo.elements.onCollisionWithElement(character, obstacle, function() {
            //character est bloqué
            console.log('collision avec obstacle');
        });
    });

    //Si collision avec le gilet jaune
    oxo.elements.onCollisionWithElementOnce(character, yellowjacket, function() {
        //on supprime l'element et on l'ajout à l'inventaire
        yellowjacket.remove();
    });


    //Si collision entre character et ligne d'arrivée
    oxo.elements.onCollisionWithElementOnce(character, finishline, function() {
        //le niveau est fini
        console.log('niveau fini');
    });   


    
};