import castleEntranceRus from '../text/castle/russian/castleEntranceRus.js';

import castleCourtyardRus from '../text/castle/russian/castleCourtyardRus.js';

import castleStablesRus from '../text/castle/russian/castleStablesRus.js';

import castleBarracksRus from '../text/castle/russian/castleBarracksRus.js';

const screenCastle = document.querySelector('#castle-screen');

const screenCastleDescr = screenCastle.querySelector('.main__desc');

const screenCastleTitle = screenCastle.querySelector('.main__title');

const mainFooter = screenCastle.querySelector('.main__footer');

function addElements(arrayBtns, arrayLength){

    for(let i = 0; i < arrayLength; i++){

        const button = document.createElement('button');

        mainFooter.appendChild(button);

        button.className = 'main__btn button';

        button.innerText = arrayBtns[i];

    };

};

function addSingleBtn(){

    const button = document.createElement('button');

    mainFooter.appendChild(button);

    button.className = 'main__btn button';

};

function changeSlide(){

    setTimeout(() =>{

        screenCastle.querySelectorAll('.button').forEach(elem =>{

            elem.remove();

        });
            
    }, '650');

    screenCastle.querySelector('.main').classList.toggle('rotation');

};

castle();

function castle(){

    screenCastle.classList.remove('hide-screen');

    const arrayBtns = Object.values(castleEntranceRus.button);

    const arrayLength = arrayBtns.length;

    addElements(arrayBtns, arrayLength);

    screenCastleTitle.innerText = castleEntranceRus.title;
    
    screenCastleDescr.innerText = castleEntranceRus.descr;

    screenCastle.querySelector('.button').addEventListener('click', () =>{

        changeSlide();

        castleCourtyard();

    });

};

function castleCourtyard(){

    const arrayBtns = Object.values(castleCourtyardRus.button);

    setTimeout(() => {

        const arrayLength = arrayBtns.length;

        addElements(arrayBtns, arrayLength);

        screenCastleTitle.innerText = castleCourtyardRus.title;

        screenCastleDescr.innerText = castleCourtyardRus.descr;

        const screenCastleBtns = screenCastle.querySelectorAll('.button');

        addEventListener(screenCastleBtns);

    }, '650');

    function addEventListener(screenCastleBtns){

        for(let i = 0; i < screenCastleBtns.length; i++){

            screenCastleBtns[i].addEventListener('click', () =>{
    
                if(screenCastleBtns[i].innerText === castleCourtyardRus.button.firstBtn){

                    changeSlide();

                    castleStables();

                };

                if(screenCastleBtns[i].innerText === castleCourtyardRus.button.secondBtn){

                    changeSlide();

                    castleBarracks();

                };

                if(screenCastleBtns[i].innerText === castleCourtyardRus.button.thirdBtn){

                    changeSlide();

                    deadBody();

                };
    
            });
    
        };

    };

};

/// CASTLE---COURTYARD---STABLE---START

function castleStables(){

    castleBarracksRus.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.button);

    setTimeout(() =>{

        const arrayLength = arrayBtns.length;

        addElements(arrayBtns, arrayLength);

        screenCastleTitle.innerText = castleStablesRus.title;

        screenCastleDescr.innerText = castleStablesRus.descr;
    
        const screenCastleBtns = screenCastle.querySelectorAll('.button');
    
        addEventListener(screenCastleBtns);
    
    }, '650');

    function addEventListener(screenCastleBtns){

        for(let i = 0; i < screenCastleBtns.length; i++){

            screenCastleBtns[i].addEventListener('click', () =>{
    
                if(screenCastleBtns[i].innerText === castleStablesRus.button.firstBtn){

                    changeSlide();

                    stablesInside();

                };

                if(screenCastleBtns[i].innerText === castleStablesRus.button.secondBtn){

                    changeSlide();

                    stablesDoor();

                };
    
            });

        };

    };

};

function stablesInside(){

    castleStablesRus.stablesInside.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stablesInside.button);

    setTimeout(() =>{

        const arrayLength = arrayBtns.length;

        addElements(arrayBtns, arrayLength);

        screenCastleTitle.innerText = castleStablesRus.stablesInside.title;

        screenCastleDescr.innerText = castleStablesRus.stablesInside.descr;
    
        const screenCastleBtns = screenCastle.querySelectorAll('.button');
    
        addEventListener(screenCastleBtns);
    
    }, '650');

    function addEventListener(screenCastleBtns){

        for(let i = 0; i < screenCastleBtns.length; i++){

            screenCastleBtns[i].addEventListener('click', () =>{
    
                if(screenCastleBtns[i].innerText === castleStablesRus.stablesInside.button.firstBtn){

                    changeSlide();

                    stablesPile();

                };

                if(screenCastleBtns[i].innerText === castleStablesRus.stablesInside.button.secondBtn){

                    changeSlide();

                    stablesLeft();

                };

                if(screenCastleBtns[i].innerText === castleStablesRus.stablesInside.button.thirdBtn){

                    changeSlide();

                    stablesRight();

                };
    
            });

        };

    };

};

