
/// IMPORTS---START ///

import player from "../player.js";

import images from "../images.js";

import battleScreenText from "../text/battleScreenText.js";

import battlePopupText from "../text/battle/battlePopupText.js";

import enemiesText from "../text/enemies/enemiesText.js";

import enemiesTraits from "../enemies/enemiesTraits.js";

import weaponsTraits from "../racesClassesWeapons/weaponsTraits.js";

import weaponsScreenText from "../text/creatingChar/weaponsScreenText.js";

import battle from "../battle.js";

/// IMPORTS---END ///

/// GLOBAL---VARIABLES---START ///

let language = null;

let enemyTier = null;

let numOfEnemies = null;

const arrayRandomEnemiesKey = [];

const arrayRandomEnemiesValue = [];

/// GLOBAL---VARIABLES---END ///

/// REPEATABLE---FUNCTIONS---START ///

function uniqueImg(itemImg, index){
    
    itemImg.src = images.enemies[enemyTier][arrayRandomEnemiesKey[index]];
    
};

/// REPEATABLE---FUNCTIONS---END ///

/// FUNCTIONS---START ///

function battleScreen(choosedLang, tier, number){

    language = choosedLang;

    enemyTier = tier;

    numOfEnemies = number;

    const arrayEnemiesValue = Object.values(enemiesText.language[language].enemyTier[enemyTier]);

    const arrayEnemiesKey = [];

    randomEnemies();

    function randomEnemies(){

        for(let key in enemiesTraits[enemyTier]){

            arrayEnemiesKey.push(key);

        };

        for(let i = 0; i < numOfEnemies; i++){

            const random = Math.floor(Math.random() * arrayEnemiesValue.length);

            arrayRandomEnemiesValue.push(arrayEnemiesValue[random]);

            arrayRandomEnemiesKey.push(arrayEnemiesKey[random]);

        };

    };

    createHTMLElements();

};

function createHTMLElements(){

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

        elem.classList.add('column__elem-hide');

    });

    columnBtn.classList.add('column__elem-hide');

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
            
        }, '450');

    });

};

function battleStart(){

    firstColumn();

    secondColumn();

    thirdColumn();

    setTimeout(() => {

        popupTurn('playerTurnText');
        
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

                const arrayEnemyStats = Object.values(enemiesTraits[enemyTier][arrayRandomEnemiesKey[i]]);
    
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

                const arrayEnemyStats = Object.values(enemiesTraits[enemyTier][arrayRandomEnemiesKey[i]]);

                document.querySelector('#battle').querySelector('#first-column').querySelectorAll('.item')[i].querySelector('.title').innerText = enemiesText.language[language].enemyTier[enemyTier][arrayRandomEnemiesKey[i]].textTitle;

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

            const btnsWrapper = document.createElement('div');

            const firstWeaponBtn = document.createElement('button');

            const secondWeaponBtn = document.createElement('button');
    
            const healingPotionBtn = document.createElement('button');

            btnsWrapper.className = 'second-column__wrapper wrapper';

            columnStartBattle.classList.add('wrapper__second-column-battle-start');

            firstWeaponBtn.className = 'wrapper__btn button';

            secondWeaponBtn.className = 'wrapper__btn button';
                
            healingPotionBtn.className = 'wrapper__btn button';

            firstWeaponBtn.id = 'first-weapon-btn';

            secondWeaponBtn.id = 'second-weapon-btn';
                
            healingPotionBtn.id = 'healing-potion-btn';

            columnStartBattle.appendChild(btnsWrapper);

            btnsWrapper.appendChild(firstWeaponBtn);

            btnsWrapper.appendChild(secondWeaponBtn);

            btnsWrapper.appendChild(healingPotionBtn);

            columnStartBattle.querySelectorAll('.wrapper__btn').forEach(elem =>{

                const btnImg = document.createElement('img');

                const bgDiv = document.createElement('div');

                elem.appendChild(bgDiv);

                elem.appendChild(btnImg);

                bgDiv.className = 'button__bg';

                btnImg.className = 'button__img';

            });

        };

        function addDataToElements(){

            document.querySelector('#battle').querySelector('#second-column').querySelector('#first-weapon-btn').querySelector('.button__img').src = images.battle.playerWeaponsBtns[player.playerKey.weaponsTypeKeys.firstWeapon];

            document.querySelector('#battle').querySelector('#second-column').querySelector('#second-weapon-btn').querySelector('.button__img').src = images.battle.playerWeaponsBtns[player.playerKey.weaponsTypeKeys.secondWeapon];

            document.querySelector('#battle').querySelector('#second-column').querySelector('#healing-potion-btn').querySelector('.button__img').src = images.battle.healingPotionBtn;

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

        const arrayPlayerTraits = Object.values(player.playerTraits);

        const arrayPlayerTraitsKeys = Object.keys(player.playerTraits);

        createThirdColumnElements();

        imgCheck();

        addDataToElements();

        setTimeout(() => {
                
            showPlayerElements();

        }, '500');

        function createThirdColumnElements(){
    
            const columnPlayer = document.querySelector('#battle').querySelector('#third-column');
                        
            const itemPlayer = document.createElement('div');
        
            const wrapperImgPlayer = document.createElement('div');
        
            const imgPlayer = document.createElement('img');
    
            const titlePlayer = document.createElement('h3');
    
            const statsPlayerList = document.createElement('ul');

            itemPlayer.className = 'column__item column__item-battle-start third-column__item-battle-start item';
        
            wrapperImgPlayer.className = 'item__wrapper-img item__wrapper-img-battle-start';
        
            imgPlayer.className = 'item__img item__img-battle-start third-column__img';
    
            titlePlayer.className = 'item__title-battle-start title';
    
            statsPlayerList.className = 'item__list-battle-start list';

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

    };

    new Swiper('#first-column', {

        navigation:{

            nextEl:'.slide__next',

            prevEl:'.slide__prev'

        },

        spaceBetween: 40,

        simulateTouch: false

    });

    battle(arrayRandomEnemiesKey, enemyTier);

};

function popupTurn(textTurn){

    const popup = document.createElement('div');

    const popupWrapper = document.createElement('div');

    const popupTitle = document.createElement('h3');

    popup.className = 'popup show-popup';

    popupWrapper.className = 'popup__wrapper';

    popupTitle.className = 'popup__title title';

    document.querySelector('#battle').appendChild(popup);

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

function popupDeadPlayer(){

    const popup = document.createElement('div');

    const popupWrapper = document.createElement('div');

    const popupTitle = document.createElement('h3');

    const popupButton = document.createElement('button');

    popup.className = 'popup show-popup';

    popupWrapper.className = 'popup__wrapper';

    popupTitle.className = 'popup__title title';

    popupButton.className = 'popup__button button';

    document.querySelector('#battle').appendChild(popup);

    popup.appendChild(popupWrapper);

    popupWrapper.appendChild(popupTitle);

    popupWrapper.appendChild(popupButton);

    popupTitle.innerText = battlePopupText.language[language].playerDead.playerDeadTitle;

    popupButton.innerText = battlePopupText.language[language].playerDead.playerDeadButton;

};

/// FUNCTIONS---END ///

export {popupTurn};

export {battleScreen};

export {popupDeadPlayer};