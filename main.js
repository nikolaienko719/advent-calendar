// const prophecyArray = [
//     {
//         name: 'prophecy_1',
//         img: 'images/image_1.jpg',
//         text: 'Ой-йой, здається, хтось тут втрачає останні нервові клітини! Сьогодні саме час відкласти соцмережі, вийти на вулицю та помацати траву.',
//     },

//     {
//         name: 'prophecy_2',
//         img: 'images/image_2.jpg',
//         text: 'Воу-воу-воу, бачу за тобою вже виїхали найкрутіщі пацани района! Очікуй дзвіночка, сьогодні будеш тучити всю ніч ;)',
//     },

//     {
//         name: 'prophecy_3',
//         img: 'images/image_3.jpg',
//         text: 'Сидячий образ життя тобі взагалі тобі не на користь. Нумо встань і розімни спину, шо ти як собака сутула?!',
//     },

//     {
//         name: 'prophecy_4',
//         img: 'images/image_4.jpg',
//         text: 'Сьогодні ти б усе віддав, аби тільки подовше полежати в теплому ліжечку, але сьогодні зірки тобі прописали гарувати. Тож нумо за роботу, ледащо!',
//     },

//     {
//         name: 'prophecy_5',
//         img: 'images/image_5.jpg',
//         text: 'А хто тут такий молодець? Хто тут така чудова людинонька? Так, це ти З усіх сьогодні сторін будеш чути тільки хороше про себе. Але тільки не зазнавайся, кажуть з високої гори дуже боляче падати.',
//     },

//     {
//         name: 'prophecy_6',
//         img: 'images/image_6.jpg',
//         text: 'Можливо, останнім часом ти надто часто отримуєш підсрачники долі, і здається, ніби все валиться з рук, але не варто розкисати! Світлі часи вже майже за рогом, а поки купи мазюку від синців.',
//     },

//     {
//         name: 'prophecy_7',
//         img: 'images/image_7.jpg',
//         text: 'Сьогодні ти можеш опинитися в самому центрі інтернет-скандалу, тож краще не пиши сьогодні свої звичні троляцькі коментарі.',
//     },

//     {
//         name: 'prophecy_8',
//         img: 'images/image_8.jpg',
//         text: 'Очікуй сьогодні загадки рівня Шерлока Голмса, ох і добряче ж тобі доведеться помізкувати над нею. І можливо, не тільки сьогодні.',
//     },

//     {
//         name: 'prophecy_9',
//         img: 'images/image_9.jpg',
//         text: 'Здається, кожна людина на планеті сьогодні прагнутиме твоєї уваги стосовно найдурніших запитань. Тож завчасно сховай всі гострі предмети подалі.',
//     },

//     {
//         name: 'prophecy_10',
//         img: 'images/image_10.jpg',
//         text: 'День почнеться важко, працювати буде майже фізично боляче, але у повітрі відчувається запах грошей, тож спробуй протриматися трішки, а там вже й вихідні!',
//     },

//     {
//         name: 'prophecy_11',
//         img: 'images/image_11.jpg',
//         text: 'Сьогодні не варто діяти на гарячу голову - це може призвести до помилок та поганих виборів.',
//     },

//     {
//         name: 'prophecy_12',
//         img: 'images/image_12.jpg',
//         text: 'Сьогодні бали інтелекту прокачуються х2, тож не втрачай нагоди почитату оту саму розумну книжку, яка лежить в тебе на полицях вже пять років.',
//     },

// ]


// const btnProph = document.getElementById("btn");
// const prophecy = document.getElementById("prophecy");
// let memeImg = document.getElementById("meme-img");
// btnProph.addEventListener('click', getRandomProphecy);

// function getRandomProphecy() {
//     const randomIndex = Math.floor(Math.random() * prophecyArray.length);
//     const randomProphecy = prophecyArray[randomIndex];
//     memeImg.setAttribute('src', randomProphecy.img);
//     prophecy.textContent = randomProphecy.text;
// }



// function getRandomProphecy() {
//     randomIndex = Math.floor(Math.random() * prophecyArray.length);
//     randomProphecy = prophecyArray(randomIndex);
//     document.getElementById().src = `./images/${selectedProphecy}`
// }






// let getProphecy = () => {
//     jokeContainer.classList.remove("fade");
//     fetch(url)
//     .then(data => data.json())
//     .then(item =>{
//         jokeContainer.textContent = `${item.joke}`;
//         jokeContainer.classList.add("fade");
//     });
// }
// btn.addEventListener("click", getProphecy);
// getProphecy();



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


function replaceDayBlock(doneTasks) {
  // Перевіряємо, чи масив містить число 1
  if (doneTasks.includes(1)) {
    // Знаходимо div з класами "dayBlock" і "day1"
    const originalDiv = document.querySelector('.day1');

    if (originalDiv) {
      // Створюємо новий div
      const newDiv = document.createElement('div');
      newDiv.classList.add('dayDone','day1done');

      // Додаємо вміст до нового div
      const img = document.createElement('img');
      img.id = 'meme-img';
      img.src = 'images/cat.png';
        img.alt = '';
        img.width = 150;
        img.height = 150;
      newDiv.appendChild(img);

      // Замінюємо старий div на новий
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
    }
    if (doneTasks.includes(2)) {
    // Знаходимо div з класами "dayBlock" і "day1"
    const originalDiv = document.querySelector('.day2');

    if (originalDiv) {
      // Створюємо новий div
      const newDiv = document.createElement('div');
      newDiv.classList.add('dayDone','day2done');

      // Додаємо вміст до нового div
      const img = document.createElement('img');
      img.id = 'meme-img';
      img.src = 'images/cat.png';
        img.alt = '';
        img.width = 150;
        img.height = 150;
      newDiv.appendChild(img);

      // Замінюємо старий div на новий
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
    }
    if (doneTasks.includes(3)) {
    // Знаходимо div з класами "dayBlock" і "day1"
    const originalDiv = document.querySelector('.day3');

    if (originalDiv) {
      // Створюємо новий div
      const newDiv = document.createElement('div');
      newDiv.classList.add('dayDone','day3done');

      // Додаємо вміст до нового div
      const img = document.createElement('img');
      img.id = 'meme-img';
      img.src = 'images/cat.png';
        img.alt = '';
        img.width = 150;
        img.height = 150;
      newDiv.appendChild(img);

      // Замінюємо старий div на новий
      originalDiv.parentNode.replaceChild(newDiv, originalDiv);
    }
  }
}

// // Виклик функції з масивом doneTasks
// const doneTasks = [1, 2, 3]; // Якщо число 1 є у масиві, заміна відбудеться
replaceDayBlock(doneTasks);
