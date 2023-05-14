
/// IMPORTS---START ///

import castleEntranceText from "../../text/castle/castleEntranceText.js";

import castleCourtyardText from "../../text/castle/castleCourtyardText.js";

import castleStablesText from "../../text/castle/castleStablesText.js";

import castleBarracksText from "../../text/castle/castleBarracksText.js";

import visitedLocations from "../../visitedLocations.js";

/// IMPORTS---END ///

/// GLOBAL---VARIABLES---START ///

let language = null;

/// GLOBAL---VARIABLES---END ///

/// REPEATABLE---FUNCTIONS---START ///

function createFooterItem(footerItemCount){
    
    for(let i = 0; i < footerItemCount; i++){

        const footerItem = document.createElement('div');

        const footerBtn = document.createElement('button');

        footerItem.className = 'footer__item';

        footerBtn.className = 'footer__button button';

        document.querySelector('#castle').querySelector('.footer').appendChild(footerItem);

        footerItem.appendChild(footerBtn);

    };

};

function showNextSlide(){

    document.querySelector('#castle').querySelector('.wrapper').classList.toggle('rotation');

    setTimeout(() => {

        document.querySelector('#castle').querySelectorAll('.footer__item').forEach(elem =>{

            elem.remove();
        
        });

    }, '650');

};

/// REPEATABLE---FUNCTIONS---END ///

/// MAIN---FUNCTIONS---START ///

function castle(choosedLang){

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

        const footerItemCount = Object.values(castleEntranceText.language[language].mainText.textButton).length;

        createFooterItem(footerItemCount);

    };
    
    function addDataToElements(){

        document.querySelector('#castle').querySelector('.main__title').innerText = castleEntranceText.language[language].mainText.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleEntranceText.language[language].mainText.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleEntranceText.language[language].mainText.textButton)[index];

        });

    };

    function eventListener(){

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            showNextSlide();

            castleCourtyard();

        });

    };

};

