import castleEntranceRus from '../text/castle/russian/castleEntranceRus.js';

import castleCourtyardRus from '../text/castle/russian/castleCourtyardRus.js';

import castleStablesRus from '../text/castle/russian/castleStablesRus.js';

import castleBarracksRus from '../text/castle/russian/castleBarracksRus.js';

const screenCastle = document.querySelector('#castle-screen');

const screenCastleDescr = screenCastle.querySelector('.main__desc');

const screenCastleTitle = screenCastle.querySelector('.main__title');

const screenCastleBtn = screenCastle.querySelectorAll('.main__btn');

screenCastleBtn.forEach(elem =>{

    elem.addEventListener('click', () =>{

        screenCastle.querySelector('.main').classList.toggle('rotation');

    });

});

function removeHideOnBtns(){

    screenCastleBtn.forEach(elem =>{

        elem.classList.remove('hide-btn');

    });

};

function castle(){

    screenCastleTitle.innerHTML = castleEntranceRus.entranceName;

    screenCastleDescr.innerHTML = castleEntranceRus.entranceDescr;

    for(let i = 0; i < screenCastleBtn.length; i++){

        if(screenCastleBtn[i].classList.contains('hide-btn') === false){

            screenCastleBtn[i].innerHTML = castleEntranceRus.entranceBtn;

            screenCastleBtn[i].addEventListener('click', () =>{

                castleCourtyard();

            });

        };
        
    };

    screenCastle.classList.remove('hide');

};

function castleCourtyard(){

    const arrayCastleBtn = Object.values(castleCourtyardRus.courtyardBtn);

    setTimeout(() => {

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleCourtyardRus.courtyardName;

        screenCastleDescr.innerHTML = castleCourtyardRus.courtyardDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-4') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };

            screenCastleBtn[i].innerHTML = arrayCastleBtn[i];

            screenCastleBtn[i].addEventListener('click', () =>{

                if(screenCastleBtn[i].innerHTML === castleCourtyardRus.courtyardBtn.firstBtn){

                    castleStables();

                };

                if(screenCastleBtn[i].innerHTML === castleCourtyardRus.courtyardBtn.secondBtn){

                    castleBarracks();

                };

                if(screenCastleBtn[i].innerHTML === castleCourtyardRus.courtyardBtn.thirdBtn){

                    deadBody();

                };

            });

        };

    }, '650');

};

/// CASTLE---COURTYARD---STABLE---START

function castleStables(){

    castleBarracksRus.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stablesBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleStablesRus.stablesName;

        screenCastleDescr.innerHTML = castleStablesRus.stablesDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-3') === true || screenCastleBtn[i].classList.contains('btn-4') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };


            screenCastleBtn[i].innerHTML = arrayBtns[i];

            screenCastleBtn[i].addEventListener('click', () =>{

                if(screenCastleBtn[i].innerHTML === castleStablesRus.stablesBtn.firstBtn){

                    stablesInside();

                };

                if(screenCastleBtn[i].innerHTML === castleStablesRus.stablesBtn.secondBtn){

                    stablesDoor();

                };

            });

        };

    }, '650');

};

function stablesInside(){

    castleStablesRus.stableInside.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stableInside.stableInsideBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleStablesRus.stableInside.stableInsideName;

        screenCastleDescr.innerHTML = castleStablesRus.stableInside.stableInsideDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-4') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };

            screenCastleBtn[i].innerHTML = arrayBtns[i];

            screenCastleBtn[i].addEventListener('click', () =>{

                if(screenCastleBtn[i].innerHTML === castleStablesRus.stableInside.stableInsideBtn.firstBtn){

                    stablePile();

                };

                if(screenCastleBtn[i].innerHTML === castleStablesRus.stableInside.stableInsideBtn.secondBtn){

                    stableLeft();

                };

                if(screenCastleBtn[i].innerHTML === castleStablesRus.stableInside.stableInsideBtn.thirdBtn){

                    stableRight();

                };

            });

        };

    }, '650');

};

