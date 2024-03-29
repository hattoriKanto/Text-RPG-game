/// IMPORTS---START ///

import { player } from "./player.js";

/// IMPORTS---END ///

/// GLOBAL---VARIABLES---START ///

let playerDefaultTraits = null;

/// GLOBAL---VARIABLES---END ///

/// FUNCTIONS---START ///

function disableButtons(){

    console.log('BUTTONS ARE DISABLED');

    document.querySelectorAll('button').forEach(elem =>{

        elem.disabled = true;

    });

};

function enableButtons(){

    console.log('BUTTONS ARE ENABLED');

    document.querySelectorAll('button').forEach(elem =>{

        elem.disabled = false;

    });

};

function deletePlayerData(){

    player.playerImg = null;

    for(let playerKey in player.playerKey){

        if(typeof player.playerKey[playerKey] != "object"){

            player.playerKey[playerKey] = null;

        }else{

            for(let key in player.playerKey[playerKey]){

                player.playerKey[playerKey][key] = null;

            };

        };
    
    };
        
    for(let key in player.mainText){

        player.mainText[key] = null;

    };

    for(let trait in player.playerTraits){

        player.playerTraits[trait] = null;

    };

    for(let weaponKey in player.weaponTraits){

        for(let traitKey in player.weaponTraits[weaponKey]){

            delete player.weaponTraits[weaponKey][traitKey];

        };

    };

    console.log('PLAYER TRAITS HAVE BEEN DELETED.')

};

function clonePlayerTraits(){

    playerDefaultTraits = structuredClone(player.playerTraits);

};

function backToDefaultPlayerTraits(){

    Object.assign(player.playerTraits, playerDefaultTraits);

};

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

    if(document.querySelector('.screen ').querySelector('.wrapper').classList.contains('wrapper-screen-animation') === true){

        document.querySelector('.screen ').querySelector('.wrapper').classList.remove('wrapper-screen-animation');

        document.querySelector('.screen ').querySelector('.wrapper').classList.add('wrapper-screen-animation-reverse');

    } else if(document.querySelector('.screen ').querySelector('.wrapper').classList.contains('wrapper-screen-animation-reverse') === true){

        document.querySelector('.screen ').querySelector('.wrapper').classList.remove('wrapper-screen-animation-reverse');

        document.querySelector('.screen ').querySelector('.wrapper').classList.add('wrapper-screen-animation');

    } else if(document.querySelector('.screen ').querySelector('.wrapper').classList.contains('wrapper-screen-animation-reverse') != true || document.querySelector('.screen ').querySelector('.wrapper').classList.contains('wrapper-screen-animation-reverse') != true){

        document.querySelector('.screen ').querySelector('.wrapper').classList.add('wrapper-screen-animation');

    };

};

function showNextSlideFirstSlideMobile(){

    if(window.screen.width <= 768){

        document.querySelector('.screen__wrapper').classList.add('wrapper-screen-animation');

    };

};

function showNextSlideMobileCheck(){

    if(window.screen.width <= 768){

        showNextSlide();

    };

};

function removeButtons(){

    setTimeout(() => {
            
        document.querySelector('.screen').querySelectorAll('.footer__item').forEach(elem =>{

            elem.remove();
        
        });

    }, '650');

};

function returnTextScreenAfterBattle(){

    document.querySelector('.popup-victory').remove();

    document.querySelector('#battle').remove();

    setTimeout(() => {
        
        document.querySelector('.screen').classList.remove('hide-screen');

        document.querySelector('.screen').classList.add('show-screen');

    }, '650');

};

/// FUNCTIONS---END ///

/// EXPORTS---START ///

export { deletePlayerData };

export { clonePlayerTraits };

export { backToDefaultPlayerTraits };

export { disableButtons };

export { enableButtons };

export {createFooterItem};

export {showNextSlide};

export {showNextSlideFirstSlideMobile};

export {showNextSlideMobileCheck};

export {removeButtons};

export {returnTextScreenAfterBattle};

/// EXPORTS---END ///