function castleCourtyard(){

    const footerItemCount = Object.values(castleCourtyardText.language[language].mainText.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleCourtyardText.language[language].mainText.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleCourtyardText.language[language].mainText.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleCourtyardText.language[language].mainText.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.courtyard.barracks.isVisited === false && visitedLocations.castle.courtyard.stables.isVisited === false && visitedLocations.castle.courtyard.stables.isVisited === false){

                    if(elem.innerText === castleCourtyardText.language[language].mainText.textButton.fourthBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };

                };

                if(visitedLocations.castle.courtyard.stables.isVisited === true && visitedLocations.castle.courtyard.barracks.isVisited === false && visitedLocations.castle.courtyard.deadBody.isVisited === false){

                    if(elem.innerText === castleCourtyardText.language[language].mainText.textButton.firstBtn || elem.innerText === castleCourtyardText.language[language].mainText.textButton.fourthBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
        
                };

                if(visitedLocations.castle.courtyard.stables.isVisited === false && visitedLocations.castle.courtyard.barracks.isVisited === true && visitedLocations.castle.courtyard.deadBody.isVisited === false){

                    if(elem.innerText === castleCourtyardText.language[language].mainText.textButton.secondBtn || elem.innerText === castleCourtyardText.language[language].mainText.textButton.fourthBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
            
                };

                if(visitedLocations.castle.courtyard.stables.isVisited === false && visitedLocations.castle.courtyard.barracks.isVisited === false && visitedLocations.castle.courtyard.deadBody.isVisited === true){

                    if(elem.innerText === castleCourtyardText.language[language].mainText.textButton.thirdBtn || elem.innerText === castleCourtyardText.language[language].mainText.textButton.fourthBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };
        
                if(visitedLocations.castle.courtyard.stables.isVisited === false && visitedLocations.castle.courtyard.barracks.isVisited === true && visitedLocations.castle.courtyard.deadBody.isVisited === true){
    
                    if(elem.innerText != castleCourtyardText.language[language].mainText.textButton.firstBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };                    
    
                };

                if(visitedLocations.castle.courtyard.stables.isVisited === true && visitedLocations.castle.courtyard.barracks.isVisited === false && visitedLocations.castle.courtyard.deadBody.isVisited === true){
    
                    if(elem.innerText != castleCourtyardText.language[language].mainText.textButton.secondBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };                    
    
                };
        
                if(visitedLocations.castle.courtyard.stables.isVisited === true && visitedLocations.castle.courtyard.barracks.isVisited === true && visitedLocations.castle.courtyard.deadBody.isVisited === false){
    
                    if(elem.innerText != castleCourtyardText.language[language].mainText.textButton.thirdBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };
        
                if(visitedLocations.castle.courtyard.stables.isVisited === true && visitedLocations.castle.courtyard.barracks.isVisited === true && visitedLocations.castle.courtyard.deadBody.isVisited === true){
    
                    if(elem.innerText != castleCourtyardText.language[language].mainText.textButton.fourthBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            if(elem.innerText === castleCourtyardText.language[language].mainText.textButton.firstBtn){

                showNextSlide();

                castleBarracks();

            };

            if(elem.innerText === castleCourtyardText.language[language].mainText.textButton.secondBtn){

                showNextSlide();

                castleStables();

            };

            if(elem.innerText === castleCourtyardText.language[language].mainText.textButton.thirdBtn){

                showNextSlide();

                courtyardDeadBody();

            };

            if(elem.innerText === castleCourtyardText.language[language].mainText.textButton.fourthBtn){

                showNextSlide();

                castleDojon();

            };

        });

    };

};

/// STABLES---FUNCTIONS---START ///

function castleStables(){

    const footerItemCount = Object.values(castleStablesText.language[language].castleStables.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleStablesText.language[language].castleStables.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleStablesText.language[language].castleStables.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleStablesText.language[language].castleStables.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            if(elem.innerText === castleStablesText.language[language].castleStables.textButton.firstBtn){

                showNextSlide();

                stablesInside();

            };

            if(elem.innerText === castleStablesText.language[language].castleStables.textButton.secondBtn){

                showNextSlide();

                stablesDoor();

            };

        });

    };

};

function stablesInside(){

    const footerItemCount = Object.values(castleStablesText.language[language].stablesInside.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleStablesText.language[language].stablesInside.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleStablesText.language[language].stablesInside.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleStablesText.language[language].stablesInside.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            if(elem.innerText === castleStablesText.language[language].stablesInside.textButton.firstBtn){

                showNextSlide();

                stablesPile();

            };

            if(elem.innerText === castleStablesText.language[language].stablesInside.textButton.secondBtn){

                showNextSlide();

                stablesLeft();

            };

            if(elem.innerText === castleStablesText.language[language].stablesInside.textButton.thirdBtn){

                showNextSlide();

                stablesRight();

            };

        });

    };

};

