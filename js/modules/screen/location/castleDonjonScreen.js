
/// IMPORTS---START ///

import { createFooterItem, showNextSlide, removeButtons, disableButtons, enableButtons } from "../../globalFunctions.js";

import { language } from "../chooseLangScreen.js";

import { donjonInsideText } from "../../text/castle/donjonInsideText.js";

import { visitedLocations } from "../../visitedLocations.js";

import { battleScreen } from "../battleScreen.js";

/// IMPORTS---END ///

/// GLOBAL---VARIABLES---START ///

/// GLOBAL---VARIABLES---END ///

/// REPEATABLE---FUNCTIONS---START ///

/// REPEATABLE---FUNCTIONS---END ///

/// MAIN---FUNCTIONS---START ///

function castleDonjon(){

    createHTMLElements();

};

function createHTMLElements(){

    mainElements();

    addDataToElements();

    eventListener();

    function mainElements(){

        const screenCastle = document.createElement('section');

        const container = document.createElement('div');

        const castleWrapper = document.createElement('div');
    
        const castleMain = document.createElement('div');
    
        const mainHeader = document.createElement('div');
    
        const mainFooter = document.createElement('div');

        screenCastle.className = 'screen__castle screen castle show-screen';

        container.className = 'castle__container screen__container container';

        castleWrapper.className = 'castle__wrapper screen__wrapper wrapper';

        castleMain.className = 'castle__main screen__main main';

        mainHeader.className = 'castle__header main__header header';

        mainFooter.className = 'castle__footer main__footer footer';

        screenCastle.id = 'castle';

        document.querySelector('body').appendChild(screenCastle);

        screenCastle.appendChild(container);

        container.appendChild(castleWrapper);

        castleWrapper.appendChild(castleMain);

        castleMain.appendChild(mainHeader);

        castleMain.appendChild(mainFooter);

        headerElements();

        footerElements();

    };

    function headerElements(){

        const mainHeader = document.querySelector('#castle').querySelector('.main__header');

        const mainTitle = document.createElement('h1');

        const mainDescr = document.createElement('div');

        mainTitle.className = 'main__title';

        mainDescr.className = 'main__descr';

        mainHeader.appendChild(mainTitle);

        mainHeader.appendChild(mainDescr);

    };

    function footerElements(){

        const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonInside.textButton).length;

        createFooterItem(footerItemCount);

        disableButtons();

    };
    
    function addDataToElements(){

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonInside.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonInside.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonInside.textButton)[index];

        });

    };

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            disableButtons();

            showNextSlide();

            removeButtons();

            donjonCrossroads();

        });

    };

};

function donjonCrossroads(){

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonCrossroads.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonCrossroads.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonCrossroads.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonCrossroads.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCrossroads.textButton.firstButton){

                    showNextSlide();
    
                    corridorRight();
    
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCrossroads.textButton.secondButton){
    
                    showNextSlide();
    
                    corridorLeft();
    
                };

            });

        });

    };

};

/// CORRIDOR---LEFT---START ///

// function corridorLeft(){

//     visitedLocations.castle.donjon.corridorLeft.isVisited = true;

//     const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton).length;

//     setTimeout(() => {

//         createFooterItem(footerItemCount);

//         document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textTitle;

//         document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textDescr;

//         document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

//             elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton)[index];

//         });

//         footerItemsCheck();

//         function footerItemsCheck(){

//             document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

//                 if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === true){

//                     if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthButton){
            
//                         elem.closest('.footer__item').remove();
        
//                     };
        
//                 };

//                 if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === false){

//                     if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fifthButton){
            
//                         elem.closest('.footer__item').remove();
        
//                     };
        
//                 };

//                 if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === true){

//                     if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.firstButton){
            
//                         elem.closest('.footer__item').remove();
        
//                     };
        
//                 };

//                 if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === true){

//                     if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.secondButton){
            
//                         elem.closest('.footer__item').remove();
        
//                     };
        
//                 };

//                 if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === false){

//                     if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.thirdButton){
            
//                         elem.closest('.footer__item').remove();
        
//                     };
        
//                 };

//                 if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === true){

//                     if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.firstButton || elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.secondButton){
            
//                         elem.closest('.footer__item').remove();
        
