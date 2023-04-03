
import images from "../images.js";

import enemiesStats from "../enemies/enemiesStats.js";

const screenBattle = document.querySelector('#battle-screen');

let arrayEnemiesKey = [];

let arrayEnemiesValue = [];

function uniqueImagesEnemies(imgEnemies, index){
    
    imgEnemies.src = images.enemies.lowTier[arrayEnemiesKey[index]];
    
    if(arrayEnemiesKey[index] === Object.keys(images.enemies.lowTier)[2]){
    
            imgEnemies.classList.add('img-top');
    
    } else if(arrayEnemiesKey[index] === Object.keys(images.enemies.lowTier)[0]){
    
            imgEnemies.classList.add('img-left');
    
    };

};

function battleScreenPreparation(arrayRandomEnemiesValue, arrayRandomEnemiesKey){

    for(let i = 0; i < arrayRandomEnemiesValue.length; i++){

        arrayEnemiesKey.push(arrayRandomEnemiesKey[i]);

        arrayEnemiesValue.push(arrayRandomEnemiesValue[i]);

    };

    screenBattle.classList.remove('hide-screen');

    addElements();

};

function addElements(){

    addEnemiesElements();

    addStartBattleElements();

    addPlayerElements();

    function addEnemiesElements(){

        const columnEnemies = screenBattle.querySelector('#enemies');

        for(let i = 0; i < 3; i++){

            const itemEnemies = document.createElement('div');

            const itemBgEnemies = document.createElement('div');

            const wrapperImgEnemies = document.createElement('div');

            const imgEnemies = document.createElement('img');
    
            itemEnemies.className = 'content__item enemies__item item';

            itemBgEnemies.className = 'item__bg bg-animation';

            wrapperImgEnemies.className = 'content__wrapper-img';

            imgEnemies.className = 'content__img enemies__img';

            uniqueImagesEnemies(imgEnemies, i);
            
            columnEnemies.appendChild(itemEnemies);

            itemEnemies.appendChild(itemBgEnemies);
    
            itemEnemies.appendChild(wrapperImgEnemies);

            wrapperImgEnemies.appendChild(imgEnemies);
    
        };

    };

    function addStartBattleElements(){

        const columnStartBattle = screenBattle.querySelector('#start-battle');

        const btnStartBattle = document.createElement('button');

        const imgStartBattle = document.createElement('img');

        const textStartBattle = document.createElement('div');

        btnStartBattle.className = 'content__btn start-battle__button';

        imgStartBattle.className = 'start-battle__img';

        textStartBattle.className = 'content__text start-battle__text';
    
        imgStartBattle.src = './img/start-battle.png';

        textStartBattle.innerText = 'Начать';

        columnStartBattle.appendChild(btnStartBattle);

        btnStartBattle.appendChild(imgStartBattle);

        btnStartBattle.appendChild(textStartBattle);

        addEventListener(btnStartBattle);

    };

    function addPlayerElements(){

        const columnPlayer = screenBattle.querySelector('#player');

        const itemPlayer = document.createElement('div');
    
        const imgPlayer = document.createElement('img');
    
        itemPlayer.className = 'content__item player__item';
    
        imgPlayer.className = 'content__img player__img';
    
        imgPlayer.alt = 'player.img';
    
        columnPlayer.appendChild(itemPlayer);
    
        itemPlayer.appendChild(imgPlayer);

    };

};

function hideAnimation(btnStartBattle){

    screenBattle.querySelectorAll('.content__item').forEach(elem =>{

        elem.classList.add('content__elem-hide');

    });

    btnStartBattle.classList.add('content__elem-hide');

}

function removeElements(){
        
    screenBattle.querySelectorAll('.content__item').forEach(elem =>{

        elem.remove();

    });

};

function addEventListener(btnStartBattle){

    btnStartBattle.addEventListener('click', () =>{

        hideAnimation(btnStartBattle);

        setTimeout(() => {
            
            btnStartBattle.remove();

            removeElements();

            battleStart();

        }, '450');

    });

};

function battleStart(){

    createElements();

    function createElements(){

        const columnEnemies = screenBattle.querySelector('#enemies');

        const swiperWrapper = document.createElement('div');

        columnEnemies.classList.add('swiper');

        columnEnemies.classList.add('content__column-swiper');

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

            for(let i = 0; i < arrayEnemyStats.length; i++){

                const listItem = document.createElement('li');
                
                const itemImg = document.createElement('img');

                const itemSpan = document.createElement('span');

                listItem.className = 'list__item-swiper item';

                itemImg.className = 'item__img-swiper';

                itemSpan.className = 'item__span-swiper';

                itemImg.src = Object.values(images.stats.enemies)[i];

                itemSpan.innerText = arrayEnemyStats[i];

                statsEnemiesList.appendChild(listItem);

                listItem.appendChild(itemImg);

                listItem.appendChild(itemSpan);

            };
    
            itemEnemies.className = 'content__item content__item-swiper enemies__item swiper-slide';

            itemBgEnemies.className = 'item__bg item__bg-swiper';

            wrapperImgEnemies.className = 'content__wrapper-img content__wrapper-img-swiper';
    
            imgEnemies.className = 'content__img content__img-swiper enemies__img';

            titleEnemies.className = 'content__title-swiper';

            statsEnemiesList.className = 'content__list-swiper list';

            titleEnemies.innerText = arrayEnemiesValue[i].name;

            uniqueImagesEnemies(imgEnemies, i);
    
            swiperWrapper.appendChild(itemEnemies);

            itemEnemies.appendChild(itemBgEnemies);
    
            itemEnemies.appendChild(wrapperImgEnemies);

            wrapperImgEnemies.appendChild(imgEnemies);

            itemEnemies.appendChild(titleEnemies);

            itemEnemies.appendChild(statsEnemiesList);
    
        };

        setTimeout(() => {
            
            showElements();

        }, '500');

    };

    function showElements(){

        screenBattle.querySelector('#enemies').classList.add('content__column-show-swiper');

    };

    new Swiper('#enemies', {

        navigation:{

            nextEl:'.slide__next',

            prevEl:'.slide__prev'

        },

        spaceBetween: 40,

        simulateTouch: true

    });

};

export default battleScreenPreparation;