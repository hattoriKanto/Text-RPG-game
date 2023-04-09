
/// IMPORTS---START

import castle from './castle.js';

import showInventory from '../inventory.js';

/// IMPORTS---END

const locationName = {

    russian: {

        castleLocation: 'Замок Каструм',

        villageLocation: 'Деревня',

        riftLocation: 'Разлом'

    },

}

function chooseLocation(){

    showInventory();

    const screenLocation = document.querySelector('#location-screen');

    const chooseLocation = screenLocation.querySelectorAll('.choose__item');

    const locationNameRus = Object.values(locationName.russian);

    screenLocation.classList.remove('hide-screen');

    for(let i = 0; i < chooseLocation.length; i++){

        chooseLocation[i].querySelector('.item__title').innerHTML = locationNameRus[i];

        chooseLocation[i].addEventListener('click', () =>{

            screenLocation.classList.add('hide-screen');

            castle();

        });

    };

};

export default chooseLocation;