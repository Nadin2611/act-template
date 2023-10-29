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
  // {
  //   id: 9,
  //   contractNumber: '2023-09/01-10',
  //   contractDate: '01 вересня 2023 року',
  //   groupName: 'гуртка художньо-естетичного напрямку «Творча майстерня»',
  //   shortName: 'ФОП Галушка Марія Володимирівна',
  //   name: 'Фізична особа – підприємець Галушка Марія Володимирівна',
  //   address:
  //     '81400, Львівська обл., Самбірський р-н, м. Самбір, вулиця Шухевича, будинок 41/2',
  //   identificationCode: 'РНОКПП 3200808243',
  //   bankAccount: 'IBAN UA 67 322001 0000026008330153828',
  //   bank: 'в АТ УНІВЕРСАЛ БАНК',
  //   email: 'bura.marija1987@gmail.com',
  //   signature: 'Марія ГАЛУШКА',
  // },
  // {
  //   id: 10,
  //   contractNumber: '2023-09/01-10',
  //   contractDate: '01 вересня 2023 року',
  //   groupName: 'гуртка художньо-естетичного напрямку «Творча майстерня»',
  //   shortName: 'ФОП Галушка Марія Володимирівна',
  //   name: 'Фізична особа – підприємець Галушка Марія Володимирівна',
  //   address:
  //     '81400, Львівська обл., Самбірський р-н, м. Самбір, вулиця Шухевича, будинок 41/2',
  //   identificationCode: 'РНОКПП 3200808243',
  //   bankAccount: 'IBAN UA 67 322001 0000026008330153828',
  //   bank: 'в АТ УНІВЕРСАЛ БАНК',
  //   email: 'bura.marija1987@gmail.com',
  //   signature: 'Марія ГАЛУШКА',
  // },
  // {
  //   id: 11,
  //   contractNumber: '2023-09/01-10',
  //   contractDate: '01 вересня 2023 року',
  //   groupName: 'гуртка художньо-естетичного напрямку «Творча майстерня»',
  //   shortName: 'ФОП Галушка Марія Володимирівна',
  //   name: 'Фізична особа – підприємець Галушка Марія Володимирівна',
  //   address:
  //     '81400, Львівська обл., Самбірський р-н, м. Самбір, вулиця Шухевича, будинок 41/2',
  //   identificationCode: 'РНОКПП 3200808243',
  //   bankAccount: 'IBAN UA 67 322001 0000026008330153828',
  //   bank: 'в АТ УНІВЕРСАЛ БАНК',
  //   email: 'bura.marija1987@gmail.com',
  //   signature: 'Марія ГАЛУШКА',
  // },
  // {
  //   id: 12,
  //   contractNumber: '2023-09/01-10',
  //   contractDate: '01 вересня 2023 року',
  //   groupName: 'гуртка художньо-естетичного напрямку «Творча майстерня»',
  //   shortName: 'ФОП Галушка Марія Володимирівна',
  //   name: 'Фізична особа – підприємець Галушка Марія Володимирівна',
  //   address:
  //     '81400, Львівська обл., Самбірський р-н, м. Самбір, вулиця Шухевича, будинок 41/2',
  //   identificationCode: 'РНОКПП 3200808243',
  //   bankAccount: 'IBAN UA 67 322001 0000026008330153828',
  //   bank: 'в АТ УНІВЕРСАЛ БАНК',
  //   email: 'bura.marija1987@gmail.com',
  //   signature: 'Марія ГАЛУШКА',
  // },
  // {
  //   id: 13,
  //   contractNumber: '2023-09/01-10',
  //   contractDate: '01 вересня 2023 року',
  //   groupName: 'гуртка художньо-естетичного напрямку «Творча майстерня»',
  //   shortName: 'ФОП Галушка Марія Володимирівна',
  //   name: 'Фізична особа – підприємець Галушка Марія Володимирівна',
  //   address:
  //     '81400, Львівська обл., Самбірський р-н, м. Самбір, вулиця Шухевича, будинок 41/2',
  //   identificationCode: 'РНОКПП 3200808243',
  //   bankAccount: 'IBAN UA 67 322001 0000026008330153828',
  //   bank: 'в АТ УНІВЕРСАЛ БАНК',
  //   email: 'bura.marija1987@gmail.com',
  //   signature: 'Марія ГАЛУШКА',
  // },
  // {
  //   id: 14,
  //   contractNumber: '2023-09/01-10',
  //   contractDate: '01 вересня 2023 року',
  //   groupName: 'гуртка художньо-естетичного напрямку «Творча майстерня»',
  //   shortName: 'ФОП Галушка Марія Володимирівна',
  //   name: 'Фізична особа – підприємець Галушка Марія Володимирівна',
  //   address:
  //     '81400, Львівська обл., Самбірський р-н, м. Самбір, вулиця Шухевича, будинок 41/2',
  //   identificationCode: 'РНОКПП 3200808243',
  //   bankAccount: 'IBAN UA 67 322001 0000026008330153828',
  //   bank: 'в АТ УНІВЕРСАЛ БАНК',
  //   email: 'bura.marija1987@gmail.com',
  //   signature: 'Марія ГАЛУШКА',
  // },
  // {
  //   id: 15,
  //   contractNumber: '2023-09/01-10',
  //   contractDate: '01 вересня 2023 року',
  //   groupName: 'гуртка художньо-естетичного напрямку «Творча майстерня»',
  //   shortName: 'ФОП Галушка Марія Володимирівна',
  //   name: 'Фізична особа – підприємець Галушка Марія Володимирівна',
  //   address:
  //     '81400, Львівська обл., Самбірський р-н, м. Самбір, вулиця Шухевича, будинок 41/2',
  //   identificationCode: 'РНОКПП 3200808243',
  //   bankAccount: 'IBAN UA 67 322001 0000026008330153828',
  //   bank: 'в АТ УНІВЕРСАЛ БАНК',
  //   email: 'bura.marija1987@gmail.com',
  //   signature: 'Марія ГАЛУШКА',
  // },
  // {
  //   id: 16,
  //   contractNumber: '2023-09/01-10',
  //   contractDate: '01 вересня 2023 року',
  //   groupName: 'гуртка художньо-естетичного напрямку «Творча майстерня»',
  //   shortName: 'ФОП Галушка Марія Володимирівна',
  //   name: 'Фізична особа – підприємець Галушка Марія Володимирівна',
  //   address:
  //     '81400, Львівська обл., Самбірський р-н, м. Самбір, вулиця Шухевича, будинок 41/2',
  //   identificationCode: 'РНОКПП 3200808243',
  //   bankAccount: 'IBAN UA 67 322001 0000026008330153828',
  //   bank: 'в АТ УНІВЕРСАЛ БАНК',
  //   email: 'bura.marija1987@gmail.com',
  //   signature: 'Марія ГАЛУШКА',
  // },
  // {
  //   id: 17,
  //   contractNumber: '2023-09/01-10',
  //   contractDate: '01 вересня 2023 року',
  //   groupName: 'гуртка художньо-естетичного напрямку «Творча майстерня»',
  //   shortName: 'ФОП Галушка Марія Володимирівна',
  //   name: 'Фізична особа – підприємець Галушка Марія Володимирівна',
  //   address:
  //     '81400, Львівська обл., Самбірський р-н, м. Самбір, вулиця Шухевича, будинок 41/2',
  //   identificationCode: 'РНОКПП 3200808243',
  //   bankAccount: 'IBAN UA 67 322001 0000026008330153828',
  //   bank: 'в АТ УНІВЕРСАЛ БАНК',
  //   email: 'bura.marija1987@gmail.com',
  //   signature: 'Марія ГАЛУШКА',
  // },
  // {
  //   id: 18,
  //   contractNumber: '2023-09/01-10',
  //   contractDate: '01 вересня 2023 року',
  //   groupName: 'гуртка художньо-естетичного напрямку «Творча майстерня»',
  //   shortName: 'ФОП Галушка Марія Володимирівна',
  //   name: 'Фізична особа – підприємець Галушка Марія Володимирівна',
  //   address:
  //     '81400, Львівська обл., Самбірський р-н, м. Самбір, вулиця Шухевича, будинок 41/2',
  //   identificationCode: 'РНОКПП 3200808243',
  //   bankAccount: 'IBAN UA 67 322001 0000026008330153828',
  //   bank: 'в АТ УНІВЕРСАЛ БАНК',
  //   email: 'bura.marija1987@gmail.com',
  //   signature: 'Марія ГАЛУШКА',
  // },
  // {
  //   id: 19,
  //   contractNumber: '2023-09/01-10',
  //   contractDate: '01 вересня 2023 року',
  //   groupName: 'гуртка художньо-естетичного напрямку «Творча майстерня»',
  //   shortName: 'ФОП Галушка Марія Володимирівна',
  //   name: 'Фізична особа – підприємець Галушка Марія Володимирівна',
  //   address:
  //     '81400, Львівська обл., Самбірський р-н, м. Самбір, вулиця Шухевича, будинок 41/2',
  //   identificationCode: 'РНОКПП 3200808243',
  //   bankAccount: 'IBAN UA 67 322001 0000026008330153828',
  //   bank: 'в АТ УНІВЕРСАЛ БАНК',
  //   email: 'bura.marija1987@gmail.com',
  //   signature: 'Марія ГАЛУШКА',
  // },
];

export { executors };
