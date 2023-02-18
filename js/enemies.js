'use strict';

const enemies = {
    location: {
        castle: {
            classesOfEnemies: {
                mobs:{ 
                    skeleton: {
                        name: 'Skeleton',
                        passiveStats: {
                            healthPoints: 5,
                            armourPoints: 0,
                            manaPoints: 0
                        },
                        activeStats: {
                            physicalAttack: 3,
                            physicalDefence: 2,
                            magicAttack: 0,
                            magicDefence: 0
                        }
                    },
                    zombieHuman: {
                        name: 'Zombie-human',
                        passiveStats: {
                            healthPoints: 10,
                            armourPoints: 0,
                            manaPoints: 0
                        },
                        activeStats: {
                            physicalAttack: 5,
                            physicalDefence: 3,
                            magicAttack: 0,
                            magicDefence: 2
                        }
                    },
                    zombieDwarf: {
                        name: 'Zombie-dwarf',
                        passiveStats: {
                            healthPoints: 5,
                            armourPoints: 5,
                            manaPoints: 0
                        },
                        activeStats: {
                            physicalAttack: 6,
                            physicalDefence: 4,
                            magicAttack: 0,
                            magicDefence: 0
                        }
                    },
                    zombieElf: {
                        name: 'Zombie-elf',
                        passiveStats: {
                            healthPoints: 5,
                            armourPoints: 0,
                            manaPoints: 5
                        },
                        activeStats: {
                            physicalAttack: 2,
                            physicalDefence: 2,
                            magicAttack: 3,
                            magicDefence: 3
                        }
                    }
                } ,
                eliteMobs: {
                    necromancer: {
                        name: 'Necromancer',
                    },
                    darkKnight: {
                        name: 'Dark Knight',
                    },
                    corruptedLegionnier: {
                        name: 'Corupted Legionnier',
                    },
                    corruptedScout: {
                        name: 'Corrupted Scout',
                    }
                } ,
                boss: {
                    name: 'Corrupted High Commander von Varadog'
                }
            }
        },
        village: {

        },
        rift: {

        }
    }
}