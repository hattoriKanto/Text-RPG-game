
import chooseLanguageText from "../text/chooseLangText.js";

import { creatingCharacter } from "./charCreatingScreen.js";

const chooseLangPopup = document.querySelector('#choose-lang');

function chooseLanguage(){

    createHTMLElements();

};

function createHTMLElements(){

    const popupWrapper = document.createElement('div');

    const popupContent = document.createElement('div');

    const popupHeader = document.createElement('div');

    const popupTitle = document.createElement('h3');

    const popupFooter = document.createElement('div');

    const footerFirstButton = document.createElement('button');

    const footerSecondButton = document.createElement('button');

    popupWrapper.className = 'popup__wrapper choose-lang__wrapper';

    popupContent.className = 'popup__content choose-lang__content content';

    popupHeader.className = 'popup__header choose-lang__header header';

    popupTitle.className = 'popup__title';

    popupFooter.className = 'popup__footer choose-lang__footer footer';

    footerFirstButton.className = 'footer__first-button button';

    footerSecondButton.className = 'footer__second-button button';

    footerFirstButton.id = 'english';

    footerSecondButton.id = 'russian';

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

    chooseLangPopup.querySelectorAll('.button').forEach((elem, index) =>{

        elem.addEventListener('click', () =>{

            const choosedLang = Object.values(chooseLanguageText.buttonText)[index];

            chooseLangPopup.classList.remove('show-popup');

            chooseLangPopup.classList.add('hide-popup');

            setTimeout(() => {

                creatingCharacter(choosedLang);

                chooseLangPopup.remove();
                
            }, '1000');

        });

    });

};

export { chooseLanguage };