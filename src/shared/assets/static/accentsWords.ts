export interface AccentsWordsInterface {
  id: number;
  valid: string;
  invalid: string;
  probability?: number;
  uncorrectTimes?: number;
  consecutivelyTimes?: number;
  inProgress?: boolean;
}

export const accentsWords: AccentsWordsInterface[] = [
  {
    valid: 'аэропОрты',
    invalid: 'аэропортЫ',
    id: 0,
  },
  {
    valid: 'бАнты',
    invalid: 'бантЫ',
    id: 1,
  },
  {
    valid: 'бухгАлтеров',
    invalid: 'бухгалтерОв',
    id: 2,
  },
  {
    valid: 'вероисповЕдание',
    invalid: 'вероисповедАние',
    id: 3,
  },
  {
    valid: 'водопровОд',
    invalid: 'водопрОвод',
    id: 4,
  },
  {
    valid: 'дешевИзна',
    invalid: 'дешевизнА',
    id: 5,
  },
  {
    valid: 'диспансЕр',
    invalid: 'диспАнсер',
    id: 6,
  },
  {
    valid: 'досУг',
    invalid: 'дОсуг',
    id: 7,
  },
  {
    valid: 'еретИк',
    invalid: 'ерЕтик',
    id: 8,
  },
  {
    valid: 'жалюзИ',
    invalid: 'жАлюзи',
    id: 9,
  },
  {
    valid: 'Иксы',
    invalid: 'иксЫ',
    id: 10,
  },
  {
    valid: 'каталОг',
    invalid: 'катАлог',
    id: 11,
  },
  {
    valid: 'квартАл',
    invalid: 'квАртал',
    id: 12,
  },
  {
    valid: 'крАны',
    invalid: 'кранЫ',
    id: 13,
  },
  {
    valid: 'кремЕнь',
    invalid: 'крЕмень',
    id: 14,
  },
  {
    valid: 'кремнЯ',
    invalid: 'крЕмня',
    id: 15,
  },
  {
    valid: 'лЕкторов',
    invalid: 'лекторОв',
    id: 16,
  },
  {
    valid: 'лОктя',
    invalid: 'локтЯ',
    id: 17,
  },
  {
    valid: 'локтЕй',
    invalid: 'лОктей',
    id: 18,
  },
  {
    valid: 'намЕрение',
    invalid: 'немерЕние',
    id: 19,
  },
  {
    valid: 'нефтепровОд',
    invalid: 'нефтепрОвод',
    id: 20,
  },
  {
    valid: 'нОгтя',
    invalid: 'ногтЯ',
    id: 21,
  },
  {
    valid: 'Отрочество',
    invalid: 'отрОчество',
    id: 22,
  },
  {
    valid: 'партЕр',
    invalid: 'пАртер',
    id: 23,
  },
  {
    valid: 'придАное',
    invalid: 'прИданое',
    id: 24,
  },
  {
    valid: 'свЁкла',
    invalid: 'свеклА',
    id: 25,
  },
  {
    valid: 'сирОты',
    invalid: 'сИроты',
    id: 26,
  },
  {
    valid: 'сосредотОчение',
    invalid: 'сосредоточЕние',
    id: 27,
  },
  {
    valid: 'срЕдства',
    invalid: 'средствА',
    id: 28,
  },
  {
    valid: 'столЯр',
    invalid: 'стОляр',
    id: 29,
  },
  {
    valid: 'тОрты',
    invalid: 'тортЫ',
    id: 30,
  },
  {
    valid: 'тУфля',
    invalid: 'туфлЯ',
    id: 31,
  },
  {
    valid: 'цемЕнт',
    invalid: 'цЕмент',
    id: 32,
  },
  {
    valid: 'цепОчка',
    invalid: 'цЕпочка',
    id: 33,
  },
  {
    valid: 'шАрфы',
    invalid: 'шарфЫ',
    id: 34,
  },
  {
    valid: 'красИвее',
    invalid: 'красивЕе',
    id: 35,
  },
  {
    valid: 'кУхонный',
    invalid: 'кухОнный',
    id: 36,
  },
  {
    valid: 'мозаИчный',
    invalid: 'мозАичный',
    id: 37,
  },
  {
    valid: 'оптОвый',
    invalid: 'Оптовый',
    id: 38,
  },
  {
    valid: 'прозорлИвый',
    invalid: 'прозОрливый',
    id: 39,
  },
  {
    valid: 'слИвовый',
    invalid: 'сливОвый',
    id: 40,
  },
  {
    valid: 'бралА',
    invalid: 'брАла',
    id: 41,
  },
  {
    valid: 'воссоздалА',
    invalid: 'воссоздАла',
    id: 42,
  },
  {
    valid: 'влилАсь',
    invalid: 'влИлась',
    id: 43,
  },
  {
    valid: 'вручИт',
    invalid: 'врУчит',
    id: 44,
  },
  {
    valid: 'гналА',
    invalid: 'гнАла',
    id: 45,
  },
  {
    valid: 'дозвонИтся',
    invalid: 'дозвОнится',
    id: 46,
  },
  {
    valid: 'дозИровать',
    invalid: 'дозировАть',
    id: 47,
  },
  {
    valid: 'закУпорить',
    invalid: 'закупОрить',
    id: 48,
  },
  {
    valid: 'зАнял',
    invalid: 'занЯл',
    id: 49,
  },
  {
    valid: 'занялА',
    invalid: 'зАняла',
    id: 50,
  },
  {
    valid: 'зАняли',
    invalid: 'занЯли',
    id: 51,
  },
  {
    valid: 'заперлА',
    invalid: 'зАперла',
    id: 52,
  },
  {
    valid: 'запломбировАть',
    invalid: 'запломбИровать',
    id: 53,
  },
  {
    valid: 'защемИт',
    invalid: 'защЕмит',
    id: 54,
  },
  {
    valid: 'звонИт',
    invalid: 'звОнит',
    id: 55,
  },
  {
    valid: 'кАшлянуть',
    invalid: 'кашлянУть',
    id: 56,
  },
  {
    valid: 'клАла',
    invalid: 'клалА',
    id: 57,
  },
  {
    valid: 'крАлась',
    invalid: 'кралАсь',
    id: 58,
  },
  {
    valid: 'кровоточИть',
    invalid: 'кровотОчить',
    id: 59,
  },
  {
    valid: 'лгалА',
    invalid: 'лгАла',
    id: 60,
  },
  {
    valid: 'лилА',
    invalid: 'лИла',
    id: 61,
  },
  {
    valid: 'навралА',
    invalid: 'наврАла',
    id: 62,
  },
  {
    valid: 'наделИт',
    invalid: 'надЕлит',
    id: 63,
  },
  {
    valid: 'накренИтся',
    invalid: 'накрЕнится',
    id: 64,
  },
  {
    valid: 'облегчИть',
    invalid: 'облЕгчить',
    id: 65,
  },
  {
    valid: 'одолжИт',
    invalid: 'одОлжит',
    id: 66,
  },
  {
    valid: 'озлОбить',
    invalid: 'озлобИть',
    id: 67,
  },
  {
    valid: 'окружИт',
    invalid: 'окрУжит',
    id: 68,
  },
  {
    valid: 'опОшлить',
    invalid: 'опошлИть',
    id: 69,
  },
  {
    valid: 'освЕдомиться',
    invalid: 'осведомИться',
    id: 70,
  },
  {
    valid: 'откУпорить',
    invalid: 'откупОрить',
    id: 71,
  },
  {
    valid: 'пломбировАть',
    invalid: 'пломбИровать',
    id: 72,
  },
  {
    valid: 'послАла',
    invalid: 'послалА',
    id: 73,
  },
  {
    valid: 'прИбыл',
    invalid: 'прибЫл',
    id: 74,
  },
  {
    valid: 'сверлИт',
    invalid: 'свЕрлит',
    id: 75,
  },
  {
    valid: 'сорИт',
    invalid: 'сОрит',
    id: 76,
  },
  {
    valid: 'углубИть',
    invalid: 'углУбить',
    id: 77,
  },
  {
    valid: 'чЕрпать',
    invalid: 'черпАть',
    id: 78,
  },
  {
    valid: 'щемИт',
    invalid: 'щЕмит',
    id: 79,
  },
  {
    valid: 'щЁлкать',
    invalid: 'щелкАть',
    id: 80,
  },
  {
    valid: 'зАгнутый',
    invalid: 'загнУтый',
    id: 81,
  },
  {
    valid: 'занятА',
    invalid: 'зАнята',
    id: 82,
  },
  {
    valid: 'зАпертый',
    invalid: 'запЁртый',
    id: 83,
  },
  {
    valid: 'кормЯщий',
    invalid: 'кОрмящий',
    id: 84,
  },
  {
    valid: 'кровоточАщий',
    invalid: 'кровотОчащий',
    id: 85,
  },
  {
    valid: 'нажИвший',
    invalid: 'нАживший',
    id: 86,
  },
  {
    valid: 'нанЯвшийся',
    invalid: 'нАнявшийся',
    id: 87,
  },
  {
    valid: 'начАвший',
    invalid: 'нАчавший',
    id: 88,
  },
  {
    valid: 'нАчатый',
    invalid: 'начАтый',
    id: 89,
  },
  {
    valid: 'низведЁнный',
    invalid: 'низвЕденный',
    id: 90,
  },
  {
    valid: 'облегчЁнный',
    invalid: 'облЕгченный',
    id: 91,
  },
  {
    valid: 'ободрЁнный',
    invalid: 'обОдренный',
    id: 92,
  },
  {
    valid: 'обострЁнный',
    invalid: 'обОстренный',
    id: 93,
  },
  {
    valid: 'отключЁнный',
    invalid: 'отклЮченный',
    id: 94,
  },
  {
    valid: 'поделЁнный',
    invalid: 'подЕленный',
    id: 95,
  },
  {
    valid: 'понЯвший',
    invalid: 'пОнявший',
    id: 96,
  },
  {
    valid: 'принятА',
    invalid: 'прИнята',
    id: 97,
  },
  {
    valid: 'приручЁнный',
    invalid: 'прирУченный',
    id: 98,
  },
  {
    valid: 'прожИвший',
    invalid: 'прОживший',
    id: 99,
  },
  {
    valid: 'снятА',
    invalid: 'снЯта',
    id: 100,
  },
  {
    valid: 'сОгнутый',
    invalid: 'согнУтый',
    id: 101,
  },
  {
    valid: 'углублЁнный',
    invalid: 'углУбленный',
    id: 102,
  },
  {
    valid: 'закУпорив',
    invalid: 'закупОрив',
    id: 103,
  },
  {
    valid: 'начАв',
    invalid: 'нАчав',
    id: 104,
  },
  {
    valid: 'начАвшись',
    invalid: 'нАчавшись',
    id: 105,
  },
  {
    valid: 'поднЯв',
    invalid: 'пОдняв',
    id: 106,
  },
  {
    valid: 'прибЫв',
    invalid: 'прИбыв',
    id: 107,
  },
  {
    valid: 'дОверху',
    invalid: 'довЕрху',
    id: 108,
  },
  {
    valid: 'донЕльзя',
    invalid: 'дОнельзя',
    id: 109,
  },
  {
    valid: 'дОнизу',
    invalid: 'донИзу',
    id: 110,
  },
  {
    valid: 'дОсуха',
    invalid: 'досУха',
    id: 111,
  },
  {
    valid: 'красИвее',
    invalid: 'красивЕе',
    id: 112,
  },
];