//                     };
        
//                 };

//                 if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === false){

//                     if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.firstButton || elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.thirdButton){
            
//                         elem.closest('.footer__item').remove();
        
//                     };
        
//                 };

//                 if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === false){

//                     if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.secondButton || elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.thirdButton){
            
//                         elem.closest('.footer__item').remove();
        
//                     };
        
//                 };

//             });
    
//         };

//         eventListener();
        
//     }, '650');

//     function eventListener(){

//         setTimeout(() => {

//             enableButtons();
            
//         }, '2000');

//         document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

//             elem.addEventListener('click', () =>{

//                 disableButtons();

//                 removeButtons();

//                 if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.firstButton){

//                     showNextSlide();

//                     doorToAlchemist();
        
//                 };
    
//                 if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.secondButton){
    
//                     showNextSlide();

//                     doorToDungeon();
        
//                 };
    
//                 if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.thirdButton){
    
//                     showNextSlide();

//                     doorToWarehouse();
        
//                 };
    
//                 if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthButton){
    
//                     showNextSlide();

//                     corridorRight();
        
//                 };

//             });

//         });

//     };

// };

function corridorLeft(){

    visitedLocations.castle.donjon.corridorLeft.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.firstButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.secondButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthButton){

                        elem.closest('.footer__item').remove();

                    };

                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === true){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.thirdButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthButton){

                        elem.closest('.footer__item').remove();

                    };

                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.firstButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.secondButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthButton){

                        elem.closest('.footer__item').remove();

                    };

                };

                
                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === true){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.secondButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.thirdButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthButton){

                        elem.closest('.footer__item').remove();

                    };

                };

                                
                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === true){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.firstButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.thirdButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthButton){

                        elem.closest('.footer__item').remove();

                    };

                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.firstButton){

                    showNextSlide();

                    doorToAlchemist();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.secondButton){
    
                    showNextSlide();

                    doorToDungeon();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.thirdButton){
    
                    showNextSlide();

                    doorToWarehouse();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthButton){
    
                    showNextSlide();

                    corridorRight();
        
                };

            });

        });

    };

};

function doorToAlchemist(){

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonDoorToAlchemist.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonDoorToAlchemist.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonDoorToAlchemist.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonDoorToAlchemist.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            disableButtons();

            showNextSlide();

            removeButtons();

            alchemistRoomBattle();
        
        });

    };

};

function doorToDungeon(){

    visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonDoorToDungeon.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonDoorToDungeon.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonDoorToDungeon.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonDoorToDungeon.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            disableButtons();

            showNextSlide();

            removeButtons();

            corridorLeft();
        
        });

    };

};

function doorToWarehouse(){

    visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true && visitedLocations.castle.donjon.corridorRight.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true && visitedLocations.castle.donjon.corridorRight.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton.fourthButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton.thirdButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton.fourthButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton.firstButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton.secondButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton.firstButton){

                    showNextSlide();

                    doorToAlchemist();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton.secondButton){
    
                    showNextSlide();

                    doorToDungeon();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton.thirdButton){
    
                    showNextSlide();

                    corridorRight();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton.fourthButton){
    
                    showNextSlide();

                    
        
                };

            });

        });

    };

};

/// ALCHEMIST---ROOM---START ///

function alchemistRoomBattle(){

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomBattle.textButton).length;

    setTimeout(() => {
        
        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomBattle.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomBattle.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomBattle.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomBattle.textButton.firstButton){

                    document.querySelector('#castle').classList.remove('show-screen');

                    document.querySelector('#castle').classList.add('hide-screen');

                    setTimeout(() => {
                        
                        removeButtons();

                    }, '650');

                    battleScreen([3, 0, 0], 'alchemistRoom');
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomBattle.textButton.secondButton){

                    removeButtons();
    
                    showNextSlide();

                    alchemistRoom();
        
                };

            });

        });

    };

};

function alchemistRoom(){

    visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoom.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoom.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoom.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoom.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoom.textButton.firstButton){

                    showNextSlide();

                    legionnaireDeadBody();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoom.textButton.secondButton){
    
                    showNextSlide();

                    alchemistTable();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoom.textButton.thirdButton){
    
                    showNextSlide();

                    alchemistWorkplace();
        
                };

            });

        });

    };

};

