'use strict'

const race = {
    human: { 
        raceName: 'Human',
        globalStats: {
            healthPoints: 10,
            armourPoints: 0,
            manaPoints: 0
        },
        class: {
            legionnaire: {
                className: 'Legionnaire of the First Legion',
                classStats: {
                    bonusHealthPoints: 5,
                    bonusArmourPoints: 5,
                    bonusManaPoints: 0
                },
                startWeapon: {
                    firstWeapon: {
                        saber:{
                            weaponName: 'Saber',
                            weaponStats: {
                                physicalAttack: 7,
                                physicalDefense: 3,
                                magicAttack: 0,
                                magicDefense: 0
                            },
                            isRange: false
                        },
                        pila:{
                            weaponName: 'Pila',
                            weaponStats: {
                                physicalAttack: 5,
                                physicalDefense: 5,
                                magicAttack: 0,
                                magicDefense: 0
                            },
                            isRange: false
                        },
                        arquebus: {
                            weaponName: 'Arquebus',
                            weaponStats: {
                                physicalAttack: 10,
                                physicalDefense: 0,
                                magicAttack: 0,
                                magicDefense: 0
                            },
                            isRange: true
                        } 
                    },
                    secondWeapon: {
                        scutum: {
                            weaponName: 'Scutum',
                            weaponStats: {
                                physicalAttack: 0,
                                physicalDefense: 5,
                                magicAttack: 0,
                                magicDefense: 5
                            },
                            isRange: false
                        },
                        parma: {
                            weaponName: 'Parma',
                            weaponStats: {
                                physicalAttack: 0,
                                physicalDefense: 3,
                                magicAttack: 0,
                                magicDefense: 7
                            },
                            isRange: false
                        },
                        saber:{
                            weaponName: 'Saber',
                            weaponStats: {
                                physicalAttack: 7,
                                physicalDefense: 3,
                                magicAttack: 0,
                                magicDefense: 0
                            },
                            isRange: false
                        },
                    }
                }
            },
            scout: {
                className: 'Scout of the Fifth light brigade',
                classStats: {
                    bonusHealthPoints: 7,
                    bonusArmourPoints: 3,
                    bonusManaPoints: 0
                },
                startWeapon: {
                    firstWeapon: {
                        saber:{
                            weaponName: 'Saber',
                            weaponStats: {
                                physicalAttack: 7,
                                physicalDefense: 3,
                                magicAttack: 0,
                                magicDefense: 0
                            },
                            isRange: false
                        },
                        arquebus: {
                            weaponName: 'Arquebus',
                            weaponStats: {
                                physicalAttack: 10,
                                physicalDefense: 0,
                                magicAttack: 0,
                                magicDefense: 0
                            },
                            isRange: true
                        },
                        pila:{
                            weaponName: 'Pila',
                            weaponStats: {
                                physicalAttack: 5,
                                physicalDefense: 5,
                                magicAttack: 0,
                                magicDefense: 0
                            },
                            isRange: false
                        }, 
                    },
                    secondWeapon: {
                        parma: {
                            weaponName: 'Parma',
                            weaponStats: {
                                physicalAttack: 0,
                                physicalDefense: 3,
                                magicAttack: 0,
                                magicDefense: 7
                            },
                            isRange: false
                        },
                        saber: {
                            weaponName: 'Saber',
                            weaponStats: {
                                physicalAttack: 7,
                                physicalDefense: 3,
                                magicAttack: 0,
                                magicDefense: 0
                            },
                            isRange: false
                        },
                        arcubalista: {
                            weaponName: 'Arcubalista',
                            weaponStats: {
                                physicalAttack: 10,
                                physicalDefense: 0,
                                magicAttack: 0,
                                magicDefense: 0
                            },
                            isRange: true
                        } 
                    }
                }
            },
            agent: {
                className: 'Agent of the Imperial Intelligent',
                classStats: {
                    bonusHealthPoints: 5,
                    bonusArmourPoints: 2,
                    bonusManaPoints: 3
                },
                startWeapon: {
                    firstWeapon: {
                        gladius: {
                            weaponName: 'Millanitus gladius',
                            weaponStats: {
                                physicalAttack: 3,
                                physicalDefense: 0, 
                                magicAttack: 7,
                                magicDefense: 0
                            },
                            isRange: false
                        },
                        rod: {
                            weaponName: 'Magic rod',
                            weaponStats: {
                                physicalAttack: 0,
                                physicalDefense: 0, 
                                magicAttack: 10,
                                magicDefense: 0 
                            },
                            isRange: true
                        },
                        saber: {
                            weaponName: 'Saber',
                            weaponStats: {
                                physicalAttack: 7,
                                physicalDefense: 3,
                                magicAttack: 0,
                                magicDefense: 0
                            },
                            isRange: false
                        }
                        
                    },
                    secondWeapon: {
                        gladius: {
                            weaponName: 'Millanitus gladius',
                            weaponStats: {
                                physicalAttack: 3,
                                physicalDefense: 0, 
                                magicAttack: 7,
                                magicDefense: 0
                            },
                            isRange: false
                        },
                        arcubalista: {
                            weaponName: 'Arcubalista',
                            weaponStats: {
                                physicalAttack: 10,
                                physicalDefense: 0,
                                magicAttack: 0,
                                magicDefense: 0
                            },
                            isRange: true
                        },
                        rod: {
                            weaponName: 'Magic rod',
                            weaponStats: {
                                physicalAttack: 0,
                                physicalDefense: 0, 
                                magicAttack: 10,
                                magicDefense: 0 
                            },
                            isRange: true
                        }
                    }
                }
            }
        }
    },
    dwarf: {
        raceName: 'Dwarf',
        globalStats:{
            healthPoints: 7,
            armourPoints: 3,
            manaPoints: 0
        },
        class: {
            protector: {
                className: 'Protector of the Stone',
                classStats: {
                    bonusHealthPoints: 5,
                    bonusArmourPoints: 5,
                    bonusManaPoints: 0
                }
            },
            warrior: {
                className: 'Warrior of the High Throne',
                classStats: {
                    bonusHealthPoints: 3,
                    bonusArmourPoints: 7,
                    bonusManaPoints: 0
                }
            },
            berserk: {
                className: 'Berserk of the First Pillar',
                classStats: {
                    bonusHealthPoints: 7,
                    bonusArmourPoints: 3,
                    bonusManaPoints: 0
                }
            }
        }
    },
    elf: {
        raceName: 'Elf',
        globalStats: {
            healthPoints: 7,
            armourPoints: 0,
            manaPoints: 3
        },
        class: {
            defender: {
                className: 'Defender of the Greenburg`s gate',
                classStats: {
                    bonusHealthPoints: 4,
                    bonusArmourPoints: 3,
                    bonusManaPoints: 3
                }
            },
            mage: {
                className: 'Mage of the Angalt',
                classStats: {
                    bonusHealthPoints: 3,
                    bonusArmourPoints: 0,
                    bonusManaPoints: 7
                }
            },
            infiltrator: {
                className: 'Shadow infiltrator',
                classStats: {
                    bonusHealthPoints: 5,
                    bonusArmourPoints: 1,
                    bonusManaPoints: 4
                }
            }
        }
    }
}

export default race;