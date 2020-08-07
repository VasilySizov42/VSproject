//19. CALLBACK- ФУНКЦИИ
    //Callback-функция - функция которая будет выполнена, 
    //когда другая функция завершила свое выполнение


//20. ОБЪЕКТЫ, ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ (ES6)
    //Объекты в JS - это ассоциативные массивы
    //Создание объекта
    // 1) 
    const obj20 = new Object();//не рекомендуется к использованию
    // 2)
    const options = {
        name: 'test',
        width: 1024,
        height: 1024,
        colors: {
            border: 'black',
            bg: 'red',
            rty: {
                rt: 25,
                y: 'Yes!!!',
                arr21: [{1:99, 2: 98, 3: 97}, 2, 3, 6, 8]
            }
        },
        makeTest: function() {
            console.log('Working!');
        }
    };
    console.log(options.name);
    delete options.name;//удаление свойства
    console.log(options);
    //Перебор свойств объекта for/in
    let counter = 0;
    function enumeration(obj){
        for (let key in obj) {            
        if (typeof(obj[key]) === 'object') {  
            console.log(`${key}, ${typeof(obj[key]) == 'object'}`);          
            enumeration(obj[key]);
            counter++;
        } else{console.log
            (`Свойство ${key} объекта ${obj} имеет значение ${obj[key]} и тип ${typeof(obj[key])}`);
            counter++;
        }}
    }
    enumeration(options);
    console.log(counter);
    //Функции и методы объекта
    console.log(Object.keys(options));
    console.log(Object.keys(options).length);
    //создание методов вручную
    options.makeTest();
    //свойства аксессоры - см. доп материалы
    //Деструктуризация объекта
    const {border, bg} = options.colors;
    console.log(border);

//21. МАССИВЫ И ПСЕВДОМАССИВЫ
    //Массив -специальный объект, который содержит данные по порядку
    const arr21 = [1, 2, 3, 6, 8];
    //Методы изменения массива
    arr21.pop();
    //удаляет последний элемент из массива
    arr21.push(10);
    //добавляет элемент в конец массива
    //Для работы с началом массива есть методы shift() и unshift(),
    //но ими редко пользуются, т.к. они нарушают индексацию данных в массиве
    //Перебор элементов в массиве
        //при помощи for
        for (let i = 0; i < arr21.length; i++) {
            //.length = номер последнего индекса +1
            //важно при наличии пустых ячеек в массиве
            console.log(arr21[i]);
        } 
        //при помощи for/of (допускает использование ключевых
        //слов break и continue)
        for (let value of arr21) {
            console.log(value);
        }
        //при помощи forEach
        arr21.forEach(function(eltValue, index, ownArray) {
            console.log(`Элемент №${index} со значением - ${eltValue} из массива ${ownArray}`);
        });
    //Методы split, join, sort
    const str21 = 'we, rty, io';
    const splArr = str21.split(', ');
    console.log(splArr);
    splArr.sort();
    const jndArr = splArr.join(" + ");
    console.log(jndArr);

    const arr211 = [2, 13, 26, 8, 10];
    console.log(arr211.sort());//[ 10, 13, 2, 26, 8 ]
    console.log(arr211.sort(compareNum));//[ 2, 8, 10, 13, 26 ]
    function compareNum(a, b) {
        return a-b;
    }
    //Псевдомассивы это массивоподобные структуры, 
    //которые хранят данные по порядку, но, при этом,
    //либо совсем не обладают методами (как HTMLCollection),
    //либо обладают только методом forEach (как NodeList)

