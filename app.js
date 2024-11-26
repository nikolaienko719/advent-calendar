const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
const port = 3000;

// Шаблон сторінки
const templatePath = path.join(__dirname, 'views', 'template.ejs');

app.use(express.json());

// Маршрут для динамічного створення HTML сторінки
app.post('/generate-page', async (req, res) => {
  try {
    const { title, heading, content } = req.body;

    // Перевірка наявності всіх необхідних полів
    if (!title || !heading || !content) {
      return res.status(400).json({ error: 'Всі поля (title, heading, content) обов’язкові!' });
    }

    // Генерація HTML сторінки на основі отриманих даних
    const htmlContent = await ejs.renderFile(templatePath, { title, heading, content });

    // Відправка згенерованого HTML в якості відповіді
    res.send(htmlContent);
  } catch (error) {
    console.error('Помилка при генерації сторінки:', error);
    res.status(500).json({ error: 'Помилка сервера' });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер працює на http://localhost:${port}`);
});
