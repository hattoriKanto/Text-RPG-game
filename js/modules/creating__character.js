
import player from "./player.js";

import racesStats from "./races__classes__weapons/racesStats.js";

import classesStats from "./races__classes__weapons/classesStats.js";

import weaponsClasses from "./races__classes__weapons/classesWeapons.js";

import startScreenRus from "./text/creatingChar/russian/startScreenRus.js";

import raceRus from "./text/creatingChar/russian/racesRus.js";

import classRus from "./text/creatingChar/russian/chooseClassRus.js";

import weaponsRus from "./text/creatingChar/russian/weaponsRus.js";

import charOverviewRus from "./text/overviewChar/russian/overviewCharRus.js";

import chooseLocation from "./locations/choose__location.js";

const charOverviewScreen = document.querySelector('#character-overview-screen');

const screenCreatingChar = document.querySelector('#char-creating-screen');

const screenCreatingCharDescr = screenCreatingChar.querySelector('.main__desc');

const screenCreatingCharTitle = screenCreatingChar.querySelector('.main__title');

const screenCreatingCharFooter = screenCreatingChar.querySelector('.main__footer');

function popup(){

    document.querySelector('.popup').classList.add('show-popup');

    document.querySelector('#close__popup').addEventListener('click', closePopup);

    document.querySelector('.overlay').addEventListener('click', closePopup);

    function closePopup(){

        document.querySelector('.popup').classList.remove('show-popup');

        document.querySelector('body').classList.remove('noscroll');

    };

};

function addElements(value){

    const footerItem = document.createElement('div');

    const button = document.createElement('button');

    const buttonInfo = document.createElement('button');

    const infoImg = document.createElement('img');

    footerItem.className = 'footer__item';

    button.className = 'footer__btn main__btn button';

    buttonInfo.className = 'footer__btn main__button-info';

    screenCreatingCharFooter.appendChild(footerItem);

    footerItem.appendChild(button);

    footerItem.appendChild(buttonInfo);

    buttonInfo.appendChild(infoImg);

    infoImg.src = './img/other/info.png';

    button.innerText = value;

};

function btnInfoPopup(){

    screenCreatingCharFooter.querySelectorAll('.main__button-info').forEach((elem) =>{

        elem.addEventListener('click', () =>{

            popup();

        });

    });

}

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

            const raceName = arrayRaces[i].raceName;

            addElements(raceName);

        };

        screenCreatingCharFooter.querySelectorAll('.main__btn').forEach((elem, index) =>{

            elem.addEventListener('click', () =>{

                setTimeout(() =>{

                    screenCreatingCharFooter.querySelectorAll('.footer__btn').forEach(elem =>{
        
                        elem.remove();
        
                    });
                        
                }, '650');

                screenCreatingChar.querySelector('.main').classList.toggle('rotation');

                const choosedRace = arrayRaceKey[index];

                player.mainText.race = elem.innerText;

                for(let races in racesStats){

                    if(races === choosedRace){

                        for(let stats in player.raceStats){

                            if(stats != 'armourPoints'){

                                player.raceStats[stats] = racesStats[races][stats];

                            };

                        };

                    };

                };

                chooseClass(choosedRace);

            });

        });

        btnInfoPopup();

    }, '650');

};

function chooseClass(choosedRace){

    console.log(choosedRace)

    const arrayClasses = Object.values(classRus.classes[choosedRace]);

    const arrayClassKey = [];

    for(let key in classRus.classes[choosedRace]){

        arrayClassKey.push(key);

    };

    setTimeout(() =>{
                
        screenCreatingCharTitle.innerHTML = classRus.mainText.textTitle;

        screenCreatingCharDescr.innerHTML = classRus.mainText.textDescr;

        for(let i = 0; i < arrayClasses.length; i++){

            const className = arrayClasses[i].className;

            addElements(className);
    
        };

        screenCreatingCharFooter.querySelectorAll('.main__btn').forEach((elem, index) =>{

            elem.addEventListener('click', () =>{

                setTimeout(() =>{

                    screenCreatingCharFooter.querySelectorAll('.footer__btn').forEach(elem =>{
        
                        elem.remove();
        
                    });
                        
                }, '650');

                screenCreatingChar.querySelector('.main').classList.toggle('rotation');

                const choosedClass = arrayClassKey[index];

                player.mainText.class = elem.innerText;

                for(let classes in classesStats[choosedRace]){

                    if(classes === choosedClass){

                        for(let stats in player.classStats){

                            player.classStats[stats] = classesStats[choosedRace][classes][stats];

                        };

                    };

                };

                chooseFirstWeaponType(choosedRace, choosedClass);

            });

        });

        btnInfoPopup();

    }, '650');

};

