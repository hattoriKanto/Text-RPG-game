
import images from "../../images.js";

const popupPlayerCalcText = {

    language: {

        english: {

            firstColumn: 'Stats',

            secondColumn: 'Race',

            thirdColumn: 'Class',

            fourthColumn: '1st Weapon',

            fifthColumn: '2nd Weapon',

            sixthColumn: 'Total(1st Weapon)',

            seventhColumn: 'Total(2st Weapon)'

        },

        russian: {

            firstColumn: 'Stats',

            secondColumn: 'Раса',

            thirdColumn: 'Класс',

            fourthColumn: '1-е оружие',

            fifthColumn: '2-е оружие',

            sixthColumn: 'Общее(1-е оружие)',

            seventhColumn: 'Общее(2-е оружие)'

        }

    },

    imagesColumn: {

        healthPoints: images.traits.healthPoints,

        armourPoints: images.traits.armourPoints,

        damageToHealthPoints: images.traits.damageToHealthPoints,

        damageToArmourPoints: images.traits.damageToArmourPoints,

        defencePoints: images.traits.defencePoints

    }

};

export { popupPlayerCalcText };