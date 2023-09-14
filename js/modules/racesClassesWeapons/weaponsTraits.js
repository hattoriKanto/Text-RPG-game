
/// One-Handed Weapons and Range weapons - 10 points
/// Two-Handed Weapons - 20 points
/// Shields - 10 points
/// Musket and Elf Bow - 15 points

const weaponsTraits = {

    human:{

        meleeWeapons: {

            spear: {

                traits: {

                    healthPoints: 0,

                    armourPoints: 0,

                    damageToArmourPoints: 2,

                    damageToHealthPoints: 3,
    
                    defencePoints: 5

                },

                isTwoHanded: false,

                isShield: false

            },

            pike: {

                traits: {

                    healthPoints: 0,

                    armourPoints: 0,

                    damageToArmourPoints: 6,

                    damageToHealthPoints: 6,
    
                    defencePoints: 0

                },

                isTwoHanded: true,

                isShield: false

            },

            legionnaireSaber: {

                traits: {

                    healthPoints: 0,

                    armourPoints: 0,
                    
                    damageToArmourPoints: 2,

                    damageToHealthPoints: 4,

                    defencePoints: 3

                },

                isTwoHanded: false,

                isShield: false

            }

        },

        rangeWeapons: {

            crossbow: {

                traits: {

                    damageToArmourPoints: 6,

                    damageToHealthPoints: 4,

                    armourPoints: 0,
    
                    defencePoints: 0

                },

                isTwoHanded: false,

                isShield: false
            },

            bow: {

                traits: {

                    damageToArmourPoints: 4,

                    damageToHealthPoints: 6,

                    armourPoints: 0,
    
                    defencePoints: 0

                },

                isShield: false,

                isTwoHanded: false
            }

        },

        magicWeapons: {

            magicBlade: {

                traits: {

                    damageToArmourPoints: 3,

                    damageToHealthPoints: 4,
    
                    defencePoints: 3

                },

                isTwoHanded: false,

                isShield: false
                
            },

            magicGlavie: {

                traits: {

                    damageToArmourPoints: 6,

                    damageToHealthPoints: 8,
                    
                    defencePoints: 6

                },

                isTwoHanded: true,

                isShield: false
                
            }

        },

        defenceWeapons: {

            legionnaireShield: {

                traits: {

                    healthPoints: 0,

                    armourPoints: 5,

                    damageToArmourPoints: 2,

                    damageToHealthPoints: 4,

                    defencePoints: 5

                },

                isTwoHanded: false,

                isShield: true

            },

            scoutShield: {

                traits: {

                    armourPoints: 3,

                    defencePoints: 7

                },

                isTwoHanded: false,

                isShield: true

            }

        }

    },

    dwarf: {
 
        meleeWeapons: {

            axe: {

                traits: {

                    damageToArmourPoints: 3,

                    damageToHealthPoints: 5,
    
                    defencePoints: 2

                },

                isTwoHanded: false,

                isShield: false

            },

            battleAxe: {

                traits: {

                    damageToArmourPoints: 6,

                    damageToHealthPoints: 9,
    
                    defencePoints: 5

                },

                isTwoHanded: true,

                isShield: false

            },

            halberd: {

                traits: {

                    damageToArmourPoints: 7,

                    damageToHealthPoints: 6,
    
                    defencePoints: 7

                },

                isTwoHanded: true,

                isShield: false

            }

        },

        rangeWeapons: {

            crossbow: {

                traits: {

                    damageToArmourPoints: 6,

                    damageToHealthPoints: 4,
    
                    defencePoints: 0

                },

                isTwoHanded: false,

                isShield: false

            },

            arquebus: {

                traits: {

                    damageToArmourPoints: 8,

                    damageToHealthPoints: 7,
    
                    defencePoints: 0

                },

                isTwoHanded: false,
                
                isShield: false

            }

        },

        defenceWeapons: {

            roundShield: {

                traits: {

                    armourPoints: 4,

                    defencePoints: 6

                },

                isTwoHanded: false,

                isShield: true

            },

            pavis: {

                traits: {

                    armourPoints: 2,

                    defencePoints: 8

                },

                isTwoHanded: false,

                isShield: true

            }

        }

    },

    elf: {

        rangeWeapons: {

            elfbow: {

                traits: {

                    damageToArmourPoints: 5,

                    damageToHealthPoints: 10,

                    defencePoints: 0

                },

                isTwoHanded: false,

                isShield: false
                
            }

        },

        magicWeapons: {

            goldenGlavie: {

                traits: {

                    damageToArmourPoints: 7,

                    damageToHealthPoints: 7,

                    defencePoints: 6

                },

                isTwoHanded: true,

                isShield: false
                
            },

            magicMace: {

                traits: {

                    damageToArmourPoints: 5,

                    damageToHealthPoints: 3,

                    defencePoints: 2

                },

                isTwoHanded: false,

                isShield: false
                
            },

            elvenSword: {

                traits: {

                    damageToArmourPoints: 4,

                    damageToHealthPoints: 4,

                    defencePoints: 2

                },

                isTwoHanded: false,

                isShield: false

            }

        },

        defenceWeapons: {

            goldenShield: {

                traits: {

                    armourPoints: 5,

                    defencePoints: 10

                },

                isTwoHanded: false,

                isShield: true

            },

            elvenShield: {

                traits: {

                    armourPoints: 2,

                    defencePoints: 13

                },

                isTwoHanded: false,

                isShield: true

            }

        }

    }

}

export default weaponsTraits;