function stablesPile(){

    const footerItemCount = Object.values(castleStablesText.language[language].stablesPile.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleStablesText.language[language].stablesPile.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleStablesText.language[language].stablesPile.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleStablesText.language[language].stablesPile.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.stables.stablesLeft.isVisited === false && visitedLocations.castle.stables.stablesRight.isVisited === false && visitedLocations.castle.stables.stablesDoor.isVisited === false){

                    if(elem.innerText != castleStablesText.language[language].stablesPile.textButton.firstBtn || elem.innerText != castleStablesText.language[language].stablesPile.textButton.secondBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };

                };

                if(visitedLocations.castle.stables.stablesLeft.isVisited === true && visitedLocations.castle.stables.stablesRight.isVisited === false && visitedLocations.castle.stables.stablesDoor.isVisited === false){

                    if(elem.innerText != castleStablesText.language[language].stablesPile.textButton.secondBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
        
                };

                if(visitedLocations.castle.stables.stablesLeft.isVisited === false && visitedLocations.castle.stables.stablesRight.isVisited === true && visitedLocations.castle.stables.stablesDoor.isVisited === false){

                    if(elem.innerText != castleStablesText.language[language].stablesPile.textButton.firstBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
            
                };

                if(visitedLocations.castle.stables.stablesLeft.isVisited === true && visitedLocations.castle.stables.stablesRight.isVisited === true && visitedLocations.castle.stables.stablesDoor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].stablesPile.textButton.thirdBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

                if(visitedLocations.castle.stables.stablesLeft.isVisited === true && visitedLocations.castle.stables.stablesRight.isVisited === true && visitedLocations.castle.stables.stablesDoor.isVisited === true){

                    if(elem.innerText != castleBarracksText.language[language].stablesPile.textButton.fourthBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            if(elem.innerText === castleStablesText.language[language].stablesPile.textButton.firstBtn){

                showNextSlide();

                stablesLeft();

            };

            if(elem.innerText === castleStablesText.language[language].stablesPile.textButton.secondBtn){

                showNextSlide();

                stablesRight();

            };

            if(elem.innerText === castleStablesText.language[language].stablesPile.textButton.thirdBtn){

                showNextSlide();

                stablesDoor();

            };

            if(elem.innerText === castleStablesText.language[language].stablesPile.textButton.fourthBtn){

                showNextSlide();

                castleCourtyard();

            };

        });

    };

};

function stablesLeft(){

    const footerItemCount = Object.values(castleStablesText.language[language].stablesLeft.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleStablesText.language[language].stablesLeft.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleStablesText.language[language].stablesLeft.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleStablesText.language[language].stablesLeft.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.stables.stablesPile.isVisited === false && visitedLocations.castle.stables.stablesRight.isVisited === false && visitedLocations.castle.stables.stablesDoor.isVisited === false){

                    if(elem.innerText != castleStablesText.language[language].stablesLeft.textButton.firstBtn || elem.innerText != castleStablesText.language[language].stablesLeft.textButton.secondBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };

                };

                if(visitedLocations.castle.stables.stablesPile.isVisited === true && visitedLocations.castle.stables.stablesRight.isVisited === false && visitedLocations.castle.stables.stablesDoor.isVisited === false){

                    if(elem.innerText != castleStablesText.language[language].stablesLeft.textButton.secondBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
        
                };

                if(visitedLocations.castle.stables.stablesPile.isVisited === false && visitedLocations.castle.stables.stablesRight.isVisited === true && visitedLocations.castle.stables.stablesDoor.isVisited === false){

                    if(elem.innerText != castleStablesText.language[language].stablesLeft.textButton.firstBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
            
                };

                if(visitedLocations.castle.stables.stablesPile.isVisited === true && visitedLocations.castle.stables.stablesRight.isVisited === true && visitedLocations.castle.stables.stablesDoor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].stablesLeft.textButton.thirdBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

                if(visitedLocations.castle.stables.stablesPile.isVisited === true && visitedLocations.castle.stables.stablesRight.isVisited === true && visitedLocations.castle.stables.stablesDoor.isVisited === true){

                    if(elem.innerText != castleBarracksText.language[language].stablesLeft.textButton.fourthBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            if(elem.innerText === castleStablesText.language[language].stablesLeft.textButton.firstBtn){

                showNextSlide();

                stablesPile();

            };

            if(elem.innerText === castleStablesText.language[language].stablesLeft.textButton.secondBtn){

                showNextSlide();

                stablesRight();

            };

            if(elem.innerText === castleStablesText.language[language].stablesLeft.textButton.thirdBtn){

                showNextSlide();

                stablesDoor();

            };

            if(elem.innerText === castleStablesText.language[language].stablesLeft.textButton.fourthBtn){

                showNextSlide();

                castleCourtyard();

            };

        });

    };

};

function stablesRight(){

    const footerItemCount = Object.values(castleStablesText.language[language].stablesRight.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleStablesText.language[language].stablesRight.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleStablesText.language[language].stablesRight.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleStablesText.language[language].stablesRight.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.stables.stablesPile.isVisited === false && visitedLocations.castle.stables.stablesLeft.isVisited === false && visitedLocations.castle.stables.stablesDoor.isVisited === false){

                    if(elem.innerText != castleStablesText.language[language].stablesRight.textButton.firstBtn || elem.innerText != castleStablesText.language[language].stablesRight.textButton.secondBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };

                };

                if(visitedLocations.castle.stables.stablesPile.isVisited === true && visitedLocations.castle.stables.stablesLeft.isVisited === false && visitedLocations.castle.stables.stablesDoor.isVisited === false){

                    if(elem.innerText != castleStablesText.language[language].stablesRight.textButton.secondBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
        
                };

                if(visitedLocations.castle.stables.stablesPile.isVisited === false && visitedLocations.castle.stables.stablesLeft.isVisited === true && visitedLocations.castle.stables.stablesDoor.isVisited === false){

                    if(elem.innerText != castleStablesText.language[language].stablesRight.textButton.firstBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
            
                };

                if(visitedLocations.castle.stables.stablesPile.isVisited === true && visitedLocations.castle.stables.stablesLeft.isVisited === true && visitedLocations.castle.stables.stablesDoor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].stablesRight.textButton.thirdBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

                if(visitedLocations.castle.stables.stablesPile.isVisited === true && visitedLocations.castle.stables.stablesLeft.isVisited === true && visitedLocations.castle.stables.stablesDoor.isVisited === true){

                    if(elem.innerText != castleBarracksText.language[language].stablesRight.textButton.fourthBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            if(elem.innerText === castleStablesText.language[language].stablesRight.textButton.firstBtn){

                showNextSlide();

                stablesPile();

            };

            if(elem.innerText === castleStablesText.language[language].stablesRight.textButton.secondBtn){

                showNextSlide();

                stablesLeft();

            };

            if(elem.innerText === castleStablesText.language[language].stablesRight.textButton.thirdBtn){

                showNextSlide();

                stablesDoor();

            };

            if(elem.innerText === castleStablesText.language[language].stablesRight.textButton.fourthBtn){

                showNextSlide();

                castleCourtyard();

            };

        });

    };

};

function stablesDoor(){};

/// STABLES---FUNCTIONS---END ///

/// BARRACKS---FUNCTIONS---START ///

function castleBarracks(){

    const footerItemCount = Object.values(castleBarracksText.language[language].castleBarracks.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleBarracksText.language[language].castleBarracks.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleBarracksText.language[language].castleBarracks.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleBarracksText.language[language].castleBarracks.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelector('.button').addEventListener('click', () =>{

            showNextSlide();

            barracksInside();

        });

    };

};

function barracksInside(){

    const footerItemCount = Object.values(castleBarracksText.language[language].barracksInside.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleBarracksText.language[language].barracksInside.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleBarracksText.language[language].barracksInside.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleBarracksText.language[language].barracksInside.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            if(elem.innerText === castleCourtyardText.language[language].barracksInside.textButton.firstBtn){

                showNextSlide();

                barracksInsideFirstFloor();

            };

            if(elem.innerText === castleCourtyardText.language[language].barracksInside.textButton.secondBtn){

                showNextSlide();

                barracksInsideSecondFloor();

            };

        });

    };

};

function barracksInsideFirstFloor(){

    const footerItemCount = Object.values(castleBarracksText.language[language].barracksInsideFirstFloor.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleBarracksText.language[language].barracksInsideFirstFloor.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleBarracksText.language[language].barracksInsideFirstFloor.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleBarracksText.language[language].barracksInsideFirstFloor.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            if(elem.innerText === castleBarracksText.language[language].barracksInsideFirstFloor.textButton.firstBtn){

                showNextSlide();

                armoryRoom();

            };

            if(elem.innerText === castleBarracksText.language[language].barracksInsideFirstFloor.textButton.secondBtn){

                showNextSlide();

                kitchenRoom();

            };

        });

    };

};

