
/// IMPORTS---START ///

import { language } from "./chooseLangScreen.js";

import { player } from "../player.js";

import images from "../images.js";

import battleScreenText from "../text/battleScreenText.js";

import battlePopupText from "../text/battle/battlePopupText.js";

import { popupPlayerCalcText } from "../text/battle/popupPlayerCalcText.js";

import enemiesText from "../text/enemies/enemiesText.js";

import {enemiesTraits} from "../enemies/enemiesTraits.js";

import weaponsTraits from "../racesClassesWeapons/weaponsTraits.js";

import {battlePreparation} from "../battle.js";

import { creatingCharacter } from "./charCreatingScreen.js";

import { deletePlayerData, disableButtons, enableButtons, backToDefaultPlayerTraits, returnTextScreenAfterBattle } from "../globalFunctions.js";

import { createInventoryElememts } from "./inventory.js";

import { inventoryItems } from "../inventoryItems.js";

import { castleDonjon, alchemistRoom } from "./location/castleDonjonScreen.js";
import racesTraits from "../racesClassesWeapons/racesTraits.js";
import classesTraits from "../racesClassesWeapons/classesTraits.js";

/// IMPORTS---END ///

/// GLOBAL---VARIABLES---START ///

const arrayTiersEnemiesKey = ['lowTier', 'midTier', 'highTier'];

let functionAfterBattleEnd = '';

let numOfEnemies = 0;

const arrayEnemiesTiersKeyInBattle = [];

const arrayRandomEnemiesKey = [];

const arrayRandomEnemiesValue = [];

/// GLOBAL---VARIABLES---END ///

/// REPEATABLE---FUNCTIONS---START ///

function uniqueImg(itemImg, index){
    
    itemImg.src = images.enemies[arrayRandomEnemiesKey[index]];
    
};

/// REPEATABLE---FUNCTIONS---END ///

/// FUNCTIONS---START ///

function battleScreen(arrayNumberOfEnemies, nextFunction){

    functionAfterBattleEnd = nextFunction;

    for(let i = 0; i < arrayNumberOfEnemies.length; i++){

        numOfEnemies = numOfEnemies + arrayNumberOfEnemies[i];

    };
    
    console.log(numOfEnemies)

    for(let i = 0; i < numOfEnemies - 1; i ++){

        if(arrayNumberOfEnemies[i] != 0){

            for(let j = 0; j < arrayNumberOfEnemies[i]; j++){

                arrayEnemiesTiersKeyInBattle.push(arrayTiersEnemiesKey[i]);

            };

        };

    };

    for(let i = 0; i < arrayEnemiesTiersKeyInBattle.length; i++){

        const arrayEnemiesKey = [];

        const arrayEnemiesValue = Object.values(enemiesTraits[arrayEnemiesTiersKeyInBattle[i]]);
        
        const random = Math.floor(Math.random() * arrayEnemiesValue.length);
        
        for(let key in enemiesTraits[arrayEnemiesTiersKeyInBattle[i]]){
        
            arrayEnemiesKey.push(key);
        
        };
                
        arrayRandomEnemiesValue.push(arrayEnemiesValue[random]);
        
        arrayRandomEnemiesKey.push(arrayEnemiesKey[random]);
        
    };

    createHTMLElements();

};

function createHTMLElements(){

    createInventoryElememts();

    mainElements();

    function mainElements(){

        const screenBattle = document.createElement('section');

        const container = document.createElement('div');
    
        const battleWrapper = document.createElement('div');
    
        const battleMain = document.createElement('div');
        
        const mainWrapper = document.createElement('div');
    
        const mainFirstColumn = document.createElement('div');
    
        const mainSecondColumn = document.createElement('div');
    
        const mainThirdColumn = document.createElement('div');

        screenBattle.className = 'screen__battle screen battle show-screen';
        
        container.className = 'battle__container container';
    
        battleWrapper.className = 'battle__wrapper wrapper';
    
        battleMain.className = 'battle__main screen__main main';
        
        mainWrapper.className = 'main__wrapper wrapper';
    
        mainFirstColumn.className = 'wrapper__column column first-column';
    
        mainSecondColumn.className = 'wrapper__column column second-column';
    
        mainThirdColumn.className = 'wrapper__column column third-column';

        screenBattle.id = 'battle';

        mainFirstColumn.id = 'first-column';
    
        mainSecondColumn.id = 'second-column';
    
        mainThirdColumn.id = 'third-column';

        document.querySelector('body').appendChild(screenBattle);

        screenBattle.appendChild(container);

        container.appendChild(battleWrapper);

        battleWrapper.appendChild(battleMain);

        battleMain.appendChild(mainWrapper);

        mainWrapper.appendChild(mainFirstColumn);

        mainWrapper.appendChild(mainSecondColumn);

        mainWrapper.appendChild(mainThirdColumn);

        firstColumnElements();

        secondColumnElements();

        thirdColumnElements();

    };

    function firstColumnElements(){

        const column = document.querySelector('#battle').querySelector('#first-column');

        for(let i = 0; i < arrayRandomEnemiesKey.length; i++){

            const columnItem = document.createElement('div');

            const itemImgWrapper = document.createElement('div');

            const itemImg = document.createElement('img');

            columnItem.className = 'column__item first-column__item item';

            itemImgWrapper.className = 'item__wrapper-img';

            itemImg.className = 'item__img first-column__img';

            column.appendChild(columnItem);
    
            columnItem.appendChild(itemImgWrapper);

            itemImgWrapper.appendChild(itemImg);

            uniqueImg(itemImg, i);

        };

    };

    function secondColumnElements(){

        const column = document.querySelector('#second-column');

        const columnBtn = document.createElement('button');

        const btnImg = document.createElement('img');

        columnBtn.className = 'second-column__button button';
        
        btnImg.className = 'button__img';

        column.appendChild(columnBtn);
    
        columnBtn.appendChild(btnImg);

        btnImg.src = images.other.startBattle;

        addEventListener(columnBtn);

    };

    function thirdColumnElements(){

        const column = document.querySelector('#third-column');

        const columnItem = document.createElement('div');

        const itemImgWrapper = document.createElement('div');
    
        const columnImg = document.createElement('img');

        columnItem.className = 'column__item third-column__item item';

        itemImgWrapper.className = 'item__wrapper-img';
    
        columnImg.className = 'item__img third-column__img';

        column.appendChild(columnItem);
    
        columnItem.appendChild(itemImgWrapper);

        itemImgWrapper.appendChild(columnImg);

        columnImg.src = player.playerImg;

    };

};

