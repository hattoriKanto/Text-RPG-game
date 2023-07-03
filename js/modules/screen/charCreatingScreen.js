
/// IMPORTS---START ///

import startScreenText from "../text/creatingChar/startScreenText.js";

import raceScreenText from "../text/creatingChar/raceScreenText.js";

import classScreenText from "../text/creatingChar/classScreenText.js";

import weaponsScreenText from "../text/creatingChar/weaponsScreenText.js";

import charOverviewText from "../text/creatingChar/charOverviewText.js";

import popup from "../screen/popup.js";

import location from "../screen/locationScreen.js";

import racesTraits from "../racesClassesWeapons/racesTraits.js";

import classesTraits from "../racesClassesWeapons/classesTraits.js";

import weaponsTraits from "../racesClassesWeapons/weaponsTraits.js";

import images from "../images.js";

import player from "../player.js";

import { battleScreen } from "./battleScreen.js";

import { deletePlayerData } from "../globalFunctions.js";

import { clonePlayerTraits } from "../globalFunctions.js";

/// IMPORTS---END ///

/// GLOBAL---VARIABLES---START ///

let playerRaceKey = null;

let playerClassKey = null;

let choosedWeaponType = null;

let language = null;

let counterWeapon = 0;

let counterWeaponType = 0;

/// GLOBAL---VARIABLES---END ///

/// REPEATABLE---FUNCTIONS---START ///

function disableButton(){

    document.querySelector('#char-creating').querySelectorAll('.btn-info').forEach(elem =>{

        elem.disabled = true;
                    
    });

};

function enableButton(){

    document.querySelector('#char-creating').querySelectorAll('.btn-info').forEach(elem =>{

        elem.disabled = false;
                    
    });

};

function rotationAnimation(){

    if(document.querySelector('#char-creating').querySelector('.wrapper').classList.contains('rotation-x') === true){

        document.querySelector('#char-creating').querySelector('.wrapper').classList.remove('rotation-x');

        document.querySelector('#char-creating').querySelector('.wrapper').classList.add('reverse-rotation-x');

    } else if(document.querySelector('#char-creating').querySelector('.wrapper').classList.contains('reverse-rotation-x') === true){

        document.querySelector('#char-creating').querySelector('.wrapper').classList.remove('reverse-rotation-x');

        document.querySelector('#char-creating').querySelector('.wrapper').classList.add('rotation-x');

    } else if(document.querySelector('#char-creating').querySelector('.wrapper').classList.contains('reverse-rotation-x') != true || document.querySelector('#char-creating').querySelector('.wrapper').classList.contains('reverse-rotation-x') != true){

        document.querySelector('#char-creating').querySelector('.wrapper').classList.add('rotation-x');

    }

}

function createFooterItem(footerItemCount, needInfoBtn){

    for(let i = 0; i < footerItemCount; i++){

        const footerItem = document.createElement('div');

        const footerBtn = document.createElement('button');

        footerItem.className = 'footer__item';

        footerBtn.className = 'footer__button button';

        document.querySelector('#char-creating').querySelector('.footer').appendChild(footerItem);

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

    for(let classWeapon in classesTraits[playerRaceKey][playerClassKey].weapon){
    
        if(classWeapon != choosedWeaponType && classesTraits[playerRaceKey][playerClassKey].weapon[classWeapon] === true){
    
            booleanTrueCounter++;
    
            arrayWeaponsType.push(weaponsScreenText.language[language][playerRaceKey][classWeapon].mainText.textTitle);
    
            arrayOfClassWeapon.push(classWeapon);
                
        };
    
    };

    chooseWeaponType(arrayOfClassWeapon, arrayWeaponsType);

};

function chooseWeaponType(arrayOfClassWeapon, arrayWeaponsType){

    console.log('Function: chooseWeaponType.');

    counterWeaponType++;

    const needInfoBtn = false;

    const footerItemCount = arrayWeaponsType.length;

    setTimeout(() => {

        document.querySelector('.main__title').innerText = weaponsScreenText.language[language].mainText.textTitle;
        
        document.querySelector('.main__descr').innerText = weaponsScreenText.language[language].mainText.textDescr;

        createFooterItem(footerItemCount, needInfoBtn);

        document.querySelector('#char-creating').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = arrayWeaponsType[index];

        });

        eventListener();

    }, '650');

    function eventListener(){

        document.querySelector('#char-creating').querySelectorAll('.button').forEach((elem, index) =>{

            elem.addEventListener('click', () =>{

                choosedWeaponType = arrayOfClassWeapon[index];

                if(counterWeaponType === 1){

                    player.playerKey.weaponsTypeKeys.firstWeapon = choosedWeaponType;

                };

                if(counterWeaponType === 2){

                    player.playerKey.weaponsTypeKeys.secondWeapon = choosedWeaponType;

                };

                rotationAnimation();

                setTimeout(() => {
            
                    document.querySelector('#char-creating').querySelectorAll('.footer__item').forEach(elem =>{
            
                        elem.remove();
                    
                    });
            
                }, '650');

                chooseWeapon(choosedWeaponType);

            });

        });

    };

};

