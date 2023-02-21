
import castleLocation from '../locations/castle.js';

const locationName = {

    russian: {

        castleLocation: 'Замок Каструм',

        villageLocation: 'Деревня',

        riftLocation: 'Разлом'

    },

}

function chooseLocation(){

    const screenLocation = document.querySelector('#location-screen');

    const chooseLocation = screenLocation.querySelectorAll('.choose__item');

    const locationNameRus = Object.values(locationName.russian);

    screenLocation.classList.remove('hide');

    for(let i = 0; i < chooseLocation.length; i++){

        chooseLocation[i].querySelector('.item__title').innerHTML = locationNameRus[i];

        chooseLocation[i].addEventListener('click', () =>{

            screenLocation.classList.add('hide');

            castleLocation();

        });

    };

};

export default chooseLocation;