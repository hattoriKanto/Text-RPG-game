
/// IMPORTS---START ///

import { disableButtons, enableButtons } from "./globalFunctions.js";

import { player } from "./player.js";

import { enemiesTraits } from "./enemies/enemiesTraits.js";

import weaponsTraits from "./racesClassesWeapons/weaponsTraits.js";

import { inventoryItems } from "./inventoryItems.js";

import images from "./images.js";

import { popupDeadEnemy, popupDeadPlayer, popupNotEnoughHealing, deadEnemyChangeItem, popupTurn, defaultBattleTable, popupVictory } from "./screen/battleScreen.js";

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

function battlePreparation(arrayRandomEnemiesKey, arrayEnemiesTiersKeyInBattle, nextFunction){

    const wrapperTable = document.querySelector('#battle').querySelector('#second-column').querySelector('.wrapper-battle-table');

    const enemyColumnInTableWrapper = wrapperTable.querySelector('.enemy-column');

    const playerColumnInTableWrapper = wrapperTable.querySelector('.player-column');

    const resultColumnInTableWrapper = wrapperTable.querySelector('.result-column');

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

            if(wrapperTable.contains(enemyColumnInTableWrapper) === false || wrapperTable.contains(resultColumnInTableWrapper) === false || wrapperTable.contains(playerColumnInTableWrapper) === false){

                defaultBattleTable();

            };

        });

    });

    document.querySelector('#battle').querySelector('#second-column').querySelectorAll('.wrapper-btns__btn').forEach(elem =>{

        elem.addEventListener('click', () =>{

            if(wrapperTable.contains(enemyColumnInTableWrapper) === false || wrapperTable.contains(resultColumnInTableWrapper) === false || wrapperTable.contains(playerColumnInTableWrapper) === false){

                defaultBattleTable();

            };

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

            let enemyTier = arrayEnemiesTiersKeyInBattle[i];

            const arrayOfEnemyTraits = Object.values(enemiesTraits[enemyTier][arrayRandomEnemiesKey[i]]);
    
            arrayOfEnemiesTraits.push(arrayOfEnemyTraits);
        
            arrayOfEnemiesTraits[activeEnemyIndex].forEach(elem =>{
    
                arrayOfActiveEnemyTraits.push(elem);
        
            });

        };

        console.log(arrayOfEnemiesTraits)

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
    
            playerTurn('attack', weapon, nextFunction);
    
        };
    
    };

};

