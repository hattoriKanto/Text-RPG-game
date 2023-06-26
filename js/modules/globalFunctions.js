
import { player } from "./player";

function deletePlayerData(){

    player.playerImg = null;

    player.playerKey.race = null;

    player.playerKey.class = null;

    player.playerKey.weaponKeys.firstWeapon = null;

    player.playerKey.weaponKeys.secondWeapon = null;

    player.playerKey.weaponsTypeKeys.secondWeapon = null;

    player.playerKey.weaponsTypeKeys.secondWeapon = null;

    player.playerKey.weaponsTypeKeys.secondWeapon = null;

    player.mainText.race = null;

    player.mainText.class = null;

    player.mainText.firstWeapon = null;

    player.mainText.secondWeapon = null;

    player.playerTraits.armourPoints = null;

    player.playerTraits.armourPoints = null;

    player.playerTraits.healthPoints = null;

    player.playerTraits.attackPoints = null;

    player.playerTraits.defencePoints = null;

};


const player = {

    playerImg: null,

    playerKey: {

        race: null,

        class: null,

        weaponKeys: {

            firstWeapon: null,

            secondWeapon: null

        },

        weaponsTypeKeys: {

            firstWeapon: null,

            secondWeapon: null

        }

    },

    mainText: {

        race: null,

        class: null,

        firstWeapon: null,

        secondWeapon: null

    },

    playerTraits: {

        healthPoints: null,

        armourPoints: null,

        attackPoints: null,

        defencePoints: null
        
    },

    weaponTraits: {

        firstWeapon: {},

        secondWeapon: {}

    },

};

export { player };