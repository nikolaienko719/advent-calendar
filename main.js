

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


// Зчитуємо параметри URL
const urlParams = new URLSearchParams(window.location.search);
const doneTasksParam = urlParams.get('doneTasks');

// try {
//   // Перевіряємо, чи є параметр doneTasks
//   if (doneTasksParam) {
//     // Розбираємо масив doneTasks
//     const doneTasks = JSON.parse(decodeURIComponent(doneTasksParam));
//     console.log('Received doneTasks:', doneTasks);

//     // Викликаємо функцію обробки doneTasks
//     replaceDayBlock(doneTasks);
//   } else {
//     console.log('No doneTasks provided. Loading default page.');
//     loadDefaultPage();
//   }
// } catch (error) {
//   console.error('Error parsing doneTasks:', error);
//   loadDefaultPage(); // Завантажуємо стандартну сторінку при помилці
// }

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

