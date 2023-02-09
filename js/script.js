import {race} from './stats.mjs';

const raceHuman = document.querySelector('#race__human');

const raceDwarf = document.querySelector('#race__dwarf');

const raceElf = document.querySelector('#race__elf');

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
    player.stats.healthPoints = race.human.healthPoints
    console.log(`Players race is ${player.race}. HP is ${player.stats.healthPoints}`);
})

raceDwarf.addEventListener('click', () =>{
    console.log('Player choose Dwarf');
    player.race = raceDwarf.innerHTML;
    console.log(player.race);
})

raceElf.addEventListener('click', () =>{
    console.log('Player choose Elf');
    player.race = raceElf.innerHTML;
    console.log(player.race);
})