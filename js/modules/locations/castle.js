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

        console.log(screenCastleTitle.innerHTML);

        console.log(`FirstFloor: ${castleBarracksRus.barracksInsideFirstFloor.isVisited}`);

        console.log(`SecondFloor: ${castleBarracksRus.barracksInsideSecondFloor.isVisited}`);

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

/// CASTLE---COURTYARD---STABLE

function castleStables(){

    const arrayBtns = Object.values(castleStablesRus.stablesBtn);

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleStablesRus.stablesName;

        screenCastleDescr.innerHTML = castleStablesRus.stablesDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-3') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };

            screenCastleBtn[i].innerHTML = arrayBtns[i];

        };

    }, '650');

};

/// CASTLE---COURTYARD---BARRACKS

function castleBarracks(){

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

            if(screenCastleBtn[i].classList.contains('btn-3') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].innerHTML = arrayBtns[i];

            screenCastleBtn[i].addEventListener('click', () =>{

                

                if(screenCastleBtn[i].innerHTML === 'Осмотреть второй этаж'){

                    secondFloor();

                };

                if(screenCastleBtn[i].innerHTML === 'Осмотреть первый этаж'){

                    firstFloor();

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

            if(screenCastleBtn[i].classList.contains('btn-3') === true){

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

            if(screenCastleBtn[i].classList.contains('btn-3') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].innerHTML = arrayBtns[i];

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

            if(screenCastleBtn[i].classList.contains('btn-3') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            screenCastleBtn[i].innerHTML = arrayBtns[i];

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

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.officerDeadBody.officerDeadBodyName;

        screenCastleDescr.innerHTML = castleBarracksRus.officerDeadBody.officerDeadBodyDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-1') === false){

                screenCastleBtn[i].classList.add('hide-btn');

            };

            if(castleBarracksRus.officerTable.isVisited === false){
    
                screenCastleBtn[i].innerHTML = castleBarracksRus.officerDeadBody.officerDeadBodyBtn.firstBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    officerTable();

                });

            };

            if(castleBarracksRus.officerTable.isVisited === true){

                screenCastleBtn[i].innerHTML = castleBarracksRus.officerDeadBody.officerDeadBodyBtn.secondBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    legionnaireRooms();

                });

            };

            if(castleBarracksRus.officerTable.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === false){

                screenCastleBtn[i].innerHTML = castleBarracksRus.officerDeadBody.officerDeadBodyBtn.thirdBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    firstFloor();

                });

            };

            if(castleBarracksRus.officerTable.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === true){

                screenCastleBtn[i].innerHTML = castleBarracksRus.officerDeadBody.officerDeadBodyBtn.fourthBtn;

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
    
    setTimeout(() =>{

        screenCastleTitle.innerHTML = castleBarracksRus.pieceOfPaper.pieceOfPaperName;

        screenCastleDescr.innerHTML = castleBarracksRus.pieceOfPaper.pieceOfPaperDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-1') === false){

                screenCastleBtn[i].classList.add('hide-btn');

            };

            if(castleBarracksRus.officerDeadBody.isVisited === false){
    
                screenCastleBtn[i].innerHTML = castleBarracksRus.pieceOfPaper.pieceOfPaperBtn.firstBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    officerDeadBody();

                });

            };

            if(castleBarracksRus.officerDeadBody.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === false){

                screenCastleBtn[i].innerHTML = castleBarracksRus.pieceOfPaper.pieceOfPaperBtn.secondBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    legionnaireRooms();

                });

            };

            if(castleBarracksRus.officerDeadBody.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === false){

                screenCastleBtn[i].innerHTML = castleBarracksRus.pieceOfPaper.pieceOfPaperBtn.thirdBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    firstFloor();

                });

            };

            if(castleBarracksRus.officerDeadBody.isVisited === true && castleBarracksRus.legionnaireRooms.isVisited === true && castleBarracksRus.barracksInsideFirstFloor.isVisited === true){

                screenCastleBtn[i].innerHTML = castleBarracksRus.pieceOfPaper.pieceOfPaperBtn.fourthBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    castleCourtyard();

                });

            };

        };

    }, '650');
    
};

function kitchenRoom(){

    castleBarracksRus.kitchenRoom.isVisited = true;
    
    setTimeout(() =>{

        screenCastleTitle.innerHTML = castleBarracksRus.kitchenRoom.kitchenRoomName;

        screenCastleDescr.innerHTML = castleBarracksRus.kitchenRoom.kitchenRoomDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-1') === false){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            if(castleBarracksRus.armoryRoom.isVisited === false){

                screenCastleBtn[i].innerHTML = castleBarracksRus.kitchenRoom.kitchenRoomBtn.firstBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    armoryRoom();

                });

            };

            if(castleBarracksRus.armoryRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === false){

                screenCastleBtn[i].innerHTML = castleBarracksRus.kitchenRoom.kitchenRoomBtn.secondBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    secondFloor();

                });

            };

            if(castleBarracksRus.armoryRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === true){

                screenCastleBtn[i].innerHTML = castleBarracksRus.kitchenRoom.kitchenRoomBtn.thirdBtn;

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

            if(screenCastleBtn[i].classList.contains('btn-3') === true){

                screenCastleBtn[i].classList.add('hide-btn');

            };

            screenCastleBtn[i].innerHTML = arrayBtns[i];
                
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

    setTimeout(() =>{

        removeHideOnBtns();

        screenCastleTitle.innerHTML = castleBarracksRus.armoryBlood.armoryBloodName;

        screenCastleDescr.innerHTML = castleBarracksRus.armoryBlood.armoryBloodDescr;

        for(let i = 0; i < screenCastleBtn.length; i++){

            if(screenCastleBtn[i].classList.contains('btn-1') === false){

                screenCastleBtn[i].classList.add('hide-btn');

            };
                
            if(castleBarracksRus.armoryTable.isVisited === false){

                screenCastleBtn[i].innerHTML = castleBarracksRus.armoryBlood.armoryBloodBtn.firstBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    armoryTable();

                });

            };

            if(castleBarracksRus.armoryTable.isVisited === true && castleBarracksRus.kitchenRoom.isVisited === false){

                screenCastleBtn[i].innerHTML = castleBarracksRus.armoryBlood.armoryBloodBtn.secondBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    kitchenRoom();

                });

            };

            if(castleBarracksRus.armoryTable.isVisited === true && castleBarracksRus.kitchenRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === false){

                screenCastleBtn[i].innerHTML = castleBarracksRus.armoryBlood.armoryBloodBtn.thirdBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    secondFloor();

                });

            };

            if(castleBarracksRus.armoryTable.isVisited === true && castleBarracksRus.kitchenRoom.isVisited === true && castleBarracksRus.barracksInsideSecondFloor.isVisited === true){

                screenCastleBtn[i].innerHTML = castleBarracksRus.armoryBlood.armoryBloodBtn.fourthBtn;

                screenCastleBtn[i].addEventListener('click', () =>{

                    castleCourtyard();

                });

            };

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

            screenCastleBtn[i].addEventListener('click', () =>{

                

                if(screenCastleBtn[i].innerHTML === 'Осмотреть казармы'){
        
                    castleBarracks();
            
                };
    
            });

        };

    }, '650');
    
};

export default castle;