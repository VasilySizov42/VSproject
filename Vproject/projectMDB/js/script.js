/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener("DOMContentLoaded", () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const remImgs = document.querySelectorAll('.promo__adv img'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        movieList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    const sortArr = (arr) => {
        arr.sort();
    };

    sortArr(movieDB.movies);

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        if (newFilm) {
            
            if (newFilm.lenght > 21){
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log(`Добавляем любимый фильм ${newFilm}`);
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            console.log(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(element => {
            element.remove();
        });
    };

    const makeCanges = () => {
        promoGenre.textContent = 'ДРАМА';

        promoBg.style.background = 'url("./img/bg.jpg") center center/cover no-repeat';
    };

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((elt, i) => {
            parent.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${elt}
    <div class="delete"></div>
    </li>
    `;

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            films.splice(i, 1);
            //рекурсия для обновления нумерации фильмов
            createMovieList(films, parent);
        });
    });
        });
    }

    deleteAdv(remImgs);
    makeCanges();    
    createMovieList(movieDB.movies, movieList);
});