function stablesDoor(){

    castleStablesRus.stableDoor.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stableDoor.stableDoorBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleStablesRus.stableDoor.stableDoorName;

        screenCastleDescr.innerHTML = castleStablesRus.stableDoor.stableDoorDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-4') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };

            screenCastleBtn[i].innerHTML = arrayBtns[i];

            screenCastleBtn[i].addEventListener('click', () =>{

                if(screenCastleBtn[i].innerHTML === castleStablesRus.stableDoor.stableDoorBtn.firstBtn){

                    stableWalls();

                };

                if(screenCastleBtn[i].innerHTML === castleStablesRus.stableDoor.stableDoorBtn.secondBtn){

                    stableFloor();

                };

                if(screenCastleBtn[i].innerHTML === castleStablesRus.stableDoor.stableDoorBtn.thirdBtn){

                    stableWindow();

                };

            });

        };

    }, '650');

};

function stableWalls(){

    castleStablesRus.stableWalls.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stableWalls.stableWallsBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleStablesRus.stableWalls.stableWallsName;

        screenCastleDescr.innerHTML = castleStablesRus.stableWalls.stableWallsDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            screenCastleBtn[i].innerHTML = arrayBtns[i];

            if(castleStablesRus.stableFloor.isVisited === false && castleStablesRus.stableWindow.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-3') === true || screenCastleBtn[i].classList.contains('btn-4') === true){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableFloor.isVisited === true && castleStablesRus.stableWindow.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-1') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableFloor.isVisited === false && castleStablesRus.stableWindow.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-2') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableFloor.isVisited === true && castleStablesRus.stableWindow.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-3') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableFloor.isVisited === true && castleStablesRus.stableWindow.isVisited === true && castleStablesRus.stableInside.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-4') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

        };

    }, '650');

};

function stableFloor(){

    castleStablesRus.stableFloor.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stableFloor.stableFloorBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleStablesRus.stableFloor.stableFloorName;

        screenCastleDescr.innerHTML = castleStablesRus.stableFloor.stableFloorDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            screenCastleBtn[i].innerHTML = arrayBtns[i];

            if(castleStablesRus.stableWalls.isVisited === false && castleStablesRus.stableWindow.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-3') === true || screenCastleBtn[i].classList.contains('btn-4') === true){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableWalls.isVisited === true && castleStablesRus.stableWindow.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-1') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableWalls.isVisited === false && castleStablesRus.stableWindow.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-2') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableWalls.isVisited === true && castleStablesRus.stableWindow.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-3') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableWalls.isVisited === true && castleStablesRus.stableWindow.isVisited === true && castleStablesRus.stableInside.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-4') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

        };

    }, '650');

};

function stableWindow(){

    castleStablesRus.stableWindow.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stableWindow.stableWindowBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleStablesRus.stableWindow.stableWindowName;

        screenCastleDescr.innerHTML = castleStablesRus.stableWindow.stableWindowDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            screenCastleBtn[i].innerHTML = arrayBtns[i];

            if(castleStablesRus.stableWalls.isVisited === false && castleStablesRus.stableFloor.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-3') === true || screenCastleBtn[i].classList.contains('btn-4') === true){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableWalls.isVisited === true && castleStablesRus.stableFloor.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-1') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableWalls.isVisited === false && castleStablesRus.stableFloor.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-2') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableWalls.isVisited === true && castleStablesRus.stableFloor.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-3') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableWalls.isVisited === true && castleStablesRus.stableFloor.isVisited === true && castleStablesRus.stableInside.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-4') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

        };

    }, '650');

};

function stableRight(){

    castleStablesRus.stableRight.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stableRight.stableRightBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleStablesRus.stableRight.stableRightName;

        screenCastleDescr.innerHTML = castleStablesRus.stableRight.stableRightDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            screenCastleBtn[i].innerHTML = arrayBtns[i];

            if(castleStablesRus.stableLeft.isVisited === false && castleStablesRus.stablePile.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-3') === true || screenCastleBtn[i].classList.contains('btn-4') === true){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableLeft.isVisited === true && castleStablesRus.stablePile.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-1') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableLeft.isVisited === false && castleStablesRus.stablePile.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-2') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableLeft.isVisited === true && castleStablesRus.stablePile.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-3') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableLeft.isVisited === true && castleStablesRus.stablePile.isVisited === true && castleStablesRus.stableDoor.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-4') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

        };

    }, '650');

};

