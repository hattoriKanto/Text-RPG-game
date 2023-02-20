
import castleText from '../../castle__description.js';

const screenCastle = document.querySelector('#castle-screen');

const screenCastleBtn = screenCastle.querySelectorAll('.main__btn');

screenCastle.querySelectorAll('.main__btn').forEach(elem =>{

    elem.addEventListener('click', () =>{

        screenCastle.querySelector('.main').classList.toggle('rotation');

    });

});

function castle(){

    screenCastle.querySelector('.main__title').innerHTML = castleText.russian.castleEntrance.entranceName;

    screenCastle.querySelector('.main__desc').innerHTML = castleText.russian.castleEntrance.entranceDescr;

    for(let i = 0; i < screenCastleBtn.length; i++){

        if(screenCastleBtn[i].classList.contains('hide-btn') != true){

            screenCastleBtn[i].innerHTML = castleText.russian.castleEntrance.entranceBtn;

            screenCastleBtn[i].addEventListener('click', () =>{

                castleCourtyard();

            });

        };
        
    };

    screenCastle.classList.remove('hide');

};

function castleCourtyard(){

    const arrayCastleBtn = Object.values(castleText.russian.castleCourtyard.courtyardBtn);

    setTimeout(() => {

        screenCastle.querySelector('.main__title').innerHTML = castleText.russian.castleCourtyard.courtyardName;

        screenCastle.querySelector('.main__desc').innerHTML = castleText.russian.castleCourtyard.courtyardDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('hide-btn') === true){

                screenCastleBtn[i].classList.remove('hide-btn');

            };

            screenCastleBtn[i].innerHTML = arrayCastleBtn[i];

            if(screenCastleBtn[i].innerHTML === 'Осмотреть казармы'){

                screenCastleBtn[i].addEventListener('click', () =>{

                    castleBarracks();

                });

            };

            if(screenCastleBtn[i].innerHTML === 'Осмотреть подозрительный труп'){

                screenCastleBtn[i].addEventListener('click', () =>{

                    deadBody();

                });

            };

        };

    }, "500");

};

/// CASTLE---COURTYARD---BARRACKS

function castleBarracks(){

    setTimeout(() =>{

        screenCastle.querySelector('.main__title').innerHTML = castleText.russian.castleCourtyard.courtyardBarrakcs.barrakcsName;

        screenCastle.querySelector('.main__desc').innerHTML = castleText.russian.castleCourtyard.courtyardBarrakcs.barracksDescr;

        screenCastle.querySelectorAll('.main__btn').forEach(elem =>{

            if(elem.classList.contains('btn-1') === false){

                elem.classList.add('hide-btn');

            };

            elem.innerHTML = castleText.russian.castleCourtyard.courtyardBarrakcs.barracksBtn;

            elem.addEventListener('click', () =>{

                barracksInside();

            });

        });

    }, "500");

};

function barracksInside(){
    
    const arrayBtns = Object.values(castleText.russian.castleCourtyard.courtyardBarrakcs.barracksInside.barracksInsideNameBtn);

    setTimeout(() =>{

        screenCastle.querySelector('.main__title').innerHTML = castleText.russian.castleCourtyard.courtyardBarrakcs.barracksInside.barracksInsideName;

        screenCastle.querySelector('.main__desc').innerHTML = castleText.russian.castleCourtyard.courtyardBarrakcs.barracksInside.barracksInsideDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-3') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].innerHTML = arrayBtns[i];

        };


    }, "500");

};

/// CASTLE---COURTYARD---DEAD__BODY

function deadBody(){

    const arrayBtns = Object.values(castleText.russian.castleCourtyard.courtyardDeadBody.deadBodyBtn);

    setTimeout(() =>{

        screenCastle.querySelector('.main__title').innerHTML = castleText.russian.castleCourtyard.courtyardDeadBody.deadBodyName;

        screenCastle.querySelector('.main__desc').innerHTML = castleText.russian.castleCourtyard.courtyardDeadBody.deadBodyDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-3') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].innerHTML = arrayBtns[i];

            screenCastleBtn[i].addEventListener('click', () =>{

                if(screenCastleBtn[i].innerHTML === 'Осмотреть казармы'){
        
                    castleBarracks();
            
                };
    
            });

        };

    }, "500");
    
};

export default castle;