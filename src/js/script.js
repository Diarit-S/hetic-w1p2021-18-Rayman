oxo.screens.loadScreen('game', function() {
    game();
});

function game() {
    //initialisation des variables
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        appendTo: 'body' // optional
    });
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle second', // optional,
        obstacle: true, // optional,
        appendTo: 'body' // optional
    });
    var character = document.getElementById('character');
    var finishline = document.getElementById('finishline');
    var yellowjacket = document.getElementById('yellowjacket');

    //bouger character avec les keys directionnelles
    oxo.animation.moveElementWithArrowKeys(character, 30);

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