function stableLeft(){

    castleStablesRus.stableLeft.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stableLeft.stablLeftBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleStablesRus.stableLeft.stableLeftName;

        screenCastleDescr.innerHTML = castleStablesRus.stableLeft.stableLeftDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            screenCastleBtn[i].innerHTML = arrayBtns[i];

            if(castleStablesRus.stableRight.isVisited === false && castleStablesRus.stablePile.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-3') === true || screenCastleBtn[i].classList.contains('btn-4') === true){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableRight.isVisited === true && castleStablesRus.stablePile.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-1') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableRight.isVisited === false && castleStablesRus.stablePile.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-2') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableRight.isVisited === true && castleStablesRus.stablePile.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-3') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableRight.isVisited === true && castleStablesRus.stablePile.isVisited === true && castleStablesRus.stableDoor.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-4') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

        };

    }, '650');

};

function stablePile(){

    castleStablesRus.stablePile.isVisited = true;

    const arrayBtns = Object.values(castleStablesRus.stablePile.stablPileBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleStablesRus.stablePile.stablePileName;

        screenCastleDescr.innerHTML = castleStablesRus.stablePile.stablePileDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            screenCastleBtn[i].innerHTML = arrayBtns[i];

            if(castleStablesRus.stableRight.isVisited === false && castleStablesRus.stableLeft.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-3') === true || screenCastleBtn[i].classList.contains('btn-4') === true){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableRight.isVisited === true && castleStablesRus.stableLeft.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-1') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableRight.isVisited === false && castleStablesRus.stableLeft.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-2') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableRight.isVisited === true && castleStablesRus.stableLeft.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-3') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

            if(castleStablesRus.stableRight.isVisited === true && castleStablesRus.stableLeft.isVisited === true && castleStablesRus.stableDoor.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-4') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

        };

    }, '650');

};

/// CASTLE---COURTYARD---STABLE---END

/// CASTLE---COURTYARD---BARRACKS---START

function castleBarracks(){

    castleBarracksRus.isVisited = true;

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.barrakcsName;

        screenCastleDescr.innerHTML = castleBarracksRus.barracksDescr;

        screenCastleBtn.forEach(elem =>{

            if(elem.classList.contains('btn-1') === false){

                elem.classList.add('hide-btn');

            };

            elem.innerHTML = castleBarracksRus.barracksBtn;

            elem.addEventListener('click', () =>{

                barracksInside();

            });

        });

    }, '650');

};

function barracksInside(){
    
    const arrayBtns = Object.values(castleBarracksRus.barracksInside.barracksInsideNameBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.barracksInside.barracksInsideName;

        screenCastleDescr.innerHTML = castleBarracksRus.barracksInside.barracksInsideDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            screenCastleBtn[i].innerHTML = arrayBtns[i];

            if(screenCastleBtn[i].classList.contains('btn-3') === true || screenCastleBtn[i].classList.contains('btn-4') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].addEventListener('click', () =>{

                if(screenCastleBtn[i].innerHTML === castleBarracksRus.barracksInside.barracksInsideNameBtn.firstBtn){

                    firstFloor();

                };

                if(screenCastleBtn[i].innerHTML === castleBarracksRus.barracksInside.barracksInsideNameBtn.secondBtn){

                    secondFloor();

                };

            });

        };

    }, '650');

};

function firstFloor(){

    castleBarracksRus.barracksInsideFirstFloor.isVisited = true;

    const arrayBtns = Object.values(castleBarracksRus.barracksInsideFirstFloor.firstFloorBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.barracksInsideFirstFloor.firstFloorName;

        screenCastleDescr.innerHTML = castleBarracksRus.barracksInsideFirstFloor.firstFloorDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-3') === true || screenCastleBtn[i].classList.contains('btn-4') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].innerHTML = arrayBtns[i];

            screenCastleBtn[i].addEventListener('click', () =>{

                if(screenCastleBtn[i].innerHTML === castleBarracksRus.barracksInsideFirstFloor.firstFloorBtn.firstBtn){

                    kitchenRoom();

                };

                if(screenCastleBtn[i].innerHTML === castleBarracksRus.barracksInsideFirstFloor.firstFloorBtn.secondBtn){

                    armoryRoom();

                };

            });

        };

    }, '650');

};

function secondFloor(){

    castleBarracksRus.barracksInsideSecondFloor.isVisited = true;

    const arrayBtns = Object.values(castleBarracksRus.barracksInsideSecondFloor.secondFloorBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.barracksInsideSecondFloor.secondFloorName;

        screenCastleDescr.innerHTML = castleBarracksRus.barracksInsideSecondFloor.secondFloorDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            screenCastleBtn[i].innerHTML = arrayBtns[i];

            if(screenCastleBtn[i].classList.contains('btn-3') === true || screenCastleBtn[i].classList.contains('btn-4') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].addEventListener('click', () =>{

                if(screenCastleBtn[i].innerHTML === castleBarracksRus.barracksInsideSecondFloor.secondFloorBtn.firstBtn){

                    legionnaireRooms();

                };

                if(screenCastleBtn[i].innerHTML === castleBarracksRus.barracksInsideSecondFloor.secondFloorBtn.secondBtn){

                    officerRoom();
                    
                };

            });

        };

    }, '650');

};