function chooseWeapon(choosedWeaponType){

    console.log('Function: chooseWeapon.');

    counterWeapon++;

    const arrayDescr = [];

    const arrayWeaponKey = [];

    const footerItemCount = [];

    const needInfoBtn = true;

    if(counterWeapon === 2){

        for(let key in weaponsTraits[playerRaceKey][choosedWeaponType]){

            if(weaponsTraits[playerRaceKey][choosedWeaponType][key].isTwoHanded === false){

                arrayWeaponKey.push(key);

                footerItemCount.push(key);

            };
    
        };

    } else{

        if(playerClassKey === 'berserk'){

            for(let key in weaponsTraits[playerRaceKey][choosedWeaponType]){

                if(weaponsTraits[playerRaceKey][choosedWeaponType][key].isTwoHanded === true){

                    arrayWeaponKey.push(key);

                    footerItemCount.push(key);

                };
        
            };

        } else{

            for(let key in weaponsTraits[playerRaceKey][choosedWeaponType]){

                arrayWeaponKey.push(key);
    
                footerItemCount.push(key);
        
            };

        };

    };

    setTimeout(() => {
        
        document.querySelector('.main__title').innerText = weaponsScreenText.language[language][playerRaceKey][choosedWeaponType].mainText.textTitle;

        document.querySelector('.main__descr').innerText = weaponsScreenText.language[language][playerRaceKey][choosedWeaponType].mainText.textDescr;

        createFooterItem(footerItemCount.length, needInfoBtn);

        document.querySelector('#char-creating').querySelectorAll('.btn-info').forEach(elem =>{

            elem.classList.add('btn-info__weapon');

        });

        document.querySelector('#char-creating').querySelectorAll('.button').forEach((button, index) =>{

            const arrayElements = Object.values(weaponsScreenText.language[language][playerRaceKey][choosedWeaponType].weapons[arrayWeaponKey[index]]); 

            button.innerText = arrayElements[0];

            arrayDescr.push(arrayElements[1]);

        });

        eventListener();

        btnInfoEventListener(arrayDescr, arrayWeaponKey);

    }, '650');

    function eventListener(){

        document.querySelector('#char-creating').querySelectorAll('.button').forEach((elem, index) =>{

            const choosedWeapon = arrayWeaponKey[index];

            elem.addEventListener('click', () =>{

                let keyWord = null;

                const key = Object.keys(weaponsScreenText.language[language][playerRaceKey][choosedWeaponType].weapons)[index];

                const text = elem.innerText;

                if(counterWeapon === 1){

                    keyWord = 'firstWeapon';

                    addDataToPlayer(key, text, keyWord);

                    Object.assign(player.weaponTraits[keyWord], weaponsTraits[playerRaceKey][choosedWeaponType][choosedWeapon].traits);

                    rotationAnimation();

                    setTimeout(() => {
                
                        document.querySelector('#char-creating').querySelectorAll('.footer__item').forEach(elem =>{
                
                            elem.remove();
                        
                        });
                
                    }, '650');

                    if(weaponsTraits[playerRaceKey][choosedWeaponType][choosedWeapon].isTwoHanded === true || playerClassKey === 'berserk'){

                        charOverview();

                    }else{

                        weaponsTypeKeys();

                    };

                } else if(counterWeapon === 2){

                    keyWord = 'secondWeapon';

                    addDataToPlayer(key, text, keyWord);

                    Object.assign(player.weaponTraits[keyWord], weaponsTraits[playerRaceKey][choosedWeaponType][choosedWeapon].traits);

                    rotationAnimation();

                    setTimeout(() => {
                
                        document.querySelector('#char-creating').querySelectorAll('.footer__item').forEach(elem =>{
                
                            elem.remove();
                        
                        });
                
                    }, '650');

                    charOverview();

                };

            });

        });

    };

};

