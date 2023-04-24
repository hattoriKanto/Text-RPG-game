import images from "../images.js";

const popupScreen = document.querySelector('#popup');

let title = '';

let descr = '';

function popup(titlePopup, descrPopup, stats, statsKey){

    title = titlePopup;

    descr = descrPopup;

    popupScreen.classList.add('show-popup');

    if(popupScreen.classList.contains('hide-popup') === true){

        popupScreen.classList.remove('hide-popup');

    };

    createHTMLElements(stats, statsKey);

};

function createHTMLElements(stats, statsKey){

    const popupWrapper = document.createElement('div');

    const popupContent = document.createElement('div');

    const closeBtnPopup = document.createElement('div');

    const popupTitle = document.createElement('h3');

    const popupDescr = document.createElement('div');

    const popupStats = document.createElement('ul');

    popupWrapper.className = 'popup__wrapper';

    popupContent.className = 'popup__content content';

    closeBtnPopup.className = 'popup__close-btn';

    popupTitle.className = 'popup__title';

    popupDescr.className = 'popup__descr';

    popupStats.className = 'popup__stats list';

    closeBtnPopup.id = 'close-btn';

    popupScreen.appendChild(popupWrapper);

    popupWrapper.appendChild(popupContent);

    popupContent.appendChild(closeBtnPopup);

    popupContent.appendChild(popupTitle);

    popupContent.appendChild(popupDescr);

    popupContent.appendChild(popupStats);

    createStatsItems();

    function createStatsItems(){

        for(let i = 0; i < stats.length; i++){

            const item = document.createElement('li');

            const itemImg = document.createElement('img');

            const itemSpan = document.createElement('span');

            item.className = 'list__item item';

            itemImg.className = 'item__img';

            itemSpan.className = 'item__span';

            popupStats.appendChild(item);

            item.appendChild(itemImg);

            item.appendChild(itemSpan);

        };

    };

    addDataToElements(stats, statsKey);

};

function addDataToElements(stats, statsKey){

    popupScreen.querySelector('.popup__title').innerText = title;

    popupScreen.querySelector('.popup__descr').innerText = descr;

    for(let i = 0; i < stats.length; i++){

        popupScreen.querySelectorAll('.item__img')[i].src = images.stats[statsKey[i]];

        popupScreen.querySelectorAll('.item__span')[i].innerText = stats[i];

    };
    
    closePopup();

};

function closePopup(){

    popupScreen.querySelector('#close-btn').addEventListener('click', () =>{

        popupScreen.classList.remove('show-popup');

        popupScreen.classList.add('hide-popup');

        setTimeout(() => {

            popupScreen.querySelector('.popup__wrapper').remove();
            
        }, '650');

    });

};

export default popup;