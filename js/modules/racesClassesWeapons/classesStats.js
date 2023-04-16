
const classesStats = {

    human: {

        legionnaire: {

            stats: {

                healthPoints: 2,

                manaPoints: 0,
    
                armourPoints: 3,

                attackPoints: 2,

                defencePoints: 3

            },

            bonusStats: {

                defencePoints: 3

            },

            canUseMagic: false

        },

        scout: {

            stats: {

                healthPoints: 2,

                manaPoints: 0,
    
                armourPoints: 2,

                attackPoints: 4,

                defencePoints: 2

            },

            bonusStats: {

                rangeDamage: 3

            },

            canUseMagic: false

        },

        agent: {

            stats: {

                healthPoints: 2,

                manaPoints: 4,
    
                armourPoints: 0,

                attackPoints: 2,

                defencePoints: 2

            },

            bonusStats: {

                attackPoints: 3

            },

            canUseMagic: true,

        }

    },

    dwarf: {

        protector: {

            stats: {  

                healthPoints: 3,

                manaPoints: 0,
    
                armourPoints: 4,

                attackPoints: 1,

                defencePoints: 3

            },

            bonusStats: {

                armourPoints: 3

            },

            canUseMagic: false

        },

        berserk: {

            stats: {

                healthPoints: 2,

                manaPoints: 0,

                armourPoints: 2,

                attackPoints: 5,

                defencePoints: 1

            },

            bonusStats: {

                meleeDamage: 3

            },

            canUseMagic: false

        },

        guardsman: {

            stats: {

                healthPoints: 2,

                manaPoints: 0,
    
                armourPoints: 4,

                attackPoints: 2,

                defencePoints: 2

            },

            bonusStats: {

                defencePoints: 3

            },
            

            canUseMagic: false

        }
    },

    elf: {

        warrior: {

            stats: {

                healthPoints: 2,

                manaPoints: 4,

                armourPoints: 2,

                attackPoints: 1,

                defencePoints: 1

            },

            bonusStats: {

                magicDamage: 3

            },

            canUseMagic: true

        },

        mage: {

            stats: {

                healthPoints: 2,

                manaPoints: 6,
    
                armourPoints: 0,

                attackPoints: 2,

                defencePoints: 0

            },

            bonusStats: {

                manaPoints: 3

            },

            canUseMagic: true

        },

        infiltrator: {

            stats: {

                healthPoints: 2,

                manaPoints: 4,
    
                armourPoints: 0,

                attackPoints: 4,

                defencePoints: 0

            },

            bonusStats: {

                rangeDamage: 3,

                meleeDamage: 3

            },

            canUseMagic: true

        }
        
    }

};

export default classesStats;