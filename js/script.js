import race from './stats.mjs';

const popup = document.querySelector('#popup');

const popupOverlay = document.querySelector('.overlay');

const popupTitle = document.querySelector('#popup .content__title');

const closePopupBtn = document.querySelector('#close__popup');

const popupInfoHealthPoints = document.querySelector('#HP__value');

const popupInfoArmourPoints = document.querySelector('#AP__value');

const popupInfoManaPoints = document.querySelector('#MP__value');

const body = document.querySelector('body');

const raceHuman = document.querySelector('#race__human');

const raceDwarf = document.querySelector('#race__dwarf');

const raceElf = document.querySelector('#race__elf');

const optionInfo = document.querySelectorAll('.option__info');

const screenClass = document.querySelector('.screen__class');

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

optionInfo.forEach(elem =>{
    elem.addEventListener('click', () =>{
        const raceStats = document.querySelectorAll('.stats__item span');
        popup.classList.add('show-popup');
        body.classList.add('noscroll');
        popupTitle.innerHTML = elem.closest('.choose__option').querySelector('.option__btn').innerHTML;
        if(popupTitle.innerHTML === 'Human'){
            const arrayOfHumanStats = Object.values(race.human.globalStats)
            for(let i = 0; i < raceStats.length; i++){
                raceStats[i].innerHTML = arrayOfHumanStats[i];
            }
        }

        if(popupTitle.innerHTML === 'Dwarf'){
            const arrayOfDwarfStats = Object.values(race.dwarf.globalStats)
            for(let i = 0; i < raceStats.length; i++){
                raceStats[i].innerHTML = arrayOfDwarfStats[i];
            }
        }

        if(popupTitle.innerHTML === 'Elf'){
            const arrayOfElfStats = Object.values(race.elf.globalStats)
            for(let i = 0; i < raceStats.length; i++){
                raceStats[i].innerHTML = arrayOfElfStats[i];
            }
        }
    })
})

function closePopup(){
    popup.classList.remove('show-popup');
    body.classList.remove('noscroll');
}

function chooseYourClass(){
    const classOption = screenClass.querySelectorAll('.option__btn');
    const classStats = document.querySelectorAll('.stats__item span');
    if(player.race === 'Human'){
        const arrayOfHumanClasses = Object.values(race.human.class)
        for(let i = 0; i < classOption.length; i++){
            const closestOPtionInfo = classOption[i].closest('.choose__option').querySelector('.option__info');
            closestOPtionInfo.addEventListener('click', () =>{
                popupTitle.innerHTML = arrayOfHumanClasses[i].className;
            })
            classOption[i].innerHTML = arrayOfHumanClasses[i].className;
        }
    }

    if(player.race === 'Dwarf'){
        const arrayOfDwarfClasses = Object.values(race.dwarf.class)
        for(let i = 0; i < classOption.length; i++){
            classOption[i].innerHTML = arrayOfDwarfClasses[i].className;
        }
    }

    if(player.race === 'Elf'){
        const arrayOfElfClasses = Object.values(race.elf.class)
        for(let i = 0; i < classOption.length; i++){
            classOption[i].innerHTML = arrayOfElfClasses[i].className;
        }
    }
}