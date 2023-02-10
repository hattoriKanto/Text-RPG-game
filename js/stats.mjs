'use strict'

const race = {
    human: {
        healthPoints: 10,
        armourPoints: 0,
        manaPoints: 0,
        class: {
            legionnaire: {
                className: 'Legionnaire of the First imperial legion',
                classStats: {
                    bonusHealthPoints: 5,
                    bonusArmourPoints: 5,
                    bonusManaPoints: 0
                }
            },
            scout: {
                className: 'Scout of the Fifth light brigade',
                classStats: {
                    bonusHealthPoints: 7,
                    bonusArmourPoints: 3,
                    bonusManaPoints: 0
                }
            },
            agent: {
                className: 'Agent of the Imperial Intelligent',
                classStats: {
                    bonusHealthPoints: 5,
                    bonusArmourPoints: 2,
                    bonusManaPoints: 3
                }
            }
        }
    },
    dwarf: {
        healthPoints: 7,
        armourPoints: 3,
        manaPoints: 0,
        class: {
            guardsman: {
                bonusHealthPoints: 5,
                bonusArmourPoints: 5,
                bonusManaPoints: 0
            },
            warrior: {
                bonusHealthPoints: 3,
                bonusArmourPoints: 7,
                bonusManaPoints: 0
            },
            berserk: {
                bonusHealthPoints: 7,
                bonusArmourPoints: 3,
                bonusManaPoints: 0
            }
        }
    },
    elf: {
        healthPoints: 7,
        armourPoints: 0,
        manaPoints: 3,
        class: {
            defender: {
                bonusHealthPoints: 4,
                bonusArmourPoints: 3,
                bonusManaPoints: 3
            },
            mage: {
                bonusHealthPoints: 3,
                bonusArmourPoints: 0,
                bonusManaPoints: 7
            },
            infiltrator: {
                bonusHealthPoints: 5,
                bonusArmourPoints: 1,
                bonusManaPoints: 4
            }
        }
    }
}

export default race;