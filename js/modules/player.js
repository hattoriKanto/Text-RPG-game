
const player = {

    playerImg: null,

    playerKey: {

        race: null,

        class: null,

        weaponKeys: {

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

        healthPoints: 0,

        armourPoints: 0,

        attackPoints: 0,

        defencePoints: 0,

        canAttackTwice: null
        
    },

    weaponTraits: {

        firstWeapon: {},

        secondWeapon: {}

    },

};

export default player;