function hideAnimation(columnBtn){

    document.querySelector('#battle').querySelectorAll('.column__item').forEach(elem =>{

        if(elem.classList.contains('first-column__item')){

            elem.classList.add('first-column__item-hide');

        };

        if(elem.classList.contains('third-column__item')){

            elem.classList.add('third-column__item-hide');

        };

    });

    columnBtn.classList.add('second-column__button-hide');

};

function removeElements(){
        
    document.querySelector('#battle').querySelectorAll('.column__item').forEach(elem =>{

        elem.remove();
    
    });

};

function addEventListener(columnBtn){

    columnBtn.addEventListener('click', () =>{

        hideAnimation(columnBtn);

        setTimeout(() => {

            columnBtn.remove();

            removeElements();
    
            battleStart();
            
        }, '2000');

    });

};

function battleStart(){

    firstColumn();

    secondColumn();

    thirdColumn();

    disableButtons();

    setTimeout(() => {

        popupTurn('playerTurnText');

        battlePreparation(arrayRandomEnemiesKey, arrayEnemiesTiersKeyInBattle, functionAfterBattleEnd);
        
    }, '3500');

    function firstColumn(){

        createFirstColumnElements();

        addDataToElements();

        setTimeout(() => {
                
            showEnemiesElements();

        }, '500');

        function createFirstColumnElements(){
    
            const columnEnemies = document.querySelector('#battle').querySelector('#first-column');
    
            const swiperWrapper = document.createElement('div');
    
            columnEnemies.classList.add('swiper');
    
            columnEnemies.classList.add('wrapper__first-column-battle-start');
    
            swiperWrapper.className = 'swiper-wrapper';
    
            columnEnemies.appendChild(swiperWrapper);
    
            for(let i = 0; i < numOfEnemies; i++){

                const arrayEnemyStats = Object.values(enemiesTraits[arrayEnemiesTiersKeyInBattle[i]][arrayRandomEnemiesKey[i]]);
    
                const itemEnemies = document.createElement('div');
        
                const wrapperImgEnemies = document.createElement('div');
        
                const imgEnemies = document.createElement('img');
    
                const titleEnemies = document.createElement('h3');
    
                const statsEnemiesList = document.createElement('ul');

                const enemiesButtons = document.createElement('div');

                if(i === 0){

                    const buttonNext = document.createElement('button');
    
                    const buttonNextImg = document.createElement('img');

                    buttonNext.className = 'buttons__next button item__btn slide__next';

                    buttonNextImg.className = 'button__img button__img-next';

                    buttonNextImg.src = images.other.arrow;

                    enemiesButtons.appendChild(buttonNext);

                    buttonNext.appendChild(buttonNextImg);

                } else if(i === 2){

                    const buttonPrev = document.createElement('button');

                    const buttonPrevImg = document.createElement('img');

                    buttonPrev.className = 'buttons__prev button item__btn slide__prev';

                    buttonPrevImg.className = 'button__img button__img-prev';

                    buttonPrevImg.src = images.other.arrow;

                    enemiesButtons.appendChild(buttonPrev);

                    buttonPrev.appendChild(buttonPrevImg);


                } else{

                    const buttonPrev = document.createElement('button');

                    const buttonPrevImg = document.createElement('img');
    
                    const buttonNext = document.createElement('button');
    
                    const buttonNextImg = document.createElement('img');

                    buttonPrev.className = 'buttons__prev button item__btn slide__prev';

                    buttonNext.className = 'buttons__next button item__btn slide__next';
    
                    buttonPrevImg.className = 'button__img button__img-prev';
    
                    buttonNextImg.className = 'button__img button__img-next';

                    buttonPrevImg.src = images.other.arrow;

                    buttonNextImg.src = images.other.arrow;

                    enemiesButtons.appendChild(buttonPrev);

                    enemiesButtons.appendChild(buttonNext);
    
                    buttonPrev.appendChild(buttonPrevImg);
    
                    buttonNext.appendChild(buttonNextImg);

                };
    
                for(let j = 0; j < arrayEnemyStats.length; j++){
    
                    const listItem = document.createElement('li');
                    
                    const itemImg = document.createElement('img');
    
                    const itemSpan = document.createElement('span');
    
                    listItem.className = 'list__item-battle-start list-item';
    
                    itemImg.className = 'list-item__img-battle-start';
    
                    itemSpan.className = 'list-item__span-battle-start';
    
                    statsEnemiesList.appendChild(listItem);
    
                    listItem.appendChild(itemImg);
    
                    listItem.appendChild(itemSpan);
    
                };
        
                itemEnemies.className = 'column__item column__item-battle-start first-column__item-battle-start item swiper-slide';
        
                wrapperImgEnemies.className = 'item__wrapper-img item__wrapper-img-battle-start';
        
                imgEnemies.className = 'item__img item__img-battle-start first-column__img';
    
                titleEnemies.className = 'item__title-battle-start title';
    
                statsEnemiesList.className = 'item__list-battle-start list';

                enemiesButtons.className = 'item__buttons-battle-start buttons';
            
                swiperWrapper.appendChild(itemEnemies);
            
                itemEnemies.appendChild(wrapperImgEnemies);
    
                wrapperImgEnemies.appendChild(imgEnemies);
    
                itemEnemies.appendChild(titleEnemies);
    
                itemEnemies.appendChild(statsEnemiesList);

                itemEnemies.appendChild(enemiesButtons);
        
            };
    
        };

        function addDataToElements(){

            for(let i = 0; i < document.querySelector('#battle').querySelector('#first-column').querySelectorAll('.item').length; i++){

                const arrayEnemyStats = Object.values(enemiesTraits[arrayEnemiesTiersKeyInBattle[i]][arrayRandomEnemiesKey[i]]);

                document.querySelector('#battle').querySelector('#first-column').querySelectorAll('.item')[i].querySelector('.title').innerText = enemiesText.language[language][arrayRandomEnemiesKey[i]];

                uniqueImg(document.querySelector('#battle').querySelector('#first-column').querySelectorAll('.item')[i].querySelector('.first-column__img'), i);

                for(let j = 0; j < document.querySelector('#battle').querySelector('#first-column').querySelectorAll('.item')[i].querySelectorAll('.list-item').length; j++){

                    document.querySelector('#battle').querySelector('#first-column').querySelectorAll('.item')[i].querySelectorAll('.list-item')[j].querySelector('.list-item__img-battle-start').src = Object.values(images.traits)[j];
    
                    document.querySelector('#battle').querySelector('#first-column').querySelectorAll('.item')[i].querySelectorAll('.list-item')[j].querySelector('.list-item__span-battle-start').innerText = arrayEnemyStats[j];

                };


            };

        };
    
        function showEnemiesElements(){
    
            document.querySelector('#battle').querySelector('#first-column').classList.add('wrapper__column-show-first-column');
    
        };

    };

    function secondColumn(){

        createSecondColumnElements(); 

        addDataToElements();

        buttonCheck();

        setTimeout(() => {
                
            showBattleBtnsElements();

        }, '500');

        function createSecondColumnElements(){

            const columnStartBattle = document.querySelector('#battle').querySelector('#second-column');

            const columnWrapper = document.createElement('div');

            const btnsWrapper = document.createElement('div');

            const messageDiv = document.createElement('div');

            const firstWeaponBtn = document.createElement('button');

            const secondWeaponBtn = document.createElement('button');
    
            const healingPotionBtn = document.createElement('button');

            const healingPotionCounter = document.createElement('div');

            columnWrapper.className = 'second-column__wrapper wrapper'

            btnsWrapper.className = 'wrapper__wrapper-btns wrapper-btns';

            messageDiv.className = 'wrapper__message';

            columnStartBattle.classList.add('wrapper__second-column-battle-start');

            firstWeaponBtn.className = 'wrapper-btns__btn first-weapon-button button';

            secondWeaponBtn.className = 'wrapper-btns__btn second-weapon-button button';
                
            healingPotionBtn.className = 'wrapper-btns__btn healing-potion-button button';

            healingPotionCounter.className = 'healing-potion-button__counter counter';

            firstWeaponBtn.id = 'first-weapon-btn';

            secondWeaponBtn.id = 'second-weapon-btn';
                
            healingPotionBtn.id = 'healing-potion-btn';

            columnStartBattle.appendChild(columnWrapper);

            columnWrapper.appendChild(btnsWrapper);

            columnWrapper.appendChild(messageDiv);

            btnsWrapper.appendChild(firstWeaponBtn);

            btnsWrapper.appendChild(secondWeaponBtn);

            btnsWrapper.appendChild(healingPotionBtn);

            healingPotionBtn.appendChild(healingPotionCounter);
            
            columnStartBattle.querySelectorAll('.wrapper-btns__btn').forEach(elem =>{

                const btnImg = document.createElement('img');

                elem.appendChild(btnImg);

                btnImg.className = 'button__img';

            });

        };

        function addDataToElements(){

            document.querySelector('#battle').querySelector('#second-column').querySelector('#first-weapon-btn').querySelector('.button__img').src = images.battle.playerWeaponsBtns[player.playerKey.weaponsTypeKeys.firstWeapon];

            document.querySelector('#battle').querySelector('#second-column').querySelector('#second-weapon-btn').querySelector('.button__img').src = images.battle.playerWeaponsBtns[player.playerKey.weaponsTypeKeys.secondWeapon];

            document.querySelector('#battle').querySelector('#second-column').querySelector('#healing-potion-btn').querySelector('.button__img').src = images.battle.healingPotionBtn;

            document.querySelector('#battle').querySelector('#second-column').querySelector('#healing-potion-btn').querySelector('.counter').innerText = inventoryItems.healingPotion;

        };

        function buttonCheck(){

            if(player.playerKey.weaponKeys.secondWeapon === null || player.playerKey.weaponsTypeKeys.secondWeapon === null){

                document.querySelector('#battle').querySelector('#second-column').querySelector('#second-weapon-btn').remove();

            };

        };

        function showBattleBtnsElements(){
    
            document.querySelector('#battle').querySelector('#second-column').classList.add('wrapper__column-show-second-column');
    
        };

    };

    function thirdColumn(){

        playerDefenceAndArmourCalculation();

        const arrayPlayerTraits = Object.values(player.playerTraits);

        const arrayPlayerTraitsKeys = Object.keys(player.playerTraits);

        createThirdColumnElements();

        imgCheck();

        addDataToElements();

        playerInfoBtnEventListener();

        setTimeout(() => {
                
            showPlayerElements();

        }, '500');

        function playerDefenceAndArmourCalculation(){

            const playerRaceKey = player.playerKey.race;
        
            isFirstWeaponShield();
        
            function isFirstWeaponShield(){
        
                const firstWeaponTypeKey = player.playerKey.weaponsTypeKeys.firstWeapon;
        
                const firstWeaponKey = player.playerKey.weaponKeys.firstWeapon;
        
                const isShield = weaponsTraits[playerRaceKey][firstWeaponTypeKey][firstWeaponKey].isShield;
        
                isSecondtWeaponEmpty(isShield);
                        
            };
        
            function isSecondtWeaponEmpty(isShield){
        
                if(Object.keys(player.weaponTraits.secondWeapon).length === 0){
    
                    console.log('Second weapon is empty.')
        
                    player.playerTraits.defencePoints = player.playerTraits.defencePoints + player.weaponTraits.firstWeapon.defencePoints;
        
                };
        
                if(Object.keys(player.weaponTraits.secondWeapon).length > 0 && isShield === true){
    
                    console.log('First weapon is a shield.')
    
                    player.playerTraits.armourPoints = player.playerTraits.armourPoints + player.weaponTraits.firstWeapon.armourPoints;
        
                    player.playerTraits.defencePoints = player.playerTraits.defencePoints + player.weaponTraits.firstWeapon.defencePoints + player.weaponTraits.secondWeapon.defencePoints;
            
                };
    
                if(Object.keys(player.weaponTraits.secondWeapon).length > 0 && isShield === false){
    
                    console.log('First weapon isn`t a shield.')
        
                    isSecondWeaponShield();
            
                };
        
            };
        
            function isSecondWeaponShield(){
        
                const secondWeaponTypeKey = player.playerKey.weaponsTypeKeys.secondWeapon;
        
                const secondWeaponKey = player.playerKey.weaponKeys.secondWeapon;
        
                const isShield = weaponsTraits[playerRaceKey][secondWeaponTypeKey][secondWeaponKey].isShield;
        
                if(isShield === true){
    
                    console.log('Second weapon is a shield.')
        
                    player.playerTraits.armourPoints = player.playerTraits.armourPoints + player.weaponTraits.secondWeapon.armourPoints;
        
                    player.playerTraits.defencePoints = player.playerTraits.defencePoints + player.weaponTraits.firstWeapon.defencePoints + player.weaponTraits.secondWeapon.defencePoints;
        
                };
        
                if(isShield === false){
    
                    console.log('First and second weapons aren`t shields.')
        
                    player.playerTraits.defencePoints = player.playerTraits.defencePoints + player.weaponTraits.secondWeapon.defencePoints + player.weaponTraits.firstWeapon.defencePoints;
        
                };
        
            };
        
        };

        function createThirdColumnElements(){
    
            const columnPlayer = document.querySelector('#battle').querySelector('#third-column');
                        
            const itemPlayer = document.createElement('div');
        
            const wrapperImgPlayer = document.createElement('div');
        
            const imgPlayer = document.createElement('img');
    
            const titlePlayer = document.createElement('h3');
    
            const statsPlayerList = document.createElement('ul');

            const buttonPlayerInfo = document.createElement('button');

            const buttonPlayerInfoImg = document.createElement('img');

            itemPlayer.className = 'column__item column__item-battle-start third-column__item-battle-start item';
        
            wrapperImgPlayer.className = 'item__wrapper-img item__wrapper-img-battle-start';
        
            imgPlayer.className = 'item__img item__img-battle-start third-column__img';
    
            titlePlayer.className = 'item__title-battle-start title';
    
            statsPlayerList.className = 'item__list-battle-start list';

            buttonPlayerInfo.className = 'item__btn-info-player btn-info-player btn-info';

            buttonPlayerInfoImg.className = 'btn-info-player__img btn-info__img';

            buttonPlayerInfoImg.src = images.other.btnInfoImg;

            columnPlayer.classList.add('wrapper__third-column-battle-start');
                
            for(let i = 0; i < arrayPlayerTraits.length; i++){
    
                const listItem = document.createElement('li');
                    
                const itemImg = document.createElement('img');
    
                const itemSpan = document.createElement('span');
    
                listItem.className = 'list__item-battle-start list-item';
    
                itemImg.className = 'list-item__img-battle-start';
    
                itemSpan.className = 'list-item__span-battle-start';
    
                statsPlayerList.appendChild(listItem);
    
                listItem.appendChild(itemImg);
    
                listItem.appendChild(itemSpan);
    
            };
            
            columnPlayer.appendChild(itemPlayer);
    
            itemPlayer.appendChild(wrapperImgPlayer);
    
            wrapperImgPlayer.appendChild(imgPlayer);

            itemPlayer.appendChild(buttonPlayerInfo);

            buttonPlayerInfo.appendChild(buttonPlayerInfoImg);
    
            itemPlayer.appendChild(titlePlayer);
    
            itemPlayer.appendChild(statsPlayerList);
        
        };

        function imgCheck(){

            if(player.playerKey.raceKey != 'dwarf'){
    
                document.querySelector('#battle').querySelector('#third-column').querySelector('.third-column__img').classList.add('img-top');
        
            };

        };

        function addDataToElements(){

            document.querySelector('#battle').querySelector('#third-column').querySelector('.title').innerText = battleScreenText.language[language].textTitle;

            document.querySelector('#battle').querySelector('#third-column').querySelector('.third-column__img').src = images.player[player.playerKey.race];

            for(let i = 0; i < document.querySelector('#battle').querySelector('#third-column').querySelectorAll('.list-item').length; i++){
    
                document.querySelector('#battle').querySelector('#third-column').querySelectorAll('.list-item')[i].querySelector('.list-item__img-battle-start').src = images.traits[arrayPlayerTraitsKeys[i]];
    
                document.querySelector('#battle').querySelector('#third-column').querySelectorAll('.list-item')[i].querySelector('.list-item__span-battle-start').innerText = arrayPlayerTraits[i];
    
            };
            
        }; 
        
        function showPlayerElements(){
    
            document.querySelector('#battle').querySelector('#third-column').classList.add('wrapper__column-show-third-column');
    
        };

        function playerInfoBtnEventListener(){

            document.querySelector('.item__btn-info-player').addEventListener('click', () => {

                disableButtons();

                popupPlayerCalc();

            });

        };

        function popupPlayerCalc(){

            const popupScreen = document.createElement('div');

            const popupWrapper = document.createElement('div');
        
            const popupContent = document.createElement('div');
        
            const closeBtnPopup = document.createElement('div');
                        
            popupScreen.className = 'popup-player-weapon show-popup';
        
            popupWrapper.className = 'popup-player-weapon__wrapper';
        
            popupContent.className = 'popup-player-weapon__content content';
        
            closeBtnPopup.className = 'popup-player-weapon__close-btn';
                        
            popupScreen.id = 'popup-player-weapon';
        
            closeBtnPopup.id = 'close-btn';
        
            document.querySelector('body').appendChild(popupScreen);
        
            popupScreen.appendChild(popupWrapper);
        
            popupWrapper.appendChild(popupContent);
        
            popupContent.appendChild(closeBtnPopup);
        
            createGridElements();

            function createGridElements(){

                let indexRow = 1;

                let indexColumn = 1;

                const countOfElem = Object.values(popupPlayerCalcText.language[language]).length * (Object.keys(popupPlayerCalcText.imagesColumn).length + 1);

                for(let i = 0; i < countOfElem; i++){

                    const contentItem = document.createElement('div');

                    contentItem.className = `content__item item`;

                    popupContent.appendChild(contentItem);

                };

                for(let i = 0; i < document.querySelector('#popup-player-weapon').querySelectorAll('.content__item').length; i++){

                    document.querySelector('#popup-player-weapon').querySelectorAll('.content__item')[i].classList.add(`column-${indexColumn}`);

                    document.querySelector('#popup-player-weapon').querySelectorAll('.content__item')[i].classList.add(`row-${indexRow}`);

                    indexColumn++;

                    if((i + 1) % 7 === 0){

                        indexRow++;

                        indexColumn = 1;

                    };

                };

                addImgToFirstColumnItems();

                addDataToPlayerCalc();

                function addImgToFirstColumnItems(){

                    const arrayImgSrc = Object.values(popupPlayerCalcText.imagesColumn);

                    const arrayFirstColumnItems = document.querySelector('#popup-player-weapon').querySelectorAll('.column-1');

                    for(let i = 1; i < arrayFirstColumnItems.length; i++){

                        const itemWrapperImg = document.createElement('div');

                        const itemImg = document.createElement('img');

                        itemWrapperImg.className = 'item__wrapper-img';

                        itemImg.className = 'item__img img';

                        document.querySelector('#popup-player-weapon').querySelectorAll('.column-1')[i].appendChild(itemWrapperImg);

                        itemWrapperImg.appendChild(itemImg);

                        itemImg.src = arrayImgSrc[i - 1];

                    };

                };

                function addDataToPlayerCalc(){

                    const playerRaceKey = player.playerKey.race;

                    const playerClassKey = player.playerKey.class;

                    firstColumnData();

                    secondColumnData();

                    thirdColumnData();

                    fourthColumnData();

                    fifthColumnData();

                    sixthColumnData();

                    seventhColumnData();

                    function firstColumnData(){

                        const arrayPopupText = Object.values(popupPlayerCalcText.language[language]);

                        for(let i = 0; i < document.querySelector('#popup-player-weapon').querySelectorAll('.row-1').length; i++){

                            document.querySelector('#popup-player-weapon').querySelectorAll('.row-1')[i].innerText = arrayPopupText[i];

                        };

                    };

                    function secondColumnData(){

                        const arrayRaceStats = Object.values(racesTraits[playerRaceKey]);

                        for(let i = 1; i < document.querySelector('#popup-player-weapon').querySelectorAll('.column-2').length; i++){

                            document.querySelector('#popup-player-weapon').querySelectorAll('.column-2')[i].innerText = arrayRaceStats[i - 1];

                        };

                    };

                    function thirdColumnData(){

                        const arrayClassStats = Object.values(classesTraits[playerRaceKey][playerClassKey].traits);

                        const classAttackPoints = arrayClassStats[2];

                        arrayClassStats.splice(3, 0, classAttackPoints);

                        for(let i = 1; i < document.querySelector('#popup-player-weapon').querySelectorAll('.column-3').length; i++){

                            document.querySelector('#popup-player-weapon').querySelectorAll('.column-3')[i].innerText = arrayClassStats[i - 1];

                        };

                    };

                    function fourthColumnData(){

                        const arrayFirstWeaponStats = Object.values(player.weaponTraits.firstWeapon);

                        for(let i = 1; i < document.querySelector('#popup-player-weapon').querySelectorAll('.column-4').length; i++){

                            document.querySelector('#popup-player-weapon').querySelectorAll('.column-4')[i].innerText = arrayFirstWeaponStats[i - 1];

                        };

                    };

                    function fifthColumnData(){

                        const arraySecondWeaponStats = Object.values(player.weaponTraits.secondWeapon);

                        for(let i = 1; i < document.querySelector('#popup-player-weapon').querySelectorAll('.column-5').length; i++){

                            if(arraySecondWeaponStats.length === 0){

                                document.querySelector('#popup-player-weapon').querySelectorAll('.column-5')[i].innerText = '-';

                            }else{

                                document.querySelector('#popup-player-weapon').querySelectorAll('.column-5')[i].innerText = arraySecondWeaponStats[i - 1];

                            };

                        };

                    };

                    function sixthColumnData(){

                        for(let i = 2; i < document.querySelector('#popup-player-weapon').querySelectorAll('.column-6').length + 1; i++){

                            let totalValue = 0;
                            
                            const arrayValuesForCalc = [];

                            for(let j = 1; j < document.querySelector('#popup-player-weapon').querySelectorAll(`.row-${i}`).length; j++){

                                if(document.querySelector('#popup-player-weapon').querySelectorAll(`.row-${i}`)[j].innerText === '-' || document.querySelector('#popup-player-weapon').querySelectorAll(`.row-${i}`)[j].classList.contains('column-5') === true || document.querySelector('#popup-player-weapon').querySelectorAll(`.row-${i}`)[j].classList.contains('column-6') === true || document.querySelector('#popup-player-weapon').querySelectorAll(`.row-${i}`)[j].classList.contains('column-7') === true){

                                    continue;

                                }else{

                                    let value = parseInt(document.querySelector('#popup-player-weapon').querySelectorAll(`.row-${i}`)[j].innerText);
    
                                    arrayValuesForCalc.push(value);

                                }

                            };

                            for(let k = 0; k < arrayValuesForCalc.length; k++){

                                totalValue = totalValue + arrayValuesForCalc[k];

                            };

                            document.querySelector('#popup-player-weapon').querySelectorAll('.column-6')[i - 1].innerText = totalValue;

                        };

                    };

                    function seventhColumnData(){

                        const arraySecondWeaponStats = Object.values(player.weaponTraits.secondWeapon);

                        for(let i = 2; i < document.querySelector('#popup-player-weapon').querySelectorAll('.column-7').length + 1; i++){

                            if(arraySecondWeaponStats.length === 0){

                                document.querySelector('#popup-player-weapon').querySelectorAll('.column-7')[i - 1].innerText = '-';
                            
                            }else{

                                let totalValue = 0;
                            
                                const arrayValuesForCalc = [];
    
                                for(let j = 1; j < document.querySelector('#popup-player-weapon').querySelectorAll(`.row-${i}`).length; j++){
    
                                    if(document.querySelector('#popup-player-weapon').querySelectorAll(`.row-${i}`)[j].innerText === '-' || document.querySelector('#popup-player-weapon').querySelectorAll(`.row-${i}`)[j].classList.contains('column-4') === true || document.querySelector('#popup-player-weapon').querySelectorAll(`.row-${i}`)[j].classList.contains('column-6') === true || document.querySelector('#popup-player-weapon').querySelectorAll(`.row-${i}`)[j].classList.contains('column-7') === true){
    
                                        continue;
    
                                    }else{
    
                                        let value = parseInt(document.querySelector('#popup-player-weapon').querySelectorAll(`.row-${i}`)[j].innerText);
        
                                        arrayValuesForCalc.push(value);
    
                                    }
    
                                };
    
                                for(let k = 0; k < arrayValuesForCalc.length; k++){
    
                                    totalValue = totalValue + arrayValuesForCalc[k];
    
                                };
    
                                document.querySelector('#popup-player-weapon').querySelectorAll('.column-7')[i - 1].innerText = totalValue;

                            };

                        };

                    };

                };

            };

            closePopup();

            function closePopup(){

                document.querySelector('#popup-player-weapon').querySelector('#close-btn').addEventListener('click', () =>{
            
                    document.querySelector('#popup-player-weapon').classList.remove('show-popup');
            
                    document.querySelector('#popup-player-weapon').classList.add('hide-popup');
            
                    setTimeout(() => {
            
                        enableButtons();
            
                        document.querySelector('#popup-player-weapon').remove();
                        
                    }, '650');
            
                });
            
            };

        };

    };

    new Swiper('#first-column', {

        navigation:{

            nextEl:'.slide__next',

            prevEl:'.slide__prev'

        },

        spaceBetween: 40,

        simulateTouch: false

    });

};

