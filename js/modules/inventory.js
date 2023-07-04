
import images from "./images.js";

function createInventoryButton(){

    const inventoryButton = document.createElement('button');

    const inventoryImg = document.createElement('img');

    inventoryButton.className = 'inventory-button button';

    inventoryImg.className = 'inventory-button__img';

    inventoryImg.src = images.other.inventory;

    document.querySelector('body').appendChild(inventoryButton);

    inventoryButton.appendChild(inventoryImg);

    eventListenerInventoryButton();

};

function eventListenerInventoryButton(){

    document.querySelector('.inventory-button').addEventListener('click', () => {

        createDropDownMenu();

    });

};

function createDropDownMenu(){

    const inventoryDiv = document.cre

};

export { createInventoryButton };