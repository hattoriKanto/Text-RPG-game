
import player from "./player.js";

import enemiesTraits from "./enemies/enemiesTraits.js";

let activeEnemyIndex = 0;

const arrayEnemiesTraits = [];

const arrayActiveEnemyTraits = [];

function battle(arrayRandomEnemiesKey, enemyTier){

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

    document.querySelector('#battle').querySelector('#second-column').querySelector('#first-weapon-btn').addEventListener('click', () =>{

        console.log(`Active enemy is ${arrayRandomEnemiesKey[activeEnemyIndex]}. Health is ${arrayEnemiesTraits[activeEnemyIndex][0]}, armour is ${arrayEnemiesTraits[activeEnemyIndex][1]}.`);

        const weaponTraits = Object.values(player.weaponTraits.firstWeapon);

        const playerDamageToHealth = player.playerTraits.attackPoints + weaponTraits[1];

        const playerDamageToArmour = player.playerTraits.attackPoints + weaponTraits[0];

        let enemyHealthPoints = arrayEnemiesTraits[activeEnemyIndex][0];

        let enemyArmourPoints = arrayEnemiesTraits[activeEnemyIndex][1];

        damageToArmour();

        function damageToArmour(){

            console.log(`Player hit enemy's armour. Damage is ${playerDamageToArmour}, enemy armour is ${enemyArmourPoints}. Calculation: ${enemyArmourPoints} - ${playerDamageToArmour} = ${enemyArmourPoints - playerDamageToArmour}.`);

            enemyArmourPoints = enemyArmourPoints - playerDamageToArmour;

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

export default battle;
