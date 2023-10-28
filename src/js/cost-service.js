import { numberToWords } from './number-words';

export function formatCurrency(amount) {
  const options = {
    style: 'currency',
    currency: 'UAH',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const formatter = new Intl.NumberFormat('uk-UA', options);
  const formattedAmount = formatter.format(amount);

  const amountInWords = numberToWords(Math.floor(amount));
  const pennies = Math.round((amount - Math.floor(amount)) * 100)
    .toString()
    .padStart(2, '0');

  return `${formattedAmount} (${amountInWords} гривень ${pennies} копійок)`;
}
