var character;

// oxo.screens.loadScreen('game2', function() {
//     game2();

// });


setTimeout(() => {
    var playBtn = document.querySelector('.home__play');
    playBtn.addEventListener('click', function () {
        console.log("jhebfbdbhf")
        oxo.screens.loadScreen('game', function () {
            game();
        })
    })
}, 100);




document.addEventListener('keypress', (event) => {
    if (event.key == "a") {
        oxo.screens.loadScreen('game', function () {
            game();
        });
    }
    else if (event.key == "b") {
        oxo.screens.loadScreen('game2', function () {
            game2();
        });
    }
    else if (event.key == "c") {
        oxo.screens.loadScreen('game3', function () {
            game3();
        });
    };


});





//1er niveau
function game() {

    //creation des obstacles: bus, crs, tank etc
    createObstacles();

    //initialisation des variables
    character = document.querySelector('.game__character');
    var finishline = document.querySelector('.game__finishline');
    var obstacles = document.querySelectorAll('.game__obstacle');
    var yellowjacket = document.getElementById('yellowjacket');
    var water = document.querySelector('.water');
    var enemies = document.querySelectorAll('.game__enemy');
    var cap = document.getElementById('cap');
    var scorejacket = 0;
    var scorecap = 0;
    var falsebarier = document.querySelector('.false__barier');
    var audio = document.getElementById('sound');



    //bouger character avec les keys directionnelles
    oxo.animation.moveElementWithArrowKeys(character, 150);

    //Si collision avec le gilet jaune
    oxo.elements.onCollisionWithElementOnce(character, yellowjacket, function () {
        //on supprime l'element et on l'ajout à l'inventaire
        scorejacket = 1;
        audio.play();
        yellowjacket.classList.add('invisible');
        document.querySelector('.game__score--jacket').innerText = "Gilet jaune : " + scorejacket + "/1";
    });



    oxo.elements.onCollisionWithElementOnce(character, cap, function () {
        //on supprime l'element et on l'ajout à l'inventaire
        scorecap = 1;
        audio.play();
        cap.classList.add('invisible');
        document.querySelector('.game__score--cap').innerText = "Bonnet : " + scorecap + "/1";
    });

    // Si tous les objets récoltés
    setInterval(function () {
        if (scorecap == 1 && scorejacket == 1) {
            finishline.classList.remove('game__barriere');
            falsebarier.classList.add('is-open');

        };
    }, 500)


    //Si collision entre character et ligne d'arrivée
    oxo.elements.onCollisionWithElement(character, finishline, function () {
        if (scorecap == 1 && scorejacket == 1) {
            oxo.screens.loadScreen('game2', function () {
                game2();
            });
        };
    });

    //Si collision entre ennemis et character game over
    enemies.forEach(element => {
        oxo.elements.onCollisionWithElementOnce(character, element, function () {
            //le niveau est fini
            console.log('niveau fini');
            oxo.screens.loadScreen('lost');
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

    //finishline 
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere game__finishline', // optional,
        obstacle: false, // optional,
        styles: { // optional
            transform: 'translate(550px, 200px)'
        },
        appendTo: 'body' // optional
    });


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

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(780px, 0px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(700px, 250px) rotate(270deg)'
        },
        appendTo: 'body' // optional
    });

    //poubelles
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__trash', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(550px, 335px) '
        },
        appendTo: 'body' // optional
    });
    // fausse barrière
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'false__barier game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(550px, 200px)'
        },
        appendTo: 'body' // optional
    });

    //Barrière 
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(660px, 100px) rotate(90deg)'
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
        class: 'game__enemy enemy1 crs', // optional,
        appendTo: 'body' // optional
    });


    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy2 crs', // optional,
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy3 crs',
        // styles: {
        //     transform: 'translate(700px, 200px)',
        //     animation: 'move3 4s infinite alternate linear' // optional,
        //  }, 
        appendTo: 'body' // optional);
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy4 crs', // optional,
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




//   function setDeadlySmoke() {
//     //collision avec la fumée quand elle est active
//     var smoke = document.querySelector('.game__smoke');
//     var deadlysmoke = document.querySelectorAll('.game__enemy--smoke');


