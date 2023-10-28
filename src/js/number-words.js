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

  function toWords(number, index) {
    if (number === 0) {
      return '';
    }

    if (number < 10) {
      return units[number] + ' ';
    } else if (number < 20) {
      return teens[number - 10] + ' ';
    } else {
      const unit = number % 10;
      const ten = Math.floor(number / 10);
      return tens[ten] + ' ' + units[unit] + ' ';
    }
  }

  const chunks = [];
  while (number > 0) {
    chunks.push(number % 1000);
    number = Math.floor(number / 1000);
  }

  if (chunks.length === 0) {
    return 'нуль';
  }

  let result = '';

  for (let i = chunks.length - 1; i >= 0; i--) {
    const chunk = chunks[i];
    if (chunk === 0) continue;
    result += toWords(chunk, i) + thousands[i] + ' ';
  }

  return result.trim();
}