function legionnaireRooms(){

    castleBarracksRus.legionnaireRooms.isVisited = true;

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.legionnaireRooms.legionnaireRoomsName;

        screenCastleDescr.innerHTML = castleBarracksRus.legionnaireRooms.legionnaireRoomsDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-1') === false){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            if(castleBarracksRus.officerRoom.isVisited === false){
    
                screenCastleBtn[i].innerHTML = castleBarracksRus.legionnaireRooms.legionnaireRoomsBtn.firstBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    officerRoom();

                });

            };

            if(castleBarracksRus.officerRoom.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === false){

                screenCastleBtn[i].innerHTML = castleBarracksRus.legionnaireRooms.legionnaireRoomsBtn.secondBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    firstFloor();

                });

            };

            if(castleBarracksRus.officerRoom.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === true){

                screenCastleBtn[i].innerHTML = castleBarracksRus.legionnaireRooms.legionnaireRoomsBtn.thirdBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    castleCourtyard();

                });

            };

        };

    }, '650');

};

function officerRoom(){

    castleBarracksRus.officerRoom.isVisited = true;

    const arrayBtns = Object.values(castleBarracksRus.officerRoom.officerRoomBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.officerRoom.officerRoomName;

        screenCastleDescr.innerHTML = castleBarracksRus.officerRoom.officerRoomDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            screenCastleBtn[i].innerHTML = arrayBtns[i];

            if(screenCastleBtn[i].classList.contains('btn-3') === true || screenCastleBtn[i].classList.contains('btn-4') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].addEventListener('click', () =>{

                if(screenCastleBtn[i].innerHTML === castleBarracksRus.officerRoom.officerRoomBtn.firstBtn){

                    officerDeadBody();
    
                };
    
                if(screenCastleBtn[i].innerHTML === castleBarracksRus.officerRoom.officerRoomBtn.secondBtn){
    
                    officerTable();
    
                };

            });

        };

    }, '650');

};

function officerDeadBody(){

    castleBarracksRus.officerDeadBody.isVisited = true;

    const arrayBtns = Object.values(castleBarracksRus.officerDeadBody.officerDeadBodyBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.officerDeadBody.officerDeadBodyName;

        screenCastleDescr.innerHTML = castleBarracksRus.officerDeadBody.officerDeadBodyDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            screenCastleBtn[i].innerHTML = arrayBtns[i];

            if(castleBarracksRus.officerTable.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-1') === false){

                    screenCastleBtn[i].classList.add('hide-btn');
    
                };
    
                screenCastleBtn[i].addEventListener('click', () =>{

                    officerTable();

                });

            };

            if(castleBarracksRus.officerTable.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-2') === false){

                    screenCastleBtn[i].classList.add('hide-btn');
    
                };

                screenCastleBtn[i].addEventListener('click', () =>{

                    legionnaireRooms();

                });

            };

            if(castleBarracksRus.officerTable.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-3') === false){

                    screenCastleBtn[i].classList.add('hide-btn');
    
                };

                screenCastleBtn[i].addEventListener('click', () =>{

                    firstFloor();

                });

            };

            if(castleBarracksRus.officerTable.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-4') === false){

                    screenCastleBtn[i].classList.add('hide-btn');
    
                };

                screenCastleBtn[i].addEventListener('click', () =>{

                    castleCourtyard();

                });

            };

        };

    }, '650');

};

function officerTable(){
    
    castleBarracksRus.officerTable.isVisited = true;

    const arrayBtns = Object.values(castleBarracksRus.officerTable.officerTableBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.officerTable.officerTableName;

        screenCastleDescr.innerHTML = castleBarracksRus.officerTable.officerTableDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-1') === false){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].innerHTML = arrayBtns[i];

            screenCastleBtn[i].addEventListener('click', () =>{

                pieceOfPaper();

            })

        };

    }, '650');

};

