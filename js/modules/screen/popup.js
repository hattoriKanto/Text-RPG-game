
/// IMPORTS---START ///

import images from "../images.js";

import { enableButton } from "./charCreatingScreen.js";

/// IMPORTS---END ///

/// GLOBAL---VARIABLES---START ///

let title = null;

let descr = null;

/// GLOBAL---VARIABLES---END ///

/// MAIN---FUNCTIONS---START ///

function popup(titlePopup, descrPopup, traits, traitsKey){

    title = titlePopup;

    descr = descrPopup;

    createHTMLElements(traits, traitsKey);

};

function createHTMLElements(traits, traitsKey){

    const popupScreen = document.createElement('div');

    const popupWrapper = document.createElement('div');

    const popupContent = document.createElement('div');

    const closeBtnPopup = document.createElement('div');

    const popupTitle = document.createElement('h3');

    const popuptraits = document.createElement('ul');

    popupScreen.className = 'popup show-popup';

    popupWrapper.className = 'popup__wrapper';

    popupContent.className = 'popup__content content';

    closeBtnPopup.className = 'popup__close-btn';

    popupTitle.className = 'popup__title';

    popuptraits.className = 'popup__traits list';

    popupScreen.id = 'popup';

    closeBtnPopup.id = 'close-btn';

    document.querySelector('body').appendChild(popupScreen);

    popupScreen.appendChild(popupWrapper);

    popupWrapper.appendChild(popupContent);

    popupContent.appendChild(closeBtnPopup);

    popupContent.appendChild(popupTitle);

    if(descr != null){

        const popupDescr = document.createElement('div');

        popupDescr.className = 'popup__descr';

        popupContent.appendChild(popupDescr);

    };

    popupContent.appendChild(popuptraits);

    createtraitsItems();

    function createtraitsItems(){

        for(let i = 0; i < traits.length; i++){

            const item = document.createElement('li');

            const itemImg = document.createElement('img');

            const itemSpan = document.createElement('span');

            item.className = 'list__item item';

            itemImg.className = 'item__img';

            itemSpan.className = 'item__span';

            popuptraits.appendChild(item);

            item.appendChild(itemImg);

            item.appendChild(itemSpan);

        };

    };

    addDataToElements(traits, traitsKey);

};

function addDataToElements(traits, traitsKey){

    document.querySelector('#popup').querySelector('.popup__title').innerText = title;

    if(descr != null){

        document.querySelector('#popup').querySelector('.popup__descr').innerText = descr;

    };

    for(let i = 0; i < traits.length; i++){
        
        document.querySelector('#popup').querySelectorAll('.item__img')[i].src = images.traits[traitsKey[i]];

        document.querySelector('#popup').querySelectorAll('.item__span')[i].innerText = traits[i];

    };
    
    closePopup();

};

function closePopup(){

    document.querySelector('#popup').querySelector('#close-btn').addEventListener('click', () =>{

        document.querySelector('#popup').classList.remove('show-popup');

        document.querySelector('#popup').classList.add('hide-popup');

        setTimeout(() => {

            enableButton();

            document.querySelector('#popup').remove();
            
        }, '650');

    });

};

/// MAIN---FUNCTIONS---START ///

/// EXPORTS---START ///

export default popup;

/// EXPORTS---START ///