function stablesDoor(){

    castleStablesRus.stablesDoor.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stablesDoor.button);

    setTimeout(() =>{

        const arrayLength = arrayBtns.length;

        addElements(arrayBtns, arrayLength);

        screenCastleTitle.innerText = castleStablesRus.stablesDoor.title;

        screenCastleDescr.innerText = castleStablesRus.stablesDoor.descr;
    
        const screenCastleBtns = screenCastle.querySelectorAll('.button');
    
        addEventListener(screenCastleBtns);
    
    }, '650');

    function addEventListener(screenCastleBtns){

        for(let i = 0; i < screenCastleBtns.length; i++){

            screenCastleBtns[i].addEventListener('click', () =>{
    
                if(screenCastleBtns[i].innerText === castleStablesRus.stablesDoor.button.firstBtn){

                    changeSlide();

                    stablesWalls();

                };

                if(screenCastleBtns[i].innerText === castleStablesRus.stablesDoor.button.secondBtn){

                    changeSlide();

                    stablesFloor();;

                };

                if(screenCastleBtns[i].innerText === castleStablesRus.stablesDoor.button.thirdBtn){

                    changeSlide();

                    stablesWindow();

                };
    
            });

        };

    };

};

function stablesWalls(){

    castleStablesRus.stablesWalls.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stablesWalls.button);

    setTimeout(() =>{

        if(castleStablesRus.stablesFloor.isVisited === false && castleStablesRus.stablesWindow.isVisited === false){

            const arrayLength = arrayBtns.length - 2;
            
            addElements(arrayBtns, arrayLength);

            const screenCastleBtns = screenCastle.querySelectorAll('.button');
    
            addEventListener(screenCastleBtns);

            function addEventListener(screenCastleBtns){

                screenCastleBtns.forEach(elem =>{

                    elem.addEventListener('click', () =>{

                        if(elem.innerText === arrayBtns[0]){
    
                            changeSlide();
    
                            stablesFloor();
    
                        };
    
                        if(elem.innerText === arrayBtns[1]){
    
                            changeSlide();
    
                            stablesWindow();
    
                        };

                    });

                });

            };

        };

        if(castleStablesRus.stablesFloor.isVisited === false && castleStablesRus.stablesWindow.isVisited === true){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[0];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesFloor();

            });

        };

        if(castleStablesRus.stablesFloor.isVisited === true && castleStablesRus.stablesWindow.isVisited === false){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[1];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesWindow();

            });

        };

        if(castleStablesRus.stablesFloor.isVisited === false && castleStablesRus.stablesWindow.isVisited === true){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[2];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesFloor();

            });

        };

        if(castleStablesRus.stablesFloor.isVisited === true && castleStablesRus.stablesWindow.isVisited === true && castleStablesRus.stablesInside.isVisited === true){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[3];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                castleCourtyard();

            });

        };

        screenCastleTitle.innerText = castleStablesRus.stablesWalls.title;

        screenCastleDescr.innerText = castleStablesRus.stablesWalls.descr;
            
    }, '650');

};

