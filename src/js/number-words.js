export function numberToWordsInGenitiveCase(number) {
  const units = [
    '',
    'одного',
    'двох',
    'трьох',
    'чотирьох',
    'п\u0027яти',
    'шести',
    'семи',
    'восьми',
    'дев\u0027яти',
  ];
  const teens = [
    '',
    'одинадцяти',
    'дванадцяти',
    'тринадцяти',
    'чотирнадцяти',
    'п\u0027ятнадцяти',
    'шістнадцяти',
    'сімнадцяти',
    'вісімнадцяти',
    'дев\u0027ятнадцяти',
  ];
  const tens = [
    '',
    '',
    'двадцяти',
    'тридцяти',
    'сорока',
    'п\u0027ятдесяти',
    'шістдесяти',
    'сімдесяти',
    'вісімдесяти',
    'дев\u0027яноста',
  ];
  const hundreds = [
    '',
    'ста',
    'двохсот',
    'трьохсот',
    'чотирьохсот',
    'п\u0027ятсот',
    'шістисот',
    'семисот',
    'восьмисот',
    'дев\u0027ятисот',
  ];

  if (number === 0) {
    return 'нуль';
  }

  let result = '';

  if (number >= 100) {
    result += hundreds[Math.floor(number / 100)] + ' ';
    number %= 100;
  }

  if (number >= 20) {
    result += tens[Math.floor(number / 10)] + ' ';
    number %= 10;
  }

  if (number >= 11 && number <= 19) {
    result += teens[number - 10] + ' ';
    number = 0;
  }

  if (number > 0) {
    result += units[number] + ' ';
  }

  return result.trim();
}

export function numberToWords(number) {
  const units = [
    '',
    'один',
    'два',
    'три',
    'чотири',
    'п\u0027ять',
    'шість',
    'сім',
    'вісім',
    'дев\u0027ять',
  ];

  const teens = [
    '',
    'одинадцять',
    'дванадцять',
    'тринадцять',
    'чотирнадцять',
    'п\u0027ятнадцять',
    'шістнадцять',
    'сімнадцять',
    'вісімнадцять',
    'дев\u0027ятнадцять',
  ];

  const tens = [
    '',
    '',
    'двадцять',
    'тридцять',
    'сорок',
    'п\u0027ятдесят',
    'шістдесят',
    'сімдесят',
    'вісімдесят',
    'дев\u0027яносто',
  ];

  const thousands = [
    '',
    'тисяча',
    'мільйон',
    'мільярд',
    'трильйон',
    'квадрильйон',
    'квінтильйон',
  ];

  function convertHundred(number) {
    if (number < 10) {
      return units[number];
    } else if (number < 20) {
      return teens[number - 10];
    } else {
      const digit = number % 10;
      const tensIndex = Math.floor((number % 100) / 10);

      if (digit === 0) {
        return `${hundreds[Math.floor(number / 100) - 1]} ${tens[tensIndex]}`;
      } else {
        return `${hundreds[Math.floor(number / 100) - 1]} ${tens[tensIndex]} ${
          units[digit]
        }`;
      }
    }
  }

  function convertThousand(number, level) {
    if (number === 0) return '';
    const hundred = number % 1000;
    const thousand = Math.floor(number / 1000);
    if (thousand === 1) {
      if (hundred === 0) {
        return `${thousands[level]}`;
      } else if (hundred < 10) {
        return `${units[thousand]} ${thousands[level]} ${units[hundred]}`;
      } else if (hundred < 100) {
        return `${units[thousand]} ${thousands[level]} ${convertHundred(
          hundred
        )}`;
      }
    } else if (thousand > 1) {
      if (hundred === 0) {
        return `${convertHundred(thousand)} ${thousands[level]}`;
      } else if (hundred < 10) {
        return `${convertHundred(thousand)} ${thousands[level]} ${
          units[hundred]
        }`;
      } else if (hundred < 100) {
        return `${convertHundred(thousand)} ${
          thousands[level]
        } ${convertHundred(hundred)}`;
      }
    }
    return `${convertHundred(hundred)} ${thousands[level]}`;
  }

  if (number === 0) return 'нуль';

  let result = '';
  for (let i = 0; number > 0; i++) {
    const chunk = number % 1000;
    if (chunk !== 0) {
      result = `${convertThousand(chunk, i)} ${result}`;
    }
    number = Math.floor(number / 1000);
  }

  return result.trim();
}

export function numberToWordsMany(number) {
  const units = [
    '',
    'одна',
    'дві',
    'три',
    'чотири',
    'п\u0027ять',
    'шість',
    'сім',
    'вісім',
    'дев\u0027ять',
  ];

  const teens = [
    '',
    'одинадцять',
    'дванадцять',
    'тринадцять',
    'чотирнадцять',
    'п\u0027ятнадцять',
    'шістнадцять',
    'сімнадцять',
    'вісімнадцять',
    'дев\u0027ятнадцять',
  ];

  const tens = [
    '',
    'десять',
    'двадцять',
    'тридцять',
    'сорок',
    'п\u0027ятдесят',
    'шістдесят',
    'сімдесят',
    'вісімдесят',
    'дев\u0027яносто',
  ];
  const hundreds = [
    'сто',
    'двісті',
    'триста',
    'чотириста',
    'п\u0027ятсот',
    'шістсот',
    'сімсот',
    'вісімсот',
    'дев\u0027ятсот',
  ];
  const thousands = [
    '',
    'тисяч',
    'мільйон',
    'мільярд',
    'трильйон',
    'квадрильйон',
    'квінтильйон',
  ];

  function convertHundred(number) {
    if (number < 10) {
      return units[number];
    } else if (number < 20) {
      return teens[number - 10];
    } else {
      const digit = number % 10;
      const tensIndex = Math.floor((number % 100) / 10);

      if (digit === 0) {
        return `${hundreds[Math.floor(number / 100) - 1]} ${tens[tensIndex]}`;
      } else {
        return `${hundreds[Math.floor(number / 100) - 1]} ${tens[tensIndex]} ${
          units[digit]
        }`;
      }
    }
  }

  function convertThousand(number, level) {
    if (number === 0) return '';
    const hundred = number % 1000;
    const thousand = Math.floor(number / 1000);
    if (thousand === 1) {
      if (hundred === 0) {
        return `${thousands[level]}`;
      } else if (hundred < 10) {
        return `${hundreds[0]}`;
      } else if (hundred < 100) {
        return `${hundreds[0]} ${units[thousand]} ${thousands[level]} ${
          tens[Math.floor(hundred / 10) - 2]
        } ${units[hundred % 10]}`;
      }
    } else if (thousand > 1) {
      if (hundred === 0) {
        return `${convertHundred(thousand)} ${thousands[level]}`;
      } else if (hundred < 10) {
        return `${convertHundred(thousand)} ${thousands[level]} ${
          units[hundred]
        }`;
      } else if (hundred < 100) {
        return `${convertHundred(thousand)} ${
          thousands[level]
        } ${convertHundred(hundred)}`;
      }
    }
    return `${convertHundred(hundred)} ${thousands[level]}`;
  }

  if (number === 0) return 'нуль';

  let result = '';
  for (let i = 0; number > 0; i++) {
    const chunk = number % 1000;
    if (chunk !== 0) {
      result = `${convertThousand(chunk, i)} ${result}`;
    }
    number = Math.floor(number / 1000);
  }

  return result.trim();
}
