
import startScreenRus from "./text/creatingChar/russian/startScreenRus.js";

import raceRus from "./text/creatingChar/russian/chooseRaceRus.js";

import classRus from "./text/creatingChar/russian/chooseClassRus.js";

import weaponsRus from "./text/creatingChar/russian/weaponsRus.js";

import humanClasses from "./classes/humanClasses.js";

const screenCreatingChar = document.querySelector('#char-creating-screen');

const screenCreatingCharDescr = screenCreatingChar.querySelector('.main__desc');

const screenCreatingCharTitle = screenCreatingChar.querySelector('.main__title');

const screenCreatingCharFooter = screenCreatingChar.querySelector('.main__footer');

function startScreen(){

    const button = document.createElement('button');

    button.className = 'main__btn button';

    screenCreatingCharFooter.appendChild(button);

    button.innerText = startScreenRus.textBtn;

    screenCreatingCharTitle.innerHTML = startScreenRus.textTitle;

    screenCreatingCharDescr.innerHTML = startScreenRus.textDescr;

    button.addEventListener('click', () =>{

        setTimeout(() =>{

            button.remove();

        }, '650');

        screenCreatingChar.querySelector('.main').classList.toggle('rotation');

        chooseRace();

    });

};

function chooseRace(){

    const arrayRaces = Object.values(raceRus.races);

    const arrayRaceKey = [];

    for(let key in raceRus.races){

        arrayRaceKey.push(key);

    };

    setTimeout(() =>{
                
        screenCreatingCharTitle.innerHTML = raceRus.mainText.textTitle;

        screenCreatingCharDescr.innerHTML = raceRus.mainText.textDescr;

        for(let i = 0; i < arrayRaces.length; i++){

            const button = document.createElement('button');

            button.className = 'main__btn button';

            screenCreatingCharFooter.appendChild(button);

            button.innerText = arrayRaces[i].raceName;

            button.addEventListener('click', () =>{

                setTimeout(() =>{

                    screenCreatingCharFooter.querySelectorAll('.button').forEach(elem =>{

                        elem.remove();

                    });
        
                }, '650');

                screenCreatingChar.querySelector('.main').classList.toggle('rotation');

                const choosedRace = arrayRaceKey[i];

                chooseClass(choosedRace);

            });
    
        };

    }, '650');

};

function chooseClass(choosedRace){

    const arrayClass = Object.values(classRus.classes[choosedRace]);

    const arrayClassKey = [];

    for(let key in classRus.classes[choosedRace]){

        arrayClassKey.push(key);

    };

    setTimeout(() =>{
                
        screenCreatingCharTitle.innerHTML = classRus.mainText.textTitle;

        screenCreatingCharDescr.innerHTML = classRus.mainText.textDescr;

        for(let i = 0; i < arrayClass.length; i++){

            const button = document.createElement('button');

            button.className = 'main__btn button';

            screenCreatingCharFooter.appendChild(button);

            button.innerText = arrayClass[i].className;

            button.addEventListener('click', () =>{

                setTimeout(() =>{

                    screenCreatingCharFooter.querySelectorAll('.button').forEach(elem =>{

                        elem.remove();

                    });
        
                }, '650');

                screenCreatingChar.querySelector('.main').classList.toggle('rotation');

                const choosedClass = arrayClassKey[i];

                chooseWeaponType(choosedClass);

            });
    
        };

    }, '650');

};

function chooseWeaponType(choosedClass){

    let booleanTrueCounter = 0;

    const arrayOfClassWeapon  = [];

    const arrayWeaponsType = [];

    for(let classWeapon in humanClasses[choosedClass].classWeapons){
    
        if(humanClasses[choosedClass].classWeapons[classWeapon] === true){

            booleanTrueCounter++;

            arrayWeaponsType.push(weaponsRus.humanWeapons[classWeapon].mainText.nameTypeWeapon);

            arrayOfClassWeapon.push(classWeapon);
            
        };

    };

    setTimeout(() =>{
                
        screenCreatingCharTitle.innerHTML = weaponsRus.mainText.textTitle;

        screenCreatingCharDescr.innerHTML = weaponsRus.mainText.textDescr;

        for(let i = 0; i < arrayWeaponsType.length; i++){

            const button = document.createElement('button');

            button.className = 'main__btn button';

            screenCreatingCharFooter.appendChild(button);

            button.innerText = arrayWeaponsType[i];

            button.addEventListener('click', () =>{

                setTimeout(() =>{

                    screenCreatingCharFooter.querySelectorAll('.button').forEach(elem =>{

                        elem.remove();

                    });
        
                }, '650');

                screenCreatingChar.querySelector('.main').classList.toggle('rotation');

                const choosedWeaponType = arrayOfClassWeapon[i];

                chooseWeapon(choosedWeaponType);

            });

        };

    }, '650');

};

function chooseWeapon(choosedWeaponType){

    const arrayWeapons = [];

    for(let weapon in weaponsRus.humanWeapons[choosedWeaponType].weapons){

        arrayWeapons.push(weaponsRus.humanWeapons[choosedWeaponType].weapons[weapon].weaponsName);

    };

    setTimeout(() =>{
                
        screenCreatingCharTitle.innerHTML = weaponsRus.humanWeapons[choosedWeaponType].nameTypeWeapon;

        screenCreatingCharDescr.innerHTML = weaponsRus.humanWeapons[choosedWeaponType].descrTypeWeapon;

        for(let i = 0; i < arrayWeapons.length; i++){

            const button = document.createElement('button');

            button.className = 'main__btn button';

            screenCreatingCharFooter.appendChild(button);

            button.innerText = arrayWeapons[i];

        };

    }, '650');



}

export default startScreen;