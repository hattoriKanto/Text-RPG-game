
/// IMPORTS---START ///

import { disableButtons, enableButtons } from "./globalFunctions.js";

import { player } from "./player.js";

import { enemiesTraits } from "./enemies/enemiesTraits.js";

import weaponsTraits from "./racesClassesWeapons/weaponsTraits.js";

import { inventoryItems } from "./inventoryItems.js";

import { popupDeadEnemy, popupDeadPlayer, popupNotEnoughHealing, deadEnemyChangeItem, popupTurn } from "./screen/battleScreen.js";

/// IMPORTS---END ///

/// GLOBAL---VARIABLES---START ///

let playerHealthPoints = null;

let playerArmourPoints = null;

let playerDefencePoints = null;

let playerDamageToHealthPoints = null;

let playerDamageToArmourPoints = null;

const arrayOfEnemiesTraits = [];

const arrayOfActiveEnemyTraits = [];

let enemyIndex = 0;

let activeEnemyIndex = 0;

/// GLOBAL---VARIABLES---END ///

/// FUNCTIONS---START ///

function battlePreparation(arrayRandomEnemiesKey, enemyTier){

    setTimeout(() => {

        enableButtons();
        
    }, '1000');

    document.querySelector('#battle').querySelector('#first-column').querySelectorAll('.item__btn').forEach(elem =>{

        elem.addEventListener('click', () =>{

            document.querySelector('#battle').querySelectorAll('.first-column__item-battle-start').forEach((elem, index) =>{

                if(elem.classList.contains('swiper-slide-active') === true){

                    activeEnemyIndex = index;

                    arrayOfEnemiesTraits[activeEnemyIndex].forEach(elem =>{

                        arrayOfActiveEnemyTraits.push(elem);
                
                    });

                    console.log(`Active enemy is ${arrayRandomEnemiesKey[activeEnemyIndex]}. Health is ${arrayOfActiveEnemyTraits[0]}, armour is ${arrayOfActiveEnemyTraits[1]}.`);

                };

            });

        });

    });

    document.querySelector('#battle').querySelector('#second-column').querySelectorAll('.wrapper-btns__btn').forEach(elem =>{

        elem.addEventListener('click', () =>{

            if(elem.classList.contains('first-weapon-button') === true){

                isWeaponShield('firstWeapon');
                
            };

            if(elem.classList.contains('second-weapon-button') === true){
                
                isWeaponShield('secondWeapon');

            };

            if(elem.classList.contains('healing-potion-button') === true){

                playerTurn('healing', null);

            };

        });

    });

    addPlayerTraits();

    addEnemiesTraits();

    function addPlayerTraits(){

        playerHealthPoints = player.playerTraits.healthPoints;

        playerArmourPoints = player.playerTraits.armourPoints;

        playerDefencePoints = player.playerTraits.defencePoints;

    };

    function addEnemiesTraits(){

        for(let i = 0; i < arrayRandomEnemiesKey.length; i++){

            const arrayOfEnemyTraits = Object.values(enemiesTraits[enemyTier][arrayRandomEnemiesKey[i]]);

            arrayOfEnemiesTraits.push(arrayOfEnemyTraits);

        };

        arrayOfEnemiesTraits[activeEnemyIndex].forEach(elem =>{

            arrayOfActiveEnemyTraits.push(elem);
    
        });

    };

    function isWeaponShield(weapon){

        const playerWeaponKey = player.playerKey.weaponKeys[weapon];
    
        const playerWeaponTypeKey = player.playerKey.weaponsTypeKeys[weapon];
    
        const playerRace = player.playerKey.race;
    
        const isShield = weaponsTraits[playerRace][playerWeaponTypeKey][playerWeaponKey].isShield;
    
        if(isShield === true){
    
            playerTurn('defence', weapon);
    
        };
    
        if(isShield === false){
    
            playerTurn('attack', weapon);
    
        };
    
    };

};