function legionnaireDeadBody(){

    visitedLocations.castle.donjon.corridorLeft.alchemistRoom.legionnaireDeadBody.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomDeadBody.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomDeadBody.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomDeadBody.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomDeadBody.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistTable.isVisited === true && visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistWorkplace.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomDeadBody.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistTable.isVisited === false && visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistWorkplace.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomDeadBody.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistTable.isVisited === false && visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistWorkplace.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomDeadBody.textButton.firstButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistTable.isVisited === true && visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistWorkplace.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomDeadBody.textButton.secondButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomDeadBody.textButton.firstButton){

                    showNextSlide();

                    alchemistTable();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomDeadBody.textButton.secondButton){
    
                    showNextSlide();

                    alchemistWorkplace();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomDeadBody.textButton.thirdButton){
    
                    showNextSlide();

                    corridorLeft();
        
                };

            });

        });

    };

};

function alchemistTable(){

    visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistTable.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomTable.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomTable.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomTable.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomTable.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.legionnaireDeadBody.isVisited === true && visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistWorkplace.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomTable.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.legionnaireDeadBody.isVisited === false && visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistWorkplace.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomTable.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.legionnaireDeadBody.isVisited === false && visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistWorkplace.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomTable.textButton.firstButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.legionnaireDeadBody.isVisited === true && visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistWorkplace.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomTable.textButton.secondButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomTable.textButton.firstButton){

                    showNextSlide();

                    legionnaireDeadBody();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomTable.textButton.secondButton){
    
                    showNextSlide();

                    alchemistWorkplace();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomTable.textButton.thirdButton){
    
                    showNextSlide();

                    corridorLeft();
        
                };

            });

        });

    };

};

function alchemistWorkplace(){

    visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistWorkplace.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomWorkplace.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomWorkplace.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomWorkplace.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomWorkplace.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.legionnaireDeadBody.isVisited === true && visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistTable.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomWorkplace.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.legionnaireDeadBody.isVisited === false && visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistTable.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomWorkplace.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.legionnaireDeadBody.isVisited === false && visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistTable.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomWorkplace.textButton.firstButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.legionnaireDeadBody.isVisited === true && visitedLocations.castle.donjon.corridorLeft.alchemistRoom.alchemistTable.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomWorkplace.textButton.secondButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomWorkplace.textButton.firstButton){

                    showNextSlide();

                    legionnaireDeadBody();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomWorkplace.textButton.secondButton){
    
                    showNextSlide();

                    alchemistTable();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonAlchemistRoomWorkplace.textButton.thirdButton){
    
                    showNextSlide();

                    corridorLeft();
        
                };

            });

        });

    };

};

/// ALCHEMIST---ROOM---END ///

/// CORRIDOR---LEFT---END ///

/// CORRIDOR---RIGHT---START ///

function corridorRight(){

    visitedLocations.castle.donjon.corridorRight.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelDoor.isVisited === true && visitedLocations.castle.donjon.corridorRight.deadBodyCorridor.isVisited === true && visitedLocations.castle.donjon.corridorLeft.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.fourthButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === false && visitedLocations.castle.donjon.corridorRight.chapelDoor.isVisited === false && visitedLocations.castle.donjon.corridorRight.deadBodyCorridor.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.fourthButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === false && visitedLocations.castle.donjon.corridorRight.chapelDoor.isVisited === true && visitedLocations.castle.donjon.corridorRight.deadBodyCorridor.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.firstButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelDoor.isVisited === false && visitedLocations.castle.donjon.corridorRight.deadBodyCorridor.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.secondButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelDoor.isVisited === true && visitedLocations.castle.donjon.corridorRight.deadBodyCorridor.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === false && visitedLocations.castle.donjon.corridorRight.chapelDoor.isVisited === false && visitedLocations.castle.donjon.corridorRight.deadBodyCorridor.isVisited === true){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.thirdButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.fourthButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === false && visitedLocations.castle.donjon.corridorRight.chapelDoor.isVisited === true && visitedLocations.castle.donjon.corridorRight.deadBodyCorridor.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.secondButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.fourthButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelDoor.isVisited === false && visitedLocations.castle.donjon.corridorRight.deadBodyCorridor.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.firstButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.fourthButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.firstButton){

                    showNextSlide();

                    doorToMage();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.secondButton){
    
                    showNextSlide();

                    doorToChapel();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.thirdButton){
    
                    showNextSlide();

                    corridorDeadBody();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.fourthButton){
    
                    showNextSlide();

                    corridorLeft();
        
                };

            });

        });

    };

};