function armoryRoom(){

    const footerItemCount = Object.values(castleBarracksText.language[language].armoryRoom.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleBarracksText.language[language].armoryRoom.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleBarracksText.language[language].armoryRoom.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleBarracksText.language[language].kitchenRoom.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            if(elem.innerText === castleBarracksText.language[language].kitchenRoom.textButton.firstBtn){

                showNextSlide();

                armoryBlood();

            };

            if(elem.innerText === castleBarracksText.language[language].kitchenRoom.textButton.secondBtn){

                showNextSlide();

                armoryTable();

            };

        });

    };

};

function armoryBlood(){

    const footerItemCount = Object.values(castleBarracksText.language[language].armoryBlood.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleBarracksText.language[language].armoryBlood.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleBarracksText.language[language].armoryBlood.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleBarracksText.language[language].armoryBlood.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.barracks.armoryTable.isVisited === false && visitedLocations.castle.barracks.kitchenRoom.isVisited === false && visitedLocations.castle.barracks.barracksInsideSecondFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].armoryBlood.textButton.firstBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };

                };

                if(visitedLocations.castle.barracks.armoryTable.isVisited === true && visitedLocations.castle.barracks.kitchenRoom.isVisited === false && visitedLocations.castle.barracks.barracksInsideSecondFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].armoryBlood.textButton.secondBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
        
                };

                if(visitedLocations.castle.barracks.armoryTable.isVisited === true && visitedLocations.castle.barracks.kitchenRoom.isVisited === true && visitedLocations.castle.barracks.barracksInsideSecondFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].armoryBlood.textButton.thirdBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
            
                };

                if(visitedLocations.castle.barracks.armoryTable.isVisited === true && visitedLocations.castle.barracks.kitchenRoom.isVisited === true && visitedLocations.castle.barracks.barracksInsideSecondFloor.isVisited === true){

                    if(elem.innerText != castleBarracksText.language[language].armoryBlood.textButton.fourthBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            if(elem.innerText === castleBarracksText.language[language].armoryBlood.textButton.firstBtn){

                showNextSlide();

                armoryTable();

            };

            if(elem.innerText === castleBarracksText.language[language].armoryBlood.textButton.secondBtn){

                showNextSlide();

                kitchenRoom();

            };

            if(elem.innerText === castleBarracksText.language[language].armoryBlood.textButton.thirdBtn){

                showNextSlide();

                barracksInsideSecondFloor();

            };

            if(elem.innerText === castleBarracksText.language[language].armoryBlood.textButton.fourthBtn){

                showNextSlide();

                castleCourtyard();

            };

        });

    };

};