function stablesFloor(){

    castleStablesRus.stablesFloor.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stablesFloor.button);

    setTimeout(() =>{

        if(castleStablesRus.stablesWalls.isVisited === false && castleStablesRus.stablesWindow.isVisited === false){

            const arrayLength = arrayBtns.length - 2;

            addElements(arrayBtns, arrayLength);

            const screenCastleBtns = screenCastle.querySelectorAll('.button');
    
            addEventListener(screenCastleBtns);

            function addEventListener(screenCastleBtns){

                screenCastleBtns.forEach(elem =>{

                    elem.addEventListener('click', () =>{

                        if(elem.innerText === arrayBtns[0]){
    
                            changeSlide();
    
                            stablesWalls();
    
                        };
    
                        if(elem.innerText === arrayBtns[1]){
    
                            changeSlide();
    
                            stablesWindow();
    
                        };

                    });

                });

            };

        };

        if(castleStablesRus.stablesWalls.isVisited === false && castleStablesRus.stablesWindow.isVisited === true){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[0];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesWalls();

            });

        };

        if(castleStablesRus.stablesWalls.isVisited === true && castleStablesRus.stablesWindow.isVisited === false){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[1];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesWindow();

            });

        };

        if(castleStablesRus.stablesWalls.isVisited === true && castleStablesRus.stablesWindow.isVisited === true){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[2];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesInside();

            });

        };

        if(castleStablesRus.stablesWalls.isVisited === true && castleStablesRus.stablesWindow.isVisited === true && castleStablesRus.stablesInside.isVisited === true){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[3];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                castleCourtyard();

            });

        };

        screenCastleTitle.innerText = castleStablesRus.stablesFloor.title;

        screenCastleDescr.innerText = castleStablesRus.stablesFloor.descr;
            
    }, '650');

};

function stablesWindow(){

    castleStablesRus.stablesWindow.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stablesWindow.button);

    setTimeout(() =>{

        if(castleStablesRus.stablesWalls.isVisited === false && castleStablesRus.stablesFloor.isVisited === false){

            const arrayLength = arrayBtns.length - 2;
            
            addElements(arrayBtns, arrayLength);

            const screenCastleBtns = screenCastle.querySelectorAll('.button');
    
            addEventListener(screenCastleBtns);

            function addEventListener(screenCastleBtns){

                screenCastleBtns.forEach(elem =>{

                    elem.addEventListener('click', () =>{

                        if(elem.innerText === arrayBtns[0]){
    
                            changeSlide();
    
                            stablesWalls();
    
                        };
    
                        if(elem.innerText === arrayBtns[1]){
    
                            changeSlide();
    
                            stablesFloor();
    
                        };

                    });

                });

            };

        };

        if(castleStablesRus.stablesWalls.isVisited === false && castleStablesRus.stablesFloor.isVisited === true){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[0];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesWalls();

            });

        };

        if(castleStablesRus.stablesWalls.isVisited === true && castleStablesRus.stablesFloor.isVisited === false){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[1];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesFloor();

            });

        };

        if(castleStablesRus.stablesWalls.isVisited === true && castleStablesRus.stablesFloor.isVisited === true && castleStablesRus.stablesInside.isVisited === false){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[2];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesInside();

            });

        };

        if(castleStablesRus.stablesWalls.isVisited === true && castleStablesRus.stablesFloor.isVisited === true && castleStablesRus.stablesInside.isVisited === true){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[3];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                castleCourtyard();

            });

        };

        screenCastleTitle.innerText = castleStablesRus.stablesWindow.title;

        screenCastleDescr.innerText = castleStablesRus.stablesWindow.descr;
            
    }, '650');

};

function stablesRight(){

    castleStablesRus.stablesRight.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stablesRight.button);

    setTimeout(() =>{

        if(castleStablesRus.stablesPile.isVisited === false && castleStablesRus.stablesLeft.isVisited === false && castleStablesRus.stablesDoor.isVisited === false){

            const arrayLength = arrayBtns.length - 2;

            addElements(arrayBtns, arrayLength);

            const screenCastleBtns = screenCastle.querySelectorAll('.button');
    
            addEventListener(screenCastleBtns);

            function addEventListener(screenCastleBtns){

                screenCastleBtns.forEach(elem =>{

                    elem.addEventListener('click', () =>{

                        if(elem.innerText === arrayBtns[0]){
    
                            changeSlide();
    
                            stablesPile();
    
                        };
    
                        if(elem.innerText === arrayBtns[1]){
    
                            changeSlide();
    
                            stablesLeft();
    
                        };

                    });

                });

            };

        };

        if(castleStablesRus.stablesPile.isVisited === false && castleStablesRus.stablesLeft.isVisited === true && castleStablesRus.stablesDoor.isVisited === false){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[0];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesPile();

            });

        };

        if(castleStablesRus.stablesPile.isVisited === true && castleStablesRus.stablesLeft.isVisited === false && castleStablesRus.stablesDoor.isVisited === false){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[1];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesLeft();

            });

        };

        if(castleStablesRus.stablesPile.isVisited === true && castleStablesRus.stablesLeft.isVisited === true && castleStablesRus.stablesDoor.isVisited === false){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[2];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesDoor();

            });

        };

        if(castleStablesRus.stablesPile.isVisited === true && castleStablesRus.stablesLeft.isVisited === true && castleStablesRus.stablesDoor.isVisited === true){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[3];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                castleCourtyard();

            });

        };

        screenCastleTitle.innerText = castleStablesRus.stablesRight.title;

        screenCastleDescr.innerText = castleStablesRus.stablesRight.descr;
            
    }, '650');

};

