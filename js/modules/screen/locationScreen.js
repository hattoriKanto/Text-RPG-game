
/// IMPORTS START ///

import locationText from "../text/locationText.js";

import images from "../images.js";

/// IMPORTS END ///

/// GLOBAL---VARIABLES---START ///

let language = null;

/// GLOBAL---VARIABLES---END ///

function location(choosedLanguage){

    language = choosedLanguage;

    createHTMLElements();

};

function createHTMLElements(){

    mainElements();

    function mainElements(){

        const screenLocation = document.createElement('section');

        const container = document.createElement('div');

        const locationWrapper = document.createElement('div');
    
        const locationMain = document.createElement('div');
    
        const mainHeader = document.createElement('div');
    
        const mainFooter = document.createElement('div');

        screenLocation.className = 'screen__location screen location show-screen';

        container.className = 'location__container screen__container container';

        locationWrapper.className = 'location__wrapper screen__wrapper wrapper';

        locationMain.className = 'location__main screen__main main';

        mainHeader.className = 'location__header main__header header';

        mainFooter.className = 'location__footer main__footer footer';

        screenLocation.id = 'location';

        document.querySelector('body').appendChild(screenLocation);

        screenLocation.appendChild(container);

        container.appendChild(locationWrapper);

        locationWrapper.appendChild(locationMain);

        locationMain.appendChild(mainHeader);

        locationMain.appendChild(mainFooter);

        headerElements();

        footerElements();

    };

    function headerElements(){

        const mainHeader = document.querySelector('#location').querySelector('.main__header');

        const mainTitle = document.createElement('h1');

        mainTitle.className = 'main__title';

        mainHeader.appendChild(mainTitle);

    };

    function footerElements(){

        const mainFooter = document.querySelector('#location').querySelector('.main__footer');

        const footerWrapper = document.createElement('div');

        footerWrapper.className = 'footer__wrapper wrapper';

        mainFooter.appendChild(footerWrapper);

        for(let i = 0; i < Object.keys(images.location).length; i++){

            const footerItem = document.createElement('div');

            const footerImgWrapper = document.createElement('div');

            const footerImg = document.createElement('img');

            const footerTitle = document.createElement('div');

            footerItem.className = 'footer__item footer__item-location item';

            footerImgWrapper.className = 'item__img-wrapper img-wrapper';

            footerImg.className = 'item__img img';

            footerTitle.className = 'item__title title';

            footerWrapper.appendChild(footerItem);

            footerItem.appendChild(footerImgWrapper);

            footerItem.appendChild(footerTitle);

            footerImgWrapper.appendChild(footerImg);

            footerImg.src = Object.values(images.location)[i];

            footerTitle.innerText = Object.values(locationText.language[language].mainText.locationTitle)[i];

        };

    };

};

export default location;