function addDataToPlayer(key, text, keyWord){

    if(keyWord === 'firstWeapon' || keyWord === 'secondWeapon'){

        player.playerKey.weaponKeys[keyWord] = key;

    } else{

        player.playerKey[keyWord] = key;

    }

    player.mainText[keyWord] = text;
    
};

function btnInfoEventListener(arrayDescr, arrayKey){

    if(arrayDescr === null && arrayKey === null){

        document.querySelector('#char-creating').querySelectorAll('.weapons__item').forEach((elem, index) =>{

            const titlePopup = elem.querySelector('.weapons__value').innerText;
        
            elem.querySelector('.btn-info__char-overview').addEventListener('click', () =>{
    
                const traits = Object.values(Object.values(player.weaponTraits)[index]);

                const traitsKeys = Object.keys(Object.values(player.weaponTraits)[index]);
    
                popup(titlePopup, null, traits, traitsKeys);
    
            });
    
        });

    } else{

        document.querySelector('#char-creating').querySelectorAll('.btn-info').forEach(elem =>{

            elem.addEventListener('click', () =>{

                disableButton();

            })

        });

        document.querySelector('#char-creating').querySelectorAll('.button').forEach((elem, index) =>{

            const titlePopup = elem.innerText;
    
            const key = arrayKey[index];
    
            elem.closest('.footer__item').querySelector('.btn-info').addEventListener('click', () =>{
    
                if(elem.closest('.footer__item').querySelector('.btn-info').classList.contains('btn-info__race') === true){
    
                    const traits = Object.values(racesTraits[key]);
        
                    const traitsKeys = Object.keys(racesTraits[key]);
    
                    popup(titlePopup, arrayDescr[index], traits, traitsKeys);
        
                };
    
                if(elem.closest('.footer__item').querySelector('.btn-info').classList.contains('btn-info__class') === true){
    
                    const traits = Object.values(classesTraits[playerRaceKey][key].traits);
        
                    const traitsKeys = Object.keys(classesTraits[playerRaceKey][key].traits);
    
                    popup(titlePopup, arrayDescr[index], traits, traitsKeys);
       
                };
    
                if(elem.closest('.footer__item').querySelector('.btn-info').classList.contains('btn-info__weapon') === true){
    
                    const traits = Object.values(weaponsTraits[playerRaceKey][choosedWeaponType][key].traits);
        
                    const traitsKeys = Object.keys(weaponsTraits[playerRaceKey][choosedWeaponType][key].traits);
    
                    popup(titlePopup, arrayDescr[index], traits, traitsKeys);
        
                };
    
            });
    
        });

    };

};

function backToDefaultValues(){

    playerRaceKey = null;

    playerClassKey = null;

    choosedWeaponType = null;

    counterWeapon = 0;

    counterWeaponType = 0;

};

/// REPEATABLE---FUNCTIONS---END ///

/// MAIN---FUNCTIONS---START ///

function creatingCharacter(choosedLang){

    language = choosedLang.toLowerCase();

    createHTMLElements();

};

