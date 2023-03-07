
import startScreen from "./modules/creating__character.js";

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

function closePopup(){

    popup.classList.remove('show-popup');

    body.classList.remove('noscroll');

};

export default player;