function armoryTable(){

    const footerItemCount = Object.values(castleBarracksText.language[language].armoryTable.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleBarracksText.language[language].armoryTable.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleBarracksText.language[language].armoryTable.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleBarracksText.language[language].armoryTable.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.barracks.armoryBlood.isVisited === false && visitedLocations.castle.barracks.kitchenRoom.isVisited === false && visitedLocations.castle.barracks.barracksInsideSecondFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].armoryTable.textButton.firstBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };

                };

                if(visitedLocations.castle.barracks.armoryBlood.isVisited === true && visitedLocations.castle.barracks.kitchenRoom.isVisited === false && visitedLocations.castle.barracks.barracksInsideSecondFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].armoryTable.textButton.secondBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
        
                };

                if(visitedLocations.castle.barracks.armoryBlood.isVisited === true && visitedLocations.castle.barracks.kitchenRoom.isVisited === true && visitedLocations.castle.barracks.barracksInsideSecondFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].armoryTable.textButton.thirdBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
            
                };

                if(visitedLocations.castle.barracks.armoryBlood.isVisited === true && visitedLocations.castle.barracks.kitchenRoom.isVisited === true && visitedLocations.castle.barracks.barracksInsideSecondFloor.isVisited === true){

                    if(elem.innerText != castleBarracksText.language[language].armoryTable.textButton.fourthBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            if(elem.innerText === castleCourtyardText.language[language].armoryTable.textButton.firstBtn){

                showNextSlide();

                armoryBlood();

            };

            if(elem.innerText === castleCourtyardText.language[language].armoryTable.textButton.secondBtn){

                showNextSlide();

                kitchenRoom();

            };

            if(elem.innerText === castleCourtyardText.language[language].armoryTable.textButton.thirdBtn){

                showNextSlide();

                barracksInsideSecondFloor();

            };

            if(elem.innerText === castleCourtyardText.language[language].armoryTable.textButton.fourthBtn){

                showNextSlide();

                castleCourtyard();

            };

        });

    };

};

