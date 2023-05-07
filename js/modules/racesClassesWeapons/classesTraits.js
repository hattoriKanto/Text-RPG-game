
const classesTraits = {

    human: {

        legionnaire: {

            traits: {
    
                armourPoints: 4,

                attackPoints: 2,

                defencePoints: 4,

                canAttackTwice: false

            },

            weapon: {

                meleeWeapons: true,

                defenceWeapons: true

            }

        },

        scout: {

            traits: {
    
                armourPoints: 4,

                attackPoints: 4,

                defencePoints: 2,

                canAttackTwice: false

            },

            weapon: {

                meleeWeapons: true,

                rangeWeapons: true

            }

        },

        agent: {

            traits: {
    
                armourPoints: 3,

                attackPoints: 5,

                defencePoints: 2,

                canAttackTwice: true

            },

            weapon: {

                meleeWeapons: true,

                rangeWeapons: true,

                magicWeapons: true

            }

        }

    },

    dwarf: {

        protector: {

            traits: {  
    
                armourPoints: 6,

                attackPoints: 2,

                defencePoints: 2,

                canAttackTwice: false

            },

            weapon: {

                meleeWeapons: true,

                defenceWeapons: true,

                rangeWeapons: true
            },

        },

        berserk: {

            traits: {

                armourPoints: 4,

                attackPoints: 5,

                defencePoints: 1,

                canAttackTwice: false

            },

            weapon: {

                meleeWeapons: true

            },

        },

        guardsman: {

            traits: {
    
                armourPoints: 5,

                attackPoints: 3,

                defencePoints: 2,

                canAttackTwice: false

            },

            weapon: {

                meleeWeapons: true,

                defenceWeapons: true,

                rangeWeapons: true

            },
            
        }
    },

    elf: {

        warrior: {

            traits: {

                armourPoints: 4,

                attackPoints: 3,

                defencePoints: 3,

                canAttackTwice: false

            },

            weapon: {

                magicWeapons: true,

                defenceWeapons: true,

                rangeWeapons: true
            },

        },

        keeper: {

            traits: {
    
                armourPoints: 5,

                attackPoints: 4,

                defencePoints: 2,

                canAttackTwice: false

            },

            weapon: {

                magicWeapons: true
            },

        },

        infiltrator: {

            traits: {
    
                armourPoints: 2,

                attackPoints: 4,

                defencePoints: 4,

                canAttackTwice: true

            },

            weapon: {

                magicWeapons: true,

                rangeWeapons: true

            },

        }
        
    }

};

export default classesTraits;