
const weapons = {

    human:{

        meleeWeapons: {

            pilas: {

                meleeDamage: 5,

                weaponDefence: 5

            },

            bronus: {

                meleeDamage: 7,

                weaponDefence: 3

            },

            dagius: {

                meleeDamage: 6,

                weaponDefence: 4

            }

        },

        rangeWeapons: {

            crossbow: {

                rangeDamage: 8

            },

            bow: {

                rangeDamage: 6

            },

            musket: {

                rangeDamage: 10
                
            }

        },

        magicWeapons: {

            rod: {

                magicDamage: 8,

            },

            spatra: {

                magicDamage: 5,

                meleeDamage: 5
                
            },

            wardius: {

                magicDamage: 4,

                meleeDamage: 6
                
            }

        },

        defenceWeapons: {

            skartos: {

                magicalDefencePoints: 2,

                physicalDefencePoints: 3

            },

            partha: {

                magicalDefencePoints: 3,

                physicalDefencePoints: 2

            }

        }

    },

    dwarf: {
 
        meleeWeapons: {

            hastar: {

                physicalAttackPoints: 5,

                physicalDefencePoints: 5

            },

            axe: {

                physicalAttackPoints: 7,

                physicalDefencePoints: 3

            },

            scramandor: {

                physicalAttackPoints: 6,

                physicalDefencePoints: 4

            }

        },

        rangeWeapons: {

            crossbow: {

                physicalAttackPoints: 8

            },

            musket: {

                physicalAttackPoints: 10
                
            }

        },

        defenceWeapons: {

            skartos: {

                physicalDefencePoints: 5,

                magicalDefencePoints: 5

            },

            partha: {

                physicalDefencePoints: 4,

                magicalDefencePoints: 6

            }

        }

    },

    elf: {

        meleeWeapons: {

            tabar: {

                physicalAttackPoints: 5,

                physicalDefencePoints: 5

            },

            talwar: {

                physicalAttackPoints: 7,

                physicalDefencePoints: 3

            },

            bhaala: {

                physicalAttackPoints: 6,

                physicalDefencePoints: 4

            }

        },

        rangeWeapons: {

            elfbow: {

                physicalAttackPoints: 10
                
            }

        },

        magicWeapons: {

            staff: {

                physicalAttackPoints: 0,

                magicalAttackPoints: 10

            },

            glaive: {

                physicalAttackPoints: 5,

                magicalAttackPoints: 5
                
            },

            gada: {

                physicalAttackPoints: 7,

                magicalAttackPoints: 3
                
            }

        },

        defenceWeapons: {

            kidaal: {

                physicalDefencePoints: 5,

                magicalDefencePoints: 5

            },

            shikidaal: {

                physicalDefencePoints: 4,

                magicalDefencePoints: 6

            }

        }

    }

}

export default weapons;