function chooseFirstWeaponType(choosedRace, choosedClass){

    let booleanTrueCounter = 0;

    const arrayOfClassWeapon  = [];

    const arrayWeaponsType = [];

    for(let classWeapon in weaponsClasses[choosedRace][choosedClass]){
    
        if(weaponsClasses[choosedRace][choosedClass][classWeapon] === true){

            booleanTrueCounter++;

            arrayWeaponsType.push(weaponsRus[choosedRace][classWeapon].mainText.nameTypeWeapon);

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

                for(let classes in classesStats[choosedRace]){

                    if(classes === choosedClass){

                        for(let stats in player.classStats){

                            player.classStats[stats] = classesStats[choosedRace][classes][stats];

                        };

                    };

                };

                chooseFirstWeapon(choosedRace, choosedClass, choosedWeaponType);

            });

        };

    }, '650');

};

function chooseFirstWeapon(choosedRace, choosedClass, choosedWeaponType){

    const arrayWeapons = [];

    for(let weapon in weaponsRus[choosedRace][choosedWeaponType].weapons){

        arrayWeapons.push(weaponsRus[choosedRace][choosedWeaponType].weapons[weapon].weaponsName);

    };

    setTimeout(() =>{
                
        screenCreatingCharTitle.innerHTML = weaponsRus[choosedRace][choosedWeaponType].mainText.nameTypeWeapon;

        screenCreatingCharDescr.innerHTML = weaponsRus[choosedRace][choosedWeaponType].mainText.descrTypeWeapon;

        for(let i = 0; i < arrayWeapons.length; i++){

            const button = document.createElement('button');

            button.className = 'main__btn button';

            screenCreatingCharFooter.appendChild(button);

            button.innerText = arrayWeapons[i];

            button.addEventListener('click', () =>{

                setTimeout(() =>{

                    screenCreatingCharFooter.querySelectorAll('.button').forEach(elem =>{

                        elem.remove();

                    });
        
                }, '650');

                screenCreatingChar.querySelector('.main').classList.toggle('rotation');

                player.mainText.firstWeapon = button.innerHTML;

                chooseSecondWeaponType(choosedRace, choosedClass, choosedWeaponType);

            });

        };

    }, '650');

};

function chooseSecondWeaponType(choosedRace, choosedClass, choosedWeaponType){

    let booleanTrueCounter = 0;

    const arrayOfClassWeapon  = [];

    const arrayWeaponsType = [];

    for(let classWeapon in weaponsClasses[choosedRace][choosedClass]){

        if(classWeapon != choosedWeaponType && weaponsClasses[choosedRace][choosedClass][classWeapon] === true){

            booleanTrueCounter++;

            arrayWeaponsType.push(weaponsRus[choosedRace][classWeapon].mainText.nameTypeWeapon);

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

                chooseSecondWeapon(choosedRace, choosedWeaponType)

            });

        };

    }, '650');

};

function chooseSecondWeapon(choosedRace, choosedWeaponType){

    const arrayWeapons = [];

    for(let weapon in weaponsRus[choosedRace][choosedWeaponType].weapons){

        arrayWeapons.push(weaponsRus[choosedRace][choosedWeaponType].weapons[weapon].weaponsName);

    };

    setTimeout(() =>{
                
        screenCreatingCharTitle.innerHTML = weaponsRus[choosedRace][choosedWeaponType].mainText.nameTypeWeapon;

        screenCreatingCharDescr.innerHTML = weaponsRus[choosedRace][choosedWeaponType].mainText.descrTypeWeapon;

        for(let i = 0; i < arrayWeapons.length; i++){

            const button = document.createElement('button');

            button.className = 'main__btn button';

            screenCreatingCharFooter.appendChild(button);

            button.innerText = arrayWeapons[i];

            button.addEventListener('click', () =>{

                setTimeout(() =>{

                    screenCreatingCharFooter.querySelectorAll('.button').forEach(elem =>{

                        elem.remove();

                    });
        
                }, '650');

                player.mainText.secondWeapon = button.innerHTML;

                screenCreatingChar.classList.add('hide-screen');

                charOverviewScreen.classList.remove('hide-screen');

                charOverview();

            });

        };

    }, '650');

};

function charOverview(){

    console.log(player);

    const arrayPlayerText = Object.values(player.mainText);

    const arrayText = Object.values(charOverviewRus.overviewText);

    const arrayBtn = Object.values(charOverviewRus.overwievBtn);

    const charOverviewTitle = charOverviewScreen.querySelector('.main__title');

    const charOverviewText = charOverviewScreen.querySelectorAll('.item__text');

    const charOverviewValue = charOverviewScreen.querySelectorAll('.item__value');

    const charOverviewFooter = charOverviewScreen.querySelector('.main__footer');
                
    charOverviewTitle.innerText = charOverviewRus.overwievTitle;

    for(let i = 0; i < arrayText.length; i++){

        charOverviewText[i].innerText = arrayText[i];

        charOverviewValue[i].innerText = arrayPlayerText[i];

    };

    for(let i = 0; i < arrayBtn.length; i++){

        const button = document.createElement('button');

        button.className = `footer__btn button button-${i+1}`;

        charOverviewFooter.appendChild(button);

        button.innerText = arrayBtn[i];

        button.addEventListener('click', () =>{

            if(button.classList.contains('button-1') === true){

                chooseRace();

            };

            if(button.classList.contains('button-2') === true){

                charOverviewScreen.classList.add('hide-screen');

                chooseLocation();

            };

        });

    };

};

export default startScreen; 