function playerTurn(actionToDo, weapon, nextFunction){

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

            addDataToBattleTable('player', 'healing', null, playerHealthPoints);
    
            document.querySelector('#third-column').querySelectorAll('.list__item-battle-start')[0].querySelector('.list-item__span-battle-start').innerText = playerHealthPoints;

            setTimeout(() => {

                popupTurn('enemyTurnText');
        
                enemyTurn();
                
            }, '1000');

        };
    
    };

    if(actionToDo === 'attack'){

        if(arrayOfEnemiesTraits[activeEnemyIndex][0] === 0){

            console.log(arrayOfEnemiesTraits[activeEnemyIndex][0])

            popupDeadEnemy();

        }else{

            disableButtons();

            playerAttack(weapon, nextFunction);

        };

        function playerAttack(weapon, nextFunction){

            playerDamageToHealthPoints = player.playerTraits.attackPoints + player.weaponTraits[weapon].damageToHealthPoints;
    
            playerDamageToArmourPoints = player.playerTraits.attackPoints + player.weaponTraits[weapon].damageToArmourPoints;
    
            let enemyHealthPoints = arrayOfActiveEnemyTraits[0];
    
            let enemyArmourPoints = arrayOfActiveEnemyTraits[1];
    
            const enemyDefencePoints = arrayOfActiveEnemyTraits[3];
    
            if(enemyArmourPoints === 0){
        
                actionToDoHealth();
        
            }else if(enemyArmourPoints > 0){
        
                actionToDoArmour();
        
            };
    
            function actionToDoArmour(){
            
                let battleResult = null;
                
                if(enemyDefencePoints > playerDamageToArmourPoints || enemyDefencePoints === playerDamageToArmourPoints){
        
                    console.log(`Player hit enemy armour. Enemy armour is ${enemyArmourPoints}; enemy defence is ${enemyDefencePoints}; player attack is ${playerDamageToArmourPoints}. Calculation: ${enemyArmourPoints} - ${playerDamageToArmourPoints - enemyDefencePoints} = ${enemyArmourPoints - 0}.`);
        
                    battleResult = 0;
        
                    enemyArmourPoints = enemyArmourPoints - battleResult;
        
                } else{
        
                    console.log(`Player hit enemy armour. Enemy armour is ${enemyArmourPoints}; enemy defence is ${enemyDefencePoints}; player attack is ${playeractionToDoArmour}. Calculation: ${enemyArmourPoints} - (${playerDamageToArmourPoints} - ${enemyDefencePoints}) = ${enemyArmourPoints - (playerDamageToArmourPoints - enemyDefencePoints)}.`);
        
                    battleResult = playerDamageToArmourPoints - enemyDefencePoints;
        
                    enemyArmourPoints = enemyArmourPoints - battleResult;
        
                };

                addDataToBattleTable('player', 'attack armour', playerDamageToArmourPoints, battleResult);
                
                console.log(`Enemy armour is ${enemyArmourPoints}.`);
        
                if(enemyArmourPoints < 0){
        
                    console.log('Enemy armour is 0 now.');
        
                    enemyArmourPoints = 0;
            
                };
        
                arrayOfEnemiesTraits[activeEnemyIndex][1] = enemyArmourPoints;
        
                document.querySelector('.swiper-slide-active').querySelectorAll('.list__item-battle-start')[1].querySelector('.list-item__span-battle-start').innerText = enemyArmourPoints;
                
            };
    
            function actionToDoHealth(){
    
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

                addDataToBattleTable('player', 'attack health', playerDamageToHealthPoints, battleResult);
    
                console.log(`Enemy health is ${enemyHealthPoints}.`);
            
                if(enemyHealthPoints < 0){
        
                    console.log('Enemy health is 0 now.');
        
                    enemyHealthPoints = 0;
            
                };
    
                arrayOfEnemiesTraits[activeEnemyIndex][0] = enemyHealthPoints;
        
                document.querySelector('.swiper-slide-active').querySelectorAll('.list__item-battle-start')[0].querySelector('.list-item__span-battle-start').innerText = enemyHealthPoints;
    
                if(enemyHealthPoints === 0){
            
                    console.log('Enemy is dead now');
        
                    setTimeout(() => {
                        
                        deadEnemyChangeItem();
        
                    }, '650');
        
                };
    
            };

            areAllEnemiesDead(nextFunction);

        };
    
    };

    if(actionToDo === 'defence'){

        disableButtons();

        playerDefence(weapon);

        function playerDefence(weapon){

            playerDefencePoints = playerDefencePoints + player.weaponTraits[weapon].defencePoints;

            addDataToBattleTable('player', 'defence', null, player.weaponTraits[weapon].defencePoints);

            document.querySelector('#third-column').querySelectorAll('.list__item-battle-start')[3].querySelector('.list-item__span-battle-start').innerText = playerDefencePoints;

            setTimeout(() => {

                popupTurn('enemyTurnText');
        
                enemyTurn();
                
            }, '1000');

        };

    };

    function areAllEnemiesDead(nextFunction){

        let enemiesDead = true;

        for(let i = 0; i < arrayOfEnemiesTraits.length; i++){

            if(arrayOfEnemiesTraits[i][0] > 0){

                enemiesDead = false;

            };

        };

        setTimeout(() => {
            
            if(enemiesDead === true){
                
                popupVictory(nextFunction);
        
            }else{
    
                popupTurn('enemyTurnText');
            
                enemyTurn();
                    
            };

        }, '1000');

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

            actionToDoHealth();

        }else if( playerArmourPoints > 0 ){

            actionToDoArmour();

        };

        function actionToDoArmour(){

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

            addDataToBattleTable('enemy', 'attack armour', enemyAttack, battleResult);

            console.log(`Player armour is ${playerArmourPoints}.`);
    
            if(playerArmourPoints < 0){

                console.log('Player armour is 0 now.');
    
                playerArmourPoints = 0;
    
            };

            player.playerTraits.armourPoints = playerArmourPoints;

            document.querySelector('#third-column').querySelectorAll('.list__item-battle-start')[1].querySelector('.list-item__span-battle-start').innerText = playerArmourPoints;

        };

        function actionToDoHealth(){

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

            addDataToBattleTable('enemy', 'attack health', enemyAttack, battleResult);

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

                deleteEnemiesTraits();

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

    function deleteEnemiesTraits(){

        arrayOfEnemiesTraits.length = 0;

    };

};