function doorToMage(){

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonDoorToMageRoom.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonDoorToMageRoom.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonDoorToMageRoom.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonDoorToMageRoom.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            disableButtons();

            showNextSlide();

            removeButtons();

            mageRoom();
        
        });

    };

};

function doorToChapel(){

    visitedLocations.castle.donjon.corridorRight.chapelDoor.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonDoorToChapel.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonDoorToChapel.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonDoorToChapel.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonDoorToChapel.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.donjon.corridorLeft.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonDoorToChapel.textButton.firstButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                }else{

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonDoorToChapel.textButton.secondButton){
            
                        elem.closest('.footer__item').remove();
        
                    };

                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonDoorToChapel.textButton.firstButton){
    
                    showNextSlide();
    
                    chapelBattle();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonDoorToChapel.textButton.secondButton){
    
                    showNextSlide();
    
                    corridorRight();
        
                };

            });

        });
        
    };

};

function corridorDeadBody(){

    visitedLocations.castle.donjon.corridorRight.deadBodyCorridor.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonCorridorDeadBody.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonCorridorDeadBody.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonCorridorDeadBody.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonCorridorDeadBody.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelDoor.isVisited === true && visitedLocations.castle.donjon.corridorLeft.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorDeadBody.textButton.fourthButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelDoor.isVisited === true && visitedLocations.castle.donjon.corridorLeft.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorDeadBody.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === false && visitedLocations.castle.donjon.corridorRight.chapelDoor.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorDeadBody.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === false && visitedLocations.castle.donjon.corridorRight.chapelDoor.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorDeadBody.textButton.firstButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelDoor.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorDeadBody.textButton.secondButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.firstButton){

                    showNextSlide();

                    doorToMage();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.secondButton){
    
                    showNextSlide();

                    doorToChapel();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.thirdButton){
    
                    showNextSlide();

                    corridorLeft();
        
                };

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorRight.textButton.thirdButton){
    
                    showNextSlide();

                    nextCorridor();
        
                };

            });

        });

    };

};

/// MAGE---ROOM---START ///

function mageRoom(){

    visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonMageRoom.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonMageRoom.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonMageRoom.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonMageRoom.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonMageRoom.textButton.firstButton){

                    showNextSlide();

                    commDevice();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonMageRoom.textButton.secondButton){
    
                    showNextSlide();

                    sleepingPlace();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonMageRoom.textButton.thirdButton){
    
                    showNextSlide();

                    magesTable();
        
                };

            });

        });

    };

};

function commDevice(){

    visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomCommDevice.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomCommDevice.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomCommDevice.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomCommDevice.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomCommDevice.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomReport.isVisited === true && visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomTable.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomCommDevice.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomReport.isVisited === false && visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomTable.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomCommDevice.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomReport.isVisited === false && visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomTable.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomCommDevice.textButton.firstButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomReport.isVisited === true && visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomTable.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomCommDevice.textButton.secondButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomCommDevice.textButton.firstButton){

                    showNextSlide();

                    sleepingPlace();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomCommDevice.textButton.secondButton){
    
                    showNextSlide();

                    magesTable();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomCommDevice.textButton.thirdButton){
    
                    showNextSlide();

                    corridorRight();
        
                };

            });

        });

    };

};

function sleepingPlace(){

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomSleepingPlace.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomSleepingPlace.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomSleepingPlace.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomSleepingPlace.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            disableButtons();

            showNextSlide();

            removeButtons();

            magesPapers();
        
        });

    };

};

function magesPapers(){

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomPapers.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomPapers.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomPapers.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomPapers.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            disableButtons();

            showNextSlide();

            removeButtons();

            magesReport();
        
        });

    };

};

