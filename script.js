const inputText = document.querySelector('#inputText');
const pushButton = document.querySelector('#sendText');
const wordsBox1 = document.querySelector('.ru');
const wordsBox2 = document.querySelector('.en');
const translit = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'yo',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'i',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'sch',
  ъ: "'",
  ы: 'i',
  ь: "'",
  э: 'e',
  ю: 'yu',
  я: 'ya',
  А: 'A',
  Б: 'B',
  В: 'V',
  Г: 'G',
  Д: 'D',
  Е: 'E',
  Ё: 'YO',
  Ж: 'ZH',
  З: 'Z',
  И: 'I',
  Й: 'I',
  К: 'K',
  Л: 'L',
  М: 'M',
  Н: 'N',
  О: 'O',
  П: 'P',
  Р: 'R',
  С: 'S',
  Т: 'T',
  У: 'U',
  Ф: 'F',
  Х: 'H',
  Ц: 'TS',
  Ч: 'CH',
  Ш: 'SH',
  Щ: 'SCH',
  Ъ: "'",
  Ы: 'I',
  Ь: "'",
  Э: 'E',
  Ю: 'YU',
  Я: 'YA',
};

function translate(str) {
  const newArr = str.split('');
  let result = '';

  for (let i = 0; i < newArr.length; i++) {
    if (translit[newArr[i]] === undefined) {
      result += newArr[i];
    } else {
      result += translit[newArr[i]];
    }
  }

  return result;
}

function pushText() {
  console.log(`${inputText.value}`);
  if (`${inputText.value}`.length > 0 && `${inputText.value}`.length <= 19) {
    const newWord = document.createElement('div');
    newWord.className = 'word';
    newWord.innerText = `${inputText.value}`;

    const newWord2 = document.createElement('div');
    newWord2.className = 'word';
    newWord2.innerText = translate(`${inputText.value}`);

    wordsBox1.appendChild(newWord);
    wordsBox2.appendChild(newWord2);
  } else if (`${inputText.value}`.length > 19) {
    const newWord = document.createElement('div');
    newWord.className = 'word';
    newWord.innerText = `${`${inputText.value}`.slice(0, 19)}...`;
    newWord.setAttribute('title', `${inputText.value}`);

    const newWord2 = document.createElement('div');
    newWord2.className = 'word';
    newWord2.innerText = translate(`${`${inputText.value}`.slice(0, 19)}...`);
    newWord2.setAttribute('title', translate(`${inputText.value}`));

    wordsBox1.appendChild(newWord);
    wordsBox2.appendChild(newWord2);
  }
}

pushButton.addEventListener('click', pushText);
