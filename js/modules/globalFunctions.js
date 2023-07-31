/// IMPORTS---START ///

import { player } from "./player.js";

/// IMPORTS---END ///

/// GLOBAL---VARIABLES---START ///

let playerDefaultTraits = null;

/// GLOBAL---VARIABLES---END ///

/// FUNCTIONS---START ///

function disableButtons(){

    console.log('BUTTONS ARE DISABLED');

    document.querySelectorAll('button').forEach(elem =>{

        elem.disabled = true;

    });

};

function enableButtons(){

    console.log('BUTTONS ARE ENABLED');

    document.querySelectorAll('button').forEach(elem =>{

        elem.disabled = false;

    });

};

function deletePlayerData(){

    player.playerImg = null;

    for(let playerKey in player.playerKey){

        if(typeof player.playerKey[playerKey] != "object"){

            player.playerKey[playerKey] = null;

        }else{

            for(let key in player.playerKey[playerKey]){

                player.playerKey[playerKey][key] = null;

            };

        };
    
    };
        
    for(let key in player.mainText){

        player.mainText[key] = null;

    };

    for(let trait in player.playerTraits){

        player.playerTraits[trait] = null;

    };

    for(let weaponKey in player.weaponTraits){

        for(let traitKey in player.weaponTraits[weaponKey]){

            delete player.weaponTraits[weaponKey][traitKey];

        };

    };

    console.log('PLAYER TRAITS HAVE BEEN DELETED.')

};

function clonePlayerTraits(){

    playerDefaultTraits = structuredClone(player.playerTraits);

};

function backToDefaultPlayerTraits(){

    Object.assign(player.playerTraits, playerDefaultTraits);

};

/// FUNCTIONS---END ///

/// EXPORTS---START ///

export { deletePlayerData };

export { clonePlayerTraits };

export { backToDefaultPlayerTraits };

export { disableButtons };

export { enableButtons };

/// EXPORTS---END ///