function stablesLeft(){

    castleStablesRus.stablesLeft.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stablesLeft.button);

    setTimeout(() =>{

        if(castleStablesRus.stablesPile.isVisited === false && castleStablesRus.stablesRight.isVisited === false && castleStablesRus.stablesDoor.isVisited === false){

            const arrayLength = arrayBtns.length - 2;

            addElements(arrayBtns, arrayLength);

            const screenCastleBtns = screenCastle.querySelectorAll('.button');
    
            addEventListener(screenCastleBtns);

            function addEventListener(screenCastleBtns){

                screenCastleBtns.forEach(elem =>{

                    elem.addEventListener('click', () =>{

                        if(elem.innerText === arrayBtns[0]){
    
                            changeSlide();
    
                            stablesPile();
    
                        };
    
                        if(elem.innerText === arrayBtns[1]){
    
                            changeSlide();
    
                            stablesRight();
    
                        };

                    });

                });

            };

        };

        if(castleStablesRus.stablesPile.isVisited === false && castleStablesRus.stablesRight.isVisited === true && castleStablesRus.stablesDoor.isVisited === false){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[0];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesPile();

            });

        };

        if(castleStablesRus.stablesPile.isVisited === true && castleStablesRus.stablesRight.isVisited === false && castleStablesRus.stablesDoor.isVisited === false){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[1];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesRight();

            });

        };

        if(castleStablesRus.stablesPile.isVisited === true && castleStablesRus.stablesRight.isVisited === true && castleStablesRus.stablesDoor.isVisited === false){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[2];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesDoor();

            });

        };

        if(castleStablesRus.stablesPile.isVisited === true && castleStablesRus.stablesRight.isVisited === true && castleStablesRus.stablesDoor.isVisited === true){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[3];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                castleCourtyard();

            });

        };

        screenCastleTitle.innerText = castleStablesRus.stablesLeft.title;

        screenCastleDescr.innerText = castleStablesRus.stablesLeft.descr;
            
    }, '650');

};

function stablesPile(){

    castleStablesRus.stablesPile.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stablesPile.button);

    setTimeout(() =>{

        if(castleStablesRus.stablesRight.isVisited === false && castleStablesRus.stablesLeft.isVisited === false && castleStablesRus.stablesDoor.isVisited === false){
            
            const arrayLength = arrayBtns.length - 2;

            addElements(arrayBtns, arrayLength);

            const screenCastleBtns = screenCastle.querySelectorAll('.button');
    
            addEventListener(screenCastleBtns);

            function addEventListener(screenCastleBtns){

                screenCastleBtns.forEach(elem =>{

                    elem.addEventListener('click', () =>{

                        if(elem.innerText === arrayBtns[0]){
    
                            changeSlide();
    
                            stablesLeft();
    
                        };
    
                        if(elem.innerText === arrayBtns[1]){
    
                            changeSlide();
    
                            stablesRight();
    
                        };

                    });

                });

            };

        };

        if(castleStablesRus.stablesRight.isVisited === false && castleStablesRus.stablesLeft.isVisited === true && castleStablesRus.stablesDoor.isVisited === false){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[0];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesRight();

            });

        };

        if(castleStablesRus.stablesRight.isVisited === true && castleStablesRus.stablesLeft.isVisited === false && castleStablesRus.stablesDoor.isVisited === false){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[1];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesLeft();

            });

        };

        if(castleStablesRus.stablesRight.isVisited === true && castleStablesRus.stablesLeft.isVisited === true && castleStablesRus.stablesDoor.isVisited === false){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[2];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                stablesDoor();

            });

        };

        if(castleStablesRus.stablesRight.isVisited === true && castleStablesRus.stablesLeft.isVisited === true && castleStablesRus.stablesDoor.isVisited === true){

            addSingleBtn();

            screenCastle.querySelector('.button').innerText = arrayBtns[3];

            screenCastle.querySelector('.button').addEventListener('click', () =>{

                changeSlide();

                castleCourtyard();

            });

        };

        screenCastleTitle.innerText = castleStablesRus.stablesPile.title;

        screenCastleDescr.innerText = castleStablesRus.stablesPile.descr;
            
    }, '650');

};

/// CASTLE---COURTYARD---STABLE---END

