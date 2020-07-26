'use strict';

const personalMouvieDB = {
    count: 0,
    muvies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMouvieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMouvieDB.count == '' || personalMouvieDB.count == null || isNaN(personalMouvieDB.count)) {
            personalMouvieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        /* for (let i = 0; i< 2; i++) {
            const film = prompt('Один из последних просмотренных фильмов?', ''),
                  rate = +prompt('На сколько оцените его?', '');
            if (film != null && rate != null && film != '' && rate != '' && film.length <= 50){
                personalMouvieDB.muvies[film] = rate;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }    
        } */
        /* let i = 0;
        while (i<2){
            const film = prompt('Один из последних просмотренных фильмов?', ''),
                  rate = +prompt('На сколько оцените его?', '');
            if (film != null && rate != null && film != '' && rate != '' && film.length <= 50){
                personalMouvieDB.muvies[film] = rate;
                console.log('done');
                i++;
            } else {
                console.log('error');
                continue;
            }    
        } */
        let i = 0;
        do {
            const film = prompt('Один из последних просмотренных фильмов?', ''),
                rate = +prompt('На сколько оцените его?', '');
            if (film != null && rate != null && film != '' && rate != '' && film.length <= 50) {
                personalMouvieDB.muvies[film] = rate;
                console.log('done');
                i++;
            } else {
                console.log('error');
                continue;
            }
        } while (i < 2)
    },
    detectPersonalLevel: function () {
        if (personalMouvieDB.count < 10) {
            console.log('Посмотрено довольно мало фильмов');
        } else if (personalMouvieDB.count >= 10 && personalMouvieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMouvieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (hidden == false) {
            console.log(personalMouvieDB);
        } else {
            console.log('Данные закрыты для просмотра');
        }
    },
    writeYourGenres: function () {
        let genre;
        for (let i = 0; i < 3; i++) {
            genre = prompt(`Ваш любимый фильм под номером ${i + 1}`, '');
            if (genre != null && genre != '' && genre.length <= 50) {
                personalMouvieDB.genres[i] = genre;
            } else {
                console.log('error');
                i--;
            }
        }
        this.genres.forEach((element, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${element}`);
        });
    },
    toggleVisibalMyDB: function() {
        if (personalMouvieDB.privat) {
            personalMouvieDB.privat = false;
        } else {
            personalMouvieDB.privat = true;
        }
    }
};

/* console.log(personalMouvieDB);
personalMouvieDB.start(); 
personalMouvieDB.rememberMyFilms();
personalMouvieDB.detectPersonalLevel();
personalMouvieDB.writeYourGenres();
personalMouvieDB.toggleVisibalMyDB();
personalMouvieDB.showMyDB(personalMouvieDB.privat); */
