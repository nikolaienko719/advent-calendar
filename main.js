
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
  "Порекомендуй, який новорічний фільм подивитись колегам?",           // Завдання для дня 31
  "Поділись своєю улюбленою новорічною або різдвяною піснею!" // Завдання для дня 31
];


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

    // Додаємо тексти завдань тільки для today і past
    if (todaysDate >= day) {
      const taskIndex = day - 1; // Індекс у масиві (починається з 0)
      const taskText = tasks[taskIndex];
      $(this).find('.modalText p').text(taskText); // Встановлюємо текст у <p>
    }
  });

  // Відкриття відповідної модалки
  $('.dayBlock').click(function () {
    var day = parseInt($(this).find('#dayNumber').html()); // Читаємо число з <p id="dayNumber">
    
    if ($(this).hasClass('past') || $(this).hasClass('today')) {
      // Якщо дата в минулому або сьогодні, відкриваємо стандартну модалку із завданням
      $(this).find('.surprise-backdrop').addClass('open');
      $(this).find('.surprise').addClass('open');
    } else if ($(this).hasClass('future')) {
      // Якщо дата в майбутньому, відкриваємо модалку "Ти не ворожка"
      $(this).find('.futureModal-backdrop').addClass('open');
      $(this).find('.futureModal').addClass('open');
    }
  });

  // Закриття стандартного модального вікна
  $(document).on('click', '.surprise .close', function () {
    $(this).closest('.surprise').removeClass('open'); // Закриваємо модалку
    $(this).closest('.dayBlock').find('.surprise-backdrop').removeClass('open'); // Закриваємо backdrop
  });

  // Закриття модалки "Ти не гадалка"
  $(document).on('click', '.futureModal .close', function () {
    $(this).closest('.futureModal').removeClass('open'); // Закриваємо майбутню модалку
    $(this).closest('.dayBlock').find('.futureModal-backdrop').removeClass('open'); // Закриваємо backdrop
  });

  // Закриття будь-якої модалки через backdrop
  $(document).on('click', '.surprise-backdrop, .futureModal-backdrop', function () {
    $(this).removeClass('open'); // Закриваємо backdrop
    $(this).siblings('.surprise, .futureModal').removeClass('open'); // Закриваємо відповідну модалку
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
  img.width = 200;
  img.height = 200;

  newDiv.appendChild(img);
  return newDiv;
}