function createHTMLElements(){

    mainElements();

    function mainElements(){

        const charCreatingScreen = document.createElement('div');

        const container = document.createElement('div');
    
        const charCreatingWrapper = document.createElement('div');
    
        const charCreatingMain = document.createElement('div');
        
        const mainHeader = document.createElement('div');

        const mainFooter = document.createElement('div');

        charCreatingScreen.className = 'screen__char-creating screen char-creating show-screen';

        container.className = 'char-creating__container screen__container container';

        charCreatingWrapper.className = 'char-creating__wrapper screen__wrapper wrapper';

        charCreatingMain.className = 'char-creating__main screen__main main';

        mainHeader.className = 'char-creating__header main__header header';

        mainFooter.className = 'char-creating__footer main__footer footer';

        charCreatingScreen.id = 'char-creating';

        document.querySelector('body').appendChild(charCreatingScreen);

        charCreatingScreen.appendChild(container);

        container.appendChild(charCreatingWrapper);

        charCreatingWrapper.appendChild(charCreatingMain);

        charCreatingMain.appendChild(mainHeader);

        charCreatingMain.appendChild(mainFooter);

        headerElements();

        footerElements();

        eventListener();
        
    };

    function headerElements(){

        const mainHeader = document.querySelector('#char-creating').querySelector('.char-creating__header');

        const mainTitle = document.createElement('h1');

        const mainDescr = document.createElement('div');

        mainTitle.className = 'main__title title';

        mainDescr.className = 'main__descr';

        mainHeader.appendChild(mainTitle);

        mainHeader.appendChild(mainDescr);

        mainTitle.innerText = startScreenText.language[language].textTitle;

        mainDescr.innerText = startScreenText.language[language].textDescr;

    };

    function footerElements(){

        const mainFooter = document.querySelector('#char-creating').querySelector('.char-creating__footer');

        const footerItem = document.createElement('div');

        const footerBtn = document.createElement('button');

        footerItem.className = 'footer__item';

        footerBtn.className = 'footer__button button button-without-btn-info';

        mainFooter.appendChild(footerItem);

        footerItem.appendChild(footerBtn);

        footerBtn.innerText = startScreenText.language[language].textBtn;

    };

    function eventListener(){

        document.querySelector('#char-creating').querySelectorAll('.button').forEach(elem =>{
    
            elem.addEventListener('click', () =>{

                rotationAnimation();

                setTimeout(() => {
            
                    document.querySelector('#char-creating').querySelectorAll('.footer__item').forEach(elem =>{
            
                        elem.remove();
                    
                    });
            
                }, '650');

                chooseRace();
    
            });
    
        });
    
    };

};

function chooseRace(){

    console.log('Function: chooseRace.');

    const arrayDescr = [];

    const arrayRaceKey = [];

    const needInfoBtn = true;

    const footerItemCount = Object.keys(raceScreenText.language[language].races).length;

    for(let key in raceScreenText.language[language].races){

        arrayRaceKey.push(key);

    };

    setTimeout(() => {

        document.querySelector('.main__title').innerText = raceScreenText.language[language].mainText.textTitle;
        
        document.querySelector('.main__descr').innerText = raceScreenText.language[language].mainText.textDescr;

        createFooterItem(footerItemCount, needInfoBtn);

        document.querySelector('#char-creating').querySelectorAll('.btn-info').forEach(elem =>{

            elem.classList.add('btn-info__race');

        });

        document.querySelector('#char-creating').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(raceScreenText.language[language].races)[index].textTitle;

            arrayDescr.push(Object.values(raceScreenText.language[language].races)[index].textDescr);

        });

        eventListener();

        btnInfoEventListener(arrayDescr, arrayRaceKey);

    }, '650');

    function eventListener(){

        document.querySelector('#char-creating').querySelectorAll('.button').forEach((elem, index) =>{

            elem.addEventListener('click', () =>{

                playerRaceKey = Object.keys(raceScreenText.language[language].races)[index];

                player.playerImg = images.player[playerRaceKey];

                player.playerTraits.healthPoints = racesTraits[playerRaceKey].healthPoints;

                const keyWord = 'race';

                const key = playerRaceKey;

                const text = elem.innerText;

                addDataToPlayer(key, text, keyWord);

                rotationAnimation();

                setTimeout(() => {
            
                    document.querySelector('#char-creating').querySelectorAll('.footer__item').forEach(elem =>{
            
                        elem.remove();
                    
                    });
            
                }, '650');

                chooseClass();

            });

        });

    };

};

