
/// IMPORTS---START ///

import startScreenText from "../text/creatingChar/startScreenText.js";

import raceScreenText from "../text/creatingChar/raceScreenText.js";

import classScreenText from "../text/creatingChar/classScreenText.js";

import weaponsScreenText from "../text/creatingChar/weaponsScreenText.js";

import classesWeapons from "../racesClassesWeapons/classesWeapons.js";

import images from "../images.js";

import player from "../player.js";

/// IMPORTS---END ///

/// GLOBAL---VARIABLES---START ///

const charCreatingScreen = document.querySelector('#char-creating-screen');

let playerRaceKey = '';

let playerClassKey = '';

let choosedWeaponType = '';

let language = '';

let counterWeapon = 0;

/// GLOBAL---VARIABLES---END ///

/// REPEATABLE---FUNCTIONS---START ///

function createFooterItem(footerItemCount, needInfoBtn){

    for(let i = 0; i < footerItemCount; i++){

        const footerItem = document.createElement('div');

        const footerBtn = document.createElement('button');

        footerItem.className = 'footer__item';

        footerBtn.className = 'footer__button button';

        charCreatingScreen.querySelector('.footer').appendChild(footerItem);

        footerItem.appendChild(footerBtn);

        if(needInfoBtn === true){

            const footerInfoBtn = document.createElement('button');

            const footerInfoBtnImg = document.createElement('img');

            footerInfoBtn.className = 'footer__btn-info btn-info';

            footerInfoBtnImg.className = 'btn-info__img';

            footerInfoBtnImg.src = images.other.btnInfoImg;

            footerItem.appendChild(footerInfoBtn);

            footerInfoBtn.appendChild(footerInfoBtnImg);

        };

    };

};

function weaponsTypeKeys(){

    const arrayOfClassWeapon  = [];

    const arrayWeaponsType = [];

    let booleanTrueCounter = 0;

    for(let classWeapon in classesWeapons[playerRaceKey][playerClassKey]){
    
        if(classWeapon != choosedWeaponType && classesWeapons[playerRaceKey][playerClassKey][classWeapon] === true){
    
            booleanTrueCounter++;
    
            arrayWeaponsType.push(weaponsScreenText.language[language][playerRaceKey][classWeapon].mainText.textTitle);
    
            arrayOfClassWeapon.push(classWeapon);
                
        };
    
    };

    chooseWeaponType(arrayOfClassWeapon, arrayWeaponsType);

};

function chooseWeaponType(arrayOfClassWeapon, arrayWeaponsType){

    const needInfoBtn = false;

    const footerItemCount = arrayWeaponsType.length;

    setTimeout(() => {

        document.querySelector('.main__title').innerText = weaponsScreenText.language[language].mainText.textTitle;
        
        document.querySelector('.main__descr').innerText = weaponsScreenText.language[language].mainText.textDescr;

        createFooterItem(footerItemCount, needInfoBtn);

        charCreatingScreen.querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = arrayWeaponsType[index];

        });

        eventListener();

    }, '650');

    function eventListener(){

        charCreatingScreen.querySelectorAll('.button').forEach((elem, index) =>{

            elem.addEventListener('click', () =>{

                choosedWeaponType = arrayOfClassWeapon[index];

                charCreatingScreen.querySelector('.wrapper').classList.toggle('rotation');

                setTimeout(() => {
            
                    charCreatingScreen.querySelectorAll('.footer__item').forEach(elem =>{
            
                        elem.remove();
                    
                    });
            
                }, '650');

                chooseWeapon(choosedWeaponType);

            });

        });

    };

};

function chooseWeapon(choosedWeaponType){

    counterWeapon++;

    const needInfoBtn = true;

    const footerItemCount = Object.values(weaponsScreenText.language[language][playerRaceKey][choosedWeaponType].weapons).length;

    setTimeout(() => {
        
        document.querySelector('.main__title').innerText = weaponsScreenText.language[language][playerRaceKey][choosedWeaponType].mainText.textTitle;

        document.querySelector('.main__descr').innerText = weaponsScreenText.language[language][playerRaceKey][choosedWeaponType].mainText.textDescr;

        createFooterItem(footerItemCount, needInfoBtn);

        charCreatingScreen.querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(weaponsScreenText.language[language][playerRaceKey][choosedWeaponType].weapons)[index].textTitle;

        });

        eventListener();

    }, '650');

    function eventListener(){

        charCreatingScreen.querySelectorAll('.button').forEach((elem, index) =>{

            elem.addEventListener('click', () =>{

                let keyWord = null;

                const key = Object.keys(weaponsScreenText.language[language][playerRaceKey][choosedWeaponType].weapons)[index];

                const text = elem.innerText;

                if(counterWeapon === 1){

                    keyWord = 'firstWeapon';


                } else if(counterWeapon === 2){

                    keyWord = 'secondWeapon';

                };

                addDataToPlayer(key, text, keyWord);

                charCreatingScreen.querySelector('.wrapper').classList.toggle('rotation');

                setTimeout(() => {
            
                    charCreatingScreen.querySelectorAll('.footer__item').forEach(elem =>{
            
                        elem.remove();
                    
                    });
            
                }, '650');

                weaponsTypeKeys();

            });

        });

    };

};

function addDataToPlayer(key, text, keyWord){

    player.playerKey[keyWord] = key;

    player.mainText[keyWord] = text;

    console.log(player)

};

