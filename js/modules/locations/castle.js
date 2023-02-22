
import castleEntranceRus from '../text/castle/russian/castleEntranceRus.js';

import castleCourtyardRus from '../text/castle/russian/castleCourtyardRus.js';

import castleBarracksRus from '../text/castle/russian/castleBarracksRus.js';

const screenCastle = document.querySelector('#castle-screen');

const screenCastleDescr = screenCastle.querySelector('.main__desc');

const screenCastleTitle = screenCastle.querySelector('.main__title');

const screenCastleBtn = screenCastle.querySelectorAll('.main__btn');

screenCastle.querySelectorAll('.main__btn').forEach(elem =>{

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

        if(screenCastleBtn[i].classList.contains('hide-btn') != true){

            screenCastleBtn[i].innerHTML = castleEntranceRus.entranceBtn;

            screenCastleBtn[i].addEventListener('click', (event) =>{

                event.preventDefault();

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

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.barrakcsName;

        screenCastleDescr.innerHTML = castleBarracksRus.barracksDescr;

        screenCastle.querySelectorAll('.main__btn').forEach(elem =>{

            if(elem.classList.contains('btn-1') === false){

                elem.classList.add('hide-btn');

            };

            elem.innerHTML = castleBarracksRus.barracksBtn;

        });

        screenCastle.querySelector('.btn-1').addEventListener('click', (event) =>{

            event.preventDefault();

            barracksInside();

        })

    }, "500");

};

function barracksInside(){
    
    const arrayBtns = Object.values(castleBarracksRus.barracksInside.barracksInsideNameBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.barracksInside.barracksInsideName;

        screenCastleDescr.innerHTML = castleBarracksRus.barracksInside.barracksInsideDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-3') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].innerHTML = arrayBtns[i];

            screenCastleBtn[i].addEventListener('click', (event) =>{

                event.preventDefault();

                if(screenCastleBtn[i].innerHTML === 'Осмотреть второй этаж'){

                    secondFloor();

                };

                if(screenCastleBtn[i].innerHTML === 'Осмотреть первый этаж'){

                    firstFloor();

                };

            });

        };

    }, "500");

};

function firstFloor(){

    const arrayBtns = Object.values(castleBarracksRus.barracksInsideFirstFloor.firstFloorBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.barracksInsideFirstFloor.firstFloorName;

        screenCastleDescr.innerHTML = castleBarracksRus.barracksInsideFirstFloor.firstFloorDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){
                
            screenCastleBtn[i].innerHTML = arrayBtns[i];

            screenCastleBtn[i].addEventListener('click', (event) =>{

                event.preventDefault();

                if(screenCastleBtn[i].innerHTML === castleBarracksRus.barracksInsideFirstFloor.firstFloorBtn.thirdBtn){

                    castleCourtyard();

                };

            });

        };

    }, '650');

};

function secondFloor(){

    const arrayBtns = Object.values(castleBarracksRus.barracksInsideSecondFloor.secondFloorBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.barracksInsideSecondFloor.secondFloorName;

        screenCastleDescr.innerHTML = castleBarracksRus.barracksInsideSecondFloor.secondFloorDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-3') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].innerHTML = arrayBtns[i];

            screenCastleBtn[i].addEventListener('click', (event) =>{

                event.preventDefault();

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

    const arrayBtns = Object.values(castleBarracksRus.legionnaireRooms.legionnaireRoomsBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.legionnaireRooms.legionnaireRoomsName;

        screenCastleDescr.innerHTML = castleBarracksRus.legionnaireRooms.legionnaireRoomsDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){


            if(screenCastleBtn[i].classList.contains('btn-1') === false){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].innerHTML = arrayBtns[i];

            screenCastleBtn[i].addEventListener('click', (event) =>{

                event.preventDefault();

                officerRoom();

            });

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

            if(screenCastleBtn[i].classList.contains('btn-3') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].innerHTML = arrayBtns[i];

            screenCastleBtn[i].addEventListener('click', (event) =>{

                event.preventDefault();

                if(screenCastleBtn[i].innerHTML === castleBarracksRus.officerRoom.officerRoomBtn.firstBtn){

                    officerDeadBody();
    
                };
    
                if(screenCastleBtn[i].innerHTML === castleBarracksRus.officerRoom.officerRoomBtn.secondBtn){
    
                    officerTable();
    
                };

                console.log('-');

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

            if(screenCastleBtn[i].classList.contains('btn-1') === false){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].innerHTML = arrayBtns[i];

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

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.pieceOfPaper.pieceOfPaperName;

        screenCastleDescr.innerHTML = castleBarracksRus.pieceOfPaper.pieceOfPaperDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-1') === false){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].innerHTML = arrayBtns[i];

            screenCastleBtn[i].addEventListener('click', () =>{

                officerDeadBody();

            })

        };

    }, '650');
    
};

/// CASTLE---COURTYARD---DEAD__BODY

function deadBody(){

    const arrayBtns = Object.values(castleCourtyardRus.courtyardDeadBody.deadBodyBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleCourtyardRus.courtyardDeadBody.deadBodyName;

        screenCastleDescr.innerHTML = castleCourtyardRus.courtyardDeadBody.deadBodyDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-3') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].innerHTML = arrayBtns[i];

            screenCastleBtn[i].addEventListener('click', (event) =>{

                event.preventDefault();

                if(screenCastleBtn[i].innerHTML === 'Осмотреть казармы'){
        
                    castleBarracks();
            
                };
    
            });

        };

    }, "500");
    
};

export default castle;