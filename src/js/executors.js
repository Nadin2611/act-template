const executors = [
  {
    id: 1,
    contractNumber: '2023-09/01-7',
    contractDate: '01 вересня 2023 року',
    groupName: 'гуртка «Образотворче мистецтво»',
    shortName: 'ФОП Безпалько Ірина Михайлівна',
    name: 'Фізична особа – підприємець Безпалько Ірина Михайлівна',
    address:
      '80612, Львівська обл., Золочівський р-н, село Берлин, вулиця Набережна, 129',
    identificationCode: 'РНОКПП 3277813081',
    bankAccount: 'IBAN UA 07 322001 0000026002330155015',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'irinabezpalko89@gmail.com',
    signature: 'Ірина БЕЗПАЛЬКО',
  },

  {
    id: 2,
    contractNumber: '2023-10/01-1',
    contractDate: '01 жовтня 2023 року',
    groupName: 'гуртків «Малярство на склі» та «Бісероплетіння»',
    shortName: 'ФОП Бобир Вікторія Сергіївна',
    name: 'Фізична особа – підприємець Бобир Вікторія Сергіївна',
    address:
      '81400, Львівська обл., Самбірський р-н, місто Самбір, вул. Франка Івана, 88г/117',
    identificationCode: 'РНОКПП 3764600505',
    bankAccount: 'IBAN UA 04 322001 0000026007330169158',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'viktoriasergiivna18@gmail.com',
    signature: 'Вікторія БОБИР',
  },

  {
    id: 3,
    contractNumber: '2023-09/01-8',
    contractDate: '01 вересня 2023 року',
    groupName: 'хореографічної студії народного танцю»',
    shortName: 'ФОП Болехівська Марія Василівна',
    name: 'Фізична особа – підприємець Болехівська Марія Василівна',
    address:
      '80600, Львівська обл., Золочівський р-н, місто Броди, вул. Мариняка Полковника, 1а',
    identificationCode: 'РНОКПП 2837209702',
    bankAccount: 'IBAN UA 68 322001 0000026001330154921',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'marichkabmw@ukr.net',
    signature: 'Марія БОЛЕХІВСЬКА',
  },

  {
    id: 4,
    contractNumber: '2023-09/01-9',
    contractDate: '01 вересня 2023 року',
    groupName: 'гуртка «Світ живої природи»',
    shortName: 'ФОП Бонішко Діана Станіславівна',
    name: 'Фізична особа – підприємець Бонішко Діана Станіславівна',
    address:
      '81053, Львівська обл., Яворівський р-н, місто Новояворівськ, вулиця Січових Стрільців, 5/62',
    identificationCode: 'РНОКПП 2678410440',
    bankAccount: 'IBAN UA 27 322001 0000026000330153365',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'diana_bonishko@yahoo.com',
    signature: 'Діана БОНІШКО',
  },
  {
    id: 5,
    contractNumber: '2023-09/01-10',
    contractDate: '01 вересня 2023 року',
    groupName: 'гуртка художньо-естетичного напрямку «Творча майстерня»',
    shortName: 'ФОП Галушка Марія Володимирівна',
    name: 'Фізична особа – підприємець Галушка Марія Володимирівна',
    address:
      '81400, Львівська обл., Самбірський р-н, м. Самбір, вулиця Шухевича, будинок 41/2',
    identificationCode: 'РНОКПП 3200808243',
    bankAccount: 'IBAN UA 67 322001 0000026008330153828',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'bura.marija1987@gmail.com',
    signature: 'Марія ГАЛУШКА',
  },
  {
    id: 6,
    contractNumber: '2023-09/01-11',
    contractDate: '01 вересня 2023 року',
    groupName: 'танцювального гуртка «Червона рута»',
    shortName: 'ФОП Дуванова Ірина Іванівна',
    name: 'Фізична особа – підприємець Дуванова Ірина Іванівна',
    address:
      '80193, Львівська обл., Червоноградський р-н, місто Соснівка, вулиця Галицька, 7/78',
    identificationCode: 'РНОКПП 2470518089',
    bankAccount: 'IBAN UA 78 322001 00000260093301551488',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'irunivna@ukr.net',
    signature: 'Ірина ДУВАНОВА',
  },
  {
    id: 7,
    contractNumber: '2023-09/01-1',
    contractDate: '01 вересня 2023 року',
    groupName: 'гуртка плавання',
    shortName: 'ФОП Жгута Андрій Романович',
    name: 'Фізична особа – підприємець Жгута Андрій Романович',
    address:
      '82100, Львівська обл., Дрогобицький р-н, місто Дрогобич, вул. Шевченка Тараса, 40/1а',
    identificationCode: 'РНОКПП 2994414479',
    bankAccount: 'IBAN UA 34 322001 0000026005330153263',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'andreyzhguta@gmail.com',
    signature: 'Андрій ЖГУТА',
  },
  {
    id: 8,
    contractNumber: '2023-09/01-2',
    contractDate: '01 вересня 2023 року',
    groupName: 'гуртка «Biblioart»',
    shortName: 'ФОП Івасюк Оксана Іванівна',
    name: 'Фізична особа – підприємець Івасюк Оксана Іванівна',
    address:
      '81440, Львівська обл., Самбірський р-н, місто Рудки, вул. Фредра, будинок 31',
    identificationCode: 'РНОКПП 2417714347',
    bankAccount: 'IBAN UA 83 322001 0000026009330153797',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'oksanaivasuk610@gmail.com',
    signature: 'Оксана ІВАСЮК',
  },
  {
    id: 9,
    contractNumber: '2023-09/01-6',
    contractDate: '01 вересня 2023 року',
    groupName: 'секції волейболу',
    shortName: 'ФОП Конюшенко Яна Олександрівна',
    name: 'Фізична особа – підприємець Конюшенко Яна Олександрівна',
    address:
      '26300, Кіровоградська обл., Голованівський р-н, місто Гайворон, вул. Подільська, будинок 69/23, квартира 20',
    identificationCode: 'РНОКПП 3460607620',
    bankAccount: 'IBAN UA 21 322001 0000026001330153245',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'grunenko65@gmail.com',
    signature: 'Яна КОНЮШЕНКО',
  },
  {
    id: 10,
    contractNumber: '2023-09/01-12',
    contractDate: '01 вересня 2023 року',
    groupName:
      'гуртка «Екологічна студія «Чарівний пензлик» та гуртка «Любування природою»',
    shortName: 'ФОП Красуліна-Кобель Вікторія Вікторівна',
    name: 'Фізична особа – підприємець Красуліна-Кобель Вікторія Вікторівна',
    address:
      '81400, Львівська обл., Самбірський р-н, місто Самбір, вулиця Шептицького, 7/3',
    identificationCode: 'РНОКПП 2761808886',
    bankAccount: 'IBAN UA 96 322001 0000026006330154829',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'krasulkina1975@gmail.com',
    signature: 'Вікторія КРАСУЛІНА-КОБЕЛЬ',
  },
  {
    id: 11,
    contractNumber: '2023-09/01-5',
    contractDate: '01 вересня 2023 року',
    groupName: 'гуртка народного танцю «Рушничок»',
    shortName: 'ФОП Куліш Зоряна Василівна',
    name: 'Фізична особа – підприємець Куліш Зоряна Василівна',
    address:
      '80256, Львівська обл., Червоноградський р-н, село Оглядів, вулиця Центральна, 47',
    identificationCode: 'РНОКПП 2903716280',
    bankAccount: 'IBAN UA 43 322001 0000026007330153324',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'kulishzoriana@gmail.com',
    signature: 'Зоряна КУЛІШ',
  },
  {
    id: 12,
    contractNumber: '2023-09/01-13',
    contractDate: '01 вересня 2023 року',
    groupName: 'занять з хорового співу',
    shortName: 'ФОП Манько Наталія Ярославівна',
    name: 'Фізична особа – підприємець Манько Наталія Ярославівна',
    address: '79013, Львівська обл., місто Львів, вул. Вербицького М., 16/ 6',
    identificationCode: 'РНОКПП 2281619087',
    bankAccount: 'IBAN UA 81 322001 0000026001330153814',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'radunytsya@gmail.com',
    signature: 'Наталія МАНЬКО',
  },
  {
    id: 13,
    contractNumber: '2023-09/01-14',
    contractDate: '01 вересня 2023 року',
    groupName: 'Школи вокалу «Хвиля»',
    shortName: 'ФОП Мартинюк Роксолана Янівна',
    name: 'Фізична особа – підприємець Мартинюк Роксолана Янівна',
    address:
      '82200, Львівська обл., Дрогобицький р-н, місто Трускавець, вулиця Івасюка, 17/44',
    identificationCode: 'РНОКПП 2665713669',
    bankAccount: 'IBAN UA 73 322001 0000026008330153817',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'i.kovalska2015@gmail.com',
    signature: 'Роксолана МАРТИНЮК',
  },
  {
    id: 14,
    contractNumber: '2023-09/01-15',
    contractDate: '01 вересня 2023 року',
    groupName: 'гуртка «Мала кулінарна академія»',
    shortName: 'ФОП Мелько Марина Володимирівна',
    name: 'Фізична особа – підприємець Мелько Марина Володимирівна',
    address:
      '76016, Івано-Франківська обл., Надвірнянський р-н, селище міського типу Делятин, вулиця Авіаційна , 49/35',
    identificationCode: 'РНОКПП 3075510943',
    bankAccount: 'IBAN UA 88 322001 0000026005330153649',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'melkomarina84@gmail.com',
    signature: 'Марина МЕЛЬКО',
  },
  {
    id: 15,
    contractNumber: '2023-09/01-16',
    contractDate: '01 вересня 2023 року',
    groupName: 'секції з веслування на байдарках та каное',
    shortName: 'ФОП Мручковський Микола Олександрович',
    name: 'Фізична особа – підприємець Мручковський Микола Олександрович',
    address:
      '80411, Львівська обл., Червоноградський р-н, смт Добротвір, вулиця Сагайдачного, 13/ 22',
    identificationCode: 'РНОКПП 3724305158',
    bankAccount: 'IBAN UA903220010000026000330154074',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'Kmrychkovskiy@gmail.com',
    signature: 'Микола МРУЧКОВСЬКИЙ',
  },
  {
    id: 16,
    contractNumber: '2023-09/01-17',
    contractDate: '01 вересня 2023 року',
    groupName: 'гуртка «Підземка»',
    shortName: 'ФОП Неупокоєва Наталія Леонідівна',
    name: 'Фізична особа – підприємець Неупокоєва Наталія Леонідівна',
    address: '79022, Львівська обл., місто Львів, вул.Підгаєцька, 29',
    identificationCode: 'РНОКПП 2787308600',
    bankAccount: 'IBAN UA 84 322001 0000026008310037856',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'nneupokoyeva@gmail.com',
    signature: 'Наталія НЕУПОКОЄВА',
  },
  {
    id: 17,
    contractNumber: '2023-09/01-3',
    contractDate: '01 вересня 2023 року',
    groupName: 'танцювальної студії Step Up',
    shortName: 'ФОП Павлюк Тетяна Тарасівна',
    name: 'Фізична особа – підприємець Павлюк Тетяна Тарасівна',
    address:
      '81160, Львівська обл., Львівський р-н, смт Щирець, вулиця Стрілецька, 32',
    identificationCode: 'РНОКПП 3743906989',
    bankAccount: 'IBAN UA 41 322001 0000026001330154534',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'taniucha200287@gmail.com',
    signature: 'Тетяна ПАВЛЮК',
  },
  {
    id: 18,
    contractNumber: '2023-09/01-18',
    contractDate: '01 вересня 2023 року',
    groupName:
      'гуртка «Народні ремесла України» та студії декоративно-ужиткового мистецтва',
    shortName: 'ФОП Тесля Наталія Ярославівна',
    name: 'Фізична особа – підприємець Тесля Наталія Ярославівна',
    address:
      '80600, Львівська обл., Золочівський р-н, місто Броди, вулиця Балканська, 4а',
    identificationCode: 'РНОКПП 2753003905',
    bankAccount: 'IBAN UA 25 322001 0000026001330155016',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'tnatalia1705@gmail.com',
    signature: 'Наталія ТЕСЛЯ',
  },
  {
    id: 19,
    contractNumber: '2023-09/01-4',
    contractDate: '01 вересня 2023 року',
    groupName: 'гуртка «Фітодизайн»',
    shortName: 'ФОП Юзефів Ірена Ярославівна-Іванівна',
    name: 'Фізична особа – підприємець Юзефів Ірена Ярославівна-Іванівна',
    address:
      '82600, Львівська обл., Стрийський р-н, місто Сколе, вулиця Наливайка, 32',
    identificationCode: 'РНОКПП 2604713101',
    bankAccount: 'IBAN UA 23 322001 0000026003330155081',
    bank: 'в АТ УНІВЕРСАЛ БАНК',
    email: 'irenajuzefiv777@gmail.com',
    signature: 'Ірена ЮЗЕФІВ',
  },
];

export { executors };
