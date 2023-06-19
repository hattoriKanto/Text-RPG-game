
import player from "./player.js";

import enemiesTraits from "./enemies/enemiesTraits.js";

import { popupTurn } from "./screen/battleScreen.js";

import images from "./images.js";

let activeEnemyIndex = 0;

const arrayEnemiesTraits = [];

const arrayActiveEnemyTraits = [];

let enemyIndex = 0;

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

    setTimeout(() => {

        console.log('PLAYER TURN');
            
        popupTurn('playerTurnText');

        document.querySelector('#battle').querySelector('#second-column').querySelector('#first-weapon-btn').addEventListener('click', () =>{

            playerTurn();
    
        });

    }, '3500');

    function playerTurn(){
    
        let enemyHealthPoints = arrayEnemiesTraits[activeEnemyIndex][0];
    
        let enemyArmourPoints = arrayEnemiesTraits[activeEnemyIndex][1];
    
        const enemyDefencePoints = arrayEnemiesTraits[activeEnemyIndex][3];

        if(enemyArmourPoints === 0){

            const afterArmourIsAttacked = false;

            damageToHealth(afterArmourIsAttacked);

        }else if(enemyArmourPoints > 0){

            damageToArmour();

        };
    
        function damageToArmour(){
            
            if(enemyDefencePoints > playerDamageToArmour || enemyDefencePoints === playerDamageToArmour){

                console.log(`Player hit enemy armour. Enemy armour is ${enemyArmourPoints}; enemy defence is ${enemyDefencePoints}; player attack is ${playerDamageToArmour}. Calculation: ${enemyArmourPoints} - (${playerDamageToArmour - enemyDefencePoints}) = ${enemyArmourPoints - 0}.`);

                console.log('No damage to enemy armour');

                enemyArmourPoints = enemyArmourPoints - 0;

            } else{

                console.log(`Player hit enemy armour. Enemy armour is ${enemyArmourPoints}; enemy defence is ${enemyDefencePoints}; player attack is ${playerDamageToArmour}. Calculation: ${enemyArmourPoints} - (${playerDamageToArmour} - ${enemyDefencePoints}) = ${enemyArmourPoints - (playerDamageToArmour - enemyDefencePoints)}.`);

                enemyArmourPoints = enemyArmourPoints - (playerDamageToArmour - enemyDefencePoints);

            };

            console.log(`Enemy armour is ${enemyArmourPoints}.`);
    
            if(enemyArmourPoints < 0){

                console.log('Enemy armour is 0 now.');
    
                enemyArmourPoints = 0;
        
            };
    
            if(enemyArmourPoints === 0){

                console.log('Enemy armour is gone. Redirecting to health attack.');

                const afterArmourIsAttacked = true;
    
                damageToHealth(afterArmourIsAttacked);
    
            };
    
            arrayEnemiesTraits[activeEnemyIndex][1] = enemyArmourPoints;

            document.querySelector('.swiper-slide-active').querySelectorAll('.list__item-battle-start')[1].querySelector('.list-item__span-battle-start').innerText = enemyArmourPoints;
            
        };
    
        function damageToHealth(afterArmourIsAttacked){

            if(afterArmourIsAttacked === true){

                console.log('Redirected after armour attack.');

                console.log(`Player hit enemy health. Enemy health is ${enemyHealthPoints}; player attack is ${playerDamageToHealth}. Calculation: ${enemyHealthPoints} - ${playerDamageToHealth} = ${enemyHealthPoints - {playerDamageToHealth}}.`);

                enemyHealthPoints = enemyHealthPoints - playerDamageToHealth;

            }else if(afterArmourIsAttacked === false){

                console.log('Direct attack to health points.');

                console.log(`Player hit enemy health. Enemy health is ${enemyHealthPoints}; enemy defence is ${enemyDefencePoints}; player attack is ${playerDamageToHealth}. Calculation: ${enemyHealthPoints} - (${playerDamageToHealth} - ${enemyDefencePoints}) = ${enemyHealthPoints - ({playerDamageToHealth} - {enemyDefencePoints})}.`);

                enemyHealthPoints = enemyHealthPoints - (playerDamageToHealth - enemyDefencePoints);

            };

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

                    const overlayWrapper = document.createElement('div');

                    const overlayImg = document.createElement('img');

                    overlayWrapper.className = 'overlay__wrapper';

                    overlayWrapper.className = 'overlay__img';

                    document.querySelector('.swiper-slide-active').appendChild(overlayWrapper);

                    overlayWrapper.appendChild(overlayImg);

                    overlayImg.src = images.other.dead;

                    document.querySelector('.swiper-slide-active').querySelector('.item__wrapper-img').remove();

                    document.querySelector('.swiper-slide-active').querySelector('.title').remove();

                    document.querySelector('.swiper-slide-active').querySelector('.list').remove();

                }, '1500');

            };
    
        };

        setTimeout(() => {

            enemyTurn();
            
        }, '4500');

    };

    function enemyTurn(){
            
        popupTurn('enemyTurnText');

        console.log('ENEMY TURN');

        setTimeout(() => {
            
            const enemyAttack = arrayEnemiesTraits[enemyIndex][2];

            damageToArmour();
    
            function damageToArmour(){
    
                let enemyActualDamage = enemyAttack - playerDefencePoints;
    
                if(enemyActualDamage < 0){
    
                    enemyActualDamage = 0;
    
                };
    
                playerArmourPoints = playerArmourPoints - enemyActualDamage;
    
                if(playerArmourPoints < 0){
        
                    playerArmourPoints = 0;
        
                };
    
                if(playerArmourPoints === 0){
            
                    damageToHealth();
    
                };
    
            };
    
            function damageToHealth(){
    
                playerHealthPoints = playerHealthPoints - enemyAttack;
        
                if(playerHealthPoints < 0){
    
                    playerHealthPoints = 0;
        
                };
    
            };
    
            enemyIndex++;
        
            if(enemyIndex === document.querySelector('#battle').querySelectorAll('.first-column__item-battle-start').length){
    
                enemyIndex = 0;
    
            };
    
        }, '3500');

        setTimeout(() => {
            
            popupTurn('playerTurnText');

        }, '6000');

    };

};

export default battle;