function pieceOfPaper(){

    const arrayBtns = Object.values(castleBarracksRus.pieceOfPaper.pieceOfPaperBtn); 
    
    setTimeout(() =>{

        screenCastleTitle.innerHTML = castleBarracksRus.pieceOfPaper.pieceOfPaperName;

        screenCastleDescr.innerHTML = castleBarracksRus.pieceOfPaper.pieceOfPaperDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            screenCastleBtn[i].innerHTML = arrayBtns[i];

            if(castleBarracksRus.officerDeadBody.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-1') === false){

                    screenCastleBtn[i].classList.add('hide-btn');
    
                };
    
                screenCastleBtn[i].addEventListener('click', () =>{

                    officerDeadBody();

                });

            };

            if(castleBarracksRus.officerDeadBody.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-2') === false){

                    screenCastleBtn[i].classList.add('hide-btn');
    
                };

                screenCastleBtn[i].addEventListener('click', () =>{

                    legionnaireRooms();

                });

            };

            if(castleBarracksRus.officerDeadBody.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-3') === false){

                    screenCastleBtn[i].classList.add('hide-btn');
    
                };

                screenCastleBtn[i].addEventListener('click', () =>{

                    firstFloor();

                });

            };

            if(castleBarracksRus.officerDeadBody.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-4') === false){

                    screenCastleBtn[i].classList.add('hide-btn');
    
                };

                screenCastleBtn[i].addEventListener('click', () =>{

                    castleCourtyard();

                });

            };

        };

    }, '650');
    
};

function kitchenRoom(){

    castleBarracksRus.kitchenRoom.isVisited = true;

    const arrayBtns = Object.values(castleBarracksRus.kitchenRoom.kitchenRoomBtn);
    
    setTimeout(() =>{

        screenCastleTitle.innerHTML = castleBarracksRus.kitchenRoom.kitchenRoomName;

        screenCastleDescr.innerHTML = castleBarracksRus.kitchenRoom.kitchenRoomDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            screenCastleBtn[i].innerHTML = arrayBtns[i];
                
            if(castleBarracksRus.armoryRoom.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-1') === false){

                    screenCastleBtn[i].classList.add('hide-btn');
    
                };

                screenCastleBtn[i].addEventListener('click', () =>{

                    armoryRoom();

                });

            };

            if(castleBarracksRus.armoryRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-2') === false){

                    screenCastleBtn[i].classList.add('hide-btn');
    
                };

                screenCastleBtn[i].addEventListener('click', () =>{

                    secondFloor();

                });

            };

            if(castleBarracksRus.armoryRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-3') === false){

                    screenCastleBtn[i].classList.add('hide-btn');
    
                };

                screenCastleBtn[i].addEventListener('click', () =>{

                    castleCourtyard();

                });

            };

        };

    }, '650');
    
};

function armoryRoom(){

    castleBarracksRus.armoryRoom.isVisited = true;

    const arrayBtns = Object.values(castleBarracksRus.armoryRoom.armoryRoomBtn);
    
    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.armoryRoom.armoryRoomName;

        screenCastleDescr.innerHTML = castleBarracksRus.armoryRoom.armoryRoomDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            screenCastleBtn[i].innerHTML = arrayBtns[i];

            if(screenCastleBtn[i].classList.contains('btn-3') === true || screenCastleBtn[i].classList.contains('btn-4') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].addEventListener('click', () =>{

                if(screenCastleBtn[i].innerHTML === castleBarracksRus.armoryRoom.armoryRoomBtn.firstBtn){
    
                    armoryBlood();
    
                };

                if(screenCastleBtn[i].innerHTML === castleBarracksRus.armoryRoom.armoryRoomBtn.secondBtn){

                    armoryTable();
    
                };

            });

        };

    }, '650');
    
};

function armoryTable(){

    castleBarracksRus.armoryTable.isVisited = true;

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.armoryTable.armoryTableName;

        screenCastleDescr.innerHTML = castleBarracksRus.armoryTable.armoryTableDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-1') === false){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            if(castleBarracksRus.armoryBlood.isVisited === false){

                screenCastleBtn[i].innerHTML = castleBarracksRus.armoryTable.armoryTableBtn.firstBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    armoryBlood();

                });

            };

            if(castleBarracksRus.armoryBlood.isVisited === true && castleBarracksRus.kitchenRoom.isVisited === false){

                screenCastleBtn[i].innerHTML = castleBarracksRus.armoryTable.armoryTableBtn.secondBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    kitchenRoom();

                });

            };

            if(castleBarracksRus.armoryBlood.isVisited === true && castleBarracksRus.kitchenRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === false){

                screenCastleBtn[i].innerHTML = castleBarracksRus.armoryTable.armoryTableBtn.thirdBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    secondFloor();

                });

            };

            if(castleBarracksRus.armoryBlood.isVisited === true && castleBarracksRus.kitchenRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === true){

                screenCastleBtn[i].innerHTML = castleBarracksRus.armoryTable.armoryTableBtn.fourthBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    castleCourtyard();

                });

            };

        };

    }, '650');
};

