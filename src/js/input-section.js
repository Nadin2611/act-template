import { executors } from './executors.js';
import { formatDateToUkrainian } from './formatedDate.js';
import { numberToWordsInGenitiveCase, numberToWords } from './number-words.js';
import { formatCurrency } from './cost-service.js';

const executorSelect = document.getElementById('executor');
const actFormElement = document.getElementById('actForm');
const executorData = executors[0];

executors.forEach(executor => {
  const option = document.createElement('option');
  option.value = executor.id;
  option.textContent = executor.shortName;
  executorSelect.appendChild(option);
});

actFormElement.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  // Отримайте значення поля "one-time-activities"
  const oneTimeActivitiesValue = formData.get('one-time-activities');
  const numOneActive = !isNaN(oneTimeActivitiesValue)
    ? parseInt(oneTimeActivitiesValue, 10)
    : 0;
  const actHTML = createMarkup(formData, executorData, numOneActive);

  const printActPage = window.open('print-act.html', '_blank');
  printActPage.addEventListener('load', function () {
    const activitySpan = printActPage.document.getElementById('activitySpan');
    if (activitySpan) {
      if (numOneActive !== 0) {
        const numInWordsOneActive = numberToWordsInGenitiveCase(numOneActive);
        activitySpan.textContent = `, ${numInWordsOneActive} іншої активності`;
        activitySpan.classList.remove('hidden');
      } else {
        activitySpan.classList.add('hidden');
      }
    }
    printActPage.document.querySelector('.print-act-text').innerHTML = actHTML;
  });
});

function createMarkup(formData, executorData, numOneActive) {
  const formattedActDate = formatDateToUkrainian(formData.get('act-date'));
  const formattedStart = formatDateToUkrainian(formData.get('period-start'));
  const formattedEnd = formatDateToUkrainian(formData.get('period-end'));
  const numGroupClasses = formData.get('group-classes'); // Отримуємо число
  const numInWordsGroupClasses = numberToWordsInGenitiveCase(numGroupClasses); //прописом
  const numInWordsOneActive = numberToWordsInGenitiveCase(numOneActive);
  const numberOfChildren = formData.get('number-of-children');
  const numberUniquePerson = formData.get('unique-person');
  const numInWordsChildren = numberToWordsInGenitiveCase(numberOfChildren);
  const numInWordsUniquePerson = numberToWords(numberUniquePerson);

  const serviceCost = formData.get('service-cost');
  const serviceCostWord = numberToWords(serviceCost);

  const serviceCostText = `${serviceCost} грн.  (${serviceCostWord}  тисяч гривень 00 копійок)`;

  const actText = `
<div class="print-act">
      <h2 class="print-act-title">
        <span class="print-act-title-span">АКТ</span>
         <br> здачі - приймання наданих
        послуг №${formData.get('act-number')} 
         <br> до Договору
        ${executorData.contractNumber} від  ${executorData.contractDate}
      </h2>
      <h3 class="place-act">
        ${formData.get('act-place')}
        <span class="date-act">${formattedActDate}</span>
      </h3>
      <p class="text-customer">
        <span class="name-customer">Благодійна організація “Центр освітніх ініціатив”,</span> надалі
        “Замовник”, в особі виконавчої директорки Шинаровської Олени Богданівни,
        що діє на підставі Статуту з однієї сторони, та
      </p>
      <p class="text-performer"></p>
        <span class="name-performer">${
          executorData.name
        },</span>надалі – «Виконавець», що діє на
        підставі виписки ЄДР, з іншої сторони, (в подальшому разом іменуються
        "Сторони", а кожна окремо – "Сторона"), склали цей акт про таке:
      </p>
      <ol class="act-number-list">
        <li class="act-number-item">
          <p>
            Виконавець надав для Замовника відповідно до Договору №${
              executorData.contractNumber
            } від ${executorData.contractDate} в
            рамках проєкту «Зміцнення спроможності молодих людей стати агентами
            змін через розвиток життєвих навичок підлітків та підтримку
            молодіжного активізму у 7-ми західних областях» такі послуги:
          </p>

          <p class="act-unmber-item">
            Планування, організації та здійснення навчально-виховної,
            організаційно-масової роботи у сфері позашкільної освіти в ${
              executorData.groupName
            } у ${formData.get('planning-period')} 2023 року.
          </p>
          <p class="act-unmber-item">
            Проведення ${numInWordsGroupClasses} регулярних гурткових
            занять,
           <span class="text-sometimes-activies" id="activitySpan"> ${numInWordsOneActive} іншої активності
              </span>
            та залучення дітей, підлітків та молоді в кількості ${numInWordsChildren} особи, з них -
            ${numInWordsUniquePerson} унікальні особи.
          </p>
          <p class="act-period">
            <span class="act-period-text">Період надання послуг:</span>з ${formattedStart} по ${formattedEnd}.
          </p>
        </li>
        <li class="act-number-item">
          <span class="service-cost">Вартість послуг:</span> ${serviceCostText}, без
          ПДВ.
          <p>Якість послуг відповідає вимогам замовника.</p>
          <p>Сторони взаємних претензій не мають.</p>
        </li>
        <li class="act-number-item">Цей Акт складено в 2-х примірниках.</li>
      </ol>
      <p class="act-text-center">
        Оплату здійснити за рахунок коштів проєкту «Зміцнення спроможності
        молодих людей стати агентами змін через розвиток життєвих навичок
        підлітків та підтримку молодіжного активізму у 7-ми західних областях»,
        що виконується за договором про надання субгранту
        No010UNICEF-1-01-03864/01 між Центром освітніх ініціатив та ІСАР
        «Єднання».
      </p>
      <ul class="parties-list">
        <li class="parties-item">
          <h3 class="parties-title">Замовник:</h3>
          <p class="parties-text">
           <span class="parties-text-span">Благодійна організація «Центр освітніх ініціатив»</span>
            <br>просп. В’ячеслава Чорновола, 4, 
            <br>79019 Львів 
            <br>
            <br>ЄДРПОУ 23968135 
            <br>IBAN UA 52 325365 0000000260020047475 
            <br>в АТ «Кредобанк» 
            <br>info@osvita.org 
            <br>
            <br>
            <br>__________    Олена ШИНАРОВСЬКА
          </p>
        </li>
        <li class="parties-item">
          <h3 class="parties-title">Виконавець:</h3>
          <p class="parties-text">
            <span class="parties-text-span">${executorData.shortName}</span>
            <br>${executorData.address}
            <br>
            <br>${executorData.identificationCode} 
            <br>${executorData.bankAccount}
            <br>${executorData.email}
            <br>
            <br>
            <br>__________    ${executorData.signature}
          </p>
        </li>
      </ul>
    </div>
`;
  return actText;
}
