let quoteElement = document.querySelector('.quote')
const headerBtn = document.querySelector('.header__btn')


//Здесь сказано, что для получения цитаты нужно отправить GET запрос на URL https://api.kanye.rest.
// Методом fetch отправьте GET-запрос на указанный адрес. Повесьте два обработчика then:
// в первом преобразуйте данные в формат JSON, тут вам поможет метод res.json.
// во втором выведите полученные данные в консоль.
//Консоль не даст соврать: данные приходят. У полученного объекта есть единственное свойство quote —
// оно как раз хранит цитату. Её нужно вставить в DOM-элемент.
// Для этого:  в начале файла script.js создайте переменную quoteElement и присвойте ей элемент с классом quote;
// во втором обработчике then замените console.log на выражение вставляющее текст цитаты в элемент quoteElement;
function updateQuote() {
    fetch('https://api.kanye.rest')
        .then((res) => {
            return res.json(); // возвращаем результат работы метода и идём в следующий then
        })
        .then((data) => {
            //console.log(data); // если мы попали в этот then, data — это объект
            quoteElement.textContent = data.quote
        })
        .catch((err) => {
            console.log(`Ошибка ${err}. Запрос не выполнен`);
        });
}


headerBtn.addEventListener('click', updateQuote)