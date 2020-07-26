'use strict';

// 28. ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ СО СТРАНИЦЫ
const varName281 = document.getElementById('idName');
    //Обращение к элементу по id, получаем один элемент
    //Пример обращения к элементу
    console.log(varName281);

const varName282 = document.getElementsByTagName('tagName');
    //Обращение к элементам по имени тега, 
    //получаем псевдомассив HTMLCollection.
    //Пример обращения к элементу псевдомассива
    console.log(varName282[0]);

const varName283 = document.getElementsByClassName('className');
    //Обращение к элементам по имени класса, 
    //получаем псевдомассив HTMLCollection.

const varName284 = document.querySelectorAll('cssSelectorName');
    //Обращение к элементам по css-селектору, 
    // ex: 
        const hearts = document.querySelectorAll('.hearts');
        const heart1 = document.querySelectorAll('#heart1');
    //получаем псевдомассив NodeList, который
    //имеет метод forEach();
    // ex:
        hearts.forEach((value, index, array) => {
            console.log('index' + 'value' + 'array');
        });

const varName285 = document.querySelector('cssSelectorName');
    //Обращение к элементу по css-селектору, получаем первый элемент
    //Пример обращения к элементу
        console.log(varName281);

// 29. ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ НА СТРАНИЦЕ
const varName291 = document.getElementById('idName'),
      varName292 = document.getElementsByTagName('tagName'),
      varName293 = document.getElementsByClassName('className'),
      varName294 = document.querySelectorAll('cssSelectorName'),
      varName295 = document.querySelector('cssSelectorName');
    //обращение к свойствам элемента
        console.dir(varName291);
    //можно увидеть стили элемента, в т.ч.
    //изменяем inline-стили
        varName291.style.backgroundColor = 'blue';
        varName291.style.width = '500px';
        varName292[1].style.borderRadius = '100%';
    
    //изменение сразу нескольких стилей
        varName291.style.cssText = 'bacckground-color: blue; width: 500px';
        //используя бэктики `` можно вставлять вместо значения переменную
        let color = 'red',
            num = 300;
        varName291.style.cssText = `bacckground-color: ${color}; width: ${num}px`;
    
    //методы для работы с элементами
        //создание элемента
        const varName296 = document.createElement('div');
        //создание текстового узла
        const varName297 = document.createTextNode('Тут был Вася!');
        //добавление свойств к элементу
        varName296.classList.add('black');
        //добавление элемента на страницу
            //в конец родителя (к чему.добавляем(что))
            document.tagName.append(varName296);
            document.querySelector('cssSelectorName').append(varName296);
                //устаревшая appendChild()
                document.tagName.appendChild(varName296);
            //в начало родителя
            document.tagName.prepend(varName296);
            //перед элементом
            varName292[1].before(varName296);
            //после элемента
            varName292[1].after(varName296);
                //устаревшая insertBefore(что, перед чем)
                document.tagParentName.insertBefore(varName296, varName292[1]);
        //удаление элемента
            varName296.remove();
            varName292[1].remove();
                //устаревшая removeChild()
                document.tagParentName.removeChild(varName292[1]);
        //замена элемента (что.меняем(на что))
            varName296.replaceWith(varName292[1]);
                //устаревшая родитель.replaceChild(на что меняем, что меняем)
                document.tagParentName.replaceChild(varName296, varName292[1]);
        //вставка в элемент текста и HTML-структур
            varName296.innerHTML = 'Hello World!';
            varName296.innerHTML = '<h1>Hello World!</h1>';
            //учитывать соображения безопасности!!!
            //вставка только текста (безопасно)
            varName296.textContent = 'Hello World!';
            //вставка HTML-структур в элемент
            varName296.insertAdjacentHTML('codeWord','<h1>Hello World!</h1>');
            //значения codeWord:
                /*  afterbegin - в начале элемента,
                    afterend - после элемента,
                    beforebegin - перед элементом,
                    beforeend - в конце элемента*/