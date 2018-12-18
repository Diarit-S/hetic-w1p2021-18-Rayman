var direction;

oxo.screens.loadScreen('game', function() {
    game();
})

function game() {
    oxo.inputs.listenArrowKeys(function(key) {
        var character = document.getElementById('character');
        var ennemy = document.getElementById('obstacle');
        direction = key;
        oxo.animation.move(character, direction, 10);
        oxo.elements.onCollisionWithElementOnce(character, ennemy, function() {
            
        });
    });
}