//     smoke.classList.remove('game__enemy--smoke');
//     deadlysmoke = document.querySelectorAll('.game__enemy--smoke');


//     setTimeout(function () {
//       smoke.classList.add('game__enemy--smoke');
//       deadlysmoke = document.querySelectorAll('.game__enemy--smoke');

//       deadlysmoke.forEach(element => {
//         oxo.elements.onCollisionWithElementOnce(character, element, function() {
//           console.log(element);
//           if (element.classList.contains('game__enemy--smoke')) {
//             //le niveau est fini
//             console.log('niveau fini');
//             oxo.screens.loadScreen('lost');
//           }

//         });
//       })
//     }, 1500);

//     setTimeout(function () {
//       smoke.classList.remove('game__enemy--smoke');
//       deadlysmoke = document.querySelectorAll('.game__enemy--smoke');

//     }, 4500);


//   }













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
    var falsebarier = document.querySelector('.false__barier');

    //bouger character avec les keys directionnelles
    oxo.animation.moveElementWithArrowKeys(character, 150);


    // Si tous les objets récoltés

    setInterval(function () {
        if (scorecone == 1 && scoremegaphone == 1 && scoresign == 1) {
            finishline.classList.remove('game__barriere--short');
            falsebarier.classList.add('is-open');
        };
    }, 500)


    //Si collision entre character et ligne d'arrivée
    oxo.elements.onCollisionWithElement(character, finishline, function () {
        if (scorecone == 1 && scoremegaphone == 1 && scoresign == 1) {
            oxo.screens.loadScreen('game3', function () {
                game3();
            });
        };
    });

    //on supprime l'element et on l'ajoute à l'inventaire
    //Ajout du megaphone
    oxo.elements.onCollisionWithElementOnce(character, megaphone, function () {
        scoremegaphone = 1;
        megaphone.classList.add('invisible');
        document.querySelector('.game__score--megaphone').innerText = "Megaphone : " + scoremegaphone + "/1";
    });
    //Ajout du megaphone
    oxo.elements.onCollisionWithElementOnce(character, cone, function () {
        scorecone = 1;
        cone.classList.add('invisible');
        document.querySelector('.game__score--cone').innerText = " Cone de signalisation : " + scorecone + "/1";
    });
    //Ajout du panneau
    oxo.elements.onCollisionWithElementOnce(character, sign, function () {
        scoresign = 1;
        sign.classList.add('invisible');
        document.querySelector('.game__score--sign').innerText = " Panneau : " + scoresign + "/1";
    });



    //Si collision entre ennemis et character game over
    enemies.forEach(element => {
        oxo.elements.onCollisionWithElementOnce(character, element, function () {
            //le niveau est fini
            console.log('niveau fini');
            oxo.screens.loadScreen('lost');
        });
    })

};


