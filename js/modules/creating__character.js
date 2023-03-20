
import player from "./player.js";

import weapons from "../weapons.js";

import images from "./images.js";

import racesStats from "./races__classes__weapons/racesStats.js";

import classesStats from "./races__classes__weapons/classesStats.js";

import weaponsClasses from "./races__classes__weapons/classesWeapons.js";

import startScreenRus from "./text/creatingChar/russian/startScreenRus.js";

import raceRus from "./text/creatingChar/russian/racesRus.js";

import classesRus from "./text/creatingChar/russian/classesRus.js";

import weaponsRus from "./text/creatingChar/russian/weaponsRus.js";

import charOverviewRus from "./text/overviewChar/russian/overviewCharRus.js";

import chooseLocation from "./locations/choose__location.js";

const charOverviewScreen = document.querySelector('#character-overview-screen');

const screenCreatingChar = document.querySelector('#char-creating-screen');

const screenCreatingCharDescr = screenCreatingChar.querySelector('.main__desc');

const screenCreatingCharTitle = screenCreatingChar.querySelector('.main__title');

const screenCreatingCharFooter = screenCreatingChar.querySelector('.main__footer');

let counterClickBtnInfo = 0;

function popup(value, stats, keyForImages){

    const arrayStats = Object.values(stats);

    const popup = document.querySelector('#popup');

    popup.classList.toggle('show-popup');

    addElementsToPopup(arrayStats, keyForImages);

    function addElementsToPopup(arrayStats, keyForImages){

        const overlay = document.createElement('div');

        const contentPopup = document.createElement('div');

        const closeBtnPopup = document.createElement('div');

        const titlePopup = document.createElement('h3');

        const descrPopup = document.createElement('div');

        const contentStats = document.createElement('ul');

        overlay.className = 'overlay close__popup';
        
        contentPopup.className = 'popup__content content';

        closeBtnPopup.className = 'close-btn close__popup';

        closeBtnPopup.id = 'close__popup';

        titlePopup.className = 'content__title';

        descrPopup.className = 'content__descr';

        contentStats.className = 'content__stats stats';

        popup.appendChild(overlay);

        popup.appendChild(contentPopup);

        contentPopup.appendChild(closeBtnPopup);

        contentPopup.appendChild(titlePopup);

        contentPopup.appendChild(descrPopup);

        contentPopup.appendChild(contentStats);

        document.querySelectorAll('.close__popup').forEach(elem =>{

            elem.addEventListener('click', () =>{

                popup.classList.remove('show-popup');
            
                document.querySelector('body').classList.remove('noscroll');

                setTimeout(() =>{

                    overlay.remove();

                    contentPopup.remove();

                }, '120');

            });

        });

        addTextPopup(value, titlePopup, descrPopup);

        addStatsPopup(arrayStats, contentStats, keyForImages);

    };

    function addTextPopup(value, titlePopup, descrPopup){

        titlePopup.innerText = value.name;

        descrPopup.innerText = value.descr;

    };

    function addStatsPopup(arrayStats, contentStats, keyForImages){

        const arrayImages = Object.values(images.stats[keyForImages]);

        for(let i = 0; i < arrayStats.length; i++){

            const statsItem = document.createElement('li');

            const statsSpan = document.createElement('span');

            const statsImg = document.createElement('img');

            statsItem.className = 'stats__item';

            statsImg.src = arrayImages[i];

            contentStats.appendChild(statsItem);

            statsItem.appendChild(statsImg);

            statsItem.appendChild(statsSpan);

            statsSpan.innerText = arrayStats[i];

        };

    };

};

function addElements(value){

    const footerItem = document.createElement('div');

    const button = document.createElement('button');

    const buttonInfo = document.createElement('button');

    const infoImg = document.createElement('img');

    footerItem.className = 'footer__item';

    button.className = 'footer__btn main__btn button';

    buttonInfo.className = 'footer__btn main__btn-info';

    screenCreatingCharFooter.appendChild(footerItem);

    footerItem.appendChild(button);

    footerItem.appendChild(buttonInfo);

    buttonInfo.appendChild(infoImg);

    infoImg.src = './img/other/info.png';

    button.innerText = value;

};

function changeSlide(){

    setTimeout(() =>{

        screenCreatingCharFooter.querySelectorAll('.footer__item').forEach(elem =>{

            elem.remove();

        });
            
    }, '650');

    screenCreatingChar.querySelector('.main').classList.toggle('rotation');

};

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

            const name = arrayRaces[i].name;

            addElements(name);

        };

        screenCreatingCharFooter.querySelectorAll('.main__btn').forEach((elem, index) =>{

            const choosedRace = arrayRaceKey[index];

            elem.closest('.footer__item').querySelector('.main__btn-info').addEventListener('click', () =>{

                counterClickBtnInfo++;

                if(counterClickBtnInfo === 1){

                    elem.disabled = true;

                    setTimeout(() =>{

                        elem.disabled = false;

                        counterClickBtnInfo = 0;

                    }, '120');

                };

                const stats = racesStats[choosedRace];

                const keyForImages = 'races';
                
                popup(raceRus.races[choosedRace], stats, keyForImages); 

            });

            elem.addEventListener('click', () =>{

                changeSlide();

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

                counterClickBtnInfo = 0;

                chooseClass(choosedRace);

            });

        });

    }, '650');

};

