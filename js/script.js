import race from './stats.mjs';

const popup = document.querySelector('#popup');

const popupOverlay = document.querySelector('.overlay');

const popupTitle = document.querySelector('#popup .content__title');

const closePopupBtn = document.querySelector('#close__popup');

const body = document.querySelector('body');

const screenClass = document.querySelector('.screen__class');

const screenRace = document.querySelector('.screen__race');

closePopupBtn.addEventListener('click', closePopup);

popupOverlay.addEventListener('click', closePopup);

const player = {
    race: '',
    class: '',
    stats: {
        healthPoints: null,
        armourPoints: null,
        manaPoints: null
    }
}
chooseYourRace()
function chooseYourRace(){
    const optionInfo = screenRace.querySelectorAll('.option__info');                                        // all .option__info on screenRace
    const raceOption = screenRace.querySelectorAll('.option__btn');                                         // all .option__btn on screenRace
    const arrayRaces = Object.values(race);                                                                 // convert values of race into array
    const arrayPlayerStats = Object.values(player.stats);                                                   // convert values of player.stats into array for length
    for(let i = 0; i < raceOption.length; i++){                                                             // start of a cycle
        const arrayRacesStats = Object.values(arrayRaces[i].globalStats);                                   // convert values of a CHOSEN race into array
        raceOption[i].innerHTML = arrayRaces[i].raceName;                                                   // fill .option__btn from raceOption with races from arrayRaces 
        raceOption[i].addEventListener('click', () =>{                                                      // add event to specific .option__btn
            player.race = arrayRaces[i].raceName;                                                           // add race name to player{}
            for(let j = 0; j < arrayPlayerStats.length; j++){                                               // start of a cycle
                player.stats[Object.keys(player.stats)[j]] = arrayRacesStats[j];                            // fill player.stats value from arrayRaceStats
            }                                                                                               // end of a cycle
            screenClass.classList.remove('hide');                                                           // remove .hide from the next screen
            screenRace.classList.add('hide');                                                               // add .hide to the current screen
        })                                                                                                  // the end of the event
    }                                                                                                       // the end of a cycle
    optionInfo.forEach(elem =>{                                                                             // for each .option__info
        elem.addEventListener('click', () =>{                                                               // add event
            const raceStats = popup.querySelectorAll('.stats__item span');                                  // all .stats__item span on .popup
            popup.classList.add('show-popup');                                                              // add .show-popup to .popup
            body.classList.add('noscroll');                                                                 // add .noscroll to body
            popupTitle.innerHTML = elem.closest('.choose__option').querySelector('.option__btn').innerHTML; // fill popupTitle with closest .option__btn text to hit .option__info
            if(popupTitle.innerHTML === 'Human'){                                                           // if popupTitle = Human
                const arrayOfHumanStats = Object.values(race.human.globalStats);                            // convert values of race.human.globalStats into array
                for(let i = 0; i < raceStats.length; i++){                                                  // start of a cycle
                    raceStats[i].innerHTML = arrayOfHumanStats[i];                                          // fill raceStats with proper stats from array
                }                                                                                           // the end of cycle
            }                                                                                               // the end of condition
            if(popupTitle.innerHTML === 'Dwarf'){                                                           // if popupTitle = Dwarf
                const arrayOfDwarfStats = Object.values(race.dwarf.globalStats)                             // convert values of race.dwarf.globalStats into array
                for(let i = 0; i < raceStats.length; i++){                                                  // start of a cycle
                    raceStats[i].innerHTML = arrayOfDwarfStats[i];                                          // fill raceStats with proper stats from array
                }                                                                                           // the end of cycle
            }                                                                                               // the end of condition
            if(popupTitle.innerHTML === 'Elf'){                                                             // if popupTitle = Elf
                const arrayOfElfStats = Object.values(race.elf.globalStats)                                 // convert values of race.elf.globalStats into array
                for(let i = 0; i < raceStats.length; i++){                                                  // start of a cycle
                    raceStats[i].innerHTML = arrayOfElfStats[i];                                            // fill raceStats with proper stats from array
                }                                                                                           // the end of cycle
            }                                                                                               // the end of condition
        })                                                                                                  // the end of event
    })                                                                                                      // the end of cycle
    chooseYourClass()                                                                                       // call a function
}

function closePopup(){
    popup.classList.remove('show-popup');
    body.classList.remove('noscroll');
}