function kitchenRoom(){

    const footerItemCount = Object.values(castleBarracksText.language[language].kitchenRoom.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleBarracksText.language[language].kitchenRoom.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleBarracksText.language[language].kitchenRoom.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleBarracksText.language[language].kitchenRoom.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.barracks.armoryRoom.isVisited === false && visitedLocations.castle.barracks.barracksInsideSecondFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].kitchenRoom.textButton.firstBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };

                };

                if(visitedLocations.castle.barracks.armoryRoom.isVisited === true && visitedLocations.castle.barracks.barracksInsideSecondFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].kitchenRoom.textButton.secondBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
        
                };

                if(visitedLocations.castle.barracks.armoryRoom.isVisited === true && visitedLocations.castle.barracks.barracksInsideSecondFloor.isVisited === true){

                    if(elem.innerText != castleBarracksText.language[language].kitchenRoom.textButton.thirdBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
            
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            if(elem.innerText === castleCourtyardText.language[language].kitchenRoom.textButton.firstBtn){

                showNextSlide();

                armoryRoom();

            };

            if(elem.innerText === castleCourtyardText.language[language].kitchenRoom.textButton.secondBtn){

                showNextSlide();

                barracksInsideSecondFloor();

            };

            if(elem.innerText === castleCourtyardText.language[language].kitchenRoom.textButton.secondBtn){

                showNextSlide();

                castleCourtyard();

            };

        });

    };

};

function barracksInsideSecondFloor(){

    const footerItemCount = Object.values(castleBarracksText.language[language].barracksInsideSecondFloor.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleBarracksText.language[language].barracksInsideSecondFloor.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleBarracksText.language[language].barracksInsideSecondFloor.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleBarracksText.language[language].barracksInsideSecondFloor.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            if(elem.innerText === castleCourtyardText.language[language].barracksInsideSecondFloor.textButton.firstBtn){

                showNextSlide();

                legionnaireRooms();

            };

            if(elem.innerText === castleCourtyardText.language[language].barracksInsideSecondFloor.textButton.secondBtn){

                showNextSlide();

                officerRoom();

            };

        });

    };

};

function legionnaireRooms(){

    const footerItemCount = Object.values(castleBarracksText.language[language].legionnaireRooms.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleBarracksText.language[language].legionnaireRooms.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleBarracksText.language[language].legionnaireRooms.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleBarracksText.language[language].legionnaireRooms.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.barracks.officerRoom.isVisited === false && visitedLocations.castle.barracks.barracksInsideFirstFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].legionnaireRooms.textButton.firstBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };

                };

                if(visitedLocations.castle.barracks.officerRoom.isVisited === true && visitedLocations.castle.barracks.barracksInsideFirstFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].legionnaireRooms.textButton.secondBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
        
                };

                if(visitedLocations.castle.barracks.officerRoom.isVisited === true && visitedLocations.castle.barracks.barracksInsideFirstFloor.isVisited === true){

                    if(elem.innerText != castleBarracksText.language[language].legionnaireRooms.textButton.thirdBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
            
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            if(elem.innerText === castleCourtyardText.language[language].legionnaireRooms.textButton.firstBtn){

                showNextSlide();

                officerRoom();

            };

            if(elem.innerText === castleCourtyardText.language[language].legionnaireRooms.textButton.secondBtn){

                showNextSlide();

                barracksInsideSecondFloor();

            };

            if(elem.innerText === castleCourtyardText.language[language].legionnaireRooms.textButton.thirdBtn){

                showNextSlide();

                castleCourtyard();

            };

        });

    };

};

