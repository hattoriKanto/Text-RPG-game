'use strict';

const castleText = {
    russian: {
        castleEntrance: {
            entranceName: 'Замок Каструм',
            entranceDescr: 'После долгого и изматывающего пути вы наконец-то достигли цели. Взобравшись на холм, вам открылся величественный вид на замок Каструм. Окруженный высокими стенами, он возвышается над озером. К нему ведёт всего одна дорога, по обе стороны которой расположен лес. Чем ближе вы подходите к замку, тем реже становиться лес и тем сильнее чувствуется запах гари... Приблизившись к Каструму в плотную, вы замечаете отсутствие часовых и странные звуки во внутреннем дворе замка. Его ворота выбиты, а перед ними лежат трупы солдат Империи... и одного подозрительного человека. Его одеяние не имеет ничего схожего ни с одной известной вам организацией или государством. Однозначно, здесь что-то не так, как и говорил ваш господин.',
            entranceBtn: 'Войти в ворота замка'
        },
        castleCourtyard: {
            courtyardName:'Внутренний двор замка',
            courtyardDescr: 'Войдя во внутренний двор Каструма, вы видите ту же картину, что и при входе в замок: следы битвы и море трупов. Но, самое ужастное - трупный запах, который смешался с запахом гари. Что вы решили делать?',
            courtyardBtn: {
                firstBtn: 'Осмотреть стойла',
                secondBtn: 'Осмотреть казармы',
                thirdBtn: 'Осмотреть подозрительный труп'
            },
            courtyardBarrakcs: {
                barrakcsName: 'Казармы замка',
                barracksDescr: 'Подходя всё ближе к казармам, вас не покидает чувство, что за вами следят. То тут и там слышны шорохи и ворчание, кто-то пристально следит за вашими действиями. Вы не знаете где, вы не знаете кто, но понимаете, что надо быть начеку. С такими мыслями вы подошли к зданию казармы. Дверь была открыта, а перед входом не было ничего подозрительного. Внутри помещения, на удивление, было тихо.',
                barracksBtn: 'Войти в казармы',
                barracksInside: {
                    barracksInsideName: 'Внутренние помещения казарм',
                    barracksInsideDescr: 'Войдя во внуть здания, перед вами предстаёт странная картина. Если во дворе, вы могли лицезреть следы бойни, то внутри казарм было всё спокойно. Ни следов борьбы или другой подозрительной деятельности. Очевидно, что на момент атаки казармы были уже пусты и поэтому, это помещение битва обошла стороной. И всё же, расслабляеться не стоит...',
                    barracksInsideNameBtn: {
                        firstBtn: 'Осмотреть первый этаж',
                        secondBtn: 'Осмотреть второй этаж'
                    },
                    barracksInsideSecondFloor: {
                        secondFloorName: 'Первый этаж казарм',
                        secondFloorDescr: 'Осторожно поднимаясь по ступенькам, вы наконец-то достигли второго этажа. Длинный и пустой коридор - всё, что вы лицезреете перед собой. Как и ожидалось, на втором этаже никого нет. По крайней мере из живых...',
                        secondFloorBtn: {
                            firstBtn: 'Пройтись по комнатам легионеров',
                            secondBtn: 'Пройти в комнату лейтенанта',
                            thirdBtn: 'Спуститься вниз',
                        },
                    },

                }
            },
            courtyardDeadBody: {
                deadBodyName: 'Подозрительный труп',
                deadBodyDescr: 'Подойдя поближе к трупу, вы понимаете, что на нём то же одеяние, что вы увидели на мертвеце при входе в замок. Бледная кожа, глаза залитые кровью, следы от многочисленных порезов. Очередной фанатик или культист, которых по миру развелось, как звёзд на небе? Нет, здесь что-то большее. Вряд ли, обычные фанатики напали бы на имперскую крепость, где расквартирован отряд легионеров. И уж точно они бы не справились с профессиональными солдатами. Всё это не к добру. Хм, нужно осмотреть другие места во внутреннем дворе.',
                deadBodyBtn: {
                    firstBtn: 'Осмотреть стойла',
                    secondBtn: 'Осмотреть казармы'
                }
            }
        }
    }
}

export default castleText;