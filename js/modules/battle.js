
import player from "./player.js";

import enemiesTraits from "./enemies/enemiesTraits.js";

let activeEnemyIndex = 0;

const arrayEnemiesTraits = [];

const arrayActiveEnemyTraits = [];

let turnCounter = 1;

let enemyIndex = 0;

function battle(arrayRandomEnemiesKey, enemyTier){

    let aliveEnemy = arrayRandomEnemiesKey.length;

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

    function checkingAliveEnemies(){

        arrayActiveEnemyTraits.forEach(elem =>{

            if(elem[0] === 0 && elem[1] === 0){

                aliveEnemy--;

            }

        })

    }

    document.querySelector('#battle').querySelector('#second-column').querySelector('#first-weapon-btn').addEventListener('click', () =>{


        playerTurn();

    })

    function playerTurn(){

        console.log('Player turn')
    
        let enemyHealthPoints = arrayEnemiesTraits[activeEnemyIndex][0];
    
        let enemyArmourPoints = arrayEnemiesTraits[activeEnemyIndex][1];
    
        const enemyDefencePoints = arrayEnemiesTraits[activeEnemyIndex][3];
    
        damageToArmour();
    
        function damageToArmour(){
    
            enemyArmourPoints = enemyArmourPoints - (playerDamageToArmour - enemyDefencePoints);
    
            if(enemyArmourPoints < 0){
    
                enemyArmourPoints = 0;
        
            };
    
            if(enemyArmourPoints === 0){
    
    
                damageToHealth();
    
            };
    
            arrayEnemiesTraits[activeEnemyIndex][1] = enemyArmourPoints;
            
        };
    
        function damageToHealth(){
    
            enemyHealthPoints = enemyHealthPoints - playerDamageToHealth;
    
            if(enemyHealthPoints < 0){
    
                enemyHealthPoints = 0;
        
            };
    
            arrayEnemiesTraits[activeEnemyIndex][0] = enemyHealthPoints;
    
    
        };

        turnCounter++;

        checkingAliveEnemies();

        enemyTurn();

    }

    function enemyTurn(){

        console.log("Enemy turn")

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

        turnCounter--;

        checkingAliveEnemies();
    }

};

export default battle;
