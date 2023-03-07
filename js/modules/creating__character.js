
import startScreenRus from "./text/creatingChar/russian/startScreenRus.js";

import raceRus from "./text/creatingChar/russian/chooseRaceRus.js";

const screenCreatingChar = document.querySelector('#char-creating-screen');

const screenCreatingCharDescr = screenCreatingChar.querySelector('.main__desc');

const screenCreatingCharTitle = screenCreatingChar.querySelector('.main__title');

const screenCreatingCharBtn = screenCreatingChar.querySelectorAll('.main__btn');

screenCreatingCharBtn.forEach(elem =>{

    elem.addEventListener('click', () =>{

        screenCreatingChar.querySelector('.main').classList.toggle('rotation');

    });

});

function removeHideOnBtns(){

    screenCreatingCharBtn.forEach(elem =>{

        elem.classList.remove('hide-btn');

    });

};

function startScreen(){

    screenCreatingCharTitle.innerHTML = startScreenRus.textTitle;

    screenCreatingCharDescr.innerHTML = startScreenRus.textDescr;

    screenCreatingCharBtn.forEach(elem =>{

        if(elem.classList.contains('btn-1') === true){

            elem.innerHTML = startScreenRus.textBtn;

            elem.addEventListener('click', () =>{

                chooseRace();

            });

        };

    });

};

function chooseRace(){

    setTimeout(() =>{

        removeHideOnBtns();
        
        screenCreatingCharTitle.innerHTML = raceRus.mainText.textTitle;

        screenCreatingCharDescr.innerHTML = raceRus.mainText.textDescr;

        for(let i = 0; i < screenCreatingCharBtn.length; i++){

            if(screenCreatingCharBtn[i].classList.contains('btn-4') === true){
    
                screenCreatingCharBtn[i].classList.add('hide-btn');
    
            };

            screenCreatingCharBtn[i].innerHTML = Object.values(raceRus)[i+1].raceName;

            screenCreatingCharBtn[i].addEventListener('click', () =>{

                const choosedRace = 

                chooseClass(choosedRace);

            });
    
        };

    }, '650');

};

export default startScreen;