function playerTurn(actionToDo, weapon){

    if(actionToDo === 'healing'){

        if(inventoryItems.healingPotion === 0){
        
            popupNotEnoughHealing();

        }else{

            disableButtons();

            playerHealing();

        };

        function playerHealing(){

            inventoryItems.healingPotion = inventoryItems.healingPotion - 1;
    
            playerHealthPoints = 10;
    
            document.querySelector('#third-column').querySelectorAll('.list__item-battle-start')[0].querySelector('.list-item__span-battle-start').innerText = playerHealthPoints;

            setTimeout(() => {

                popupTurn('enemyTurnText');
        
                enemyTurn();
                
            }, '1000');

        };
    
    };

    if(actionToDo === 'attack'){

        if(arrayOfEnemiesTraits[activeEnemyIndex][0] === 0){

            popupDeadEnemy();

        }else{

            disableButtons();

            playerAttack(weapon);

        };

        function playerAttack(weapon){

            playerDamageToHealthPoints = player.playerTraits.attackPoints + player.weaponTraits[weapon].damageToHealthPoints;
    
            playerDamageToArmourPoints = player.playerTraits.attackPoints + player.weaponTraits[weapon].damageToArmourPoints;
    
            let enemyHealthPoints = arrayOfActiveEnemyTraits[0];
    
            let enemyArmourPoints = arrayOfActiveEnemyTraits[1];
    
            const enemyDefencePoints = arrayOfActiveEnemyTraits[3];
    
            if(enemyArmourPoints === 0){
        
                damageToHealth();
        
            }else if(enemyArmourPoints > 0){
        
                damageToArmour();
        
            };
    
            function damageToArmour(){
            
                let battleResult = null;
                
                if(enemyDefencePoints > playerDamageToArmourPoints || enemyDefencePoints === playerDamageToArmourPoints){
        
                    console.log(`Player hit enemy armour. Enemy armour is ${enemyArmourPoints}; enemy defence is ${enemyDefencePoints}; player attack is ${playerDamageToArmourPoints}. Calculation: ${enemyArmourPoints} - ${playerDamageToArmourPoints - enemyDefencePoints} = ${enemyArmourPoints - 0}.`);
        
                    battleResult = 0;
        
                    enemyArmourPoints = enemyArmourPoints - battleResult;
        
                } else{
        
                    console.log(`Player hit enemy armour. Enemy armour is ${enemyArmourPoints}; enemy defence is ${enemyDefencePoints}; player attack is ${playerDamageToArmour}. Calculation: ${enemyArmourPoints} - (${playerDamageToArmourPoints} - ${enemyDefencePoints}) = ${enemyArmourPoints - (playerDamageToArmourPoints - enemyDefencePoints)}.`);
        
                    battleResult = playerDamageToArmourPoints - enemyDefencePoints;
        
                    enemyArmourPoints = enemyArmourPoints - battleResult;
        
                };
                
                console.log(`Enemy armour is ${enemyArmourPoints}.`);
        
                if(enemyArmourPoints < 0){
        
                    console.log('Enemy armour is 0 now.');
        
                    enemyArmourPoints = 0;
            
                };
        
                arrayOfEnemiesTraits[activeEnemyIndex][1] = enemyArmourPoints;
        
                document.querySelector('.swiper-slide-active').querySelectorAll('.list__item-battle-start')[1].querySelector('.list-item__span-battle-start').innerText = enemyArmourPoints;
                
            };
    
            function damageToHealth(){
    
                let battleResult = null;
        
                if(enemyDefencePoints > playerDamageToHealthPoints || enemyDefencePoints === playerDamageToHealthPoints){
        
                    console.log(`Player hit enemy health. Enemy health is ${enemyHealthPoints}; enemy defence is ${enemyDefencePoints}; player attack is ${playerDamageToHealthPoints}. Calculation: ${enemyHealthPoints} - ${playerDamageToHealthPoints - enemyDefencePoints} = ${enemyHealthPoints - 0}.`);
        
                    battleResult = 0;
        
                    enemyHealthPoints = enemyHealthPoints - battleResult;
        
                } else{
        
                    console.log(`Player hit enemy health. Enemy health is ${enemyHealthPoints}; enemy defence is ${enemyDefencePoints}; player attack is ${playerDamageToHealthPoints}. Calculation: ${enemyHealthPoints} - (${playerDamageToHealthPoints} - ${enemyDefencePoints}) = ${enemyHealthPoints - (playerDamageToHealthPoints - enemyDefencePoints)}.`);
        
                    battleResult = playerDamageToHealthPoints - enemyDefencePoints;
        
                    enemyHealthPoints = enemyHealthPoints - battleResult;
        
                };
    
                console.log(`Enemy health is ${enemyHealthPoints}.`);
            
                if(enemyHealthPoints < 0){
        
                    console.log('Enemy health is 0 now.');
        
                    enemyHealthPoints = 0;
            
                };
    
                arrayOfEnemiesTraits[activeEnemyIndex][0] = enemyHealthPoints;
        
                document.querySelector('.swiper-slide-active').querySelectorAll('.list__item-battle-start')[0].querySelector('.list-item__span-battle-start').innerText = enemyHealthPoints;
    
                if(enemyHealthPoints === 0){
    
                    arrayOfEnemiesTraits[activeEnemyIndex][4] = false;
        
                    console.log('Enemy is dead now');
        
                    setTimeout(() => {
                        
                        deadEnemyChangeItem();
        
                    }, '650');
        
                };
    
            };

            setTimeout(() => {

                popupTurn('enemyTurnText');
        
                enemyTurn();
                
            }, '1000');

        };
    
    };

    if(actionToDo === 'defence'){

        disableButtons();

        playerDefence(weapon);

        function playerDefence(weapon){

            playerDefencePoints = playerDefencePoints + player.weaponTraits[weapon].defencePoints;

            document.querySelector('#third-column').querySelectorAll('.list__item-battle-start')[3].querySelector('.list-item__span-battle-start').innerText = playerDefencePoints;

            setTimeout(() => {

                popupTurn('enemyTurnText');
        
                enemyTurn();
                
            }, '1000');

        };

    };

};

