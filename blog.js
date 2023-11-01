// ...
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));



let blogPosts = [
    {
        title: 'Blog Post 1',
        content: 'This is the first blog post',
        date: '2023-01-01',
    },
    {
        title: 'Blog Post for checking "more" button',
        content: 'Мой День: Интересное Путешествие в Мире Знаний\n' +
            '\n' +
            'Сегодня был настоящим днём открытий и увлекательных приключений. Проведение дня началось с рассвета, и с первых минут утра я почувствовал в себе несказанное влечение к знаниям и исследованиям.\n' +
            '\n' +
            'Утро: Зарядка для Мозга\n' +
            'С утра я начал с утренней зарядки для мозга. После вкусного завтрака я углубился в чтение статей и книг по теме, которая меня всегда увлекала - искусственный интеллект. Определённо, учёба с удовольствием - это один из ключей к успешному дню.\n' +
            '\n' +
            'Полдень: Исследование новых технологий\n' +
            'В середине дня я отправился на интересную встречу с инновационной компанией, разрабатывающей передовые технологии. Я был впечатлён разговорами с учёными и инженерами, которые делились своими идеями и исследованиями. Это был настоящий праздник для ума!\n' +
            '\n' +
            'Вечер: Освоение нового навыка\n' +
            'Вечером я решил попробовать что-то новое и освоить навык, который давно хотел освоить - играть на музыкальном инструменте. Часы упорного труда и звуки новых мелодий наполнили вечер атмосферой радости и достижения.\n' +
            '\n' +
            'Заключение: Подведение итогов\n' +
            'Сегодня был удивительный день, полный обучения и развития. Исследование, общение с умными людьми и освоение новых навыков сделали этот день по-\n' +
            '\n' +
            '\n' +
            '\n' +
            '\n',
        date: '2023-02-15',
    },
    {
        title: 'Blog Post 3',
        content: 'This is the third blog post.',
        date: '2023-04-20',
    },
];

app.get('/', (req, res) => {
    res.render('home', { blogPosts });
});

app.get('/blogpost/:id', (req, res) => {
    const postId = req.params.id;
    const post = blogPosts[postId];
    res.render('blogpost', { post });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/addpost', (req, res) => {
    res.render('newblogpost');
});

app.post('/addpost', (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        title,
        content,
        date: new Date().toLocaleDateString(),
    };
    blogPosts.push(newPost);
    res.redirect('/');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// ...