// Création des Élements du niveau 2
function createObstacles2() {
    //Personnage principal
    var character = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__character', // optional,
        obstacle: false, // optional,
        styles: { // optional
            transform: 'translate(120px, 750px)'
        },
        appendTo: 'body' // optional
    });


    //finishline              
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere--short game__finishline', // optional,
        obstacle: false, // optional,
        styles: { // optional
            transform: 'translate(550px, 150px)'
        },
        appendTo: 'body' // optional
    });
    // fausse barrière
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'false__barier game__barriere--short', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(550px, 150px)'
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
            transform: 'translate(275px, 440px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(700px, 399px) rotate(90deg)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(793px, 250px) '
        },
        appendTo: 'body' // optional
    });



    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(1100px, 599px) rotate(90deg)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(800px, 0px) rotate(270deg)'
        },
        appendTo: 'body' // optional
    });

    //trash

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__trash', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(849px, 468px) '
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__trash', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(300px, 368px) '
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__trash', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(480px, 310px) '
        },
        appendTo: 'body' // optional
    });

    //Barrière 
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(0px, 60px)'
        },
        appendTo: 'body' // optional
    });


    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere--short', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(410px, 60px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(205px, 60px)'
        },
        appendTo: 'body' // optional
    });



    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(882px, 60px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(1080px, 60px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere--shortest', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(670px, 90px) rotate(90deg)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere--short', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(725px, 60px)'
        },
        appendTo: 'body' // optional
    });

    //Ennemi/crs

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy5 crs', // optional,
        styles: { // optional
            transform: 'translate(490px, 520px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy6 crs', // optional,
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy7 crs', // optional,
        styles: { // optional
            transform: 'translate(0px, 570px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy8 crs', // optional,
        styles: { // optional
            transform: 'translate(0px, 485px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy9 crs', // optional,
        styles: { // optional
            transform: 'translate(240px, 520px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy10 crs', // optional,
        styles: { // optional
            transform: 'translate(240px, 440px)'
        },
        appendTo: 'body' // optional
    });


    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy11 crs', // optional,
        styles: { // optional
            transform: 'translate(0px, 400px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy12 crs', // optional,
        styles: { // optional
            transform: 'translate(370px, 500px)'
        },
        appendTo: 'body' // optional
    });


    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy13 crs', // optional,
        styles: { // optional
            transform: 'translate(240px, 610px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy14 crs', // optional,
        styles: { // optional
            transform: 'translate(560px, 500px)'
        },
        appendTo: 'body' // optional
    });
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy15 crs', // optional,
        appendTo: 'body' // optional
    });


    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy16 crs', // optional,
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy enemy17 crs', // optional,
        appendTo: 'body' // optional
    });






    // ennemi smoke

    createSmoke(890, 400, character);
    createSmoke(1030, 400, character);
    createSmoke(1170, 400, character);
    createSmoke(555, 180, character);
    createSmoke(630, 180, character);
    createSmoke(690, 180, character);
    createSmoke(555, 250, character);
    createSmoke(630, 250, character);
    createSmoke(690, 250, character);
    createSmoke(275, 96, character);
    createSmoke(275, 151, character);
    createSmoke(275, 300, character);
    createSmoke(275, 230, character);
    createSmoke(457, 584, character);
    createSmoke(457, 649, character);
    createSmoke(457, 713, character);
    createSmoke(1170, 320, character);
    createSmoke(1080, 320, character);
    createSmoke(1170, 230, character);
    createSmoke(1080, 230, character)


    





    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(890px, 400px)'
    //     },
    //     appendTo: 'body' // optional
    // });


    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(1030px, 400px)'
    //     },
    //     appendTo: 'body' // optional
    // });

    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(1170px, 400px)'
    //     },
    //     appendTo: 'body' // optional 
    // });

    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(555px, 180px)'
    //     },
    //     appendTo: 'body' // optional
    // });




    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(630px, 180px)'
    //     },
    //     appendTo: 'body' // optional
    // });

    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(690px, 180px)'
    //     },
    //     appendTo: 'body' // optional 
    // });

    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(555px, 250px)'
    //     },
    //     appendTo: 'body' // optional
    // });




    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(630px, 250px)'
    //     },
    //     appendTo: 'body' // optional
    // });

    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(690px, 250px)'
    //     },
    //     appendTo: 'body' // optional 
    // });

    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(275px, 96px)'
    //     },
    //     appendTo: 'body' // optional 
    // });
    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(275px, 161px)'
    //     },
    //     appendTo: 'body' // optional 
    // });
    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(275px, 300px)'
    //     },
    //     appendTo: 'body' // optional 
    // });
    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(275px, 230px)'
    //     },
    //     appendTo: 'body' // optional 
    // });

    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(457px, 584px)'
    //     },
    //     appendTo: 'body' // optional 
    // });
    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(457px, 649px)'
    //     },
    //     appendTo: 'body' // optional 
    // });
    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(457px, 713px)'
    //     },
    //     appendTo: 'body' // optional 
    // });

    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(1170px, 320px)'
    //     },
    //     appendTo: 'body' // optional
    // });

    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(1080px, 320px)'
    //     },
    //     appendTo: 'body' // optional
    // });

    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(1170px, 230px)'
    //     },
    //     appendTo: 'body' // optional
    // });

    // var element = oxo.elements.createElement({
    //     type: 'div', // optional
    //     class: 'game__smoke game__enemy--smoke', // optional,
    //     styles: { // optional
    //         transform: 'translate(1080px, 230px)'
    //     },
    //     appendTo: 'body' // optional
    // });


    var smokes = document.querySelectorAll('.game__smoke');
    smokes.forEach(smoke => {
        setInterval(function () { setDeadlySmoke(smoke); }, 6000);
        //    setDeadlySmoke();
        //    setInterval(setDeadlySmoke, 6000);
    })



    //Si collision avec la smoke

}