function armoryBlood(){

    castleBarracksRus.armoryBlood.isVisited = true;

    const arrayBtns = Object.values(castleBarracksRus.armoryBlood.armoryBloodBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.armoryBlood.armoryBloodName;

        screenCastleDescr.innerHTML = castleBarracksRus.armoryBlood.armoryBloodDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            screenCastleBtn[i].innerHTML = arrayBtns[i];
                
            if(castleBarracksRus.armoryTable.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-1') === false){

                    screenCastleBtn[i].classList.add('hide-btn');
    
                };

                screenCastleBtn[i].addEventListener('click', () =>{

                    armoryTable();

                });

            };

            if(castleBarracksRus.armoryTable.isVisited === true && castleBarracksRus.kitchenRoom.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-2') === false){

                    screenCastleBtn[i].classList.add('hide-btn');
    
                };

                screenCastleBtn[i].addEventListener('click', () =>{

                    kitchenRoom();

                });

            };

            if(castleBarracksRus.armoryTable.isVisited === true && castleBarracksRus.kitchenRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-3') === false){

                    screenCastleBtn[i].classList.add('hide-btn');
    
                };

                screenCastleBtn[i].addEventListener('click', () =>{

                    secondFloor();

                });

            };

            if(castleBarracksRus.armoryTable.isVisited === true && castleBarracksRus.kitchenRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-4') === false){

                    screenCastleBtn[i].classList.add('hide-btn');
    
                };

                screenCastleBtn[i].addEventListener('click', () =>{

                    castleCourtyard();

                });

            };

        };

    }, '650');
};

/// CASTLE---COURTYARD---BARRACKS---END

/// CASTLE---COURTYARD---DEAD__BODY--START

function deadBody(){

    castleCourtyardRus.courtyardDeadBody.isVisited = true;

    const arrayBtns = Object.values(castleCourtyardRus.courtyardDeadBody.deadBodyBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleCourtyardRus.courtyardDeadBody.deadBodyName;

        screenCastleDescr.innerHTML = castleCourtyardRus.courtyardDeadBody.deadBodyDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            screenCastleBtn[i].innerHTML = arrayBtns[i];

            if(castleBarracksRus.isVisited === false && castleStablesRus.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-3') === true || screenCastleBtn[i].classList.contains('btn-4') === true){

                    screenCastleBtn[i].classList.add('hide-btn');

                };
                
                screenCastleBtn[i].addEventListener('click', () =>{

                    if(screenCastleBtn[i].innerHTML === castleCourtyardRus.courtyardDeadBody.deadBodyBtn.firstBtn){

                        castleStables();

                    };

                    if(screenCastleBtn[i].innerHTML === castleCourtyardRus.courtyardDeadBody.deadBodyBtn.secondBtn){

                        castleBarracks();

                    };

                });

            };


            if(castleBarracksRus.isVisited === true && castleStablesRus.isVisited === false){

                if(screenCastleBtn[i].classList.contains('btn-1') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

                screenCastleBtn[i].addEventListener('click', () =>{

                    if(screenCastleBtn[i].innerHTML === castleCourtyardRus.courtyardDeadBody.deadBodyBtn.firstBtn){

                        castleStables();

                    };

                });

            };

            if(castleBarracksRus.isVisited === false && castleStablesRus.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-2') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

                screenCastleBtn[i].addEventListener('click', () =>{

                    if(screenCastleBtn[i].innerHTML === castleCourtyardRus.courtyardDeadBody.deadBodyBtn.secondBtn){

                        castleBarracks();

                    };

                });

            };


            if(castleBarracksRus.isVisited === true && castleStablesRus.isVisited === true){

                if(screenCastleBtn[i].classList.contains('btn-3') === false){

                    screenCastleBtn[i].classList.add('hide-btn');

                };

            };

        };

    }, '650');
    
};

/// CASTLE---COURTYARD---DEAD__BODY--END

export default castle;