function popupTurn(textTurn){

    const popup = document.createElement('div');

    const popupWrapper = document.createElement('div');

    const popupTitle = document.createElement('h3');

    popup.className = 'popup-change-turn show-popup';

    popupWrapper.className = 'popup-change-turn__wrapper';

    popupTitle.className = 'popup-change-turn__title title';

    document.querySelector('body').appendChild(popup);

    popup.appendChild(popupWrapper);

    popupWrapper.appendChild(popupTitle);

    popupTitle.innerText = battlePopupText.language[language].turnChange[textTurn];

    setTimeout(() => {
        
        popup.classList.add('hide-popup');

        setTimeout(() => {

            popup.remove();
            
        }, '1000');

    }, '1500');

};

function popupBattle(textTurn, enemyIndex, playerAction){

    const popup = document.createElement('div');

    const popupWrapper = document.createElement('div');

    const popupTitle = document.createElement('h3');

    const popupBattleWrapper = document.createElement('div');

    popup.className = 'popup-battle show-popup';

    popupWrapper.className = 'popup-battle__wrapper';

    popupTitle.className = 'popup-battle__title title';

    popupBattleWrapper.className = 'popup-battle__wrapper-cards';

    document.querySelector('body').appendChild(popup);

    popup.appendChild(popupWrapper);

    popupWrapper.appendChild(popupTitle);

    popupWrapper.appendChild(popupBattleWrapper);

    popupTitle.innerText = battlePopupText.language[language].turnChange[textTurn];

    if(playerAction === null || playerAction === 'attack'){

        firstColumnElements(playerAction);

        secondColumnElements();

        thirdColumnElements();

    }else if(playerAction === 'healing' || playerAction === 'defence'){

        firstColumnElements(playerAction);

        secondColumnElements();

        thirdColumnElements();
        
    };

    function firstColumnElements(playerAction){

        console.log(enemyIndex);

        console.log(document.querySelectorAll('.first-column__item-battle-start')[enemyIndex]);

        const firstColumn = document.createElement('div');

        firstColumn.className = 'wrapper__column column first-column';

        popupBattleWrapper.appendChild(firstColumn);

        if(playerAction === 'attack' || playerAction === null){

            const enemyDOMClone = document.querySelectorAll('.first-column__item-battle-start')[enemyIndex].cloneNode(true);
    
            firstColumn.appendChild(enemyDOMClone);
    
            popupBattleWrapper.querySelector('.buttons').remove();
    
            popupBattleWrapper.querySelector('.column__item').classList.remove('rotation-y');
    
            popupBattleWrapper.querySelector('.column__item').classList.remove('swiper-slide-active');
    
            popupBattleWrapper.querySelector('.column__item').classList.remove('swiper-slide');
    
            popupBattleWrapper.querySelector('.column__item').style.removeProperty('width');
    
            popupBattleWrapper.querySelector('.column__item').style.removeProperty('margin-right');
    
            if(popupBattleWrapper.querySelector('.column__item').classList.contains('swiper-slide-next') === true || popupBattleWrapper.querySelector('.column__item').classList.contains('swiper-slide-prev') === true);
            
        };

    };

    function secondColumnElements(){

        const secondColumn = document.createElement('div');

        const enemyBattleColumn = document.createElement('div');

        const resultBattleColumn = document.createElement('div');

        const playerBattleColumn = document.createElement('div');

        secondColumn.className = 'wrapper__column column second-column';

        enemyBattleColumn.className = 'second-column__column enemy-column';

        resultBattleColumn.className = 'second-column__column result-column';

        playerBattleColumn.className = 'second-column__column player-column';

        popupBattleWrapper.appendChild(secondColumn);

        secondColumn.appendChild(enemyBattleColumn);

        secondColumn.appendChild(resultBattleColumn);

        secondColumn.appendChild(playerBattleColumn);

        secondColumn.querySelectorAll('.second-column__column').forEach(elem =>{

            const traitValue = document.createElement('span');

            const traitImg = document.createElement('img');

            traitValue.className = 'second-column__trait-value trait-value';

            traitImg.className = 'second-column__trait-img trait-img';

            elem.appendChild(traitImg);

            elem.appendChild(traitValue);

        });

    };

    function thirdColumnElements(){

        const thirdColumn = document.createElement('div');

        thirdColumn.className = 'wrapper__column column third-column';

        const playerDOMClone = document.querySelector('.third-column__item-battle-start').cloneNode(true);

        popupBattleWrapper.appendChild(thirdColumn);

        thirdColumn.appendChild(playerDOMClone);

        popupBattleWrapper.querySelector('.btn-info-player').remove();

    };

    setTimeout(() => {
        
        popup.classList.add('hide-popup-battle');

        setTimeout(() => {

            popup.remove();
            
        }, '1000');

    }, '3000');

};

