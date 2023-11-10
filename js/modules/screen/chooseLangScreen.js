
import { chooseLanguageText } from "../text/chooseLangText.js";

import { creatingCharacter } from "./charCreatingScreen.js";

import { disableButtons } from "../globalFunctions.js";

let language = null;

function chooseLanguage(){

    createHTMLElements();

};

function createHTMLElements(){

    const chooseLangPopup = document.createElement('div');

    const popupWrapper = document.createElement('div');

    const popupContent = document.createElement('div');

    const popupContentWrapper = document.createElement('div');

    const popupHeader = document.createElement('div');

    const popupTitle = document.createElement('h3');

    const popupFooter = document.createElement('div');

    const footerFirstButton = document.createElement('button');

    const footerSecondButton = document.createElement('button');

    chooseLangPopup.className = 'popup-choose-lang show-popup';

    popupWrapper.className = 'popup-choose-lang__wrapper';

    popupContent.className = 'popup-choose-lang__content content';

    popupContentWrapper.className = 'popup-choose-lang__content-wrapper';

    popupHeader.className = 'popup-choose-lang__header header';

    popupTitle.className = 'popup-choose-lang__title title';

    popupFooter.className = 'popup-choose-lang__footer footer';

    footerFirstButton.className = 'footer__first-button button';

    footerSecondButton.className = 'footer__second-button button';

    chooseLangPopup.id = 'popup-choose-lang';

    footerFirstButton.id = 'english';

    footerSecondButton.id = 'russian';

    document.querySelector('body').appendChild(chooseLangPopup);

    chooseLangPopup.appendChild(popupWrapper);

    popupWrapper.appendChild(popupContent);

    popupContent.appendChild(popupContentWrapper);

    popupContentWrapper.appendChild(popupHeader);

    popupContentWrapper.appendChild(popupFooter);

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

    document.querySelector('#popup-choose-lang').querySelectorAll('.button').forEach((elem, index) =>{

        elem.addEventListener('click', () =>{

            disableButtons();

            language = Object.values(chooseLanguageText.buttonText)[index].toLowerCase();

            document.querySelector('#popup-choose-lang').classList.remove('show-popup');

            document.querySelector('#popup-choose-lang').classList.add('hide-popup');

            setTimeout(() => {

                creatingCharacter();

                document.querySelector('#popup-choose-lang').remove();
                
            }, '1000');

        });

    });

};

export { chooseLanguage };

export { language };