//22. ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ, SPREAD ОПЕРАТОР (ES6 -ES9)
    //Примитивы передаются по значению, объекты  - по ссылке;
    let a = 5,
        b = a;
    b = b + 5;
    console.log(b);//10
    console.log(a);//5

    const obj = {
        a: 5,
        b: 1
    };
    const copy = obj;
    copy.a = 10;
    console.log(copy);//{ a: 10, b: 1 }
    console.log(obj);//{ a: 10, b: 1 }

    //Создание копии объекта
    // 1) через цикл
        let key;
        function objCopy(mainObj) {
            let objCopy = {};
            for (key in mainObj) {
                objCopy[key] = mainObj[key];
            }
            return objCopy;
        }
        const numbers = {a:2, b: 5, c: {x: 7, y: 4}};
        const newNumbers = objCopy(numbers);
        console.log(numbers);//{ a: 2, b: 5, c: { x: 7, y: 4 } }
        console.log(newNumbers);//{ a: 2, b: 5, c: { x: 7, y: 4 } }
        newNumbers.a = 10;
        console.log(numbers);//{ a: 2, b: 5, c: { x: 7, y: 4 } }
        console.log(newNumbers);//{ a: 10, b: 5, c: { x: 7, y: 4 } }
        //Но, как всегда, дьявол прячется в деталях
        newNumbers.c.x = 12;
        console.log(numbers);//{ a: 2, b: 5, c: { x: 12, y: 4 } }
        console.log(newNumbers);//{ a: 2, b: 5, c: { x: 12, y: 4 } }
        //Потому, что это - поверхностная копия объекта
    // 2) Метод Object.assign()
        const add = {
            d: 17,
            e: 20
        };
        console.log(Object.assign(numbers, add));
        //{ a: 2, b: 5, c: { x: 12, y: 4 }, d: 17, e: 20 }
        //создается новый объект, объединяющий оба
        console.log(Object.assign({}, add));//{ d: 17, e: 20 }
        //создается новый объект, являющийся копией add
    // 3) Создание копии массива
        const oldArray = ['a', 'b', 'c'];
        const newArray = oldArray.slice();
        newArray[1] = 'qwerty';
        console.log(oldArray);//[ 'a', 'b', 'c' ]
        console.log(newArray);//[ 'a', 'qwerty', 'c' ]
    // 4) Использование оператора разворота - Spread-оператора
        //Разворачиваем два массива в один новый, с добавлением эл-тов
        const video = ['youtube', 'vimeo', 'rutube'],
              blogs = ['wordpress', 'livejournal', 'blogger'],
              internet = [...video, ...blogs, 'vk', 'fasebook'];
        console.log(internet);
        //Разворачиваем массив, как аргументы функции
        function log(a, b, c) {
            console.log(a);
            console.log(b);
            console.log(c);
        }
        const num22 = [2, 5, 7];
        log(...num22);
        //Делаем копию массива
        const array1 = ['a', 'b'];
        const array2 = [...array1];
        //Делаем копию объекта
        const testObj1 = {
            one: 1,
            two: 2
        };
        const testObj2 = {...testObj1};

// 23. ОСНОВЫ ООП, ПРОТОТИПНО-ОРИЕНТИРОВАННОЕ НАСЛЕДОВАНИЕ
    let str = 'some';
    let strObj = new String(str); //бузбожно устарело
    console.log(typeof(str));
    console.log(typeof(strObj));
    console.dir(strObj);
    //прототип — это план (схема или проект) объекта
    //он используется как запасной вариант для свойств и методов,
    //существующих в данном объекте, это также один из способов обмена
    //свойствами и функциональностью между объектами
    //это основная концепция прототипного наследования в JS.
    const o = {};
    console.log(o.toString()); // [object Object]
    //Несмотря на то, что объект «о» не имеет свойства toString, 
    //обращение к этому свойству не вызывает ошибки
    //если определенного свойства нет в объекте, 
    //его поиск осуществляется сначала в прототипе объекта, 
    //затем в прототипе прототипа объекта и так до тех пор, 
    //пока свойство не будет найдено. 
    //Это называется цепочкой прототипов. 
    //На вершине цепочки прототипов находится Object.prototype.
    const soldier = {
        heals: 400,
        armor: 150,
        sayHallo: function() {
            console.log('Hello');
        }
    };
    const john = {
        heals: 100
    };
    john.__proto__ = soldier; //!!!НЕ ИСПОЛЬЗОВАТЬ НИКОГДА!!!
    Object.setPrototypeOf(john, soldier);// более актуальный вариант
    console.log(john.armor);// все равно 150
    john.sayHallo();
    const ivan = Object.create(soldier);// оптимальный вариант
    ivan.sayHallo();

// 24. ПРАКТИКА , Ч4. ИСПОЛЬЗУЕМ ОБЪЕКТЫ

// 25. ОТЛАВЛИВАЕМ ОШИБКИ В СВОЕМ КОДЕ ПРИ ПОМОЩИ КОНСОЛИ РАЗРАБОТЧИКА

// 26. ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ В JS
    //Динамическая типизация - возможность одного типа данных
    //  превращаться в другой
    //!!!ВСЕ данные, которые мы получаем от пользователя,
    //  будут иметь тип данных - строка
    // To String
    // 1) метод String() /устаревшая
    console.log(typeof(String(null)));
    // 2) конкатенация
    console.log(typeof(5 + 'string'));
    // примеры
    const number = 500;
    console.log('https://vk.com/catalog/' + number);
    let fontSize = 26 + 'px';
    // 3) интерполяция (см. 8. Интерполяция)
    console.log(`${number}px`);
    // To Number
    // 1) метод Number() /устаревшая
    console.log(typeof(Number('123')));
    // 2) унарный плюс
    console.log(typeof(+'123'));
    // 3) парсинг
    console.log(typeof(parseInt('15px', 10)));
    // To Boolean
    // 1) нативный способ
    //  В false всегда превращаются:
    //  0, '', null, undefined, NaN;
    // Все остальное, в т.ч. пустые массивы, пустые объекты,
    //  будут, в логическом контексте - true
        let switcher = null;
        switcherFunc(switcher);
        function switcherFunc(switcher){
        if (switcher) {
            console.log('Working');
        } else {console.log('Do Not Working');}
        }
        switcher = [];
        switcherFunc(switcher);
    // 2) метод Boolean() /устаревшая
    console.log(typeof(Boolean(switcher)));
    // 3) бинарный оператор !!
    console.log(typeof(!!switcher));