function popupDeadPlayer(){

    const popup = document.createElement('div');

    const popupWrapper = document.createElement('div');

    const popupTitle = document.createElement('h3');

    const popupButtonWrapper = document.createElement('div');

    const popupButtonNewChar = document.createElement('button');

    const popupButtonRestart = document.createElement('button');

    popup.className = 'popup-dead-player show-popup';

    popupWrapper.className = 'popup-dead-player__wrapper';

    popupTitle.className = 'popup-dead-player__title title';

    popupButtonWrapper.className = 'popup-dead-player__wrapper-button'

    popupButtonNewChar.className = 'popup-dead-player__button button';

    popupButtonRestart.className = 'popup-dead-player__button button';

    document.querySelector('body').appendChild(popup);

    popup.appendChild(popupWrapper);

    popupWrapper.appendChild(popupTitle);

    popupWrapper.appendChild(popupButtonWrapper);

    popupButtonWrapper.appendChild(popupButtonNewChar);

    popupButtonWrapper.appendChild(popupButtonRestart);

    popupTitle.innerText = battlePopupText.language[language].playerDead.textTitle;

    popupButtonNewChar.innerText = battlePopupText.language[language].playerDead.textButtonSecond;

    popupButtonRestart.innerText = battlePopupText.language[language].playerDead.textButtonFirst;

    popupButtonNewChar.addEventListener('click', () =>{

        popup.classList.remove('show-popup');

        popup.classList.add('hide-popup');

        document.querySelector('#battle').classList.remove('show-screen');

        document.querySelector('#battle').classList.add('hide-screen');

        setTimeout(() => {

            popup.remove();

            document.querySelector('#battle').remove();

            deletePlayerData();
            
            creatingCharacter(language);

        }, '2000');

    });

    popupButtonRestart.addEventListener('click', () =>{

        backToDefaultPlayerTraits();
        
        popup.classList.remove('show-popup');

        popup.classList.add('hide-popup');

        document.querySelector('#battle').classList.remove('show-screen');

        document.querySelector('#battle').classList.add('hide-screen');

        setTimeout(() => {

            popup.remove();

            document.querySelector('#battle').remove();
            
            createHTMLElements();

        }, '2000');

    });

};

