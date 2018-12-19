var character;
oxo.screens.loadScreen('game', function() {
    game();
    
});




//1er niveau
function game() {
    
    //creation des obstacles: bus, crs, tank etc
    createObstacles();
    
    //initialisation des variables
    character = document.querySelector('.game__character');
    var finishline = document.getElementById('finishline');
    var obstacles = document.querySelectorAll('.game__obstacle');
    var yellowjacket = document.getElementById('yellowjacket');
    var water = document.querySelector('.water');
    var enemies = document.querySelectorAll('.game__enemy');
    var cap = document.getElementById('cap');
    var scorejacket = 0;
    var scorecap = 0;
    

    //bouger character avec les keys directionnelles
    oxo.animation.moveElementWithArrowKeys(character, 150);

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
   oxo.elements.onCollisionWithElement(character,finishline, function(){
    if ( scorecap == 1 && scorejacket == 1){
      oxo.screens.loadScreen('game2', function(){
        game2();
      });
    };
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
// creation elements niveau 1
function createObstacles() {
   //Personnage principal
   var element = oxo.elements.createElement({
    type: 'div', // optional
    class: 'game__character', // optional,
    obstacle: false, // optional,
    styles: { // optional
      transform: 'translate(640px, 600px)'
    },
    appendTo: 'body' // optional
  });
// //canon a eau
//       var element = oxo.elements.createElement({
//         type: 'div', // optional
//         class: 'game__tank', // optional,
//         obstacle: true,// optional,
//         appendTo: '', // optional
//         styles: { // optional
//             transform: 'translate(10px, 300px)'
//           },
//       });

//       var element = oxo.elements.createElement({
//         type: 'div', // optional
//         class: 'water game__enemy', // optional,
        
//         appendTo: 'div.game__tank' // optional
//       });
// bus/voiture
      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(470px, 116px)'
        },
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(470px, 347px)'
        },
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(470px, 578px) '
        },
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(626px, 400px) rotate(90deg)'
        },
        appendTo: 'body' // optional
      });
      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(850px, 400px) rotate(90deg)'
        },
        appendTo: 'body' // optional

        
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(1000px, 325px)'
        },
        appendTo: 'body' // optional
    });

//Barrière 
    


      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(430px, 63px)'
        },
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(640px, 63px)'
        },
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(855px, 63px)'
        },
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
          transform: 'translate(1065px, 63px)'
        },
        appendTo: 'body' // optional
      });
//Ennemi/crs
      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy crs', // optional,
        appendTo: 'body' // optional
      });

      var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy ennemy2 crs', // optional,
        appendTo: 'body' // optional
      });

//      // ennemi smoke
//      var element = oxo.elements.createElement({
//         type: 'div', // optional
//         class: 'game__smoke game__enemy--smoke', // optional,
//         styles: { // optional
//           transform: 'translate(900px, 200px)'
//         },
//         appendTo: 'body' // optional
//       });
   

   
//    setDeadlySmoke();
//    setInterval(setDeadlySmoke, 6000);
}

function setDeadlySmoke() {
    //collision avec la fumée quand elle est active
   var smoke = document.querySelector('.game__smoke');
   var deadlysmoke = document.querySelectorAll('.game__enemy--smoke');

    
        smoke.classList.remove('game__enemy--smoke');
        deadlysmoke = document.querySelectorAll('.game__enemy--smoke');
    
    
        setTimeout(function () {
            smoke.classList.add('game__enemy--smoke');
            deadlysmoke = document.querySelectorAll('.game__enemy--smoke');
            
            deadlysmoke.forEach(element => {
                oxo.elements.onCollisionWithElementOnce(character, element, function() {
                    console.log(element);
                    if (element.classList.contains('game__enemy--smoke')) {
                         //le niveau est fini
                    console.log('niveau fini');
                    oxo.screens.loadScreen('end');
                    }
                   
                });
            })
            }, 1500);
    
        setTimeout(function () {
            smoke.classList.remove('game__enemy--smoke');
            deadlysmoke = document.querySelectorAll('.game__enemy--smoke');
            
        }, 4500);
    
        
}















//Fonction niveau 2
function game2() {
 
    //creation des obstacles: bus, crs, tank etc
  
   createObstacles2();
  
    //initialisation des variables
    character = document.querySelector('.game__character');
    var finishline = document.querySelector('.game__finishline');
    var obstacles = document.querySelectorAll('.game__obstacle');
    var water = document.querySelector('.water');
    var enemies = document.querySelectorAll('.game__enemy');
    var megaphone = document.getElementById('megaphone');
    var cone = document.getElementById('cone');
    var sign = document.getElementById('sign');
    var scorecone = 0;
    var scoremegaphone = 0;
    var scoresign = 0;
    
     //bouger character avec les keys directionnelles
    oxo.animation.moveElementWithArrowKeys(character, 30);  

    
  
    //Si collision entre character et ligne d'arrivée
    oxo.elements.onCollisionWithElement(character,finishline, function(){
      if ( scorecone !== 0 && scoremegaphone !== 0 && scoresign !==0){
        oxo.screens.loadScreen('game', function(){game()});
      }; 
  });
  
   //on supprime l'element et on l'ajoute à l'inventaire
    //Ajout du megaphone
    oxo.elements.onCollisionWithElementOnce(character, megaphone, function() {
      scoremegaphone = 1;
      megaphone.classList.add('invisible');
      document.querySelector('.game__score--megaphone').innerText = "Megaphone : " + scoremegaphone + "/1";
    });
    //Ajout du megaphone
    oxo.elements.onCollisionWithElementOnce(character, cone, function() {
      scorecone = 1;
      cone.classList.add('invisible');
      document.querySelector('.game__score--cone').innerText = " Cone de signalisation : " + scorecone + "/1";
    });
    //Ajout du panneau
    oxo.elements.onCollisionWithElementOnce(character, sign, function() {
      scoresign = 1;
      sign.classList.add('invisible');
      document.querySelector('.game__score--sign').innerText = " Panneau : " + scoresign + "/1";
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
  
  
  // Création des Élements du niveau 2
  function createObstacles2() {
    //Personnage principal
    var element = oxo.elements.createElement({
      type: 'div', // optional
      class: 'game__character', // optional,
      obstacle: false, // optional,
      styles: { // optional
        transform: 'translate(200px, 500px)'
      },
      appendTo: 'body' // optional
    });
  
    //Finish-line
    var element = oxo.elements.createElement({
      type: 'div', // optional
      class: 'game__finishline', // optional,
      obstacle: false, // optional,
      styles: { // optional
        transform: 'translate(640px, 20px)'
      },
      appendTo: 'body' // optional
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
        transform: 'translate(220px, 20px)'
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
      class: 'game__enemy crs', // optional,
      appendTo: 'body' // optional
    });
  
    var element = oxo.elements.createElement({
      type: 'div', // optional
      class: 'game__enemy ennemy2 crs', // optional,
      appendTo: 'body' // optional
    });
  
// ennemi smoke
var element = oxo.elements.createElement({
    type: 'div', // optional
    class: 'game__smoke game__enemy--smoke', // optional,
    styles: { // optional
      transform: 'translate(900px, 200px)'
    },
    appendTo: 'body' // optional
  });



setDeadlySmoke();
setInterval(setDeadlySmoke, 6000);
  };

// End Page 

var buttonGame = document.querySelector('.end__button--game');

buttonGame.addEventListener('click', function(){
  oxo.screens.loadScreen('game', function() {
    game();
  })
});