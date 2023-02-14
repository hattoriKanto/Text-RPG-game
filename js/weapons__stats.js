'use strict'

const weapons = {
    forHuman: {
        forLegionnaire: {
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
        },
        forScout: {
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
        },
        forAgent: {
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

export default weapons;