function popupVictory(nextFunction){

    const popup = document.createElement('div');

    const popupWrapper = document.createElement('div');

    const popupTitle = document.createElement('h3');

    const popupButtonWrapper = document.createElement('div');

    const popupButtonOk = document.createElement('button');

    popup.className = 'popup-victory show-popup';

    popupWrapper.className = 'popup-victory__wrapper';

    popupTitle.className = 'popup-victory__title title';

    popupButtonWrapper.className = 'popup-victory__wrapper-button'

    popupButtonOk.className = 'popup-victory__button button';

    document.querySelector('body').appendChild(popup);

    popup.appendChild(popupWrapper);

    popupWrapper.appendChild(popupTitle);

    popupWrapper.appendChild(popupButtonWrapper);

    popupButtonWrapper.appendChild(popupButtonOk);

    popupTitle.innerText = battlePopupText.language[language].playerVictory.textTitle;

    popupButtonOk.innerText = battlePopupText.language[language].playerVictory.textButton;

    popupButtonOk.addEventListener('click', () =>{

        backToDefaultPlayerTraits();
        
        popup.classList.remove('show-popup');

        popup.classList.add('hide-popup');

        document.querySelector('#battle').classList.remove('show-screen');

        document.querySelector('#battle').classList.add('hide-screen');

        setTimeout(() => {

            returnTextScreenAfterBattle();
            
            if(nextFunction === 'alchemistRoom'){

                alchemistRoom();

            };

            if(nextFunction === 'castleDonjon'){

                castleDonjon();

            };

        }, '2000');

    });

};