function chooseClass(){

    console.log('Function: chooseClass.');

    const arrayDescr = [];

    const arrayClassKey = [];

    const needInfoBtn = true;

    const footerItemCount = Object.keys(classScreenText.language[language].classes[playerRaceKey]).length;

    for(let key in classScreenText.language[language].classes[playerRaceKey]){

        arrayClassKey.push(key);

    };

    setTimeout(() => {

        document.querySelector('.main__title').innerText = classScreenText.language[language].mainText.textTitle;
        
        document.querySelector('.main__descr').innerText = classScreenText.language[language].mainText.textDescr;

        createFooterItem(footerItemCount, needInfoBtn);

        document.querySelector('#char-creating').querySelectorAll('.btn-info').forEach(elem =>{

            elem.classList.add('btn-info__class');

        });

        document.querySelector('#char-creating').querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(classScreenText.language[language].classes[playerRaceKey])[index].textTitle;

            arrayDescr.push(Object.values(classScreenText.language[language].classes[playerRaceKey])[index].textDescr);

        });

        eventListener();

        btnInfoEventListener(arrayDescr, arrayClassKey);

    }, '650');

    function eventListener(){

        document.querySelector('#char-creating').querySelectorAll('.button').forEach((elem, index) =>{

            elem.addEventListener('click', () =>{

                playerClassKey = Object.keys(classScreenText.language[language].classes[playerRaceKey])[index];

                for(let classes in classesTraits[playerRaceKey]){

                    if(classes === playerClassKey){

                        for(let traitsPlayer in player.playerTraits){

                            for(let traitsClass in classesTraits[playerRaceKey][playerClassKey].traits){

                                if(traitsPlayer === traitsClass){

                                    player.playerTraits[traitsPlayer] = player.playerTraits[traitsPlayer] + classesTraits[playerRaceKey][playerClassKey].traits[traitsPlayer];

                                };

                            };

                        };

                    };

                };

                const keyWord = 'class';

                const key = playerClassKey;

                const text = elem.innerText;

                addDataToPlayer(key, text, keyWord);

                rotationAnimation();

                setTimeout(() => {
            
                    document.querySelector('#char-creating').querySelectorAll('.footer__item').forEach(elem =>{
            
                        elem.remove();
                    
                    });
            
                }, '650');

                weaponsTypeKeys();

            });

        });

    };

};