function officerRoom(){

    const footerItemCount = Object.values(castleBarracksText.language[language].officerRoom.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleBarracksText.language[language].officerRoom.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleBarracksText.language[language].officerRoom.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleBarracksText.language[language].officerRoom.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            if(elem.innerText === castleCourtyardText.language[language].officerRoom.textButton.firstBtn){

                showNextSlide();

                officerDeadBody();

            };

            if(elem.innerText === castleCourtyardText.language[language].officerRoom.textButton.secondBtn){

                showNextSlide();

                officerTable();

            };

        });

    };

};

function officerDeadBody(){

    const footerItemCount = Object.values(castleBarracksText.language[language].officerDeadBody.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleBarracksText.language[language].officerDeadBody.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleBarracksText.language[language].officerDeadBody.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleBarracksText.language[language].officerDeadBody.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.barracks.officerTable.isVisited === false && visitedLocations.castle.barracks.legionnaireRooms.isVisited === false && visitedLocations.castle.barracks.barracksInsideFirstFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].officerDeadBody.textButton.firstBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };

                };

                if(visitedLocations.castle.barracks.officerTable.isVisited === true && visitedLocations.castle.barracks.legionnaireRooms.isVisited === false && visitedLocations.castle.barracks.barracksInsideFirstFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].officerDeadBody.textButton.secondBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
        
                };

                if(visitedLocations.castle.barracks.officerTable.isVisited === true && visitedLocations.castle.barracks.legionnaireRooms.isVisited === true && visitedLocations.castle.barracks.barracksInsideFirstFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].officerDeadBody.textButton.thirdBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
            
                };

                if(visitedLocations.castle.barracks.officerTable.isVisited === true && visitedLocations.castle.barracks.legionnaireRooms.isVisited === true && visitedLocations.castle.barracks.barracksInsideFirstFloor.isVisited === true){

                    if(elem.innerText != castleBarracksText.language[language].officerDeadBody.textButton.fourthBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
            
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            if(elem.innerText === castleCourtyardText.language[language].officerDeadBody.textButton.firstBtn){

                showNextSlide();

                officerTable();

            };

            if(elem.innerText === castleCourtyardText.language[language].officerDeadBody.textButton.secondBtn){

                showNextSlide();

                legionnaireRooms();

            };

            if(elem.innerText === castleCourtyardText.language[language].officerDeadBody.textButton.thirdBtn){

                showNextSlide();

                barracksInsideSecondFloor();

            };

            if(elem.innerText === castleCourtyardText.language[language].officerDeadBody.textButton.fourthBtn){

                showNextSlide();

                castleCourtyard();

            };

        });

    };

};

function officerTable(){

    const footerItemCount = Object.values(castleBarracksText.language[language].officerTable.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleBarracksText.language[language].officerTable.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleBarracksText.language[language].officerTable.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleBarracksText.language[language].officerTable.textButton)[index];

        });

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            showNextSlide();

            pieceOfPaper();

        });

    };

};