function popupDeadEnemy(){

    document.querySelector('#battle').querySelector('#second-column').querySelector('.wrapper__message').innerText = 'This enemy is already dead. PLease, choose another enemy to attack.';

    document.querySelector('#battle').querySelector('#second-column').querySelector('.wrapper__message').classList.add('wrapper__message-text');

};

function popupNotEnoughHealing(){

    document.querySelector('#battle').querySelector('#second-column').querySelector('.wrapper__message').innerText = 'You have not enough healing potions.';

    document.querySelector('#battle').querySelector('#second-column').querySelector('.wrapper__message').classList.add('wrapper__message-text');

};

function defaultBattleTable(){

    document.querySelector('#battle').querySelector('#second-column').querySelector('.wrapper__message').innerText = '';

};

function deadEnemyChangeItem(){

    const overlayWrapper = document.createElement('div');

    const overlayImg = document.createElement('img');

    overlayWrapper.className = 'overlay__wrapper';

    overlayImg.className = 'overlay__img';

    document.querySelector('.swiper-slide-active').appendChild(overlayWrapper);

    overlayWrapper.appendChild(overlayImg);

    overlayImg.src = images.other.dead;

    document.querySelector('.swiper-slide-active').classList.add('column__item-dead-enemy');

    document.querySelector('.swiper-slide-active').querySelector('.item__wrapper-img').remove();

    document.querySelector('.swiper-slide-active').querySelector('.title').remove();

    document.querySelector('.swiper-slide-active').querySelector('.list').remove();

};

/// FUNCTIONS---END ///

export { popupTurn };

export { popupBattle };

export { battleScreen };

export { popupDeadPlayer };

export { popupVictory };

export { popupDeadEnemy };

export { popupNotEnoughHealing };

export { defaultBattleTable };

export { deadEnemyChangeItem };