// 27. ЗАДАЧИ С СОБЕСЕДОВАНИЙ

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
    //в т.ч. можно увидеть стили элемента
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
// 30. ПРАКТИКА
        //см. projectMDB script.js

// 31. СОБЫТИЯ И ИХ ОБРАБОТЧИКИ
    //Событие - сигнал от браузера о том, что что-то произошло
    //Обработчик события - функция, которая выполняется когда событие произошло

    //Устаревшие способы обработки события
    // 1) через атрибут HTML
    // <button onclick="alert('Click')" id="btn">нажми меня</button>
    // 2) использование свойства DOM-дерева для событий 
            const btn = document.querySelector('button');
            btn.onclick = function() {
                alert('Click');
            };
    //проблема такого решения - невозможность назначения разных обработчиков 
    //для одного элемента, второе - невозможность удаления такого обработчика
    //Оба метода не рекомендуются к использованию

    // 3) использование методов addEventListener() и remuveEventListener()
            btn.addEventListener('click', () => {
                alert('Click');
            });
            //навешиваем второй обработчик на событие
            btn.addEventListener('click', () => {
                alert('One more Click');
            });
            //навешиваем труеий обработчик на элемент с другим событием
            btn.addEventListener('mouseenter', () => {
                console.log('Hover');
            });
            //удаляем обработчик
            //ньюанс в том, что аргументом в него дожна входить ТА-ЖЕ функция
            //поэтому синтаксис приблизительно такой
            let i = 0;
            const deleteEL = () => {
                console.log('Hover');
                i++;
                if (i == 1) {
                    btn.removeEventListener('click', deleteEL);
                }
            };
            btn.addEventListener('click', deleteEL);
            

        //event - объект события, который передается аргументом 
        //в Collback-функцию (название произвольно - event, e, foo -как угодно)
            btn.addEventListener('mouseenter', (event) => {
                console.log(event);
                console.log(event.target);
                console.log('Hover');
                //удалим, для примера, объект события
                event.target.remove();
                //ништяк!
            });

    // Всплытие событий - происходит когда одинаковые события навешаны
    //      на элемент, его родителя, прародителя и т.д.
    //  Событие выполняется для всех, начиная с наиболее вложенного
        const btn1 = document.querySelector('button'),
              overlay = document.querySelector('.overlay');

            const deleteEL1 = (e) => {
                console.log(e.currentTarget);
                console.log(e.type);
            };

            btn.addEventListener('click', deleteEL1);      
            overlay.addEventListener('click', deleteEL1);

    //Отмена стандартного поведения браузера
        const link = document.querySelector('a');
        
        link.addEventListener('click', (event) => {
            event.preventDefault();

            console.log(event.target);
        });

    //Навешивание обрабоечика на несколько элементов
        const btns = document.querySelectorAll('button');

        btns.forEach(btn => {
            btn.addEventListener('click', deleteEL);
        });

    //Опции обработчика событий идут третьим аргументом
        btn.addEventListener('click', deleteEL, {once: true});
        btn.addEventListener('click', deleteEL, false);

// 32. НАВИГАЦИЯ ПО DOM-ЭЛЕМЕНТАМ, data-АТРИБУТЫ, ПРЕИМУЩЕСТВО for/of
        console.log(document.body); //обращение к <body></body>
        console.log(document.head); //обращение к <head></head>
        console.log(document.documentElement); //обращение к <html></html>
    //Обращение к потомкам и родителям
        console.log(document.body.childNodes);
        //позволяет получить все узлы (NOD-ы)
        //которые есть у родительскогоэлемента
        //(все элементы - узлы, но не все узлы элементы)
        //Способ получения всех дочерних элементов вручную
        for (let node of document.body.childNodes) {
            if (node.nodeName == '#text') {
                continue;
            }
            console.log(node);
        }
        
        console.log(document.body.firstChild);
        console.log(document.body.firstElementChild);
        //позволяет получить первого потомка
        console.log(document.body.lastChild);
        console.log(document.body.lastElementChild);
        //позволяет получить последнего потомка
        console.log(document.querySelector('#current'));
        //позволяет получить элемент по селектору
        console.log(document.querySelector('#current').parentNode);
        console.log(document.querySelector('#current').parentElement);
        //получаем родителя
        console.log(document.querySelector('#current').parentNode.parentNode);
        //получаем прародителя и т.д.
    //data-атрибуты
        //любой атрибут, чьё имя начинается с data-, является data-* атрибутом
        //синтаксис HTML <article id="electriccars" data-columns="3">...</article>
        //получение элемента
        console.log(document.querySelector('[data-columns="3"]'));
    //Обращение к соседям
    console.log(document.querySelector('[data-columns="3"]').nextSibling);
    console.log(document.querySelector('[data-columns="3"]').previousSibling);
    console.log(document.querySelector('[data-columns="3"]').nextElementSibling);
    console.log(document.querySelector('[data-columns="3"]').previousElementSibling);
    
