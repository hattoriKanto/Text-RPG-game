
import race from '../race__stats.js';

const screenRace = document.querySelector('#race-screen');

const screenClass = document.querySelector('#class-screen');

function chooseYourRace(){

    screenRace.classList.remove('hide');                                                                    // remove CSS class .hide
    
    const optionInfo = screenRace.querySelectorAll('.option__info');                                        // all .option__info on screenRace

    const raceOption = screenRace.querySelectorAll('.option__btn');                                         // all .option__btn on screenRace

    const arrayRaces = Object.values(race);                                                                 // convert values of race into array

    const arrayPlayerStats = Object.values(player.stats);                                                   // convert values of player.stats into array for length

    for(let i = 0; i < raceOption.length; i++){                                                             // start of a cycle

        const arrayRacesStats = Object.values(arrayRaces[i].globalStats);                                   // convert values of a CHOSEN race into array

        raceOption[i].innerHTML = arrayRaces[i].raceName;                                                   // fill .option__btn from raceOption with races from arrayRaces

        raceOption[i].addEventListener('click', () =>{                                                      // add event to specific .option__btn

            const choosedRace = arrayRaces[i].class;                                                        // declare variable choosenRace to reuse it in next function as argument

            player.race = arrayRaces[i].raceName;                                                           // add race name to player{}

            for(let j = 0; j < arrayPlayerStats.length; j++){                                               // start of a cycle

                player.stats[Object.keys(player.stats)[j]] = arrayRacesStats[j];                            // fill player.stats value from arrayRaceStats

            }                                                                                               // end of a cycle

            screenClass.classList.remove('hide');                                                           // remove .hide from the next screen

            screenRace.classList.add('hide');                                                               // add .hide to the current screen

            chooseYourClass(choosedRace);                                                                   // call a function

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

};

function chooseYourClass(choosedRace){

    const classOption = screenClass.querySelectorAll('.option__btn');

    const classStats = popup.querySelectorAll('.stats__item span');

    const arrayOfClasses = Object.values(choosedRace);

    for(let i = 0; i < arrayOfClasses.length; i++){

        const arrayOfClassStats = Object.values(arrayOfClasses[i].classStats);

        const optionInfo = classOption[i].closest('.choose__option').querySelector('.option__info');

        classOption[i].innerHTML = arrayOfClasses[i].className;

        classOption[i].addEventListener('click', () =>{

            const choosedClass = arrayOfClasses[i];

            const playerStats = Object.values(player.stats);

            for(let j = 0; j < playerStats.length; j++){

                player.stats[Object.keys(player.stats)[j]] = playerStats[j] + arrayOfClassStats[j];

            }

            player.class = classOption[i].innerHTML;

            screenFirstWeapon.classList.remove('hide');

            screenClass.classList.add('hide');

            chooseYourWeapon(choosedClass);

        });

        optionInfo.addEventListener('click', () =>{

            popup.classList.add('show-popup');

            body.classList.add('noscroll');

            popupTitle.innerHTML = optionInfo.closest('.choose__option').querySelector('.option__btn').innerHTML;

            for(let j = 0; j < classStats.length; j++){

                classStats[j].innerHTML = arrayOfClassStats[j];

            }

        })

    }

};

function chooseYourWeapon(choosedClass){
    const weaponOptionFirstWeapon = screenFirstWeapon.querySelectorAll('.option__btn');
    const weaponOptionSecondWeapon = screenSecondWeapon.querySelectorAll('.option__btn');
    const weaponStats = popup.querySelectorAll('.weapon__content__stats .stats__item span');
    const arrayOfFirstWeapons = Object.values(choosedClass.startWeapon.firstWeapon);
    const arrayOfSecondWeapons = Object.values(choosedClass.startWeapon.secondWeapon);
    for(let i = 0; i < weaponOptionFirstWeapon.length; i++){
        weaponOptionFirstWeapon[i].innerHTML = arrayOfFirstWeapons[i].weaponName;
        weaponOptionFirstWeapon[i].closest('.choose__option').querySelector('.option__info').addEventListener('click', () =>{
            popup.classList.add('show-popup');
            body.classList.add('noscroll');
            popup.querySelector('.weapon__content__stats').classList.remove('hide');
            popup.querySelector('.content__stats').classList.add('hide');
            popupTitle.innerHTML = weaponOptionFirstWeapon[i].innerHTML;
            const arrayOfWeaponStats = Object.values(arrayOfFirstWeapons[i].weaponStats);
            for(let j = 0; j < weaponStats.length; j++){
                weaponStats[j].innerHTML = arrayOfWeaponStats[j];
            }
        })
        weaponOptionFirstWeapon[i].addEventListener('click', () =>{
            player.weapon.firstWeapon[Object.keys(player.weapon.firstWeapon)] = arrayOfFirstWeapons[i];                            
            screenSecondWeapon.classList.remove('hide');
            screenFirstWeapon.classList.add('hide');
            for(let i = 0; i < weaponOptionSecondWeapon.length; i++){
                weaponOptionSecondWeapon[i].innerHTML = arrayOfSecondWeapons[i].weaponName;
                weaponOptionSecondWeapon[i].closest('.choose__option').querySelector('.option__info').addEventListener('click', () =>{
                    popup.classList.add('show-popup');
                    body.classList.add('noscroll');
                    popup.querySelector('.weapon__content__stats').classList.remove('hide');
                    popup.querySelector('.content__stats').classList.add('hide');
                    popupTitle.innerHTML = weaponOptionSecondWeapon[i].innerHTML;
                    const arrayOfWeaponStats = Object.values(arrayOfSecondWeapons[i].weaponStats);
                    for(let j = 0; j < weaponStats.length; j++){
                        weaponStats[j].innerHTML = arrayOfWeaponStats[j];
                    }
                })
                weaponOptionSecondWeapon[i].addEventListener('click', () =>{
                    player.weapon.secondWeapon[Object.keys(player.weapon.secondWeapon)] = arrayOfSecondWeapons[i];
                    screenSecondWeapon.classList.add('hide');
                    screenCharacterOverview.classList.remove('hide');
                    characterOverview(); 
                })
            }
        })
    }
};

function characterOverview(){
    const arrayOfPlayer = Object.values(player);
    const arrayOfPlayerStats = Object.values(player.stats);
    const arrayOfPlayerWeapons = Object.values(player.weapon);
    const listOfRaceClass = screenCharacterOverview.querySelectorAll('.item__span');
    const listOfStats = screenCharacterOverview.querySelectorAll('.race-and-class-stats__span');
    const listOfWeapons = screenCharacterOverview.querySelectorAll('.weapons__span');
    for(let i = 0; i < listOfRaceClass.length; i++){
        listOfRaceClass[i].innerHTML = arrayOfPlayer[i]; 
    };
    for(let j = 0; j < listOfStats.length; j++){
        listOfStats[j].innerHTML = arrayOfPlayerStats[j];
    };
    for(let i = 0; i < listOfWeapons.length; i++){
        const arrayOfWeapon = Object.values(arrayOfPlayerWeapons[i]);
        listOfWeapons[i].innerHTML = arrayOfWeapon[0].weaponName;
        listOfWeapons[i].closest('.weapons__item').querySelector('.weapons__btn').addEventListener('click', () =>{
            popup.classList.add('show-popup');
            body.classList.add('noscroll');
            popup.querySelector('.weapon__content__stats').classList.remove('hide');
            popup.querySelector('.content__stats').classList.add('hide');
            popupTitle.innerHTML = arrayOfWeapon[0].weaponName;
            const weaponStats = popup.querySelectorAll('.weapon__content__stats .stats__item span');
            const arrayOfWeaponStats = Object.values(arrayOfWeapon[0].weaponStats);
            for(let j = 0; j < weaponStats.length; j++){
                weaponStats[j].innerHTML = arrayOfWeaponStats[j];
            }
        })
    };
    screenCharacterOverview.querySelectorAll('.footer__btn').forEach(elem =>{
        elem.addEventListener('click', () =>{
            if(elem.classList.contains('back-btn') === true){
                screenCharacterOverview.classList.add('hide');
                screenRace.classList.remove('hide');
                if(popup.querySelector('.content__stats').classList.contains('hide') === true){
                    popup.querySelector('.weapon__content__stats').classList.add('hide');
                    popup.querySelector('.content__stats').classList.remove('hide');
                }
            }
            screenCharacterOverview.classList.add('hide');
            chooseLocation();
        })
    })
};

export default chooseYourRace;