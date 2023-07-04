
import player from "./player.js";

let cloneTraitsPlayer = null;

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

};

function clonePlayerTraits(){

    cloneTraitsPlayer = structuredClone(player.playerTraits);

};

function backToDefaultPlayerTraits(){

    delete player.playerTraits;

    player.playerTraits = cloneTraitsPlayer;

};

export { deletePlayerData };

export { clonePlayerTraits };

export { backToDefaultPlayerTraits };