function charOverview(){

    const needInfoBtn = false;

    const footerItemCount = Object.values(charOverviewText.language[language].mainText.textBtn).length;

    const traitsListItemCount = Object.values(player.playerTraits).length;

    setTimeout(() => {
        
        editHTMLElements();

    }, '650');

    function editHTMLElements(){

        createHTMLElements();

        function createHTMLElements(){

            const mainList = document.createElement('ul');

            const raceItem = document.createElement('li');

            const classItem = document.createElement('li');

            const traitsList = document.createElement('ul');

            const spanTextRace = document.createElement('span');

            const spanValueRace = document.createElement('span');

            const spanTextClass = document.createElement('span');

            const spanValueClass = document.createElement('span');

            const weaponsList = document.createElement('ul');

            mainList.className = 'main__list list';

            raceItem.className = 'list__item item race';

            classItem.className = 'list__item item class';

            traitsList.className = 'list__traits-list traits-list';

            weaponsList.className = 'list__weapons weapons';

            spanTextRace.className = 'item__text race__text';

            spanValueRace.className = 'item__value race__value';

            spanTextClass.className = 'item__text class__text';

            spanValueClass.className = 'item__value class__value';

            document.querySelector('#char-creating').querySelector('.main__header').appendChild(mainList);

            mainList.appendChild(raceItem);

            mainList.appendChild(classItem);

            mainList.appendChild(weaponsList);

            mainList.appendChild(traitsList);

            raceItem.appendChild(spanTextRace);

            raceItem.appendChild(spanValueRace);

            classItem.appendChild(spanTextClass);

            classItem.appendChild(spanValueClass);

            document.querySelector('#char-creating').querySelector('.main__title').innerText = charOverviewText.language[language].mainText.textTitle;

            spanTextRace.innerText = charOverviewText.language[language].overviewText.raceText;

            spanTextClass.innerText = charOverviewText.language[language].overviewText.classText;

            spanValueRace.innerText = player.mainText.race;

            spanValueClass.innerText = player.mainText.class;

            createTraitsItems();

            createWeaponsItems();

            addDataToElements();

            function createTraitsItems(){

                for(let i = 0; i < traitsListItemCount; i++){

                    const item = document.createElement('li');

                    const img = document.createElement('img');

                    const span = document.createElement('span');

                    item.className = 'list__item traits-list__item';

                    img.className = 'traits-list__img';

                    span.className = 'traits-list__value';

                    traitsList.appendChild(item);

                    item.appendChild(img);

                    item.appendChild(span);

                    img.src = images.traits[Object.keys(player.playerTraits)[i]];

                };

            };

            function createWeaponsItems(){

                for(let i = 0; i < counterWeapon; i++){

                    const item = document.createElement('li');

                    const spanText = document.createElement('span');

                    const spanValue = document.createElement('span');

                    const button = document.createElement('button');

                    const imgInfo = document.createElement('img');

                    item.className = 'list__item weapons__item';

                    spanText.className = 'item__text weapons__text';

                    spanValue.className = 'item__value weapons__value';

                    button.className = 'weapons__button btn-info';

                    imgInfo.className = 'weapons__img btn-info__img';

                    weaponsList.appendChild(item);

                    item.appendChild(spanText);

                    item.appendChild(spanValue);

                    item.appendChild(button);

                    button.appendChild(imgInfo);

                    imgInfo.src = images.other.btnInfoImg;

                };

            };

            createFooterItem(footerItemCount, needInfoBtn);

        };

        function addDataToElements(){

            document.querySelector('#char-creating').querySelectorAll('.item__text').forEach((elem, index) =>{

                elem.innerText = Object.values(charOverviewText.language[language].overviewText)[index];

            });

            document.querySelector('#char-creating').querySelectorAll('.item__value').forEach((elem, index) =>{

                elem.innerText = Object.values(player.mainText)[index];

            });

            document.querySelector('#char-creating').querySelectorAll('.traits-list__value').forEach((elem, index) =>{

                elem.innerText = Object.values(player.playerTraits)[index];

            });

        };

        document.querySelector('.main__title').innerText = charOverviewText.language[language].mainText.textTitle;

        document.querySelector('#char-creating').querySelector('.main__descr').remove();

        document.querySelector('#char-creating').querySelectorAll('.footer__button').forEach((elem, index) =>{

            elem.innerText = Object.values(charOverviewText.language[language].mainText.textBtn)[index];

            elem.classList.add(`button-${index + 1}`);

        });

        document.querySelector('#char-creating').querySelectorAll('.btn-info').forEach(elem =>{

            elem.classList.add('btn-info__char-overview');

        });

        btnInfoEventListener(null, null);

        eventListener();

    };

    function eventListener(){

        document.querySelector('#char-creating').querySelectorAll('.footer__button').forEach(elem =>{

            elem.addEventListener('click', () =>{

                if(elem.classList.contains('button-1') === true){

                    document.querySelector('#char-creating').classList.add('hide-screen');

                    setTimeout(() => {
                
                        document.querySelector('#char-creating').remove();

                        deletePlayerData();

                        backToDefaultValues();

                        createHTMLElements();
                
                    }, '2000');

                };

                if(elem.classList.contains('button-2') === true){

                    document.querySelector('#char-creating').classList.add('hide-screen');

                    setTimeout(() => {
                        
                        document.querySelector('#char-creating').remove();

                    }, '650');

                    clonePlayerTraits();

                    battleScreen(language, 'lowTier', 3);

                };

            });

        });

    };

};

/// MAIN---FUNCTIONS---END ///

/// EXPORTS---START ///

export { creatingCharacter };

export { enableButton };

/// EXPORTS---END ///