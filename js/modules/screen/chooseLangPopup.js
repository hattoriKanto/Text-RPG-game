
import chooseLanguageText from "../text/chooseLangText.js";

import { creatingCharacter } from "./charCreatingScreen.js";

import { castle } from "./location/castleScreen.js";

function chooseLanguage(){

    createHTMLElements();

};

function createHTMLElements(){

    const chooseLangPopup = document.createElement('div');

    const popupWrapper = document.createElement('div');

    const popupContent = document.createElement('div');

    const popupHeader = document.createElement('div');

    const popupTitle = document.createElement('h3');

    const popupFooter = document.createElement('div');

    const footerFirstButton = document.createElement('button');

    const footerSecondButton = document.createElement('button');

    chooseLangPopup.className = 'choose-lang popup show-popup';

    popupWrapper.className = 'popup__wrapper choose-lang__wrapper';

    popupContent.className = 'popup__content choose-lang__content content';

    popupHeader.className = 'popup__header choose-lang__header header';

    popupTitle.className = 'popup__title';

    popupFooter.className = 'popup__footer choose-lang__footer footer';

    footerFirstButton.className = 'footer__first-button button';

    footerSecondButton.className = 'footer__second-button button';

    chooseLangPopup.id = 'choose-lang';

    footerFirstButton.id = 'english';

    footerSecondButton.id = 'russian';

    document.querySelector('body').appendChild(chooseLangPopup);

    chooseLangPopup.appendChild(popupWrapper);

    popupWrapper.appendChild(popupContent);

    popupContent.appendChild(popupHeader);

    popupContent.appendChild(popupFooter);

    popupHeader.appendChild(popupTitle);

    popupFooter.appendChild(footerFirstButton);

    popupFooter.appendChild(footerSecondButton);

    addTextToElements();

    function addTextToElements(){

        popupTitle.innerText = chooseLanguageText.titleText;

        chooseLangPopup.querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(chooseLanguageText.buttonText)[index];

        });

    };

    eventListener();

};

function eventListener(){

    document.querySelector('#choose-lang').querySelectorAll('.button').forEach((elem, index) =>{

        elem.addEventListener('click', () =>{

            const choosedLang = Object.values(chooseLanguageText.buttonText)[index];

            document.querySelector('#choose-lang').classList.remove('show-popup');

            document.querySelector('#choose-lang').classList.add('hide-popup');

            setTimeout(() => {

                castle(choosedLang.toLowerCase());

                document.querySelector('#choose-lang').remove();
                
            }, '1000');

        });

    });

};

export { chooseLanguage };