
import player from "./player.js";

import enemiesTraits from "./enemies/enemiesTraits.js";

let activeEnemyIndex = 0;

const arrayEnemiesTraits = [];

const arrayActiveEnemyTraits = [];

let turnCounter = 1;

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

    console.log(`Active enemy is ${arrayRandomEnemiesKey[activeEnemyIndex]}. Health is ${arrayEnemiesTraits[activeEnemyIndex][0]}, armour is ${arrayEnemiesTraits[activeEnemyIndex][1]}.`);

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

    turn()

    function turn(){

        console.log(`Turn is ${turnCounter}`);

        if(turnCounter % 2 != 0){

            console.log('Player turn');

            document.querySelector('#battle').querySelector('#second-column').querySelector('#first-weapon-btn').addEventListener('click', () =>{
        
                console.log(`Active enemy is ${arrayRandomEnemiesKey[activeEnemyIndex]}. Health is ${arrayEnemiesTraits[activeEnemyIndex][0]}, armour is ${arrayEnemiesTraits[activeEnemyIndex][1]}.`);
        
                let enemyHealthPoints = arrayEnemiesTraits[activeEnemyIndex][0];
        
                let enemyArmourPoints = arrayEnemiesTraits[activeEnemyIndex][1];
        
                const enemyDefencePoints = arrayEnemiesTraits[activeEnemyIndex][3];
        
                damageToArmour();
        
                function damageToArmour(){
        
                    console.log(`Player hit enemy's armour. Damage is ${playerDamageToArmour}, enemy armour is ${enemyArmourPoints}, enemy defence is ${enemyDefencePoints}. Calculation: ${enemyArmourPoints} - (${playerDamageToArmour} - ${enemyDefencePoints}) = ${enemyArmourPoints - (playerDamageToArmour - enemyDefencePoints)}.`);
        
                    enemyArmourPoints = enemyArmourPoints - (playerDamageToArmour - enemyDefencePoints);
        
                    if(enemyArmourPoints < 0){
        
                        enemyArmourPoints = 0;
            
                    };
        
                    if(enemyArmourPoints === 0){
        
                        console.log(`Enemy's armour is gone. Now attack enemy's health.`)
        
                        damageToHealth();
        
                    };
        
                    arrayEnemiesTraits[activeEnemyIndex][1] = enemyArmourPoints;
        
                    console.log(`Enemy's armour after attack is ${enemyArmourPoints}.`);
        
                };
        
                function damageToHealth(){
        
                    console.log(`Player hit enemy's health. Damage is ${playerDamageToHealth}, enemy health is ${enemyHealthPoints}. Calculation: ${enemyHealthPoints} - ${playerDamageToHealth} = ${enemyHealthPoints - playerDamageToHealth}.`);
        
                    enemyHealthPoints = enemyHealthPoints - playerDamageToHealth;
        
                    if(enemyHealthPoints < 0){
        
                        enemyHealthPoints = 0;
            
                    };
        
                    arrayEnemiesTraits[activeEnemyIndex][0] = enemyHealthPoints;
        
                    console.log(`Enemy's health after attack is ${enemyHealthPoints}.`);
        
                };
        
                console.log(`Active enemy is ${arrayRandomEnemiesKey[activeEnemyIndex]}. Health is ${enemyHealthPoints}, armour is ${enemyArmourPoints}.`);
        
            });
    
        };
    
        if(turnCounter % 2 === 0){

            console.log('Enemy turn');
    
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
        
                    console.log(`Player's armour is gone. Now attack player's health.`)
    
                    damageToHealth();
    
                };

                console.log(`Enemy hit player's armour. Damage is ${enemyAttack}, player armour is ${playerArmourPoints}, player defence is ${playerDefencePoints}. Calculation: ${playerArmourPoints} - ${enemyActualDamage} = ${playerArmourPoints - enemyActualDamage}.`);
    
                console.log(`Player's armour after attack is ${playerArmourPoints}.`);
    
            };
    
            function damageToHealth(){
    
                playerHealthPoints = playerHealthPoints - enemyAttack;
        
                if(playerHealthPoints < 0){
    
                    playerHealthPoints = 0;
        
                };

                console.log(`Enemy hit player's health. Damage is ${enemyAttack}, player health is ${playerHealthPoints}. Calculation: ${playerHealthPoints} - ${enemyAttack} = ${playerHealthPoints - enemyAttack}.`);
    
                console.log(`Player's health after attack is ${playerHealthPoints}.`);
    
            };
    
            enemyIndex++;
        
            if(enemyIndex === document.querySelector('#battle').querySelectorAll('.first-column__item-battle-start').length){
    
                enemyIndex = 0;
    
            };
    
        };

        turnCounter++;

    };

};

export default battle;
