oxo.screens.loadScreen('game', function() {
    game();
});

function game() {
    
    createObstacles();
    
    //initialisation des variables
    var character = document.getElementById('character');
    var finishline = document.getElementById('finishline');
    var yellowjacket = document.getElementById('yellowjacket');
    var water = document.querySelector('.water');
    var cap = document.getElementById('cap');
    var scorejacket = 0;
    var scorecap = 0;
    

    //bouger character avec les keys directionnelles
    oxo.animation.moveElementWithArrowKeys(character, 30);

    //Si collision avec le gilet jaune
    oxo.elements.onCollisionWithElementOnce(character, yellowjacket, function() {
        //on supprime l'element et on l'ajout à l'inventaire
        scorejacket = 1;
        yellowjacket.classList.add('invisible');
        document.querySelector('.game__score--jacket').innerText = "Gilet jaune : " + scorejacket + "/1";
    });

    oxo.elements.onCollisionWithElementOnce(character, cap, function() {
        //on supprime l'element et on l'ajout à l'inventaire
        scorecap = 1;
        cap.classList.add('invisible');
        document.querySelector('.game__score--cap').innerText = "Bonnet : " + scorecap + "/1";
    });


    //Si collision entre character et ligne d'arrivée
    oxo.elements.onCollisionWithElementOnce(character, finishline, function() {
        //le niveau est fini
        console.log('niveau fini');
        oxo.screens.loadScreen('end');
    });

    //canon a eau
    oxo.elements.onCollisionWithElementOnce(character, water, function() {
        //le niveau est fini
        console.log('game over');
        oxo.screens.loadScreen('end');
    });
};

function createObstacles() {
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(470px, 40px)'
        },
        appendTo: 'body' // optional
      });
      
      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(470px, 270px)'
        },
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(470px, 500px)'
        },
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(626px, 399px) rotate(90deg)'
        },
        appendTo: 'body' // optional
      });
      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(784px, 307px)'
        },
        appendTo: 'body' // optional
      });

}