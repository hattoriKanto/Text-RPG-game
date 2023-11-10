
import { fullscreenModeText } from "./modules/text/enterFullscreenModeText.js";

import { disableButtons } from "./modules/globalFunctions.js";

import { chooseLanguage } from "./modules/screen/chooseLangScreen.js";

function fullscreenAndLockOrientation(){

    createHTMLElements();

};

function createHTMLElements(){

    const lockScreenPopup = document.createElement('div');

    const popupWrapper = document.createElement('div');

    const popupContent = document.createElement('div');

    const popupContentWrapper = document.createElement('div');

    const popupHeader = document.createElement('div');

    const popupTitle = document.createElement('h3');

    const popupFooter = document.createElement('div');

    const footerFirstButton = document.createElement('button');

    lockScreenPopup.className = 'popup-lock-screen show-popup';

    popupWrapper.className = 'popup-lock-screen__wrapper';

    popupContent.className = 'popup-lock-screen__content content';

    popupContentWrapper.className = 'popup-lock-screen__content-wrapper';

    popupHeader.className = 'popup-lock-screen__header header';

    popupTitle.className = 'popup-lock-screen__title title';

    popupFooter.className = 'popup-lock-screen__footer footer';

    footerFirstButton.className = 'footer__first-button button';

    lockScreenPopup.id = 'popup-lock-screen';

    footerFirstButton.id = 'lock-screen';

    document.querySelector('body').appendChild(lockScreenPopup);

    lockScreenPopup.appendChild(popupWrapper);

    popupWrapper.appendChild(popupContent);

    popupContent.appendChild(popupContentWrapper);

    popupContentWrapper.appendChild(popupHeader);

    popupContentWrapper.appendChild(popupFooter);

    popupHeader.appendChild(popupTitle);

    popupFooter.appendChild(footerFirstButton);

    addTextToElements();

    function addTextToElements(){

        popupTitle.innerText = fullscreenModeText.titleText;

        lockScreenPopup.querySelectorAll('.button').forEach((elem, index) =>{

            elem.innerText = Object.values(fullscreenModeText.buttonText)[index];

        });

    };

    eventListener();

};

function eventListener(){

    document.querySelector('#popup-lock-screen').querySelectorAll('.button').forEach((elem, index) =>{

        elem.addEventListener('click', () =>{

            disableButtons();

            document.querySelector('#popup-lock-screen').classList.remove('show-popup');

            document.querySelector('#popup-lock-screen').classList.add('hide-popup');

            setTimeout(() => {
                
                toggleFullScreen();

            }, '300');

            setTimeout(() => {

                document.querySelector('#popup-lock-screen').remove();

                chooseLanguage();
                
            }, '1000');

        });

    });

};

function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
}
  



export {fullscreenAndLockOrientation};