/// CASTLE---COURTYARD---BARRACKS---START

function castleBarracks(){

    const arrayBtns = Object.values(castleBarracksRus.button);

    castleBarracksRus.isVisited = true;

    setTimeout(() =>{

        addElements(arrayBtns, arrayLength);

        screenCastleTitle.innerText = castleBarracksRus.title;

        screenCastleDescr.innerText = castleBarracksRus.descr;

    }, '650');

    screenCastle.querySelector('.button').addEventListener('click', () =>{

        changeSlide();

        barracksInside();

    });

};

function barracksInside(){
    
    const arrayBtns = Object.values(castleBarracksRus.barracksInside.button);

    setTimeout(() =>{

        addElements(arrayBtns, arrayLength);

        screenCastleTitle.innerText = castleBarracksRus.barracksInside.title;

        screenCastleDescr.innerText = castleBarracksRus.barracksInside.descr;
    
        const screenCastleBtns = screenCastle.querySelectorAll('.button');
    
        addEventListener(screenCastleBtns);
    
    }, '650');

    function addEventListener(screenCastleBtns){

        for(let i = 0; i < screenCastleBtns.length; i++){

            screenCastleBtns[i].addEventListener('click', () =>{
    
                if(screenCastleBtns[i].innerText === castleBarracksRus.barracksInside.button.firstBtn){

                    firstFloor();

                };

                if(screenCastleBtns[i].innerText === castleBarracksRus.barracksInside.button.secondBtn){

                    secondFloor();

                };
    
            });

        };

    };

};

function firstFloor(){

    castleBarracksRus.barracksInsideFirstFloor.isVisited = true;

    const arrayBtns = Object.values(castleBarracksRus.barracksInsideFirstFloor.button);

    setTimeout(() =>{

        addElements(arrayBtns, arrayLength);

        screenCastleTitle.innerText = castleBarracksRus.barracksInsideFirstFloor.title;

        screenCastleDescr.innerText = castleBarracksRus.barracksInsideFirstFloor.descr;
    
        const screenCastleBtns = screenCastle.querySelectorAll('.button');
    
        addEventListener(screenCastleBtns);
    
    }, '650');

    function addEventListener(screenCastleBtns){

        for(let i = 0; i < screenCastleBtns.length; i++){

            screenCastleBtns[i].addEventListener('click', () =>{
    
                if(screenCastleBtns[i].innerText === castleBarracksRus.barracksInsideFirstFloor.button.firstBtn){

                    kitchenRoom();

                };

                if(screenCastleBtns[i].innerText === castleBarracksRus.barracksInsideFirstFloor.button.secondBtn){

                    armoryRoom();;

                };
    
            });

        };

    };

};

function secondFloor(){

    castleBarracksRus.barracksInsideSecondFloor.isVisited = true;

    const arrayBtns = Object.values(castleBarracksRus.barracksInsideSecondFloor.button);

    setTimeout(() =>{

        addElements(arrayBtns, arrayLength);

        screenCastleTitle.innerText = castleBarracksRus.barracksInsideSecondFloor.title;

        screenCastleDescr.innerText = castleBarracksRus.barracksInsideSecondFloor.descr;
    
        const screenCastleBtns = screenCastle.querySelectorAll('.button');
    
        addEventListener(screenCastleBtns);
    
    }, '650');

    function addEventListener(screenCastleBtns){

        for(let i = 0; i < screenCastleBtns.length; i++){

            screenCastleBtns[i].addEventListener('click', () =>{
    
                if(screenCastleBtns[i].innerText === castleBarracksRus.barracksInsideSecondFloor.button.firstBtn){

                    legionnaireRooms();

                };

                if(screenCastleBtns[i].innerText === castleBarracksRus.barracksInsideSecondFloor.button.secondBtn){

                    officerRoom();;

                };
    
            });

        };

    };

};

function legionnaireRooms(){

    castleBarracksRus.legionnaireRooms.isVisited = true;

    setTimeout(() =>{

        const button = document.createElement('button');

        mainFooter.appendChild(button);

        button.className = 'main__btn button';

        screenCastleTitle.innerText = castleBarracksRus.legionnaireRooms.title;

        screenCastleDescr.innerText = castleBarracksRus.legionnaireRooms.descr;
        
        addTextAndEvent(button);
    
    }, '650');

    function addTextAndEvent(button){

        if(castleBarracksRus.officerRoom.isVisited === false && castleBarracksRus.barracksInsideFirstFloor.isVisited === false){

            button.innerText = castleBarracksRus.legionnaireRooms.button.firstBtn;

            button.addEventListener('click', () =>{

                officerRoom();

            });

        };

        if(castleBarracksRus.officerRoom.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === false){

            button.innerText = castleBarracksRus.legionnaireRooms.button.secondBtn;

            button.addEventListener('click', () =>{

                firstFloor();

            });

        };

        if(castleBarracksRus.officerRoom.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === true){

            button.innerText = castleBarracksRus.legionnaireRooms.button.thirdBtn;

            button.addEventListener('click', () =>{

                castleCourtyard();

            });

        };

    };

};

