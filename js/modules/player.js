
const player = {

    playerImg: null,

    playerKey: {

        race: null,

        class: null,

        firstWeapon: null,

        secondWeapon: null

    },

    mainText: {

        race: null,

        class: null,

        firstWeapon: null,

        secondWeapon: null

    },

    playerStats: {

        healthPoints: 0,

        manaPoints: 0,
        
        armourPoints: 0,

        attackPoints: 0,

        defencePoints: 0

    },

    weaponStats: {

        firstWeapon: {},

        secondWeapon: {}

    },

    canUseMagic: false

};

export default player;