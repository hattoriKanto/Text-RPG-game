
const classesStats = {

    human: {

        legionnaire: {

            stats: {
    
                armourPoints: 4,

                attackPoints: 2,

                defencePoints: 4,

                canAttackTwice: false

            },

            weapon: {

                oneHandedWeapons: true,

                defensiveWeapons: true

            }

        },

        scout: {

            stats: {
    
                armourPoints: 4,

                attackPoints: 4,

                defencePoints: 2,

                canAttackTwice: false

            },

            weapon: {

                oneHandedWeapons: true,

                rangeWeapons: true

            }

        },

        agent: {

            stats: {
    
                armourPoints: 3,

                attackPoints: 5,

                defencePoints: 2,

                canAttackTwice: true

            },

            weapon: {

                oneHandedWeapons: true,

                rangeWeapons: true,

                magicWeapons: true

            }

        }

    },

    dwarf: {

        protector: {

            stats: {  
    
                armourPoints: 6,

                attackPoints: 2,

                defencePoints: 2,

                canAttackTwice: false

            },

            weapon: {

                oneHandedWeapons: true,

                twoHandedWeapons: true,

                defensiveWeapons: true,

                rangeWeapons: true
            },

        },

        berserk: {

            stats: {

                armourPoints: 4,

                attackPoints: 5,

                defencePoints: 1,

                canAttackTwice: false

            },

            weapon: {

                twoHandedWeapons: true

            },

        },

        guardsman: {

            stats: {
    
                armourPoints: 5,

                attackPoints: 3,

                defencePoints: 2,

                canAttackTwice: false

            },

            weapon: {

                oneHandedWeapons: true,

                defensiveWeapons: true,

                rangeWeapons: true

            },
            
        }
    },

    elf: {

        warrior: {

            stats: {

                armourPoints: 4,

                attackPoints: 3,

                defencePoints: 3,

                canAttackTwice: false

            },

            weapon: {

                oneHandedWeapons: true,

                magicWeapons: true,

                defensiveWeapons: true,

                rangeWeapons: true
            },

        },

        keeper: {

            stats: {
    
                armourPoints: 5,

                attackPoints: 4,

                defencePoints: 2,

                canAttackTwice: false

            },

            weapon: {

                twoHandedWeapons: true,

                magicWeapons: true
            },

        },

        infiltrator: {

            stats: {
    
                armourPoints: 2,

                attackPoints: 4,

                defencePoints: 4,

                canAttackTwice: true

            },

            weapon: {

                oneHandedWeapons: true,

                magicWeapons: true,

                rangeWeapons: true

            },

        }
        
    }

};

export default classesStats;