function officerRoom(){

    castleBarracksRus.officerRoom.isVisited = true;

    const arrayBtns = Object.values(castleBarracksRus.officerRoom.button);

    setTimeout(() =>{

        addElements(arrayBtns, arrayLength);

        screenCastleTitle.innerText = castleBarracksRus.officerRoom.title;

        screenCastleDescr.innerText = castleBarracksRus.officerRoom.descr;
    
        const screenCastleBtns = screenCastle.querySelectorAll('.button');
    
        addEventListener(screenCastleBtns);
    
    }, '650');

    function addEventListener(screenCastleBtns){

        for(let i = 0; i < screenCastleBtns.length; i++){

            screenCastleBtns[i].addEventListener('click', () =>{
    
                if(screenCastleBtns[i].innerText === castleBarracksRus.officerRoom.button.firstBtn){

                    officerDeadBody();

                };

                if(screenCastleBtns[i].innerText === castleBarracksRus.officerRoom.button.secondBtn){

                    officerTable();;

                };
    
            });

        };

    };

};

function officerDeadBody(){

    castleBarracksRus.officerDeadBody.isVisited = true;

    setTimeout(() =>{

        const button = document.createElement('button');

        mainFooter.appendChild(button);

        button.className = 'main__btn button';

        screenCastleTitle.innerText = castleBarracksRus.officerDeadBody.title;

        screenCastleDescr.innerText = castleBarracksRus.officerDeadBody.descr;
        
        addTextAndEvent(button);
    
    }, '650');

    function addTextAndEvent(button){

        if(castleBarracksRus.officerTable.isVisited === false && castleBarracksRus.legionnaireRooms.isVisited === false && castleBarracksRus.barracksInsideFirstFloor.isVisited === false){

            button.innerText = castleBarracksRus.officerTable.button.firstBtn;

            button.addEventListener('click', () =>{

                officerTable();

            });

        };

        if(castleBarracksRus.officerTable.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === false && castleBarracksRus.barracksInsideFirstFloor.isVisited === false){

            button.innerText = castleBarracksRus.officerTable.button.secondBtn;

            button.addEventListener('click', () =>{

                legionnaireRooms();

            });

        };

        if(castleBarracksRus.officerTable.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === false){

            button.innerText = castleBarracksRus.officerDeadBody.button.thirdBtn;

            button.addEventListener('click', () =>{

                firstFloor();

            });

        };

        if(castleBarracksRus.officerTable.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === true){

            button.innerText = castleBarracksRus.officerDeadBody.button.fourthBtn;

            button.addEventListener('click', () =>{

                castleCourtyard();

            });

        };

    };

};

function officerTable(){
    
    castleBarracksRus.officerTable.isVisited = true;

    const arrayBtns = Object.values(castleBarracksRus.officerTable.button);

    setTimeout(() =>{

        addElements(arrayBtns, arrayLength);

        screenCastleTitle.innerText = castleBarracksRus.officerTable.title;

        screenCastleDescr.innerText = castleBarracksRus.officerTable.descr;

    }, '650');

    screenCastle.querySelector('.button').addEventListener('click', () =>{

        changeSlide();

        pieceOfPaper();

    });

};

