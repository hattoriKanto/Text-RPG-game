
import startScreenRus from "./text/creatingChar/russian/startScreenRus.js";

import raceRus from "./text/creatingChar/russian/chooseRaceRus.js";

import classRus from "./text/creatingChar/russian/chooseClassRus.js";

import weaponsRus from "./text/creatingChar/russian/weaponsRus.js";

import humanClasses from "./classes/humanClasses.js";

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
    
            }else{

                screenCreatingCharBtn[i].innerHTML = Object.values(raceRus)[i+1].raceName;

            };

            screenCreatingCharBtn[i].addEventListener('click', () =>{

                const choosedRaceIndex = i + 1;

                chooseClass(choosedRaceIndex);

            });
    
        };

    }, '650');

};

function chooseClass(choosedRaceIndex){

    setTimeout(() =>{
        
        removeHideOnBtns();
        
        screenCreatingCharTitle.innerHTML = classRus.mainText.textTitle;

        screenCreatingCharDescr.innerHTML = classRus.mainText.textDescr;

        for(let i = 0; i < screenCreatingCharBtn.length; i++){

            if(screenCreatingCharBtn[i].classList.contains('btn-4') === true){
    
                screenCreatingCharBtn[i].classList.add('hide-btn');
    
            }else{

                screenCreatingCharBtn[i].innerHTML = Object.values(Object.values(classRus)[choosedRaceIndex])[i].className; // Значения объекта classRus добавляютья в массив; у выбранной рассы(по индексу) добавляет значения(классы) в массив; по номеру итерации выбирает класс и применяет значение свойства className в HTML

            };

            screenCreatingCharBtn[i].addEventListener('click', () =>{

                const choosedClassIndex = i;

                chooseWeaponType(choosedClassIndex);

            });
    
        };

    }, '650');

};

function chooseWeaponType(choosedClassIndex){

    let booleanTrueCounter = 0;

    const arrayWeaponsValues = Object.values(Object.values(humanClasses)[choosedClassIndex].classWeapons);

    const arrayWeaponsKeys = Object.keys(Object.values(humanClasses)[choosedClassIndex].classWeapons);

    const arrayWeaponsTextKeys = Object.values(Object.keys(weaponsRus.humanWeapons));

    arrayWeaponsValues.forEach(elem =>{

        if(elem === true){

            booleanTrueCounter++;

        };

    });

    console.log(arrayWeaponsKeys);

    console.log(arrayWeaponsTextKeys);

    setTimeout(() =>{
        
        removeHideOnBtns();
        
        screenCreatingCharTitle.innerHTML = weaponsRus.mainText.textTitle;

        screenCreatingCharDescr.innerHTML = weaponsRus.mainText.textDescr;

        for(let i = 0; i < screenCreatingCharBtn.length; i++){

            screenCreatingCharBtn[i].innerHTML

            if(i < booleanTrueCounter){

                screenCreatingCharBtn[i].classList.add('hide-btn');

            };

        };

    }, '650');

};

export default startScreen;