function magesReport(){

    visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomReport.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomReport.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomReport.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomReport.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomReport.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomTable.isVisited === true && visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomCommDevice.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomReport.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomTable.isVisited === false && visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomCommDevice.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomReport.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomTable.isVisited === false && visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomCommDevice.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomReport.textButton.firstButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomTable.isVisited === true && visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomCommDevice.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomReport.textButton.secondButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomReport.textButton.firstButton){

                    showNextSlide();

                    magesTable();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomReport.textButton.secondButton){
    
                    showNextSlide();

                    commDevice();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomReport.textButton.thirdButton){
    
                    showNextSlide();

                    corridorRight();
        
                };

            });

        });

    };

};

function magesTable(){

    visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomTable.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomTable.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomTable.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomTable.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomTable.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomReport.isVisited === true && visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomCommDevice.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomTable.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomReport.isVisited === false && visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomCommDevice.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomTable.textButton.thirdButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomReport.isVisited === false && visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomCommDevice.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomTable.textButton.firstButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomReport.isVisited === true && visitedLocations.castle.donjon.corridorRight.mageRoom.donjonMageRoomCommDevice.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomTable.textButton.secondButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomTable.textButton.firstButton){

                    showNextSlide();

                    sleepingPlace();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomTable.textButton.secondButton){
    
                    showNextSlide();

                    commDevice();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonMageRoomTable.textButton.thirdButton){
    
                    showNextSlide();

                    corridorRight();
        
                };

            });

        });

    };

};

/// MAGE---ROOM---END ///

/// CHAPEL---ROOM---START ///

function chapelBattle(){

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelBattle.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelBattle.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelBattle.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelBattle.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelBattle.textButton.firstButton){
    
                    battleScreen([2, 1, 0], 'chapel');
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelBattle.textButton.secondButton){
    
                    showNextSlide();
    
                    chapel();
        
                };
            
            });


        });

    };

};

function chapel(){

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapel.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapel.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapel.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapel.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapel.textButton.firstButton){

                    showNextSlide();

                    knightDeadBody();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapel.textButton.secondButton){
    
                    showNextSlide();

                    altar();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapel.textButton.thirdButton){
    
                    showNextSlide();

                    pileOfCorpses();
        
                };

            });

        });

    };

};

function knightDeadBody(){

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnight.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnight.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnight.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnight.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            disableButtons();

            showNextSlide();

            removeButtons();

            knightHands();
        
        });

    };

};

function knightHands(){

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightHands.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightHands.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightHands.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightHands.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            disableButtons();

            showNextSlide();

            removeButtons();

            knightLegs();
        
        });

    };

};

function knightLegs(){

    visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelDeadKnightLegs.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightLegs.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightLegs.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightLegs.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightLegs.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelAtarNote.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelPileOfCorpses.isVisited === true && visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === true && visitedLocations.castle.donjon.corridorRight.deadBodyCorridor.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightLegs.textButton.fourthButton){
                
                        elem.closest('.footer__item').remove();
            
                    };
            
                };

                if(visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelAtarNote.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelPileOfCorpses.isVisited === true && (visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === false || visitedLocations.castle.donjon.corridorRight.deadBodyCorridor.isVisited === false)){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightLegs.textButton.thirdButton){
                
                        elem.closest('.footer__item').remove();
            
                    };
            
                };

                if(visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelAtarNote.isVisited === false && visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelPileOfCorpses.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightLegs.textButton.thirdButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightLegs.textButton.fourthButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelAtarNote.isVisited === false && visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelPileOfCorpses.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightLegs.textButton.firstButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelAtarNote.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelPileOfCorpses.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightLegs.textButton.secondButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightLegs.textButton.firstButton){

                    showNextSlide();

                    altar();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightLegs.textButton.secondButton){
    
                    showNextSlide();

                    pileOfCorpses();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightLegs.textButton.thirdButton){
    
                    showNextSlide();

                    corridorRight();
        
                };

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightLegs.textButton.fourthButton){
    
                    showNextSlide();

                    nextCorridor();
        
                };

            });

        });

    };

};

