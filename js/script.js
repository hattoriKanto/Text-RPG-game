
import chooseYourRace from './modules/creating__character.js';

const popup = document.querySelector('#popup');

const popupOverlay = document.querySelector('.overlay');

const closePopupBtn = document.querySelector('#close__popup');

const body = document.querySelector('body');

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

};

startScreen();

function startScreen(){

    const screenStart = document.querySelector('#start-screen');

    screenStart.querySelector('#start-btn').addEventListener('click', () =>{

        screenStart.classList.add('hide');

        chooseYourRace();

    });

};

function closePopup(){

    popup.classList.remove('show-popup');

    body.classList.remove('noscroll');

};

export default player;