function chooseClass(choosedRace){

    const arrayClasses = Object.values(classesRus.classes[choosedRace]);

    const arrayClassKey = [];

    for(let key in classesRus.classes[choosedRace]){

        arrayClassKey.push(key);

    };

    setTimeout(() =>{
                
        screenCreatingCharTitle.innerHTML = classesRus.mainText.textTitle;

        screenCreatingCharDescr.innerHTML = classesRus.mainText.textDescr;

        for(let i = 0; i < arrayClasses.length; i++){

            const name = arrayClasses[i].name;

            addElements(name);
    
        };

        screenCreatingCharFooter.querySelectorAll('.main__btn').forEach((elem, index) =>{

            const choosedClass = arrayClassKey[index];

            elem.closest('.footer__item').querySelector('.main__btn-info').addEventListener('click', () =>{

                counterClickBtnInfo++;

                if(counterClickBtnInfo === 1){

                    elem.disabled = true;

                    setTimeout(() =>{

                        elem.disabled = false;

                        counterClickBtnInfo = 0;

                    }, '120');

                };

                const stats = classesStats[choosedRace][choosedClass];

                const keyForImages = 'classes';
                
                popup(classesRus.classes[choosedRace][choosedClass], stats, keyForImages);

            });

            elem.addEventListener('click', () =>{

                changeSlide();

                player.mainText.class = elem.innerText;

                for(let classes in classesStats[choosedRace]){

                    if(classes === choosedClass){

                        for(let stats in player.classStats){

                            player.classStats[stats] = classesStats[choosedRace][classes][stats];

                        };

                    };

                };

                counterClickBtnInfo = 0;

                chooseFirstWeaponType(choosedRace, choosedClass);

            });

        });

    }, '650');

};

function chooseFirstWeaponType(choosedRace, choosedClass){

    let booleanTrueCounter = 0;

    const arrayOfClassWeapon  = [];

    const arrayWeaponsType = [];

    for(let classWeapon in weaponsClasses[choosedRace][choosedClass]){
    
        if(weaponsClasses[choosedRace][choosedClass][classWeapon] === true){

            booleanTrueCounter++;

            arrayWeaponsType.push(weaponsRus[choosedRace][classWeapon].mainText.name);

            arrayOfClassWeapon.push(classWeapon);
            
        };

    };

    setTimeout(() =>{
                
        screenCreatingCharTitle.innerHTML = weaponsRus.mainText.textTitle;

        screenCreatingCharDescr.innerHTML = weaponsRus.mainText.textDescr;

        for(let i = 0; i < arrayWeaponsType.length; i++){

            const weaponType = arrayWeaponsType[i];

            addElements(weaponType);

        };

        screenCreatingCharFooter.querySelectorAll('.main__btn').forEach((elem, index) =>{

            const choosedWeaponType = arrayOfClassWeapon[index];

            elem.closest('.footer__item').querySelector('.main__btn-info').addEventListener('click', () =>{

                counterClickBtnInfo++;

                if(counterClickBtnInfo === 1){

                    elem.disabled = true;

                    setTimeout(() =>{

                        elem.disabled = false;

                        counterClickBtnInfo = 0;

                    }, '120');

                };
                
                popup(weaponsRus[choosedRace][choosedWeaponType].mainText);

            });

            elem.addEventListener('click', () =>{

                changeSlide();

                counterClickBtnInfo = 0;

                chooseFirstWeapon(choosedRace, choosedClass, choosedWeaponType);

            });

        });

    }, '650');

};

