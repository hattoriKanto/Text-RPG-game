
import chooseYourRace from './modules/creating__character.js';

import castleLocation from './modules/locations/castle.js';

const popup = document.querySelector('#popup');

const popupOverlay = document.querySelector('.overlay');

const popupTitle = document.querySelector('#popup .content__title');

const closePopupBtn = document.querySelector('#close__popup');

const body = document.querySelector('body');

const screenFirstWeapon = document.querySelector('.screen__first__weapon');

const screenSecondWeapon = document.querySelector('.screen__second__weapon');

const screenCharacterOverview = document.querySelector('.screen__character-overview');

closePopupBtn.addEventListener('click', closePopup);

popupOverlay.addEventListener('click', closePopup);

const player = {
    race: '',
    class: '',
    stats: {
        healthPoints: null,
        armourPoints: null,
        manaPoints: null
    },
    weapon: {
        firstWeapon: {

        },
        secondWeapon: {
    
        }   
    }
}

function closePopup(){
    popup.classList.remove('show-popup');
    body.classList.remove('noscroll');
};

startScreen();

function startScreen(){
    const screenStart = document.querySelector('#start-screen');
    screenStart.querySelector('#start-btn').addEventListener('click', () =>{
        screenStart.classList.add('hide');
        chooseYourRace();
    });
};

function chooseLocation(){
    const screenLocation = document.querySelector('#location-screen');
    const chooseLocation = screenLocation.querySelectorAll('.choose__item');
    screenLocation.classList.remove('hide');
    for(let i = 0; i < chooseLocation.length; i++){
        chooseLocation[i].addEventListener('click', () =>{
            screenLocation.classList.add('hide');
            castleLocation();
        })
    };
}