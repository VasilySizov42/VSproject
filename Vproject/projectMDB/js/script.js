/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//1
const remImgs = document.querySelectorAll('.promo__adv img');
console.log(remImgs);
remImgs.forEach(element => {
    element.remove();
});
//2
const promoGenre = document.querySelector('.promo__genre');
console.log(promoGenre);
promoGenre.textContent = 'ДРАМА';
//3
const promoBg = document.querySelector('.promo__bg');
console.log(promoBg);
promoBg.style.background = 'url("./img/bg.jpg") center center/cover no-repeat';
//promoBg.style.background = 'url("./img/mars.webp") center center/cover no-repeat';
//4
const sortedArr = movieDB.movies.sort();
console.log(sortedArr);
const promoInteractiveItem = document.querySelectorAll(".promo__interactive-item");
console.log(promoInteractiveItem);
//html/body/main/div[2]/div[2]/div[1]/ul/li[1]/text()
promoInteractiveItem.forEach((elt, i) => {
    elt.innerHTML = `${i+1} ${sortedArr[i]} <div class="delete"></div>`;    
});