function pieceOfPaper(){

    const footerItemCount = Object.values(castleBarracksText.language[language].pieceOfPaper.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleBarracksText.language[language].pieceOfPaper.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleBarracksText.language[language].pieceOfPaper.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleBarracksText.language[language].pieceOfPaper.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.barracks.officerDeadBody.isVisited === false && visitedLocations.castle.barracks.legionnaireRooms.isVisited === false && visitedLocations.castle.barracks.barracksInsideFirstFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].pieceOfPaper.textButton.firstBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };

                };

                if(visitedLocations.castle.barracks.officerDeadBody.isVisited === true && visitedLocations.castle.barracks.legionnaireRooms.isVisited === false && visitedLocations.castle.barracks.barracksInsideFirstFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].pieceOfPaper.textButton.secondBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
        
                };

                if(visitedLocations.castle.barracks.officerDeadBody.isVisited === true && visitedLocations.castle.barracks.legionnaireRooms.isVisited === true && visitedLocations.castle.barracks.barracksInsideFirstFloor.isVisited === false){

                    if(elem.innerText != castleBarracksText.language[language].pieceOfPaper.textButton.thirdBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
            
                };

                if(visitedLocations.castle.barracks.officerDeadBody.isVisited === true && visitedLocations.castle.barracks.legionnaireRooms.isVisited === true && visitedLocations.castle.barracks.barracksInsideFirstFloor.isVisited === true){

                    if(elem.innerText != castleBarracksText.language[language].pieceOfPaper.textButton.fourthBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
            
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            if(elem.innerText === castleCourtyardText.language[language].pieceOfPaper.textButton.firstBtn){

                showNextSlide();

                officerDeadBody();

            };

            if(elem.innerText === castleCourtyardText.language[language].pieceOfPaper.textButton.secondBtn){

                showNextSlide();

                legionnaireRooms();

            };

            if(elem.innerText === castleCourtyardText.language[language].pieceOfPaper.textButton.thirdBtn){

                showNextSlide();

                barracksInsideSecondFloor();

            };

            if(elem.innerText === castleCourtyardText.language[language].pieceOfPaper.textButton.fourthBtn){

                showNextSlide();

                castleCourtyard();

            };

        });

    };

};

/// BARRACKS---FUNCTIONS---END ///

/// DEADBODY---FUNCTIONS---START ///

function courtyardDeadBody(){

    const footerItemCount = Object.values(castleCourtyardText.language[language].courtyardDeadBody.textButton).length;

    setTimeout(() => {

        createFooterItem(footerItemCount);

        document.querySelector('#castle').querySelector('.main__title').innerText = castleCourtyardText.language[language].courtyardDeadBody.textTitle;

        document.querySelector('#castle').querySelector('.main__descr').innerText = castleCourtyardText.language[language].courtyardDeadBody.textDescr;

        document.querySelector('#castle').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(castleCourtyardText.language[language].courtyardDeadBody.textButton)[index];

        });

        footerItemsCheck();

        function footerItemsCheck(){

            document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

                if(visitedLocations.castle.courtyard.barracks.isVisited === false && visitedLocations.castle.courtyard.stables.isVisited === false){

                    if(elem.innerText === castleCourtyardText.language[language].courtyardDeadBody.textButton.thirdBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };

                };

                if(visitedLocations.castle.courtyard.stables.isVisited === true && visitedLocations.castle.courtyard.barracks.isVisited === false){

                    if(elem.innerText != castleCourtyardText.language[language].courtyardDeadBody.textButton.secondBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
        
                };

                if(visitedLocations.castle.courtyard.stables.isVisited === false && visitedLocations.castle.courtyard.barracks.isVisited === true){

                    if(elem.innerText != castleCourtyardText.language[language].courtyardDeadBody.textButton.firstBtn){
    
                        elem.closest('.footer__item').remove();
    
                    };
            
                };

                if(visitedLocations.castle.courtyard.stables.isVisited === true && visitedLocations.castle.courtyard.barracks.isVisited === true){

                    if(elem.innerText != castleCourtyardText.language[language].courtyardDeadBody.textButton.thirdBtn){
        
                        elem.closest('.footer__item').remove();
    
                    };
    
                };

            });
    
        };

        eventListener();
        
    }, '650');

    function eventListener(){

        document.querySelector('#castle').querySelectorAll('.button').forEach(elem =>{

            if(elem.innerText === castleCourtyardText.language[language].courtyardDeadBody.textButton.firstBtn){

                showNextSlide();

                castleBarracks();

            };

            if(elem.innerText === castleCourtyardText.language[language].courtyardDeadBody.textButton.secondBtn){

                showNextSlide();

                castleStables();

            };

            if(elem.innerText === castleCourtyardText.language[language].courtyardDeadBody.textButton.thirdBtn){

                showNextSlide();

                castleDojon();

            };

        });

    };

};

/// DEADBODY---FUNCTIONS---END ///

function castleDojon(){};

/// MAIN---FUNCTIONS---END ///

/// EXPORTS---START ///

export { castle };

/// EXPORTS---END ///