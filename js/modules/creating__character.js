
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

                const choosedClass = Object.keys(Object.values(classRus)[choosedRaceIndex])[i];

                chooseWeaponType(choosedClass);

            });
    
        };

    }, '650');

};

function chooseWeaponType(choosedClass){

    const arrayOfClassWeapon  = [];

    let booleanTrueCounter = 0;

    const arrayWeaponsType = [];

    for(let classWeapon in humanClasses[choosedClass].classWeapons){
    
        if(humanClasses[choosedClass].classWeapons[classWeapon] === true){

            booleanTrueCounter++;

            arrayWeaponsType.push(weaponsRus.humanWeapons[classWeapon].nameTypeWeapon);

            arrayOfClassWeapon.push(classWeapon)
            
        };

    };

    setTimeout(() =>{
        
        removeHideOnBtns();
        
        screenCreatingCharTitle.innerHTML = weaponsRus.mainText.textTitle;

        screenCreatingCharDescr.innerHTML = weaponsRus.mainText.textDescr;

        for(let i = 0; i < screenCreatingCharBtn.length; i++){
    
            if(i > booleanTrueCounter - 1){

                screenCreatingCharBtn[i].classList.add('hide-btn');

            }else{

                screenCreatingCharBtn[i].innerHTML = arrayWeaponsType[i];

                screenCreatingCharBtn[i].addEventListener('click', () =>{

                    const choosedWeaponType = arrayOfClassWeapon[i];

                    chooseWeapon(choosedWeaponType);
            
                });

            };

        };

    }, '650');

};

function chooseWeapon(choosedWeaponType){

    console.log(choosedWeaponType)

}

export default startScreen;