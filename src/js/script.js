var direction;

oxo.screens.loadScreen('game', function() {
    game();
});

function game() {
    var character = document.getElementById('character');
    var ennemy = document.getElementById('obstacle');
    var finishline = document.getElementById('finishline');
    oxo.animation.moveElementWithArrowKeys(character, 10);
    oxo.elements.onCollisionWithElementOnce(character, ennemy, function() {
        //character est bloqué
        console.log('collision avec obstacle');
    });
    //Si collision entre character et ligne d'arrivée
    oxo.elements.onCollisionWithElementOnce(character, finishline, function() {
        //le niveau est fini
        console.log('niveau fini');
    });
};