function enemyTurn(){

    if(arrayOfEnemiesTraits[enemyIndex][0] === 0){

        console.log(`Skip enemy on ${enemyIndex} index.`);

        enemyIndex++;

    };

    setTimeout(() => {

        console.log(`Enemy on ${enemyIndex} index is attacking now.`);
            
        const enemyAttack = arrayOfEnemiesTraits[enemyIndex][2];
        
        if(playerArmourPoints === 0){

            damageToHealth();

        }else if( playerArmourPoints > 0 ){

            damageToArmour();

        };

        function damageToArmour(){

            let battleResult = null;

            if(playerDefencePoints > enemyAttack || playerDefencePoints === enemyAttack){

                console.log(`Enemy hit player armour. Player armour is ${playerArmourPoints}; player defence is ${playerDefencePoints}; enemy attack is ${enemyAttack}. Calculation: ${playerArmourPoints} - (${enemyAttack} - ${playerDefencePoints}) = ${playerArmourPoints - 0}.`);

                battleResult = 0;

                playerArmourPoints = playerArmourPoints - battleResult;

            } else{

                console.log(`Enemy hit player armour. Player armour is ${playerArmourPoints}; player defence is ${playerDefencePoints}; enemy attack is ${enemyAttack}. Calculation: ${playerArmourPoints} - (${enemyAttack} - ${playerDefencePoints}) = ${playerArmourPoints - (enemyAttack - playerDefencePoints)}.`);

                battleResult = enemyAttack - playerDefencePoints;

                playerArmourPoints = playerArmourPoints - battleResult;

            };

            console.log(`Player armour is ${playerArmourPoints}.`);
    
            if(playerArmourPoints < 0){

                console.log('Player armour is 0 now.');
    
                playerArmourPoints = 0;
    
            };

            player.playerTraits.armourPoints = playerArmourPoints;

            document.querySelector('#third-column').querySelectorAll('.list__item-battle-start')[1].querySelector('.list-item__span-battle-start').innerText = playerArmourPoints;

        };

        function damageToHealth(){

            let battleResult = null;

            if(playerDefencePoints > enemyAttack || playerDefencePoints === enemyAttack){

                console.log(`Enemy hit player health. Player health is ${playerHealthPoints}; player defence is ${playerDefencePoints}; enemy attack is ${enemyAttack}. Calculation: ${playerHealthPoints} - (${enemyAttack - playerDefencePoints}) = ${playerHealthPoints - 0}.`);

                battleResult = 0;
                
                playerHealthPoints = playerHealthPoints - battleResult;

            } else{

                console.log(`Enemy hit player health. Player health is ${playerHealthPoints}; player defence is ${playerDefencePoints}; enemy attack is ${enemyAttack}. Calculation: ${playerHealthPoints} - (${enemyAttack} - ${playerDefencePoints}) = ${playerHealthPoints - (enemyAttack - playerDefencePoints)}.`);

                battleResult = enemyAttack - playerDefencePoints;

                playerHealthPoints = playerHealthPoints - battleResult;

            };
                
            if(playerHealthPoints < 0){

                console.log('PLayer health is 0 now.');

                playerHealthPoints = 0;
    
            };

            console.log(`Player health is ${playerHealthPoints}.`);

            document.querySelector('#third-column').querySelectorAll('.list__item-battle-start')[0].querySelector('.list-item__span-battle-start').innerText = playerHealthPoints;

        };

        enemyIndex++;
        
        if(enemyIndex === document.querySelector('#battle').querySelectorAll('.first-column__item-battle-start').length){

            enemyIndex = 0;

        };

        isPlayerDead();

    }, '3500');

    function isPlayerDead(){

        if(playerHealthPoints === 0){
    
            enemyIndex = 0;
    
            activeEnemyIndex = 0;
    
            setTimeout(() => {
    
                popupDeadPlayer();

                setTimeout(() => {
        
                    enableButtons();
                    
                }, '1000');
                
            }, '2000');
    
        };
    
        if(playerHealthPoints > 0){

            setTimeout(() => {

                if(playerDefencePoints != player.playerTraits.defencePoints){
        
                    playerDefencePoints = player.playerTraits.defencePoints;
        
                    document.querySelector('#third-column').querySelectorAll('.list__item-battle-start')[3].querySelector('.list-item__span-battle-start').innerText = playerDefencePoints;
        
                };
        
                popupTurn('playerTurnText');
        
                setTimeout(() => {
        
                    enableButtons();
                    
                }, '1000');
                
            }, '2000');

        };
    
    };

};

/// FUNCTIONS---END ///

/// EXPORT---START ///

export { battlePreparation };

/// EXPORT---START ///