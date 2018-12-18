oxo.screens.loadScreen('game', function() {
    game();
    
});

function game() {
    
    //creation des obstacles: bus, crs, tank etc
    createObstacles();
    
    //initialisation des variables
    var character = document.getElementById('character');
    var finishline = document.getElementById('finishline');
    var obstacles = document.querySelectorAll('.game__obstacle');
    document.querySelector('.game__score--jacket').innerText += " " +scorejacket + "/1";
    var yellowjacket = document.getElementById('yellowjacket');
    var water = document.querySelector('.water');
    var enemies = document.querySelectorAll('.game__enemy');
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


    //Si collision entre character et ligne d'arrivée
    oxo.elements.onCollisionWithElementOnce(character, finishline, function() {
        //le niveau est fini
        console.log('niveau fini');
    });   


    
    oxo.elements.onCollisionWithElementOnce(character, cap, function() {
        //on supprime l'element et on l'ajout à l'inventaire
        scorecap = 1;
        cap.classList.add('invisible');
        document.querySelector('.game__score--cap').innerText = "Bonnet : " + scorecap + "/1";
    });

    //Si collision entre ennemis et character game over
    enemies.forEach(element => {
        oxo.elements.onCollisionWithElementOnce(character, element, function() {
            //le niveau est fini
            console.log('niveau fini');
            oxo.screens.loadScreen('end');
        });
    })
    
};

function createObstacles() {
   
//canon a eau
      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__tank', // optional,
        obstacle: true, // optional,
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'water game__enemy', // optional,
        
        appendTo: 'div.game__tank' // optional
      });
// bus/voiture
      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(470px, 80px)'
        },
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(470px, 310px)'
        },
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(470px, 540px)'
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
//Barrière 
      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(10px, 20px)'
        },
        appendTo: 'body' // optional
      });


      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(430px, 20px)'
        },
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(640px, 20px)'
        },
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(855px, 20px)'
        },
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(1065px, 20px)'
        },
        appendTo: 'body' // optional
      });
//Ennemi/crs
      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy', // optional,
        styles: { // optional
          transform: 'translate(1065px, 50px)'
        },
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy', // optional,
        styles: { // optional
          transform: 'translate(1035px, 50px)'
        },
        appendTo: 'body' // optional
      });

     // ennemi smoke
     var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__smoke', // optional,
        styles: { // optional
          transform: 'translate(900px, 200px)'
        },
        appendTo: 'body' // optional
      });
   

   //collision avec la fumée quand elle est active
   var smoke = document.querySelector('.game__smoke');
   var deadlysmoke = document.querySelectorAll('.game__enemy');

   setInterval(function () {
    smoke.classList.remove('game__enemy');
    deadlysmoke = document.querySelectorAll('.game__enemy');


    setTimeout(function () {
        smoke.classList.add('game__enemy');
        deadlysmoke = document.querySelectorAll('.game__enemy');
        
        deadlysmoke.forEach(element => {
            oxo.elements.onCollisionWithElementOnce(character, element, function() {
                //le niveau est fini
                console.log('niveau fini');
                oxo.screens.loadScreen('end');
            });
        })
        }, 1500);

    setTimeout(function () {
        smoke.classList.remove('game__enemy');
        deadlysmoke = document.querySelectorAll('.game__enemy');
        
    }, 4500);

}, 6000);
}
