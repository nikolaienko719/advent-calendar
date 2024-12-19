
const tasks = [
  "Сфотографуй себе або свою домашню тваринку на фоні ялинки!",       // Завдання для дня 20
  "Напиши жартівливого листа Санті! На папері, з малюночками, щоб все як в дитинстві:)",          // Завдання для дня 21
  "Зроби картинку-мем про роботу або про колег (не образливий!)",  // Завдання для дня 22
  "Заспівай Last Christmas та запиши на відео або аудіо!",     // Завдання для дня 23
  "Скинь свою дитячу фотку з новорічного свята або в новорічному костюмі або... Коротше, давай так, щоб всі зрозуміли, до якого свята ти готуєшся!",// Завдання для дня 24
  "Збудуй сніговика з будь-чого, але не зі снігу!",  // Завдання для дня 25
  "Запакуй себе або частину тіла як новорічний подарунок, так як ти найкращий сюрприз на світі!",          // Завдання для дня 26
  "Покажи, як ти їси свою найулюбленішу новорічну страву!", // Завдання для дня 27
  "Скинь свою найулюбленішу фотку разом з колегою!",       // Завдання для дня 28
  "Зроби новорічну поробку!", // Завдання для дня 29
  "Порекомендуй, який новорічний фільм подивитись колегам?",           // Завдання для дня 30
  "Поділись своєю улюбленою новорічною або різдвяною піснею!" // Завдання для дня 31
];

const titles = [
  "Завдання №1",       // Завдання для дня 20
  "Завдання №2",          // Завдання для дня 21
  "Завдання №3",  // Завдання для дня 22
  "Завдання №4",     // Завдання для дня 23
  "Завдання №5",// Завдання для дня 24
  "Завдання №6",  // Завдання для дня 25
  "Завдання №7",          // Завдання для дня 26
  "Завдання №8", // Завдання для дня 27
  "Завдання №9",       // Завдання для дня 28
  "Завдання №10", // Завдання для дня 29
  "Завдання №11",           // Завдання для дня 30
  "Завдання №12" // Завдання для дня 31
];

const words = [
  "christmastree",       // Завдання для дня 20
  "santa",          // Завдання для дня 21
  "mem",  // Завдання для дня 22
  "sing",     // Завдання для дня 23
  "child",// Завдання для дня 24
  "snowman",  // Завдання для дня 25
  "present",          // Завдання для дня 26
  "meal", // Завдання для дня 27
  "colleague",       // Завдання для дня 28
  "porobka", // Завдання для дня 29
  "film",           // Завдання для дня 30
  "song" // Завдання для дня 31
];

const formats = [
  "фото, відео",       // Завдання для дня 20
  "фото",          // Завдання для дня 21
  "фото, картинка, відео",  // Завдання для дня 22
  "відео, аудіо",     // Завдання для дня 23
  "фото",// Завдання для дня 24
  "фото, відео",  // Завдання для дня 25
  "фото, відео",          // Завдання для дня 26
  "фото, відео", // Завдання для дня 27
  "фото, відео",       // Завдання для дня 28
  "фото, відео", // Завдання для дня 29
  "текст",           // Завдання для дня 30
  "посилання на ютуб" // Завдання для дня 31
]

// 

$(document).on('click', '.dayBlock', function () {
  console.log('Clicked!');
});

$(document).ready(function () {
  // Поточна дата
  var d = new Date();
  var todaysDate = d.getDate();

  // Додаємо класи для днів
  $('.dayBlock').each(function () {
    var day = parseInt($(this).find('#dayNumber').html()); // Отримуємо число дня
    if (todaysDate == day) {
      $(this).addClass('today');
    }
    if (todaysDate < day) {
      $(this).addClass('future');
    }
    if (todaysDate > day) {
      $(this).addClass('past');
    }

    // Зберігаємо дані про завдання як data-атрибути
    if (todaysDate >= day) {
      const taskIndex = day - 1; // Індекс у масиві (починається з 0)
      const taskText = tasks[taskIndex];
      const titleText = titles[taskIndex];
      const wordText = `Ключ-слово до завдання: ${words[taskIndex]}`; // Формуємо шаблонний текст
      const formatText = `Формат виконання: ${formats[taskIndex]}`; // Формуємо шаблонний текст

      // Додаємо дані як атрибути
      $(this).data('title', titleText);
      $(this).data('task', taskText);
      $(this).data('word', wordText);
      $(this).data('format', formatText);
    }
  });

  // Відкриття відповідної модалки
  $('.dayBlock').click(function () {
    var day = parseInt($(this).find('#dayNumber').html()); // Читаємо число з <p id="dayNumber">
    const $backdrop = $('.surprise-backdrop');
    const $modal = $('.surprise');
    const $modal2 = $('.futureModal');

    if ($(this).hasClass('past') || $(this).hasClass('today')) {
      // Оновлюємо текст у глобальній модалці
      $('.modalTask').text($(this).data('title')); // Заголовок завдання
      $('.modalText p').text($(this).data('task')); // Текст завдання

      // Додаємо додаткові тексти
      $('.modalText').append(`<p class="word-text">${$(this).data('word')}</p>`);
      $('.modalText').append(`<p class="format-text">${$(this).data('format')}</p>`);

      // Показуємо модалку
      $backdrop.addClass('open');
      $modal.addClass('open');
    } else if ($(this).hasClass('future')) {
      $backdrop.addClass('open');
      $modal2.addClass('open');
    }
  });

// Закриття модалок через "close" або бекдроп
  $(document).on('click', '.close, .surprise-backdrop', function () {
    $('.surprise, .futureModal').removeClass('open'); // Закриваємо обидві модалки
    $('.surprise-backdrop').removeClass('open'); // Закриваємо backdrop

    // Очищаємо додаткові тексти з surprise
    $('.modalText .word-text, .modalText .format-text').remove();
  });
});











// Зчитуємо параметри URL
const urlParams = new URLSearchParams(window.location.search);
const doneTasksParam = urlParams.get('doneTasks');

if (doneTasksParam) {
  try {
    // Розбираємо масив doneTasks
    const doneTasks = JSON.parse(decodeURIComponent(doneTasksParam));
    console.log('Received doneTasks:', doneTasks);

    // Викликаємо функцію обробки doneTasks
    replaceDayBlock(doneTasks);
  } catch (error) {
    console.error('Error parsing doneTasks:', error);
  }
} else {
  console.log('No doneTasks provided');
}

// Функція заміни блоків
function replaceDayBlock(doneTasks) {
  doneTasks.forEach((day) => {
    const originalDiv = document.querySelector(`.day${day}`);
    if (originalDiv) {
      const newDiv = createDoneDiv(day);
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  });
}

// Функція для створення нового блоку
function createDoneDiv(day) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('dayDone', `day${day}done`);

  const img = document.createElement('img');
  img.id = `meme-img-day${day}`;
  img.src = `images/image_${day}.jpg`; // Динамічний шлях до зображення
  img.alt = `Зображення для дня ${day}`;
  
  // Налаштування стилів через JS
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'cover';
  img.style.borderRadius = 'inherit';

  newDiv.appendChild(img);
  return newDiv;
}



