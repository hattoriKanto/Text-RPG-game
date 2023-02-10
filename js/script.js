import race from './stats.mjs';

const popupInfoAboutRace = document.querySelector('#popup__race');

const body = document.querySelector('body');

const popupOverlay = document.querySelector('.overlay');

const popupInfoHealthPoints = document.querySelector('#HP__value');

const popupInfoArmourPoints = document.querySelector('#AP__value');

const popupInfoManaPoints = document.querySelector('#MP__value');

const closePopupInfoAboutRace = document.querySelector('#close__race__popup');

const popupInfoContentTitle = document.querySelector('.content__title');

const raceHuman = document.querySelector('#race__human');

const raceDwarf = document.querySelector('#race__dwarf');

const raceElf = document.querySelector('#race__elf');

const infoAboutRaces = document.querySelectorAll('.option__info');

const screenClass = document.querySelector('.screen__class');

closePopupInfoAboutRace.addEventListener('click', closePopup);

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

raceHuman.addEventListener('click', () =>{
    player.race = raceHuman.innerHTML;
    player.stats.healthPoints = race.human.healthPoints;
    player.stats.armourPoints = race.human.armourPoints;
    player.stats.manaPoints = race.human.manaPoints;
    console.log(`Player's race is ${player.race}. HP is ${player.stats.healthPoints}. AP is ${player.stats.armourPoints}. MP is ${player.stats.manaPoints}`);
    raceHuman.closest('.screen').classList.add('hide');
    screenClass.classList.remove('hide');
    chooseYourClass()
})

raceDwarf.addEventListener('click', () =>{
    player.race = raceDwarf.innerHTML;
    player.stats.healthPoints = race.dwarf.healthPoints;
    player.stats.armourPoints = race.dwarf.armourPoints;
    player.stats.manaPoints = race.dwarf.manaPoints;
    console.log(`Player's race is ${player.race}. HP is ${player.stats.healthPoints}. AP is ${player.stats.armourPoints}. MP is ${player.stats.manaPoints}`);
    raceDwarf.closest('.screen').classList.add('hide');
    screenClass.classList.remove('hide');
    chooseYourClass()
})

raceElf.addEventListener('click', () =>{
    player.race = raceElf.innerHTML;
    player.stats.healthPoints = race.elf.healthPoints;
    player.stats.armourPoints = race.elf.armourPoints;
    player.stats.manaPoints = race.elf.manaPoints;
    console.log(`Player's race is ${player.race}. HP is ${player.stats.healthPoints}. AP is ${player.stats.armourPoints}. MP is ${player.stats.manaPoints}`);
    raceElf.closest('.screen').classList.add('hide');
    screenClass.classList.remove('hide');
    chooseYourClass()
})

infoAboutRaces.forEach(elem =>{
    elem.addEventListener('click', () =>{
        popupInfoAboutRace.classList.add('show-popup');
        body.classList.add('noscroll');
        popupInfoContentTitle.innerHTML = elem.closest('.choose__option').querySelector('.option__btn').innerHTML;
        if(popupInfoContentTitle.innerHTML === 'Human'){
            popupInfoHealthPoints.innerHTML = race.human.healthPoints;
            popupInfoArmourPoints.innerHTML = race.human.armourPoints;
            popupInfoManaPoints.innerHTML = race.human.manaPoints;
        }

        if(popupInfoContentTitle.innerHTML === 'Dwarf'){
            popupInfoHealthPoints.innerHTML = race.dwarf.healthPoints;
            popupInfoArmourPoints.innerHTML = race.dwarf.armourPoints;
            popupInfoManaPoints.innerHTML = race.dwarf.manaPoints;
        }

        if(popupInfoContentTitle.innerHTML === 'Elf'){
            popupInfoHealthPoints.innerHTML = race.elf.healthPoints;
            popupInfoArmourPoints.innerHTML = race.elf.armourPoints;
            popupInfoManaPoints.innerHTML = race.elf.manaPoints;
        }
    })
})

function closePopup(){
    popupInfoAboutRace.classList.remove('show-popup');
    body.classList.remove('noscroll');
}

function chooseYourClass(){
    const classOption = screenClass.querySelectorAll('.option__btn');
}