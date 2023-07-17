
import player from "./player.js";

import { inventoryItems } from "./inventoryItems.js";

import enemiesTraits from "./enemies/enemiesTraits.js";

import { popupTurn } from "./screen/battleScreen.js";

import { popupDeadPlayer } from "./screen/battleScreen.js";

import images from "./images.js";

let activeEnemyIndex = 0;

const arrayEnemiesTraits = [];

const arrayActiveEnemyTraits = [];

let enemyIndex = 0;

/// REPEATABLE---FUNCTIONS---START ///

function disableButtons(){

    document.querySelectorAll('button').forEach(elem =>{

        elem.disabled = true;

    });

};

function enableButtons(){

    document.querySelectorAll('button').forEach(elem =>{

        elem.disabled = false;

    });

};

function addDataToBattleTable(turn, damageTo, damageInput, damageResult){

    const enemyColumn = document.querySelector('#battle').querySelector('#second-column').querySelector('.enemy-column');

    const playerColumn = document.querySelector('#battle').querySelector('#second-column').querySelector('.player-column');

    const resultColumn = document.querySelector('#battle').querySelector('#second-column').querySelector('.result-column');
            
    enemyColumn.classList.add('enemy-column-animation-show');

    playerColumn.classList.add('player-column-animation-show');

    resultColumn.classList.add('result-column-animation-show');

    if(enemyColumn.classList.contains('enemy-column-animation-hide') === true && playerColumn.classList.contains('player-column-animation-hide') === true && resultColumn.classList.contains('result-column-animation-hide') === true){

        enemyColumn.classList.remove('enemy-column-animation-hide');

        playerColumn.classList.remove('player-column-animation-hide');
    
        resultColumn.classList.remove('result-column-animation-hide');
    };

    if(turn === 'player'){

        enemyColumn.querySelector('.trait-value').innerText = arrayEnemiesTraits[activeEnemyIndex][3];

        enemyColumn.querySelector('.trait-img').src = images.traits.defencePoints;

        playerColumn.querySelector('.trait-value').innerText = damageInput;

        playerColumn.querySelector('.trait-img').src = images.traits.attackPoints;

        if(damageTo === 'armour'){

            if(damageResult > 0){

                resultColumn.querySelector('.trait-value').innerText = '-' + damageResult;

            }else{

                resultColumn.querySelector('.trait-value').innerText = damageResult;

            }

            resultColumn.querySelector('.trait-img').src = images.traits.armourPoints;

        };

        if(damageTo === 'health'){

            if(damageResult > 0){

                resultColumn.querySelector('.trait-value').innerText = '-' + damageResult;

            }else{

                resultColumn.querySelector('.trait-value').innerText = damageResult;

            }

            resultColumn.querySelector('.trait-img').src = images.traits.healthPoints;

        };

    };

    if(turn === 'enemy'){

        enemyColumn.querySelector('.trait-value').innerText = damageInput;

        enemyColumn.querySelector('.trait-img').src = images.traits.attackPoints;

        playerColumn.querySelector('.trait-value').innerText = player.playerTraits.defencePoints;

        playerColumn.querySelector('.trait-img').src = images.traits.defencePoints;

        if(damageTo === 'armour'){

            if(damageResult > 0){

                resultColumn.querySelector('.trait-value').innerText = '-' + damageResult;

            }else{

                resultColumn.querySelector('.trait-value').innerText = damageResult;

            }

            resultColumn.querySelector('.trait-img').src = images.traits.armourPoints;

        };

        if(damageTo === 'health'){

            if(damageResult > 0){

                resultColumn.querySelector('.trait-value').innerText = '-' + damageResult;

            }else{

                resultColumn.querySelector('.trait-value').innerText = damageResult;

            }

            resultColumn.querySelector('.trait-img').src = images.traits.healthPoints;

        };

    };

};

/// REPEATABLE---FUNCTIONS---END ///