/// REPEATABLE---FUNCTIONS---END ///

function creatingCharacter(choosedLang){

    language = choosedLang.toLowerCase();

    charCreatingScreen.classList.add('show-screen');

    createHTMLElements();

};

function createHTMLElements(){

    mainElements();

    function mainElements(){

        const container = document.createElement('div');
    
        const charCreatingWrapper = document.createElement('div');
    
        const charCreatingMain = document.createElement('div');
        
        const mainHeader = document.createElement('div');

        const mainFooter = document.createElement('div');

        container.className = 'char-creating__container screen__container container';

        charCreatingWrapper.className = 'char-creating__wrapper screen__wrapper wrapper';

        charCreatingMain.className = 'char-creating__main screen__main main';

        mainHeader.className = 'char-creating__header main__header header';

        mainFooter.className = 'char-creating__footer main__footer footer';

        charCreatingScreen.appendChild(container);

        container.appendChild(charCreatingWrapper);

        charCreatingWrapper.appendChild(charCreatingMain);

        charCreatingMain.appendChild(mainHeader);

        charCreatingMain.appendChild(mainFooter);

        mainHeaderElements();

        mainFooterElements();

        eventListener();
        
    };

    function mainHeaderElements(){

        const mainHeader = charCreatingScreen.querySelector('.char-creating__header');

        const mainTitle = document.createElement('h1');

        const mainDescr = document.createElement('div');

        mainTitle.className = 'main__title';

        mainDescr.className = 'main__descr';

        mainHeader.appendChild(mainTitle);

        mainHeader.appendChild(mainDescr);

        mainTitle.innerText = startScreenText.language[language].textTitle;

        mainDescr.innerText = startScreenText.language[language].textDescr;

    };

    function mainFooterElements(){

        const mainFooter = charCreatingScreen.querySelector('.char-creating__footer');

        const footerItem = document.createElement('div');

        const footerBtn = document.createElement('button');

        footerItem.className = 'footer__item';

        footerBtn.className = 'footer__button button';

        mainFooter.appendChild(footerItem);

        footerItem.appendChild(footerBtn);

        footerBtn.innerText = startScreenText.language[language].textBtn;

    };

    function eventListener(){

        charCreatingScreen.querySelectorAll('.button').forEach(elem =>{
    
            elem.addEventListener('click', () =>{

                charCreatingScreen.querySelector('.wrapper').classList.toggle('rotation');

                setTimeout(() => {
            
                    charCreatingScreen.querySelectorAll('.footer__item').forEach(elem =>{
            
                        elem.remove();
                    
                    });
            
                }, '650');

                chooseRace();
    
            });
    
        });
    
    };

};

function chooseRace(){

    const needInfoBtn = true;

    const footerItemCount = Object.keys(raceScreenText.language[language].races).length;

    setTimeout(() => {

        document.querySelector('.main__title').innerText = raceScreenText.language[language].mainText.textTitle;
        
        document.querySelector('.main__descr').innerText = raceScreenText.language[language].mainText.textDescr;

        createFooterItem(footerItemCount, needInfoBtn);

        charCreatingScreen.querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(raceScreenText.language[language].races)[index].textTitle;

        });

        eventListener();

    }, '650');

    function eventListener(){

        charCreatingScreen.querySelectorAll('.button').forEach((elem, index) =>{

            elem.addEventListener('click', () =>{

                playerRaceKey = Object.keys(raceScreenText.language[language].races)[index];

                player.playerImg = images.player[playerRaceKey];

                const keyWord = 'race';

                const key = playerRaceKey;

                const text = elem.innerText;

                addDataToPlayer(key, text, keyWord);

                charCreatingScreen.querySelector('.wrapper').classList.toggle('rotation');

                setTimeout(() => {
            
                    charCreatingScreen.querySelectorAll('.footer__item').forEach(elem =>{
            
                        elem.remove();
                    
                    });
            
                }, '650');

                chooseClass();

            });

        });

    };

};

function chooseClass(){

    const needInfoBtn = true;

    const footerItemCount = Object.keys(classScreenText.language[language].classes[playerRaceKey]).length;

    setTimeout(() => {

        document.querySelector('.main__title').innerText = classScreenText.language[language].mainText.textTitle;
        
        document.querySelector('.main__descr').innerText = classScreenText.language[language].mainText.textDescr;

        createFooterItem(footerItemCount, needInfoBtn);

        charCreatingScreen.querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(classScreenText.language[language].classes[playerRaceKey])[index].textTitle;

        });

        eventListener();

    }, '650');

    function eventListener(){

        charCreatingScreen.querySelectorAll('.button').forEach((elem, index) =>{

            elem.addEventListener('click', () =>{

                playerClassKey = Object.keys(classScreenText.language[language].classes[playerRaceKey])[index];

                const keyWord = 'class';

                const key = playerClassKey;

                const text = elem.innerText;

                addDataToPlayer(key, text, keyWord);

                charCreatingScreen.querySelector('.wrapper').classList.toggle('rotation');

                setTimeout(() => {
            
                    charCreatingScreen.querySelectorAll('.footer__item').forEach(elem =>{
            
                        elem.remove();
                    
                    });
            
                }, '650');

                weaponsTypeKeys();

            });

        });

    };

};

export { creatingCharacter };