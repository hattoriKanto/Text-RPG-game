
/// IMPORTS---START ///

import player from "../player.js";

import images from "../images.js";

import enemiesStats from "../enemies/enemiesStats.js";

/// IMPORTS---END ///

/// GLOBAL---VARIABLES---START ///

const screenBattle = document.querySelector('#battle-screen');

let arrayEnemiesKey = [];

let arrayEnemiesValue = [];

/// GLOBAL---VARIABLES---END ///

/// REPEATABLE---FUNCTIONS---START ///

function uniqueImg(itemImg, index){
    
    itemImg.src = images.enemies.lowTier[arrayEnemiesKey[index]];
    
};

/// REPEATABLE---FUNCTIONS---END ///

/// FUNCTIONS---START ///

function battleScreenPreparation(arrayRandomEnemiesValue, arrayRandomEnemiesKey){

    for(let i = 0; i < arrayRandomEnemiesValue.length; i++){

        arrayEnemiesKey.push(arrayRandomEnemiesKey[i]);

        arrayEnemiesValue.push(arrayRandomEnemiesValue[i]);

    };

    screenBattle.classList.remove('hide-screen');

    createHTMLElements();

};

function createHTMLElements(){

    mainElements();

    function mainElements(){

        const battleBg = document.createElement('img');

        const container = document.createElement('div');
    
        const battleWrapper = document.createElement('div');
    
        const battleMain = document.createElement('div');
        
        const mainWrapper = document.createElement('div');
    
        const mainFirstColumn = document.createElement('div');
    
        const mainSecondColumn = document.createElement('div');
    
        const mainThirdColumn = document.createElement('div');
    
        battleBg.className = 'battle__bg bg';
    
        container.className = 'battle__container container';
    
        battleWrapper.className = 'battle__wrapper wrapper';
    
        battleMain.className = 'battle__main screen__main main';
        
        mainWrapper.className = 'main__wrapper wrapper';
    
        mainFirstColumn.className = 'wrapper__column column first-column';
    
        mainSecondColumn.className = 'wrapper__column column second-column';
    
        mainThirdColumn.className = 'wrapper__column column third-column';

        mainFirstColumn.id = 'first-column';
    
        mainSecondColumn.id = 'second-column';
    
        mainThirdColumn.id = 'third-column';

        screenBattle.appendChild(battleBg);

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

        const column = screenBattle.querySelector('#first-column');

        for(let i = 0; i < arrayEnemiesKey.length; i++){

            const columnItem = document.createElement('div');

            const itemBg = document.createElement('div');

            const itemImgWrapper = document.createElement('div');

            const itemImg = document.createElement('img');

            columnItem.className = 'column__item first-column__item item';

            itemBg.className = 'item__bg bg-animation';

            itemImgWrapper.className = 'item__wrapper-img';

            itemImg.className = 'item__img first-column__img';

            column.appendChild(columnItem);

            columnItem.appendChild(itemBg);
    
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

        btnImg.src = images.battle.other.startBattle;

        addEventListener(columnBtn);

    };

    function thirdColumnElements(){

        const column = document.querySelector('#third-column');

        const columnItem = document.createElement('div');
    
        const columnImg = document.createElement('img');

        columnItem.className = 'column__item third-column__item item';
    
        columnImg.className = 'item__img third-column__img';

        column.appendChild(columnItem);
    
        columnItem.appendChild(columnImg);

        columnImg.src = player.playerImg;

    };

};

function hideAnimation(columnBtn){

    screenBattle.querySelectorAll('.column__item').forEach(elem =>{

        elem.classList.add('column__elem-hide');

    });

    columnBtn.classList.add('column__elem-hide');

};

function removeElements(){
        
    screenBattle.querySelectorAll('.column__item').forEach(elem =>{

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

    enemiesColumn();

    battleBtns();

    playerColumn();

    function enemiesColumn(){

        createEnemiesElements();

        function createEnemiesElements(){
    
            const columnEnemies = screenBattle.querySelector('#enemies');
    
            const swiperWrapper = document.createElement('div');
    
            columnEnemies.classList.add('swiper');
    
            columnEnemies.classList.add('content__enemies-battle-start');
    
            swiperWrapper.className = 'swiper-wrapper';
    
            columnEnemies.appendChild(swiperWrapper);
    
            for(let i = 0; i < 3; i++){
    
                const arrayEnemyStats = Object.values(enemiesStats.lowTier[arrayEnemiesKey[i]]);
    
                const itemEnemies = document.createElement('div');
    
                const itemBgEnemies = document.createElement('div');
    
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
    
                for(let i = 0; i < arrayEnemyStats.length; i++){
    
                    const listItem = document.createElement('li');
                    
                    const itemImg = document.createElement('img');
    
                    const itemSpan = document.createElement('span');
    
                    listItem.className = 'list__item-battle-start item';
    
                    itemImg.className = 'item__img-battle-start';
    
                    itemSpan.className = 'item__span-battle-start';
    
                    itemImg.src = Object.values(images.stats.enemies)[i];
    
                    itemSpan.innerText = arrayEnemyStats[i];
    
                    statsEnemiesList.appendChild(listItem);
    
                    listItem.appendChild(itemImg);
    
                    listItem.appendChild(itemSpan);
    
                };
        
                itemEnemies.className = 'column__item-battle-start enemies__item-battle-start item swiper-slide';
    
                itemBgEnemies.className = 'item__bg item__bg-battle-start';
    
                wrapperImgEnemies.className = 'item__wrapper-img item__wrapper-img-battle-start';
        
                imgEnemies.className = 'item__img item__img-battle-start enemies__img';
    
                titleEnemies.className = 'item__title-battle-start';
    
                statsEnemiesList.className = 'item__list-battle-start list';

                enemiesButtons.className = 'item__buttons-battle-start buttons'
    
                titleEnemies.innerText = arrayEnemiesValue[i].name;
    
                uniqueImagesEnemies(imgEnemies, i);
        
                swiperWrapper.appendChild(itemEnemies);
    
                itemEnemies.appendChild(itemBgEnemies);
        
                itemEnemies.appendChild(wrapperImgEnemies);
    
                wrapperImgEnemies.appendChild(imgEnemies);
    
                itemEnemies.appendChild(titleEnemies);
    
                itemEnemies.appendChild(statsEnemiesList);

                itemEnemies.appendChild(enemiesButtons);
        
            };
    
            setTimeout(() => {
                
                showEnemiesElements();
    
            }, '500');
    
        };
    
        function showEnemiesElements(){
    
            screenBattle.querySelector('#enemies').classList.add('content__column-show-swiper');
    
        };

    };

    function battleBtns(){

        createBattleBtnsElements(); 

        function createBattleBtnsElements(){

            const columnStartBattle = screenBattle.querySelector('#start-battle');

            const btnsWrapper = document.createElement('div');

            btnsWrapper.className = 'start-battle__wrapper wrapper';

            columnStartBattle.classList.add('content__buttons-battle-start');

            columnStartBattle.appendChild(btnsWrapper);

            if(player.canUseMagic === true){

                const arrayImages = Object.values(images.battle.canUseMagic);

                const firstWeaponBtn = document.createElement('button');

                const secondWeaponBtn = document.createElement('button');

                const magicSpells = document.createElement('button');
    
                const healingPotionBtn = document.createElement('button');

                const manaPotionBtn = document.createElement('button');

                btnsWrapper.appendChild(firstWeaponBtn);

                btnsWrapper.appendChild(secondWeaponBtn);

                btnsWrapper.appendChild(magicSpells);

                btnsWrapper.appendChild(healingPotionBtn);

                btnsWrapper.appendChild(manaPotionBtn);

                firstWeaponBtn.className = 'wrapper__btn button';

                secondWeaponBtn.className = 'wrapper__btn button';
                
                magicSpells.className = 'wrapper__btn button';

                healingPotionBtn.className = 'wrapper__btn button';

                manaPotionBtn.className = 'wrapper__btn button';

                firstWeaponBtn.id = 'first-weapon-btn';

                secondWeaponBtn.id = 'second-weapon-btn';
                
                magicSpells.id = 'magic-spells-btn';

                healingPotionBtn.id = 'healing-potion-btn';

                manaPotionBtn.id = 'mana-potion-btn';

                columnStartBattle.querySelectorAll('.wrapper__btn').forEach(elem =>{

                    const btnImg = document.createElement('img');

                    const bgDiv = document.createElement('div');

                    elem.appendChild(bgDiv);

                    elem.appendChild(btnImg);

                    bgDiv.className = 'button__bg';

                    btnImg.className = 'button__img';

                });

                firstWeaponBtn.querySelector('.button__img').src = images.battle.weaponsType[player.playerKey.firstWeaponType];

                secondWeaponBtn.querySelector('.button__img').src = images.battle.weaponsType[player.playerKey.secondWeaponType];

                for(let i = 2; i < columnStartBattle.querySelectorAll('.wrapper__btn').length; i++){

                    const btnImg = columnStartBattle.querySelectorAll('.wrapper__btn')[i].querySelector('.button__img');

                    btnImg.src = arrayImages[i-2];

                };
                    
            }else{

                const firstWeaponBtn = document.createElement('button');

                const secondWeaponBtn = document.createElement('button');
    
                const healingPotionBtn = document.createElement('button');

                btnsWrapper.appendChild(firstWeaponBtn);

                btnsWrapper.appendChild(secondWeaponBtn);

                btnsWrapper.appendChild(healingPotionBtn);

                firstWeaponBtn.className = 'wrapper__btn button';

                secondWeaponBtn.className = 'wrapper__btn button';
                
                healingPotionBtn.className = 'wrapper__btn button';

                firstWeaponBtn.id = 'first-weapon-btn';

                secondWeaponBtn.id = 'second-weapon-btn';
                
                healingPotionBtn.id = 'healing-potion-btn';

                columnStartBattle.querySelectorAll('.wrapper__btn').forEach(elem =>{

                    const btnImg = document.createElement('img');

                    const bgDiv = document.createElement('div');

                    elem.appendChild(bgDiv);

                    elem.appendChild(btnImg);

                    bgDiv.className = 'button__bg';

                    btnImg.className = 'button__img';
                    
                });

                firstWeaponBtn.querySelector('.button__img').src = images.battle.weaponsType[player.playerKey.firstWeaponType];

                secondWeaponBtn.querySelector('.button__img').src = images.battle.weaponsType[player.playerKey.secondWeaponType];

                healingPotionBtn.querySelector('.button__img').src = images.battle.cantUseMagic.healingPotion;

            };

            setTimeout(() => {
                
                showBattleBtnsElements();
    
            }, '500');


        };

        function showBattleBtnsElements(){
    
            screenBattle.querySelector('#start-battle').classList.add('content__column-show-buttons');
    
        };

    };

    function playerColumn(){

        createPlayerElements();

        function createPlayerElements(){

            const arrayPlayerStats = Object.values(player.playerStats);
    
            const columnPlayer = screenBattle.querySelector('#player');
                        
            const itemPlayer = document.createElement('div');
    
            const itemBgPlayer = document.createElement('div');
    
            const wrapperImgPlayer = document.createElement('div');
        
            const imgPlayer = document.createElement('img');
    
            const titlePlayer = document.createElement('h3');
    
            const statsPlayerList = document.createElement('ul');

            itemPlayer.className = 'column__item-battle-start player__item-battle-start item';
    
            itemBgPlayer.className = 'item__bg item__bg-battle-start';
    
            wrapperImgPlayer.className = 'item__wrapper-img item__wrapper-img-battle-start';
        
            imgPlayer.className = 'item__img item__img-battle-start player__img';
    
            titlePlayer.className = 'item__title-battle-start';
    
            statsPlayerList.className = 'item__list-battle-start list';

            columnPlayer.classList.add('content__player-battle-start');
    
            titlePlayer.innerText = 'Player';

            imgPlayer.src = images.player[player.playerKey.raceKey];

            if(player.playerKey.raceKey != 'dwarf'){
    
                imgPlayer.classList.add('img-top');
        
            };
                
            for(let i = 0; i < arrayPlayerStats.length; i++){
    
                const listItem = document.createElement('li');
                    
                const itemImg = document.createElement('img');
    
                const itemSpan = document.createElement('span');
    
                listItem.className = 'list__item-battle-start item';
    
                itemImg.className = 'item__img-battle-start';
    
                itemSpan.className = 'item__span-battle-start';
    
                itemImg.src = Object.values(images.stats.player)[i];
    
                itemSpan.innerText = arrayPlayerStats[i];
    
                statsPlayerList.appendChild(listItem);
    
                listItem.appendChild(itemImg);
    
                listItem.appendChild(itemSpan);
    
            };
            
            columnPlayer.appendChild(itemPlayer);

            itemPlayer.appendChild(itemBgPlayer);
    
            itemPlayer.appendChild(wrapperImgPlayer);
    
            wrapperImgPlayer.appendChild(imgPlayer);
    
            itemPlayer.appendChild(titlePlayer);
    
            itemPlayer.appendChild(statsPlayerList);

            setTimeout(() => {
                
                showPlayerElements();
    
            }, '500');
        
        };
        
        function showPlayerElements(){
    
            screenBattle.querySelector('#player').classList.add('content__column-show-player');
    
        };

    };

    new Swiper('#enemies', {

        navigation:{

            nextEl:'.slide__next',

            prevEl:'.slide__prev'

        },

        spaceBetween: 40,

        simulateTouch: false

    });

};

/// FUNCTIONS---END ///

export default battleScreenPreparation;