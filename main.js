

// const dayButton = document.querySelector(".dayBlock")
// const modal = document.querySelector(".surprise")
// const closeBtn = document.querySelector(".close")

// document.addEventListener("DOMContentLoaded",() => {
//   dayButton.addEventListener("click", handleClick)
// })

// function handleClick(event) {
//   modal.style.display = "block";
//   closeBtn.addEventListener("click", () => {
//     modal.style.display = "none"
//   })
// }


// function replaceDayBlock(doneTasks) {
//   // Перевіряємо, чи масив містить число 1
//   if (doneTasks.includes(1)) {
//     // Знаходимо div з класами "dayBlock" і "day1"
//     const originalDiv = document.querySelector('.day1');

//     if (originalDiv) {
//       // Створюємо новий div
//       const newDiv = document.createElement('div');
//       newDiv.classList.add('dayDone','day1done');

//       // Додаємо вміст до нового div
//       const img = document.createElement('img');
//       img.id = 'meme-img';
//       img.src = 'images/cat.png';
//         img.alt = '';
//         img.width = 150;
//         img.height = 150;
//       newDiv.appendChild(img);

//       // Замінюємо старий div на новий
//       originalDiv.parentNode.replaceChild(newDiv, originalDiv);
//     }
//     }
//     if (doneTasks.includes(2)) {
//     // Знаходимо div з класами "dayBlock" і "day1"
//     const originalDiv = document.querySelector('.day2');

//     if (originalDiv) {
//       // Створюємо новий div
//       const newDiv = document.createElement('div');
//       newDiv.classList.add('dayDone','day2done');

//       // Додаємо вміст до нового div
//       const img = document.createElement('img');
//       img.id = 'meme-img';
//       img.src = 'images/cat.png';
//         img.alt = '';
//         img.width = 150;
//         img.height = 150;
//       newDiv.appendChild(img);

//       // Замінюємо старий div на новий
//       originalDiv.parentNode.replaceChild(newDiv, originalDiv);
//     }
//     }
//     if (doneTasks.includes(3)) {
//     // Знаходимо div з класами "dayBlock" і "day1"
//     const originalDiv = document.querySelector('.day3');

//     if (originalDiv) {
//       // Створюємо новий div
//       const newDiv = document.createElement('div');
//       newDiv.classList.add('dayDone','day3done');

//       // Додаємо вміст до нового div
//       const img = document.createElement('img');
//       img.id = 'meme-img';
//       img.src = 'images/cat.png';
//         img.alt = '';
//         img.width = 150;
//         img.height = 150;
//       newDiv.appendChild(img);

//       // Замінюємо старий div на новий
//       originalDiv.parentNode.replaceChild(newDiv, originalDiv);
//     }
//   }
// }


// // // Виклик функції з масивом doneTasks
// // const doneTasks = [1, 2, 3]; // Якщо число 1 є у масиві, заміна відбудеться
// replaceDayBlock(doneTasks);


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
  });

  // Відкриття відповідної модалки
  $('.dayBlock').click(function () {
    var day = parseInt($(this).find('#dayNumber').html()); // Читаємо число з <p id="dayNumber">
    
    if (todaysDate > day) {
      // Якщо дата в минулому, відкриваємо стандартну модалку
      $(this).find('.surprise-backdrop').addClass('open');
      $(this).find('.surprise').addClass('open');
    } else if (todaysDate < day) {
      // Якщо дата в майбутньому, відкриваємо модалку "Ти не гадалка"
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
  // Розбираємо масив doneTasks
  const doneTasks = JSON.parse(decodeURIComponent(doneTasksParam));
  console.log('Received doneTasks:', doneTasks);

  // Викликаємо функцію обробки doneTasks
  replaceDayBlock(doneTasks);
}

// Функція заміни блоків
function replaceDayBlock(doneTasks) {
  if (doneTasks.includes(1)) {
    const originalDiv = document.querySelector('.day1');
    if (originalDiv) {
      const newDiv = createDoneDiv('day1done');
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
  if (doneTasks.includes(2)) {
    const originalDiv = document.querySelector('.day2');
    if (originalDiv) {
      const newDiv = createDoneDiv('day2done');
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
  if (doneTasks.includes(3)) {
    const originalDiv = document.querySelector('.day3');
    if (originalDiv) {
      const newDiv = createDoneDiv('day3done');
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
  if (doneTasks.includes(4)) {
    const originalDiv = document.querySelector('.day4');
    if (originalDiv) {
      const newDiv = createDoneDiv('day4done');
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
  if (doneTasks.includes(5)) {
    const originalDiv = document.querySelector('.day5');
    if (originalDiv) {
      const newDiv = createDoneDiv('day5done');
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
  if (doneTasks.includes(6)) {
    const originalDiv = document.querySelector('.day6');
    if (originalDiv) {
      const newDiv = createDoneDiv('day6done');
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
  if (doneTasks.includes(7)) {
    const originalDiv = document.querySelector('.day7');
    if (originalDiv) {
      const newDiv = createDoneDiv('day7done');
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
  if (doneTasks.includes(8)) {
    const originalDiv = document.querySelector('.day8');
    if (originalDiv) {
      const newDiv = createDoneDiv('day8done');
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
  if (doneTasks.includes(9)) {
    const originalDiv = document.querySelector('.day9');
    if (originalDiv) {
      const newDiv = createDoneDiv('day9done');
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
  if (doneTasks.includes(10)) {
    const originalDiv = document.querySelector('.day10');
    if (originalDiv) {
      const newDiv = createDoneDiv('day10done');
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
  if (doneTasks.includes(11)) {
    const originalDiv = document.querySelector('.day11');
    if (originalDiv) {
      const newDiv = createDoneDiv('day11done');
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
  if (doneTasks.includes(12)) {
    const originalDiv = document.querySelector('.day12');
    if (originalDiv) {
      const newDiv = createDoneDiv('day12done');
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
  if (doneTasks.includes(13)) {
    const originalDiv = document.querySelector('.day13');
    if (originalDiv) {
      const newDiv = createDoneDiv('day13done');
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
  if (doneTasks.includes(14)) {
    const originalDiv = document.querySelector('.day14');
    if (originalDiv) {
      const newDiv = createDoneDiv('day14done');
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
  if (doneTasks.includes(15)) {
    const originalDiv = document.querySelector('.day15');
    if (originalDiv) {
      const newDiv = createDoneDiv('day15done');
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
}

// Функція для створення нового блоку
function createDoneDiv(doneClass) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('dayDone', doneClass);

  const img = document.createElement('img');
  img.id = 'meme-img';
  img.src = 'images/cat.png';
  img.alt = '';
  img.width = 150;
  img.height = 150;

  newDiv.appendChild(img);
  return newDiv;
}

// Функція завантаження стандартної сторінки
function loadDefaultPage() {
  document.body.innerHTML = `
    <div class="default-page">
      <h1>No tasks completed</h1>
      <p>Please complete some tasks to see progress here.</p>
    </div>
  `;
}

