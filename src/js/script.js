var direction;

oxo.screens.loadScreen('game', function() {
    game();
});

function game() {
    oxo.inputs.listenArrowKeys(function(key) {
        var character = document.getElementById('character');
        var ennemy = document.getElementById('obstacle');
        var finishline = document.getElementById('finishline');
        direction = key;
        oxo.animation.move(character, direction, 10);
        //Si collision entre character et obstacle
        oxo.elements.onCollisionWithElementOnce(character, ennemy, function() {
            //character est bloqué
            console.log('collision avec obstacle');
        });
        //Si collision entre character et ligne d'arrivée
        oxo.elements.onCollisionWithElementOnce(character, finishline, function() {
            //le niveau est fini
            console.log('niveau fini');
        });
    });
};