function setDeadlySmoke(smoky) {


    smoky.classList.remove('game__enemy--smoke');

    setTimeout(function () {
        smoky.classList.add('game__enemy--smoke');
    }, 1500);

    setTimeout(function () {
        smoky.classList.remove('game__enemy--smoke');

    }, 4500);

}














function createSmoke(x, y, character) {
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__smoke game__enemy--smoke', // optional,
        styles: { // optional
            transform: 'translate(' + x + 'px, ' + y + 'px)'
        },
        appendTo: 'body' // optional
    });
    
    oxo.elements.onCollisionWithElement(character, element, function() {
        console.log(element.classList.contains('game__enemy--smoke'))
        if (element.classList.contains('game__enemy--smoke')) {
            oxo.screens.loadScreen('lost');
        }
        
    });    
}





















function game3() {
    createElements3();




    var character = document.querySelector('.game__character');
    var water = document.querySelector('.water');
    var enemies = document.querySelectorAll('.game__enemy');
    var obstacles = document.querySelectorAll('.game__obstacle');

    var fumi = document.querySelector('.game__fumi');
    var pave = document.querySelector('.game__pave');
    var scorepave = 0;
    var scorefumi = 0;
    var textpave = document.getElementById('pave');
    var textfumi = document.getElementById('fumi');
    var finishline = document.querySelector('.game__finishline');
    var falsebarier = document.querySelector('.false__barier');

    oxo.animation.moveElementWithArrowKeys(character, 150);


    //Si collision entre ennemis et character game over
    enemies.forEach(element => {
        oxo.elements.onCollisionWithElementOnce(character, element, function () {
            //le niveau est fini
            console.log('niveau fini');
            oxo.screens.loadScreen('lost');
        });
    });

    oxo.elements.onCollisionWithElementOnce(character, pave, function () {
        pave.classList.add('invisible');
        scorepave++;
        textpave.innerHTML = 'Pave: 1/1';
    });
    oxo.elements.onCollisionWithElementOnce(character, fumi, function () {
        fumi.classList.add('invisible');
        scorefumi++;
        textfumi.innerHTML = 'Fumigene: 1/1';
    });

    // Si tous les objets récoltés

    setInterval(function () {
        if (scorepave == 1 && scorefumi == 1) {
            console.log("items ok");
            finishline.classList.remove('game__barriere--short');
            falsebarier.classList.add('is-open');
        };
    }, 500)


    //Si collision entre character et ligne d'arrivée
    oxo.elements.onCollisionWithElement(character, finishline, function () {
        if (scorepave == 1 && scorefumi == 1) {
            oxo.screens.loadScreen('end', function () {
                end();
            });
        };
    });

}