function battle(arrayRandomEnemiesKey, enemyTier){

    const weaponTraits = Object.values(player.weaponTraits.firstWeapon);

    let playerHealthPoints = player.playerTraits.healthPoints;

    let playerArmourPoints = player.playerTraits.armourPoints;

    const playerDefencePoints = player.playerTraits.defencePoints + weaponTraits[2];
    
    const playerDamageToHealth = player.playerTraits.attackPoints + weaponTraits[1];

    const playerDamageToArmour = player.playerTraits.attackPoints + weaponTraits[0];

    for( let i = 0; i < arrayRandomEnemiesKey.length; i++){

        const arrayTraits = Object.values(enemiesTraits[enemyTier][arrayRandomEnemiesKey[i]]);

        arrayEnemiesTraits.push(arrayTraits);

    };

    arrayEnemiesTraits[activeEnemyIndex].forEach(elem =>{

        arrayActiveEnemyTraits.push(elem);

    });

    document.querySelector('#battle').querySelector('#first-column').querySelectorAll('.item__btn').forEach(elem =>{

        elem.addEventListener('click', () =>{

            document.querySelector('#battle').querySelectorAll('.first-column__item-battle-start').forEach((elem, index) =>{

                if(elem.classList.contains('swiper-slide-active') === true){

                    activeEnemyIndex = index;

                    arrayEnemiesTraits[activeEnemyIndex].forEach(elem =>{

                        arrayActiveEnemyTraits.push(elem);
                
                    });

                    console.log(`Active enemy is ${arrayRandomEnemiesKey[activeEnemyIndex]}. Health is ${arrayEnemiesTraits[activeEnemyIndex][0]}, armour is ${arrayEnemiesTraits[activeEnemyIndex][1]}.`);

                };

            });

        });

    });

    playerTurn();

    function playerTurn(){

        disableButtons();
        
        console.log('Buttons is disabled.');

        setTimeout(() => {

            enableButtons();

            console.log('Buttons is enabled.');
            
        }, '3000');

        document.querySelector('#battle').querySelector('#second-column').querySelectorAll('.wrapper-btns__btn').forEach(elem =>{

            elem.addEventListener('click', () =>{

                if(elem.classList.contains('first-weapon-button') === true){

                    disableButtons();
        
                    console.log('Buttons is disabled.');

                    playerAttack();
    
                };
    
                if(elem.classList.contains('healing-potion-button') === true){
    
                    healingPotion();
    
                };

            });

        })

        function playerAttack(){

            let enemyHealthPoints = arrayEnemiesTraits[activeEnemyIndex][0];
            
            let enemyArmourPoints = arrayEnemiesTraits[activeEnemyIndex][1];
        
            const enemyDefencePoints = arrayEnemiesTraits[activeEnemyIndex][3];
        
            if(enemyArmourPoints === 0){
        
                damageToHealth();
        
            }else if(enemyArmourPoints > 0){
        
                damageToArmour();
        
            };
        
            function damageToArmour(){
        
                let battleResult = null;
                
                if(enemyDefencePoints > playerDamageToArmour || enemyDefencePoints === playerDamageToArmour){
        
                    console.log(`Player hit enemy armour. Enemy armour is ${enemyArmourPoints}; enemy defence is ${enemyDefencePoints}; player attack is ${playerDamageToArmour}. Calculation: ${enemyArmourPoints} - ${playerDamageToArmour - enemyDefencePoints} = ${enemyArmourPoints - 0}.`);
        
                    battleResult = 0;
        
                    enemyArmourPoints = enemyArmourPoints - battleResult;
        
                } else{
        
                    console.log(`Player hit enemy armour. Enemy armour is ${enemyArmourPoints}; enemy defence is ${enemyDefencePoints}; player attack is ${playerDamageToArmour}. Calculation: ${enemyArmourPoints} - (${playerDamageToArmour} - ${enemyDefencePoints}) = ${enemyArmourPoints - (playerDamageToArmour - enemyDefencePoints)}.`);
        
                    battleResult = playerDamageToArmour - enemyDefencePoints;
        
                    enemyArmourPoints = enemyArmourPoints - battleResult;
        
                };
        
                addDataToBattleTable('player', 'armour', playerDamageToArmour, battleResult);
        
                console.log(`Enemy armour is ${enemyArmourPoints}.`);
        
                if(enemyArmourPoints < 0){
        
                    console.log('Enemy armour is 0 now.');
        
                    enemyArmourPoints = 0;
            
                };
        
                arrayEnemiesTraits[activeEnemyIndex][1] = enemyArmourPoints;
        
                document.querySelector('.swiper-slide-active').querySelectorAll('.list__item-battle-start')[1].querySelector('.list-item__span-battle-start').innerText = enemyArmourPoints;
                
            };
        
            function damageToHealth(){
        
                let battleResult = null;
        
                if(enemyDefencePoints > playerDamageToHealth || enemyDefencePoints === playerDamageToHealth){
        
                    console.log(`Player hit enemy health. Enemy health is ${enemyHealthPoints}; enemy defence is ${enemyDefencePoints}; player attack is ${playerDamageToHealth}. Calculation: ${enemyHealthPoints} - ${playerDamageToHealth - enemyDefencePoints} = ${enemyHealthPoints - 0}.`);
        
                    battleResult = 0;
        
                    enemyHealthPoints = enemyHealthPoints - battleResult;
        
                } else{
        
                    console.log(`Player hit enemy health. Enemy health is ${enemyHealthPoints}; enemy defence is ${enemyDefencePoints}; player attack is ${playerDamageToHealth}. Calculation: ${enemyHealthPoints} - (${playerDamageToHealth} - ${enemyDefencePoints}) = ${enemyHealthPoints - (playerDamageToHealth - enemyDefencePoints)}.`);
        
                    battleResult = playerDamageToHealth - enemyDefencePoints;
        
                    enemyHealthPoints = enemyHealthPoints - battleResult;
        
                };
        
                addDataToBattleTable('player', 'health', playerDamageToHealth, battleResult);
        
                console.log(`Enemy health is ${enemyHealthPoints}.`);
            
                if(enemyHealthPoints < 0){
        
                    console.log('Enemy health is 0 now.');
        
                    enemyHealthPoints = 0;
            
                };
        
                arrayEnemiesTraits[activeEnemyIndex][0] = enemyHealthPoints;
        
                document.querySelector('.swiper-slide-active').querySelectorAll('.list__item-battle-start')[0].querySelector('.list-item__span-battle-start').innerText = enemyHealthPoints;
        
                if(enemyHealthPoints === 0){
        
                    console.log('Enemy is dead now');
        
                    setTimeout(() => {
        
                        document.querySelector('.swiper-slide-active').classList.add('rotation-y');
        
                        setTimeout(() => {
                            
                            const overlayWrapper = document.createElement('div');
        
                            const overlayImg = document.createElement('img');
        
                            overlayWrapper.className = 'overlay__wrapper';
        
                            overlayImg.className = 'overlay__img';
        
                            document.querySelector('.swiper-slide-active').appendChild(overlayWrapper);
        
                            overlayWrapper.appendChild(overlayImg);
        
                            overlayImg.src = images.other.dead;
        
                            document.querySelector('.swiper-slide-active').classList.add('column__item-dead-enemy');
        
                            document.querySelector('.swiper-slide-active').querySelector('.item__wrapper-img').remove();
        
                            document.querySelector('.swiper-slide-active').querySelector('.title').remove();
        
                            document.querySelector('.swiper-slide-active').querySelector('.list').remove();
        
                        }, '500');
        
                    }, '650');
        
                };
        
            };
        
            setTimeout(() => {
        
                enemyTurn();
                
            }, '1000');
        
        };

        function healingPotion(){
        
            if(inventoryItems.healingPotion === 0){
        
                console.log(`Not enough healing potions.`);
        
            }else{
        
                inventoryItems.healingPotion = inventoryItems.healingPotion - 1;
        
                playerHealthPoints = 10;

                document.querySelector('#third-column').querySelectorAll('.list__item-battle-start')[0].querySelector('.list-item__span-battle-start').innerText = playerHealthPoints;
        
                disableButtons();
                
                console.log('Buttons is disabled.');
        
                setTimeout(() => {
        
                    enemyTurn();
                        
                }, '1000');
        
            };        
        };

    };

    function enemyTurn(){
            
        popupTurn('enemyTurnText');

        if(arrayEnemiesTraits[enemyIndex][0] === 0){

            console.log(`Skip enemy on ${enemyIndex} index.`);

            enemyIndex++;

        };

        setTimeout(() => {

            console.log(`Enemy on ${enemyIndex} index is attacking now.`);
            
            const enemyAttack = arrayEnemiesTraits[enemyIndex][2];

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

                addDataToBattleTable('enemy', 'armour', enemyAttack, battleResult);

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

                addDataToBattleTable('enemy', 'health', enemyAttack, battleResult);

                console.log(`Player health is ${playerHealthPoints}.`);

                document.querySelector('#third-column').querySelectorAll('.list__item-battle-start')[0].querySelector('.list-item__span-battle-start').innerText = playerHealthPoints;
    
            };
    
            enemyIndex++;
        
            if(enemyIndex === document.querySelector('#battle').querySelectorAll('.first-column__item-battle-start').length){
    
                enemyIndex = 0;
    
            };

            if(playerHealthPoints <= 0){

                enemyIndex = 0;

                activeEnemyIndex = 0;
    
                setTimeout(() => {
    
                    setTimeout(() => {

                        popupDeadPlayer();
    
                    }, '500');
    
                }, '650');
    
            }else{
    
                setTimeout(() => {
    
                    setTimeout(() => {
        
                        enableButtons();
            
                        console.log('Buttons is enabled.');
                        
                    }, '3000');
                    
                    popupTurn('playerTurnText');
        
                }, '6000');
    
            };
    
        }, '3500');

    };

};

export default battle;