function chooseFirstWeapon(choosedRace, choosedClass, choosedWeaponType){

    const arrayWeapons = [];

    const arrayWeaponsKey = Object.keys(weaponsRus[choosedRace][choosedWeaponType].weapons);

    for(let weapon in weaponsRus[choosedRace][choosedWeaponType].weapons){

        arrayWeapons.push(weaponsRus[choosedRace][choosedWeaponType].weapons[weapon].name);

    };

    setTimeout(() =>{
                
        screenCreatingCharTitle.innerHTML = weaponsRus[choosedRace][choosedWeaponType].mainText.name;

        screenCreatingCharDescr.innerHTML = weaponsRus[choosedRace][choosedWeaponType].mainText.descr;

        for(let i = 0; i < arrayWeapons.length; i++){

            const weaponFirst = arrayWeapons[i];

            addElements(weaponFirst);

        };

        screenCreatingCharFooter.querySelectorAll('.main__btn').forEach((elem, index) =>{

            const weaponFirstKey = arrayWeaponsKey[index];

            elem.closest('.footer__item').querySelector('.main__btn-info').addEventListener('click', () =>{

                counterClickBtnInfo++;

                if(counterClickBtnInfo === 1){

                    elem.disabled = true;

                    setTimeout(() =>{

                        elem.disabled = false;

                        counterClickBtnInfo = 0;

                    }, '120');

                };
                
                popup(weaponsRus[choosedRace][choosedWeaponType].weapons[weaponFirstKey]);

            });

            elem.addEventListener('click', () =>{

                changeSlide();
    
                player.mainText.firstWeapon = arrayWeapons[index];

                player.weaponStats.firstWeapon = weapons[choosedRace][choosedWeaponType][weaponFirstKey];

                counterClickBtnInfo = 0;

                chooseSecondWeaponType(choosedRace, choosedClass, choosedWeaponType);

            });

        });

    }, '650');

};

function chooseSecondWeaponType(choosedRace, choosedClass, choosedWeaponType){

    let booleanTrueCounter = 0;

    const arrayOfClassWeapon  = [];

    const arrayWeaponsType = [];

    for(let classWeapon in weaponsClasses[choosedRace][choosedClass]){

        if(classWeapon != choosedWeaponType && weaponsClasses[choosedRace][choosedClass][classWeapon] === true){

            booleanTrueCounter++;

            arrayWeaponsType.push(weaponsRus[choosedRace][classWeapon].mainText.name);

            arrayOfClassWeapon.push(classWeapon);

        };
    
    };

    setTimeout(() =>{
                
        screenCreatingCharTitle.innerHTML = weaponsRus.mainText.textTitle;

        screenCreatingCharDescr.innerHTML = weaponsRus.mainText.textDescr;

        for(let i = 0; i < arrayWeaponsType.length; i++){

            const weaponType = arrayWeaponsType[i];

            addElements(weaponType);

            screenCreatingCharFooter.querySelectorAll('.main__btn').forEach((elem, index) =>{

                const choosedWeaponType = arrayOfClassWeapon[index];

                elem.closest('.footer__item').querySelector('.main__btn-info').addEventListener('click', () =>{

                    counterClickBtnInfo++;

                    if(counterClickBtnInfo === 1){
    
                        elem.disabled = true;
    
                        setTimeout(() =>{
    
                            elem.disabled = false;
    
                            counterClickBtnInfo = 0;
    
                        }, '120');
    
                    };
                
                    popup(weaponsRus[choosedRace][choosedWeaponType].mainText);
    
                });

                elem.addEventListener('click', () =>{
    
                    changeSlide();

                    counterClickBtnInfo = 0;
        
                    chooseSecondWeapon(choosedRace, choosedWeaponType);
    
                });
    
            });
    
        };

    }, '650');

};

function chooseSecondWeapon(choosedRace, choosedWeaponType){

    const arrayWeapons = [];

    const arrayWeaponsKey = Object.keys(weaponsRus[choosedRace][choosedWeaponType].weapons);

    for(let weapon in weaponsRus[choosedRace][choosedWeaponType].weapons){

        arrayWeapons.push(weaponsRus[choosedRace][choosedWeaponType].weapons[weapon].name);

    };

    setTimeout(() =>{
                
        screenCreatingCharTitle.innerHTML = weaponsRus[choosedRace][choosedWeaponType].mainText.name;

        screenCreatingCharDescr.innerHTML = weaponsRus[choosedRace][choosedWeaponType].mainText.descr;

        for(let i = 0; i < arrayWeapons.length; i++){

            const weaponSecond = arrayWeapons[i];

            addElements(weaponSecond);

        };

        screenCreatingCharFooter.querySelectorAll('.main__btn').forEach((elem, index) =>{

            const weaponSecondKey = arrayWeaponsKey[index];

            elem.closest('.footer__item').querySelector('.main__btn-info').addEventListener('click', () =>{

                counterClickBtnInfo++;

                if(counterClickBtnInfo === 1){

                    elem.disabled = true;

                    setTimeout(() =>{

                        elem.disabled = false;

                        counterClickBtnInfo = 0;

                    }, '120');

                };
                
                popup(weaponsRus[choosedRace][choosedWeaponType].weapons[weaponSecondKey]);

            });

            elem.addEventListener('click', () =>{

                player.mainText.secondWeapon = arrayWeapons[index];

                player.weaponStats.secondWeapon = weapons[choosedRace][choosedWeaponType][weaponSecondKey];

                screenCreatingChar.classList.add('hide-screen');

                charOverviewScreen.classList.remove('hide-screen');

                counterClickBtnInfo = 0;

                charOverview();

            });

        });

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