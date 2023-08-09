
/// IMPORTS---START ///

import { donjonInsideText } from "../../text/castle/donjonInside.js";

import { visitedLocations } from "../../visitedLocations.js";

import { battleScreen } from "../battleScreen.js";

/// IMPORTS---END ///

/// GLOBAL---VARIABLES---START ///

let language = null;

/// GLOBAL---VARIABLES---END ///

/// REPEATABLE---FUNCTIONS---START ///

/// REPEATABLE---FUNCTIONS---END ///

/// MAIN---FUNCTIONS---START ///

function castleDonjon(choosedLang){

    language = choosedLang;

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

    };
    
    function addDataToElements(){

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonInside.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonInside.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonInside.textButton)[index];

        });

    };

    function eventListener(){

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            showNextSlide();

            donjonCrossroads();

        });

    };

};

function donjonCrossroads(){

    const footerItemCount = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonCrossroads.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = donjonInsideText.language[language].donjonFirstFloor.donjonCrossroads.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleCourtyardText.language[language].madonjonInsideText.language[language].donjonFirstFloor.donjonCrossroadsinText.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(donjonInsideText.language[language].donjonFirstFloor.donjonCrossroads.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCrossroads.textButton.firstBtn){

                    showNextSlide();
    
                    donjonCorridorRight();
    
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCrossroads.textButton.secondBtn){
    
                    showNextSlide();
    
                    donjonCorridorLeft();
    
                };

            });

        });

    };

};

function donjonCorridorRight(){};

function donjonCorridorLeft(){

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
               
                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.firstBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.secondBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.thirdBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === true){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.thirdBtn || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.secondBtn || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false && visitedLocations.castle.donjon.corridorLeft.warehouseDoor.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.firstBtn || elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.firstBtn){

                    showNextSlide();
    
                    donjonDoorToAlchemist();
    
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.secondBtn){
    
                    showNextSlide();
    
                    donjonDoorToDungeon();
    
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.thirdBtn){
    
                    showNextSlide();
    
                    donjonDoorToWarehouse();
    
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.fourthBtn){
    
                    showNextSlide();
    
                    donjonCorridorRight();
    
                };

            });

        });

    };

};

function donjonDoorToAlchemist(){

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

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                showNextSlide();
    
                donjonAlchemistRoomBattle();

            });

        });

    };

};

function donjonAlchemistRoomBattle(){

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

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                showNextSlide();
    
                battleScreen(language, 'lowTier', 3);

            });

        });

    };

};

function donjonDoorToDungeon(){};

function donjonDoorToWarehouse(){

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
               
                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false){

                    if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton.thirdBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton.thirdBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === false && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === true){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.firstBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

                if(visitedLocations.castle.donjon.corridorLeft.alchemistRoom.isVisited === true && visitedLocations.castle.donjon.corridorLeft.dungeonDoor.isVisited === false){

                    if(elem.innerText != donjonInsideText.language[language].donjonFirstFloor.donjonCorridorLeft.textButton.secondBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton.firstBtn){

                    showNextSlide();
    
                    donjonDoorToAlchemist();
    
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton.secondBtn){
    
                    showNextSlide();
    
                    donjonDoorToDungeon();
    
                };
    
                if(elem.innerText === donjonInsideText.language[language].donjonFirstFloor.donjonDoorToWarehouse.textButton.thirdBtn){
    
                    showNextSlide();
    
                    donjonCorridorRight();
    
                };

            });

        });

    };

};

export { castleDonjon };