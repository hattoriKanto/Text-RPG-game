
const castleBarracksRus = {

    barrakcsName: 'Казармы замка',

    barracksDescr: 'Подходя всё ближе к казармам, вас не покидает чувство, что за вами следят. То тут и там слышны шорохи и ворчание, кто-то пристально следит за вашими действиями. Вы не знаете где, вы не знаете кто, но понимаете, что надо быть начеку. С такими мыслями вы подошли к зданию казармы. Дверь была открыта, а перед входом не было ничего подозрительного. Внутри помещения, на удивление, было тихо.',
                
    barracksBtn: 'Войти в казармы',

    barracksInside: {

        barracksInsideName: 'Внутренние помещения казарм',

        barracksInsideDescr: 'Войдя во внутрь здания, перед вами предстаёт странная картина. Если во дворе, вы могли лицезреть следы бойни, то внутри казарм было всё спокойно. Ни следов борьбы или другой подозрительной деятельности. Очевидно, что на момент атаки казармы были уже пусты и поэтому, это помещение битва обошла стороной. И всё же, расслабляеться не стоит...',

        barracksInsideNameBtn: {

            firstBtn: 'Осмотреть первый этаж',

            secondBtn: 'Осмотреть второй этаж'

        }

    },

    barracksInsideFirstFloor: {

        firstFloorName: 'Первый этаж казарм',

        firstFloorDescr: 'Решив осмотреть первый этаж, вы осторожно двигаетесь в сторону больших дверей. Похоже, что это оружейная. Из оружейной на кухню ведут следы чёрной крови. Похоже, кого-то туда тянули...',

        firstFloorBtn: {

            firstBtn: 'Зайти на кухню',

            secondBtn: 'Пройти в оружейную',

        },

        isVisited: false

    },

    armoryRoom: {

        armoryRoomName: 'Оружейная комната',

        armoryRoomDescr: 'Вы подходите к приоткрытым дверям оружейной и замечаете много чёрной крови на полу. Зайдя и окинув взглядом комнату, вы не видите ни следов борьбы, ни следов сражения. Стойки с оружием и бронёй были пусты, похоже легионеры успели подготовиться к атаке. Это означает, что все солдаты были задействованы в бою. Справа стоит стол, возможно, кварирмейстера. Там могут быть зацепки. Ваше решение?',

        armoryRoomBtn: {

            firstBtn: 'Осмотреть лужу крови',

            secondBtn: 'Осмотреть стол',

        },

        isVisited: false

    },

    armoryTable: {

        armoryTableName: 'Стол квартирмейстера',

        armoryTableDescr: 'Ваши догадки подтвердились - это и вправду стол квартирмейстера. На столе лежит большое количество бумаг и журналов с отчётами. Ничего интересного или полезного вы тут не видите. Однако, осмотрев ящики в столе вы находите отчёт квартирмейстера часовых. В нём сказано, про очень опасную группу культистов, которые обосновались недалеко от деревни Рифтберг. Судя по отчёту, патруль из деревни не вернулся и часовые формировали ударный отряд, поэтому отправили запрос на оружие и броню. Что было дальше, не понятно.',

        armoryTableBtn: {

            firstBtn: 'Осмотреть лужу крови',

            secondBtn: 'Осмотреть кухню',

            thirdBtn: 'Осмотреть второй этаж'

        },

        isVisited: false

    },

    kitchenRoom: {

        kitchenRoomName: 'Кухонная комната',

        kitchenRoomDescr: 'Вы решаете пройтись по кровавым следам и проходите на кухню. На первый взгляд ничего интересного, след ведёт дальше в конец кухни, где расположены двери. Подходя всё ближе к дверям, вы чувствуете странный токсичный запах. Открыв дверь, вы видите быстро разлагающийся труп из которого идут испарения, которые и вызывали неприятный запах. По внешнему ввиду сразу не скажешь, кому принадлежит этот труп. Судя по активным испарениям, жертва была убита не давно и что бы скрыть преступление, виновник использовал алхимическую субстанцию на трупе для быстрого разложения. К сожалению, предположить по цвету крови расу жертв нельзя, ведь кровь могла окраситься в цвет под влиянием яда, раз вы имеете дело с знатоком в алхимии. Больше здесь смотреть нечего.',

        kitchenRoomBtn: {

            firstBtn: 'Пройти в оружейную',

            secondBtn: 'Осмотреть второй этаж',

            thirdBtn: 'Выйти из казарм'

        },

        isVisited: false

    },

    barracksInsideSecondFloor: {

        secondFloorName: 'Второй этаж казарм',

        secondFloorDescr: 'Осторожно поднимаясь по ступенькам, вы наконец-то достигли второго этажа. Длинный и пустой коридор - всё, что вы лицезреете перед собой. Похоже, что по обе стороны коридора располагаються комнаты рядового состава, а в самом конце - офицерская комната. Как и ожидалось, на втором этаже никого нет. По крайней мере из живых...',

        secondFloorBtn: {

            firstBtn: 'Пройтись по комнатам легионеров',

            secondBtn: 'Пройти в комнату лейтенанта'

        },

        isVisited: false

    },

    legionnaireRooms: {

        legionnaireRoomsName: 'Комнаты легионеров',

        legionnaireRoomsDescr: 'Походив по комнатам солдат, вы заметили одно сходство - убранные постели и идеальная чистота. Воистину, дисциплины у легионеров не занимать. На столах, то тут, то там лежат личные вещи хозяев, которые не представляют никакой цености для вас. Однако, вашему взгляду попался сундук, в котором вы нашли зелье здоровья.',

        legionnaireRoomsBtn: {

            firstBtn: 'Пройти в комнату лейтенанта',

            secondBtn: 'Осмотреть первый этаж'

        },

        isVisited: false

    },

    officerRoom: {

        officerRoomName: 'Комната лейтенанта',

        officerRoomDescr: 'Подходя всё ближе к офицерской комнате, вы замечаете, что дверь туда приоткрыта. Осторожно подойдя к дверному проёму, вы становитесь на колени и сквозь приоткрытую дверь смотрите в комнату. Слева вы видите книжный шкаф забитый книгами, а по центру, похоже, стоит стол. Увы, большего вам не увидеть. Придётся входить. Вы аккуратно и медленно открываете дверь и быстро забегаете во внутрь. Перед вами открывается печальная картина: человек сидящий перед столом, который мёртв уже продолжительное время.',

        officerRoomBtn: {

            firstBtn: 'Осмотреть труп',

            secondBtn: 'Осмотреть стол'

        },

        isVisited: false

    },

    officerDeadBody: {

        officerDeadBodyName: 'Труп офицера',

        officerDeadBodyDescr: 'Судя по нашивка на униформе солдата, он был лейтенантом. Помимо нашивок, на его груди виднееца брошь с голубем и мечом. Такая брошь - отличительная особенность младшего офицерского состава. Но был ли он тут главным? Это предстоит выяснить. На его шеи спереди виднееться глубокий порез, похоже его убили внезапно и ещё до начала боя. Но кто и зачем? Так же не понятно. Убийца был исскусен и не оставил следом. Здесь больше ничего интересного вы не видите.',

        officerDeadBodyBtn: {

            firstBtn: 'Осмотреть стол',

            secondBtn: 'Осмотреть комнаты легионеров',

            thirdBtn: 'Осмотреть первый этаж'

        },

        isVisited: false

    },

    officerTable: {

        officerTableName: 'Стол офицера',

        officerTableDescr: 'На столе у офицера лежит куча документов, в основном рутина. Судя по отчётам, легионеров отправили сюда для поддержания порядка. Они сменили часовых пару месяцев назад, после того как тут был обнаружен клан ящеров. Помимо этого, эта местность была известна своими различным тёмным историям. Канибалы, культисты и разные группы бандитов и отступников наводняют окресные леса и болота. Похоже, солдаты легиона были отправлены в регион для укрепления власти Империи здесь. Командование на себя взял капитан Пратус. Под его началом было 200 человек, которые были разбиты на четыри группы. Одной такой группой командывал лейтенант, значит, где-то должны быть ещё четыре офицера, включая капитана. Хм, что за обрывок бумаги лежит под столом?',

        officerTableBtn: {

            firstBtn: 'Поднять обрывок бумаги',

        },

        isVisited: false

    },

    pieceOfPaper: {

        pieceOfPaperName: 'Клочок бумаги',

        pieceOfPaperDescr: 'Похоже, что это письмо. Ну, по крайней мере то, что от него осталось. Кто-то намеренно хотел уничтожить его и поэтому сжёг его, но не полностью. Это наталкивает на мысль, что убийцу что-то спугнуло или, что он дилетант. Вероятнее всего именно первый вариант, судя по навыкам убийцы - он точно не любитель. Как бы ни было, вы решаете прочитать то, что осталось от письма. "...как Вы и приказали, я начал расследование недавних проишествий... не хочу строить теории, но среди нас есть... Прошу...". Всё становиться слишком запутано.',

        pieceOfPaperBtn: {

            firstBtn: 'Осмотреть труп',

            secondBtn: 'Осмотреть комнаты легионеров',

            thirdBtn: 'Осмотреть первый этаж'

        },

        isVisited: false

    }

}

export default castleBarracksRus;