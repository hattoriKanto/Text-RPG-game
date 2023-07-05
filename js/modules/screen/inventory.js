
import { inventoryItems } from "../inventoryItems.js";

import images from "../images.js";

function createInventoryElememts(){

    const inventoryDiv = document.createElement('div');

    const inventoryButton = document.createElement('button');

    const inventoryImg = document.createElement('img');

    inventoryDiv.className = 'inventory';

    inventoryButton.className = 'inventory__button inventory-button button';

    inventoryImg.className = 'inventory-button__img';

    inventoryImg.src = images.other.inventory;

    document.querySelector('body').appendChild(inventoryDiv);

    inventoryDiv.appendChild(inventoryButton);

    inventoryButton.appendChild(inventoryImg);

    eventListenerInventoryButton();

};

function eventListenerInventoryButton(){

    document.querySelector('.inventory-button').addEventListener('click', () => {
        
        document.querySelector('.inventory__button').classList.toggle('inventory-open');

        createDropDownMenu();

    });

};

function createDropDownMenu(){

    if(document.querySelector('.inventory__button').classList.contains('inventory-open') === true){

        const inventoryContent = document.createElement('div');

        inventoryContent.className = 'inventory__content inventory-content';
    
        document.querySelector('.inventory').appendChild(inventoryContent);
    
        for(let i = 0; i < 5; i++){
    
            const inventoryContentCell = document.createElement('div');

            const inventoryCellImg = document.createElement('img');
    
            inventoryContentCell.className = 'inventory-content__cell inventory-cell cell';

            inventoryCellImg.className = 'inventory-cell__img';
    
            inventoryContentCell.id = `inventory-cell-${i+1}`;
    
            inventoryContent.appendChild(inventoryContentCell);

            inventoryContentCell.appendChild(inventoryCellImg);

    
        };

        healingPotionInventory();

    } else{

        document.querySelector('.inventory__content').remove();

    };

    function healingPotionInventory(){

        const healingPotionCounter = document.createElement('div');

        healingPotionCounter.className = 'inventory-cell__counter';

        document.querySelector('#inventory-cell-1').appendChild(healingPotionCounter);

        healingPotionCounter.innerText = inventoryItems.healingPotion;

        document.querySelector('#inventory-cell-1').querySelector('.inventory-cell__img').src = images.inventory.healingPotion;

    };

};

export { createInventoryElememts };