function pieceOfPaper(){

    setTimeout(() =>{

        const button = document.createElement('button');

        mainFooter.appendChild(button);

        button.className = 'main__btn button';

        screenCastleTitle.innerText = castleBarracksRus.pieceOfPaper.title;

        screenCastleDescr.innerText = castleBarracksRus.pieceOfPaper.descr;
        
        addTextAndEvent(button);
    
    }, '650');

    function addTextAndEvent(button){

        if(castleBarracksRus.officerDeadBody.isVisited === false && castleBarracksRus.legionnaireRooms.isVisited === false && castleBarracksRus.barracksInsideFirstFloor.isVisited === false){

            button.innerText = castleBarracksRus.pieceOfPaper.button.firstBtn;

            button.addEventListener('click', () =>{

                officerDeadBody();

            });

        };

        if(castleBarracksRus.officerDeadBody.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === false && castleBarracksRus.barracksInsideFirstFloor.isVisited === false){

            button.innerText = castleBarracksRus.pieceOfPaper.button.secondBtn;

            button.addEventListener('click', () =>{

                legionnaireRooms();

            });

        };

        if(castleBarracksRus.officerDeadBody.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === false){

            button.innerText = castleBarracksRus.pieceOfPaper.button.thirdBtn;

            button.addEventListener('click', () =>{

                firstFloor();

            });

        };

        if(castleBarracksRus.officerDeadBody.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === true){

            button.innerText = castleBarracksRus.pieceOfPaper.button.fourthBtn;

            button.addEventListener('click', () =>{

                castleCourtyard();

            });

        };

    };
    
};

function kitchenRoom(){

    castleBarracksRus.kitchenRoom.isVisited = true;
    
    setTimeout(() =>{

        const button = document.createElement('button');

        mainFooter.appendChild(button);

        button.className = 'main__btn button';

        screenCastleTitle.innerText = castleBarracksRus.kitchenRoom.title;

        screenCastleDescr.innerText = castleBarracksRus.kitchenRoom.descr;
        
        addTextAndEvent(button);
    
    }, '650');

    function addTextAndEvent(button){

        if(castleBarracksRus.armoryRoom.isVisited === false && castleBarracksRus.barracksInsideSecondFloor.isVisited === false){

            button.innerText = castleBarracksRus.kitchenRoom.button.firstBtn;

            button.addEventListener('click', () =>{

                officerRoom();

            });

        };

        if(castleBarracksRus.armoryRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === false){

            button.innerText = castleBarracksRus.kitchenRoom.button.secondBtn;

            button.addEventListener('click', () =>{

                firstFloor();

            });

        };

        if(castleBarracksRus.armoryRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === true){

            button.innerText = castleBarracksRus.kitchenRoom.button.thirdBtn;

            button.addEventListener('click', () =>{

                castleCourtyard();

            });

        };

    };
    
};

function armoryRoom(){

    castleBarracksRus.armoryRoom.isVisited = true;

    const arrayBtns = Object.values(castleBarracksRus.armoryRoom.armoryRoomBtn);

    setTimeout(() =>{

        addElements(arrayBtns, arrayLength);

        screenCastleTitle.innerText = castleBarracksRus.armoryRoom.title;

        screenCastleDescr.innerText = castleBarracksRus.armoryRoom.descr;
    
        const screenCastleBtns = screenCastle.querySelectorAll('.button');
    
        addEventListener(screenCastleBtns);
    
    }, '650');

    function addEventListener(screenCastleBtns){

        for(let i = 0; i < screenCastleBtns.length; i++){

            screenCastleBtns[i].addEventListener('click', () =>{
    
                if(screenCastleBtns[i].innerText === castleBarracksRus.armoryRoom.button.firstBtn){

                    armoryBlood();

                };

                if(screenCastleBtns[i].innerText === castleBarracksRus.armoryRoom.button.secondBtn){

                    armoryTable();

                };
    
            });

        };

    };
    
};

function armoryTable(){

    castleBarracksRus.armoryTable.isVisited = true;

    setTimeout(() =>{

        const button = document.createElement('button');

        mainFooter.appendChild(button);

        button.className = 'main__btn button';

        screenCastleTitle.innerText = castleBarracksRus.pieceOfPaper.title;

        screenCastleDescr.innerText = castleBarracksRus.pieceOfPaper.descr;
        
        addTextAndEvent(button);
    
    }, '650');

    function addTextAndEvent(button){

        if(castleBarracksRus.officerDeadBody.isVisited === false && castleBarracksRus.legionnaireRooms.isVisited === false && castleBarracksRus.barracksInsideFirstFloor.isVisited === false){

            button.innerText = castleBarracksRus.armoryTable.button.firstBtn;

            button.addEventListener('click', () =>{

                armoryBlood();

            });

        };

        if(castleBarracksRus.officerDeadBody.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === false && castleBarracksRus.barracksInsideFirstFloor.isVisited === false){

            button.innerText = castleBarracksRus.armoryTable.button.secondBtn;

            button.addEventListener('click', () =>{

                kitchenRoom();

            });

        };

        if(castleBarracksRus.armoryBlood.isVisited === true && castleBarracksRus.kitchenRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === false){

            button.innerText = castleBarracksRus.armoryTable.button.thirdBtn;

            button.addEventListener('click', () =>{

                secondFloor();

            });

        };

        if(castleBarracksRus.armoryBlood.isVisited === true && castleBarracksRus.kitchenRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === true){

            button.innerText = castleBarracksRus.armoryTable.button.fourthBtn;

            button.addEventListener('click', () =>{

                castleCourtyard();

            });

        };

    };

};