function addDataToBattleTable(turn, actionToDo, damageInput, damageResult){

    const enemyColumn = document.querySelector('#battle').querySelector('#second-column').querySelector('.enemy-column');

    const playerColumn = document.querySelector('#battle').querySelector('#second-column').querySelector('.player-column');

    const resultColumn = document.querySelector('#battle').querySelector('#second-column').querySelector('.result-column');

    resultColumn.classList.add('result-column-animation-show');

    if(enemyColumn.classList.contains('enemy-column-animation-hide') === true && playerColumn.classList.contains('player-column-animation-hide') === true && resultColumn.classList.contains('result-column-animation-hide') === true){

        enemyColumn.classList.remove('enemy-column-animation-hide');

        playerColumn.classList.remove('player-column-animation-hide');
    
        resultColumn.classList.remove('result-column-animation-hide');
    };

    if(turn === 'player'){

        if(actionToDo === 'attack armour'){

            enemyColumn.querySelector('.trait-value').innerText = arrayOfEnemiesTraits[activeEnemyIndex][3];

            enemyColumn.querySelector('.trait-img').src = images.traits.defencePoints;
    
            playerColumn.querySelector('.trait-value').innerText = damageInput;
    
            playerColumn.querySelector('.trait-img').src = images.traits.attackPoints;

            if(damageResult > 0){

                resultColumn.querySelector('.trait-value').innerText = '-' + damageResult;

            }else{

                resultColumn.querySelector('.trait-value').innerText = damageResult;

            }

            resultColumn.querySelector('.trait-img').src = images.traits.armourPoints;

            enemyColumn.classList.add('enemy-column-animation-show');

            playerColumn.classList.add('player-column-animation-show');

        };

        if(actionToDo === 'attack health'){

            enemyColumn.querySelector('.trait-value').innerText = arrayOfEnemiesTraits[activeEnemyIndex][3];

            enemyColumn.querySelector('.trait-img').src = images.traits.defencePoints;
    
            playerColumn.querySelector('.trait-value').innerText = damageInput;
    
            playerColumn.querySelector('.trait-img').src = images.traits.attackPoints;

            if(damageResult > 0){

                resultColumn.querySelector('.trait-value').innerText = '-' + damageResult;

            }else{

                resultColumn.querySelector('.trait-value').innerText = damageResult;

            }

            resultColumn.querySelector('.trait-img').src = images.traits.healthPoints;

            enemyColumn.classList.add('enemy-column-animation-show');

            playerColumn.classList.add('player-column-animation-show');

        };

        if(actionToDo === 'healing'){

            resultColumn.querySelector('.trait-value').innerText = '+' + damageResult

            resultColumn.querySelector('.trait-img').src = images.traits.healthPoints;

        };

        if(actionToDo === 'defence'){

            resultColumn.querySelector('.trait-value').innerText = '+' + damageResult;

            resultColumn.querySelector('.trait-img').src = images.traits.defencePoints;

        };

    };

    if(turn === 'enemy'){

        enemyColumn.querySelector('.trait-value').innerText = damageInput;

        enemyColumn.querySelector('.trait-img').src = images.traits.attackPoints;

        playerColumn.querySelector('.trait-value').innerText = playerDefencePoints;

        playerColumn.querySelector('.trait-img').src = images.traits.defencePoints;

        if(actionToDo === 'attack armour'){

            if(damageResult > 0){

                resultColumn.querySelector('.trait-value').innerText = '-' + damageResult;

            }else{

                resultColumn.querySelector('.trait-value').innerText = damageResult;

            }

            resultColumn.querySelector('.trait-img').src = images.traits.armourPoints;

        };

        if(actionToDo === 'attack health'){

            if(damageResult > 0){

                resultColumn.querySelector('.trait-value').innerText = '-' + damageResult;

            }else{

                resultColumn.querySelector('.trait-value').innerText = damageResult;

            }

            resultColumn.querySelector('.trait-img').src = images.traits.healthPoints;

        };

        enemyColumn.classList.add('enemy-column-animation-show');

        playerColumn.classList.add('player-column-animation-show');

    };

};

/// FUNCTIONS---END ///

/// EXPORT---START ///

export { battlePreparation };

export { arrayOfEnemiesTraits };

/// EXPORT---START ///