function altar(){

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltar.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltar.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltar.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltar.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            disableButtons();

            showNextSlide();

            removeButtons();

            altarDeadBody();
        
        });

    };

};

function altarDeadBody(){

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBody.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBody.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBody.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBody.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            disableButtons();

            showNextSlide();

            removeButtons();

            altarDeadBodyNote();
        
        });

    };

};

function altarDeadBodyNote(){

    visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelAtarNote.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBodyNote.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBodyNote.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBodyNote.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBodyNote.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelDeadKnightLegs.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelPileOfCorpses.isVisited === true && visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === true && visitedLocations.castle.donjon.corridorRight.deadBodyCorridor.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBodyNote.textButton.fourthButton){
                
                        elem.closest('.footer__item').remove();
            
                    };
            
                };

                if(visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelDeadKnightLegs.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelPileOfCorpses.isVisited === true && (visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === false || visitedLocations.castle.donjon.corridorRight.deadBodyCorridor.isVisited === false)){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBodyNote.textButton.thirdButton){
                
                        elem.closest('.footer__item').remove();
            
                    };
            
                };

                if(visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelDeadKnightLegs.isVisited === false && visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelPileOfCorpses.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBodyNote.textButton.thirdButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBodyNote.textButton.fourthButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelDeadKnightLegs.isVisited === false && visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelPileOfCorpses.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBodyNote.textButton.firstButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelDeadKnightLegs.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelPileOfCorpses.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBodyNote.textButton.secondButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBodyNote.textButton.firstButton){

                    showNextSlide();

                    knightDeadBody();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBodyNote.textButton.secondButton){
    
                    showNextSlide();

                    pileOfCorpses();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBodyNote.textButton.thirdButton){
    
                    showNextSlide();

                    corridorRight();
        
                };

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelAltarDeadBodyNote.textButton.fourthButton){
    
                    showNextSlide();

                    nextCorridor();
        
                };

            });

        });

    };

};

function pileOfCorpses(){

    visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelPileOfCorpses.isVisited = true;

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelPileOfCorpses.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelPileOfCorpses.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonChapelPileOfCorpses.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonChapelPileOfCorpses.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelDeadKnightLegs.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelAtarNote.isVisited === true && visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === true && visitedLocations.castle.donjon.corridorRight.deadBodyCorridor.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonChapelPileOfCorpses.textButton.fourthButton){
                
                        elem.closest('.footer__item').remove();
            
                    };
            
                };

                if(visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelDeadKnightLegs.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelAtarNote.isVisited === true && (visitedLocations.castle.donjon.corridorRight.mageRoom.isVisited === false || visitedLocations.castle.donjon.corridorRight.deadBodyCorridor.isVisited === false)){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonChapelPileOfCorpses.textButton.thirdButton){
                
                        elem.closest('.footer__item').remove();
            
                    };
            
                };

                if(visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelDeadKnightLegs.isVisited === false && visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelAtarNote.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelDeadKnightLegs.textButton.thirdButton || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelPileOfCorpses.textButton.fourthButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelDeadKnightLegs.isVisited === false && visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelAtarNote.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonChapelPileOfCorpses.textButton.firstButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

                if(visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelDeadKnightLegs.isVisited === true && visitedLocations.castle.donjon.corridorRight.chapelRoom.chapelAtarNote.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonChapelPileOfCorpses.textButton.secondButton){
            
                        elem.closest('.footer__item').remove();
        
                    };
        
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){
        
        setTimeout(() => {

            enableButtons();
            
        }, '2000');

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButtons();

                removeButtons();

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelPileOfCorpses.textButton.firstButton){

                    showNextSlide();

                    knightDeadBody();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelPileOfCorpses.textButton.secondButton){
    
                    showNextSlide();

                    altar();
        
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelPileOfCorpses.textButton.thirdButton){
    
                    showNextSlide();

                    corridorRight();
        
                };

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonChapelPileOfCorpses.textButton.fourthButton){
    
                    showNextSlide();

                    nextCorridor();
        
                };

            });

        });

    };

};

/// CHAPEL---ROOM---END ///

/// CORRIDOR---RIGHT---END ///

export { castleDonjon };

export { alchemistRoom };