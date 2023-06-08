
const classesTraits = {

    human: {

        legionnaire: {

            traits: {
    
                armourPoints: 4,

                attackPoints: 2,

                defencePoints: 4

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

                defencePoints: 2

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

                defencePoints: 2

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

                defencePoints: 2

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

                defencePoints: 1

            },

            weapon: {

                meleeWeapons: true

            },

        },

        guardsman: {

            traits: {
    
                armourPoints: 5,

                attackPoints: 3,

                defencePoints: 2

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

                defencePoints: 3

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

                defencePoints: 2

            },

            weapon: {

                magicWeapons: true
            },

        },

        infiltrator: {

            traits: {
    
                armourPoints: 2,

                attackPoints: 4,

                defencePoints: 4

            },

            weapon: {

                magicWeapons: true,

                rangeWeapons: true

            },

        }
        
    }

};

export default classesTraits;