function armoryBlood(){

    castleBarracksRus.armoryBlood.isVisited = true;

    setTimeout(() =>{

        const button = document.createElement('button');

        mainFooter.appendChild(button);

        button.className = 'main__btn button';

        screenCastleTitle.innerText = castleBarracksRus.pieceOfPaper.title;

        screenCastleDescr.innerText = castleBarracksRus.pieceOfPaper.descr;
        
        addTextAndEvent(button);
    
    }, '650');

    function addTextAndEvent(button){

        if(castleBarracksRus.armoryTable.isVisited === false && castleBarracksRus.kitchenRoom.isVisited === false && castleBarracksRus.barracksInsideSecondFloor.isVisited === false){

            button.innerText = castleBarracksRus.armoryBlood.button.firstBtn;

            button.addEventListener('click', () =>{

                armoryTable();

            });

        };

        if(castleBarracksRus.armoryTable.isVisited === true && castleBarracksRus.kitchenRoom.isVisited === false && castleBarracksRus.barracksInsideSecondFloor.isVisited === false){

            button.innerText = castleBarracksRus.armoryBlood.button.secondBtn;

            button.addEventListener('click', () =>{

                kitchenRoom();

            });

        };

        if(castleBarracksRus.armoryTable.isVisited === true && castleBarracksRus.kitchenRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === false){

            button.innerText = castleBarracksRus.armoryBlood.button.thirdBtn;

            button.addEventListener('click', () =>{

                secondFloor();

            });

        };

        if(castleBarracksRus.armoryTable.isVisited === true && castleBarracksRus.kitchenRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === true){

            button.innerText = castleBarracksRus.armoryBlood.button.fourthBtn;

            button.addEventListener('click', () =>{

                castleCourtyard();

            });

        };

    };


};

/// CASTLE---COURTYARD---BARRACKS---END

/// CASTLE---COURTYARD---DEAD__BODY--START

function deadBody(){

    castleCourtyardRus.courtyardDeadBody.isVisited = true;

    const arrayBtns = Object.values(castleCourtyardRus.courtyardDeadBody.button);

    setTimeout(() =>{

        if(castleBarracksRus.isVisited === false && castleStablesRus.isVisited === false){

            addElements(arrayBtns, arrayLength);

            const screenCastleBtns = screenCastle.querySelectorAll('.button');
    
            addEventListener(screenCastleBtns);

            function addEventListener(screenCastleBtns){

                screenCastleBtns.forEach(elem =>{

                    elem.addEventListener('click', () =>{

                        if(elem.innerText === arrayBtns[0]){
    
                            changeSlide();
    
                            castleBarracks();
    
                        };
    
                        if(elem.innerText === arrayBtns[1]){
    
                            changeSlide();
    
                            castleStables();
    
                        };

                    });

                });

            };

        };

        if(castleBarracksRus.isVisited === false && castleStablesRus.isVisited === true){

            const button = document.createElement('button');

            mainFooter.appendChild(button);

            button.className = 'main__btn button';

            button.innerText = arrayBtns[0];

            button.addEventListener('click', () =>{

                changeSlide();

                castleBarracks();

            });

        };

        if(castleBarracksRus.isVisited === true && castleStablesRus.isVisited === false){

            const button = document.createElement('button');

            mainFooter.appendChild(button);

            button.className = 'main__btn button';

            button.innerText = arrayBtns[1];

            button.addEventListener('click', () =>{

                changeSlide();

                castleStables();

            });

        };

        if(castleBarracksRus.isVisited === true && castleStablesRus.isVisited === true){

            const button = document.createElement('button');

            mainFooter.appendChild(button);

            button.className = 'main__btn button';

            button.innerText = arrayBtns[2];

            button.addEventListener('click', () =>{

                changeSlide();

                console.log('Work in progress...');

            });

        };

        screenCastleTitle.innerText = castleCourtyardRus.courtyardDeadBody.title;

        screenCastleDescr.innerText = castleCourtyardRus.courtyardDeadBody.descr;
            
    }, '650');

};

/// CASTLE---COURTYARD---DEAD__BODY--END

export default castle;