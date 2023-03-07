
const inventoryBtn = document.querySelector('#inventory-btn');

const inventoryPopup = document.querySelector('#inventory');

const inventoryOverlay = inventoryPopup.querySelector('.overlay');

const body = document.querySelector('body');

const closeInventoryBtn = inventoryPopup.querySelector('#close__popup');

function showInventory(){

    inventoryBtn.classList.remove('hide-inventory-btn');

    inventoryBtn.addEventListener('click', () =>{

        inventoryPopup.classList.add('show-popup');

        body.classList.remove('noscroll');

    });

    inventoryOverlay.addEventListener('click', () =>{

        closeInventory();

    });

    closeInventoryBtn.addEventListener('click', () =>{

        closeInventory();

    });

};

function closeInventory(){

    inventoryPopup.classList.remove('show-popup');

    body.classList.remove('noscroll');

};

export default showInventory;