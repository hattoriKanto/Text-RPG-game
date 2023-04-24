
/// IMPORTS---START ///

import startScreenText from "../text/creatingChar/startScreenText.js";

import raceScreenText from "../text/creatingChar/raceScreenText.js";

import classScreenText from "../text/creatingChar/classScreenText.js";

import weaponsScreenText from "../text/creatingChar/weaponsScreenText.js";

import charOverviewText from "../text/creatingChar/charOverviewText.js";

import popup from "../screen/popup.js";

import racesStats from "../racesClassesWeapons/racesStats.js";

import classesStats from "../racesClassesWeapons/classesStats.js";

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

    const arrayDescr = [];

    const needInfoBtn = true;

    const footerItemCount = Object.values(weaponsScreenText.language[language][playerRaceKey][choosedWeaponType].weapons).length;

    setTimeout(() => {
        
        document.querySelector('.main__title').innerText = weaponsScreenText.language[language][playerRaceKey][choosedWeaponType].mainText.textTitle;

        document.querySelector('.main__descr').innerText = weaponsScreenText.language[language][playerRaceKey][choosedWeaponType].mainText.textDescr;

        createFooterItem(footerItemCount, needInfoBtn);

        charCreatingScreen.querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(weaponsScreenText.language[language][playerRaceKey][choosedWeaponType].weapons)[index].textTitle;

            arrayDescr.push(Object.values(weaponsScreenText.language[language][playerRaceKey][choosedWeaponType].weapons)[index].textDescr);

        });

        eventListener();

        btnInfoEventListener(arrayDescr);

    }, '650');

    function eventListener(){

        charCreatingScreen.querySelectorAll('.button').forEach((elem, index) =>{

            elem.addEventListener('click', () =>{

                let keyWord = null;

                const key = Object.keys(weaponsScreenText.language[language][playerRaceKey][choosedWeaponType].weapons)[index];

                const text = elem.innerText;

                if(counterWeapon === 1){

                    keyWord = 'firstWeapon';

                    addDataToPlayer(key, text, keyWord);

                    charCreatingScreen.querySelector('.wrapper').classList.toggle('rotation');

                    setTimeout(() => {
                
                        charCreatingScreen.querySelectorAll('.footer__item').forEach(elem =>{
                
                            elem.remove();
                        
                        });
                
                    }, '650');

                    weaponsTypeKeys();

                } else if(counterWeapon === 2){

                    keyWord = 'secondWeapon';

                    addDataToPlayer(key, text, keyWord);

                    charCreatingScreen.querySelector('.wrapper').classList.toggle('rotation');

                    setTimeout(() => {
                
                        charCreatingScreen.querySelectorAll('.footer__item').forEach(elem =>{
                
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

    player.playerKey[keyWord] = key;

    player.mainText[keyWord] = text;

    console.log(player)

};

function btnInfoEventListener(arrayDescr, arrayKey){

    charCreatingScreen.querySelectorAll('.button').forEach((elem, index) =>{

        const titlePopup = elem.innerText;

        const key = arrayKey[index];

        elem.closest('.footer__item').querySelector('.btn-info').addEventListener('click', () =>{

            if(elem.closest('.footer__item').querySelector('.btn-info').classList.contains('btn-info__race') === true){

                const stats = Object.values(racesStats[key]);
    
                const statsKeys = Object.keys(racesStats[key]);

                popup(titlePopup, arrayDescr[index], stats, statsKeys);
    
            };

            if(elem.closest('.footer__item').querySelector('.btn-info').classList.contains('btn-info__class') === true){

                const stats = Object.values(classesStats[playerRaceKey][key].stats);
    
                const statsKeys = Object.keys(classesStats[playerRaceKey][key].stats);

                popup(titlePopup, arrayDescr[index], stats, statsKeys);
    
            };

        });

    });

};

/// REPEATABLE---FUNCTIONS---END ///

/// MAIN---FUNCTIONS---START ///

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

        charCreatingScreen.querySelectorAll('.btn-info').forEach(elem =>{

            elem.classList.add('btn-info__race');

        });

        charCreatingScreen.querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(raceScreenText.language[language].races)[index].textTitle;

            arrayDescr.push(Object.values(raceScreenText.language[language].races)[index].textDescr);

        });

        eventListener();

        btnInfoEventListener(arrayDescr, arrayRaceKey);

    }, '650');

    function eventListener(){

        charCreatingScreen.querySelectorAll('.button').forEach((elem, index) =>{

            elem.addEventListener('click', () =>{

                playerRaceKey = Object.keys(raceScreenText.language[language].races)[index];

                player.playerImg = images.player[playerRaceKey];

                player.playerStats.healthPoints = racesStats[playerRaceKey].healthPoints;

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

        charCreatingScreen.querySelectorAll('.btn-info').forEach(elem =>{

            elem.classList.add('btn-info__class');

        });

        charCreatingScreen.querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(classScreenText.language[language].classes[playerRaceKey])[index].textTitle;

            arrayDescr.push(Object.values(classScreenText.language[language].classes[playerRaceKey])[index].textDescr);

        });

        eventListener();

        btnInfoEventListener(arrayDescr, arrayClassKey);

    }, '650');

    function eventListener(){

        charCreatingScreen.querySelectorAll('.button').forEach((elem, index) =>{

            elem.addEventListener('click', () =>{

                playerClassKey = Object.keys(classScreenText.language[language].classes[playerRaceKey])[index];

                for(let classes in classesStats[playerRaceKey]){

                    if(classes === playerClassKey){

                        for(let statsPlayer in player.playerStats){

                            for(let statsClass in classesStats[playerRaceKey][playerClassKey].stats){

                                if(statsPlayer === statsClass){

                                    player.playerStats[statsPlayer] = player.playerStats[statsPlayer] + classesStats[playerRaceKey][playerClassKey].stats[statsPlayer];

                                };

                            };

                        };

                    };

                };

                player.playerStats.canAttackTwice = classesStats[playerRaceKey][playerClassKey].stats.canAttackTwice;

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

function charOverview(){

    const needInfoBtn = false;

    const footerItemCount = Object.values(charOverviewText.language[language].mainText.textBtn).length;

    const statsListItemCount = Object.values(player.playerStats).length;

    setTimeout(() => {
        
        editHTMLElements();

    }, '650');

    function editHTMLElements(){

        createHTMLElements();

        function createHTMLElements(){

            const mainList = document.createElement('ul');

            const raceItem = document.createElement('li');

            const classItem = document.createElement('li');

            const statsList = document.createElement('ul');

            const spanTextRace = document.createElement('span');

            const spanValueRace = document.createElement('span');

            const spanTextClass = document.createElement('span');

            const spanValueClass = document.createElement('span');

            const weaponsList = document.createElement('ul');

            mainList.className = 'main__list list';

            raceItem.className = 'list__item item race';

            classItem.className = 'list__item item class';

            statsList.className = 'list__stats-list stats-list';

            weaponsList.className = 'list__weapons weapons';

            spanTextRace.className = 'item__text race__text';

            spanValueRace.className = 'item__value race__value';

            spanTextClass.className = 'item__text class__text';

            spanValueClass.className = 'item__value class__value';

            charCreatingScreen.querySelector('.main__header').appendChild(mainList);

            mainList.appendChild(raceItem);

            mainList.appendChild(classItem);

            mainList.appendChild(weaponsList);

            mainList.appendChild(statsList);

            raceItem.appendChild(spanTextRace);

            raceItem.appendChild(spanValueRace);

            classItem.appendChild(spanTextClass);

            classItem.appendChild(spanValueClass);

            spanTextRace.innerText = charOverviewText.language[language].overviewText.raceText;

            spanTextClass.innerText = charOverviewText.language[language].overviewText.classText;

            spanValueRace.innerText = player.mainText.race;

            spanValueClass.innerText = player.mainText.class;

            createStatsItems();

            createWeaponsItems();

            addDataToElements();

            function createStatsItems(){

                for(let i = 0; i < statsListItemCount; i++){

                    const item = document.createElement('li');

                    const img = document.createElement('img');

                    const span = document.createElement('span');

                    item.className = 'list__item stats-list__item';

                    img.className = 'stats-list__img';

                    span.className = 'stats-list__value';

                    statsList.appendChild(item);

                    item.appendChild(img);

                    item.appendChild(span);

                    img.src = images.stats[Object.keys(player.playerStats)[i]];

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

            charCreatingScreen.querySelectorAll('.item__text').forEach((elem, index) =>{

                elem.innerText = Object.values(charOverviewText.language[language].overviewText)[index];

            });

            charCreatingScreen.querySelectorAll('.item__value').forEach((elem, index) =>{

                elem.innerText = Object.values(player.mainText)[index];

            });

            charCreatingScreen.querySelectorAll('.stats-list__value').forEach((elem, index) =>{

                elem.innerText = Object.values(player.playerStats)[index];

                if(Object.values(player.playerStats)[index] === false){

                    elem.innerText = classScreenText.language[language].canAttackTwice.true;

                };

                if(Object.values(player.playerStats)[index] === true){

                    elem.innerText = classScreenText.language[language].canAttackTwice.false;

                }

            });

        };

        document.querySelector('.main__title').innerText = charOverviewText.language[language].mainText.textTitle;

        charCreatingScreen.querySelector('.main__descr').remove();

        charCreatingScreen.querySelectorAll('.footer__button').forEach((elem, index) =>{

            elem.innerText = Object.values(charOverviewText.language[language].mainText.textBtn)[index];

        });

        btnInfoEventListener();

    };

}

/// MAIN---FUNCTIONS---END ///

/// EXPORTS---START ///

export { creatingCharacter };

/// EXPORTS---END ///