// 33. ПРАКТИКА
    //см. projectMDB script.js

// 34. СОБЫТИЯ НА МОБИЛЬНЫХ УСТРОЙСТВАХ
    //Основное событие - touch "прикосновение",
    //причем их может быть несколько одновременно (MultyTough)

    //Всего существует 6 событий
    //touchstart - срабатывает при прикосновении к элементу
    //touchmove - срабатывает при движении пальца по элементу
    //touchend - срабатывает при отрыве пальца от элемента
    //touchenter - срабатывает при движении пальца про экрану и 
                //пересечении границы целевого элемента на вход
    //touchleave - срабатывает при движении пальца про экрану и 
                //пересечении границы целевого элемента на выход
    //touchcancel - срабатывает когда точка прикосновения
                //регестрируется на поверхности

    window.addEventListener('DOMContentLoaded', () => {
        const box = document.querySelector('.box');
        //1
        box.addEventListener('touchstart', (event) => {
            event.preventDefault();

            console.log('start');
            console.log(event.touches);
            console.log(event.targetTouches);
            //чтобы проверить используем режим адаптации в Инструментах разработчика
        });
        //2
        box.addEventListener('touchmove', (event) => {
            event.preventDefault();

            console.log('move');
            console.log(event.targetTouches[0].pageX);
            //чтобы проверить используем режим адаптации в Инструментах разработчика
        });
        //3
        box.addEventListener('touchend', (event) => {
            event.preventDefault();

            console.log('end');
            //чтобы проверить используем режим адаптации в Инструментах разработчика
        });
    });
     
    //touches - совокупность свойств всех пальцев касающихся экрана
    //targetTouches - совокупность свойств всех пальцев касающихся элемента
    //changedTouches - список пальцев, которые участвуют в текущем событии
    //см. пример 1
    //также см. пример 2

// 35. ASYNC, DEFER, ДИНАМИЧЕСКИЕ СКРИПТЫ
    //HTML - <script src="js/script.js"></script>
    
    //defer - атрибут тега script, который сообщает браузеру,
    //      что тот должен продолжать обрабатывать страницу
    //      и загружать скрипт в фоновом режиме, а, затем, запустить скрипт,
    //      когда он уже загрузится
    //HTML - <script defer src="js/script.js"></script>
    //  скрипты с defer 
    //  - НИКОГДА не блокируют страницу
    //  - выполняются только, когда DOM-дерево уже готово
    //      (хотя срабатывают до выполнения события DOMContentLoaded)
    //  - всегда выполняют порядок подключения скриптов

    //  Это позволяет поместить объявление скрипта в начало тега <body> и,
    //      даже, в <head> (не рекомендуется)

    //async - атрибут тега script
    //HTML - <script async src="js/script.js"></script>
    //  скрипты с async 
    //  - страница не ждет асинхронных скриптов (а они ее),
    //      содержимое обрабатывается и отображается
    //  - событие DOMContentLoaded и скрипт не ждут друг друга
    //  - запускается, как только был загружен и вообще никого не ждет

    //  Для использования асинхронных скриптов мы должны быть точно
    //      уверены, что он не зависит от DOM-структуры и 
    //      результатов выполнения других скриптов

    //Вставка скрипта через JavaScript
        const script1 = document.createElement('script');
        script1.src = 'js/test.js';
        document.body.append(script1);
    // Динамически загружаемые скрипты, по умолчанию, ведут себя как async
    // Изменить это поведение можно так
        const script2 = document.createElement('script');
        script2.src = 'js/test.js';
        script2.async = false;
        document.body.append(script2);

    //Ещу примерчик
        function loadScript(src) {
            const script = document.createElement('script');
            script.src = src;
            script.async = false;
            document.body.append(script);
        }
        loadScript('js/test.js');
        loadScript('js/some.js');