function createElements3() {
    //character
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__character', // optional,
        obstacle: false,
        styles: {
            transform: 'translate(100px, 750px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__pave', // optional,
        obstacle: false,
        styles: {
            transform: 'translate(290px, 750px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__fumi', // optional,
        obstacle: false,
        styles: {
            transform: 'translate(340px, 750px)'
        },
        appendTo: 'body' // optional
    });

    //tank
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__tank', // optional,
        obstacle: true,
        styles: {
            transform: 'translate(168px, 569px) scaleX(-1)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'water game__enemy', // optional,
        appendTo: 'div.game__tank' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__tank second', // optional,
        obstacle: true,
        styles: {
            transform: 'translate(647px, 404px)',
            animation: 'move34 1s infinite alternate linear'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'water game__enemy',
        appendTo: '.second' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__tank fourth', // optional,
        obstacle: true,
        styles: {
            transform: 'translate(993px, 176px) scaleX(-1)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'water game__enemy',
        appendTo: '.fourth' // optional
    });

    //bus/voitures
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true,
        styles: {
            transform: 'translate(161px, 668px)'
        },
        appendTo: 'body' // optional
    });
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true,
        styles: {
            transform: 'translate(84px, 263px) rotate(90deg)'
        },
        appendTo: 'body' // optional
    });
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true,
        styles: {
            transform: 'translate(448px, 253px) rotate(90deg)'
        },
        appendTo: 'body' // optional
    });
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true,
        styles: {
            transform: 'translate(948px, 588px)',
        },
        appendTo: 'body' // optional
    });
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true,
        styles: {
            transform: 'translate(1115px, 467px) rotate(90deg)',
        },
        appendTo: 'body' // optional
    });
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__obstacle', // optional,
        obstacle: true,
        styles: {
            transform: 'translate(618px, 498px)',
        },
        appendTo: 'body' // optional
    });
    //crs
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy crs',
        styles: {
            transform: 'translate(262px, 369px)',
            animation: 'move31 0.8s infinite alternate linear'
        },
        appendTo: 'body' // optional
    });
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy crs',
        styles: {
            transform: 'translate(769px, 665px)',
            animation: 'move32 0.5s infinite alternate linear'
        },
        appendTo: 'body' // optional
    });
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__enemy crs',
        styles: {
            transform: 'translate(950px, 226px)',
            animation: 'move33 0.5s infinite alternate linear'
        },
        appendTo: 'body' // optional
    });
    //poubelles
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__trash',
        obstacle: true,
        styles: {
            transform: 'translate(243px, 509px)',
        },
        appendTo: 'body' // optional
    });
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__trash',
        obstacle: true,
        styles: {
            transform: 'translate(606px, 359px)',
        },
        appendTo: 'body' // optional
    });
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__trash',
        obstacle: true,
        styles: {
            transform: 'translate(686px, 650px)',
        },
        appendTo: 'body' // optional
    });
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__trash',
        obstacle: true,
        styles: {
            transform: 'translate(245px, 307px)',
        },
        appendTo: 'body' // optional
    });
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__trash',
        obstacle: true,
        styles: {
            transform: 'translate(295px, 320px)',
        },
        appendTo: 'body' // optional
    });


    //barriere
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(5px, 138px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(210px, 138px)'
        },
        appendTo: 'body' // optional
    });


    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere--short', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(410px, 138px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere--short', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(730px, 138px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(883px, 138px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(1080px, 138px)'
        },
        appendTo: 'body' // optional
    });

    //finishline              
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__barriere--short game__finishline', // optional,
        obstacle: false, // optional,
        styles: { // optional
            transform: 'translate(570px, 138px)'
        },
        appendTo: 'body' // optional
    });

    // fausse barrière
    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'false__barier game__barriere--short', // optional,
        obstacle: true, // optional,
        styles: { // optional
            transform: 'translate(570px, 138px)'
        },
        appendTo: 'body' // optional
    });

    //smokes

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__smoke game__enemy--smoke', // optional,
        styles: { // optional
            transform: 'translate(330px, 400px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__smoke game__enemy--smoke', // optional,
        styles: { // optional
            transform: 'translate(330px, 480px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__smoke game__enemy--smoke', // optional,
        styles: { // optional
            transform: 'translate(450px, 400px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__smoke game__enemy--smoke', // optional,
        styles: { // optional
            transform: 'translate(450px, 480px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__smoke game__enemy--smoke', // optional,
        styles: { // optional
            transform: 'translate(500px, 580px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__smoke game__enemy--smoke', // optional,
        styles: { // optional
            transform: 'translate(500px, 680px)'
        },
        appendTo: 'body' // optional
    });

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__smoke game__enemy--smoke', // optional,
        styles: { // optional
            transform: 'translate(380px, 680px)'
        },
        appendTo: 'body' // optional
    });


    var smokes = document.querySelectorAll('.game__smoke');
    smokes.forEach(smoke => {
        setInterval(function () { setDeadlySmoke(smoke); }, 6000);
        //    setDeadlySmoke();
        //    setInterval(setDeadlySmoke, 6000);
    })
}




