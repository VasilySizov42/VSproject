//'use strict';

let budget, date;

function start() {
    while (isNaN(budget) || budget == '' || budget == null) {
        budget = +prompt('Ваш бюджет на месяц?', '35000');
    }
    date = prompt('Введите дату в формате YYYY-MM-DD', '2020-01-01');
}

start();

let appData = {
    rBud: budget,
    rDate: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let expKey = prompt('Введите обязательную статью расходов в этом месяце', ''),
                expValue = +prompt('Во сколько обойдется?', '');

            if (typeof (expKey) === 'string' && typeof (expKey) != null && 
            typeof (expValue) != null &&
                expKey != '' && expValue != '' && expKey.length < 50) {
                console.log('done');
                appData.expenses[expKey] = expValue;
            } else {
                i--;
                continue;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.rBud / 30).toFixed(2);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay <= 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка")
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ''),
                percent = +prompt("Под какой процент?", '');
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let expOptKey = prompt('Статья необязательных расходов?', '');
    
            if ((typeof (expOptKey) === 'string') && (typeof (expOptKey)) != null &&
                expOptKey != '' && expOptKey.length < 50) {
                console.log('done');
                appData.optionalExpenses[i + 1] = expOptKey;
            } else {
                i--;
                continue;
            }
        }
    },
    chooseIncome: function () {
        let items;
        while (true) {
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');

            if (typeof items != 'string' || typeof items == null ||
                items == '') {
                console.log('"Вы ввели некорректные данные или не ввели их вовсе"');
                continue;
            } else {
                appData.income = items.split(', ');
                let dop = prompt("Может что-то еще?", '');
                appData.income.push(dop);
                appData.income.sort();
                appData.income.forEach(function(item, i) {
                    alert("Способы доп. заработка: " + (i+1) + ' - ' + item) 
                    });                         
                break;
            }
        }                
    },    
};

function getProgramContent() {
    console.log("Наша программа включает в себя данные: ");
    for (let key in appData) {
        console.log(key + ' - ' + appData[key]);
    }
}

/*let j = 0;
while (j<2) {
    let expKey = prompt('Введите обязательную статью расходов в этом месяце', ''),
    expValue = +prompt('Во сколько обойдется?', '');

if (typeof (expKey) === 'string' && typeof (expKey) != null && 
typeof (expValue) != null &&
    expKey != '' && expValue != '' && expKey.length < 50) {
    console.log('done');
    appData.expenses[expKey] = expValue;
    j++;
} else {
    continue;
}  
}*/

/*let k = 0;
do {
    let expKey = prompt('Введите обязательную статью расходов в этом месяце', ''),
    expValue = +prompt('Во сколько обойдется?', '');

if (typeof (expKey) === 'string' && typeof (expKey) != null && 
typeof (expValue) != null &&
    expKey != '' && expValue != '' && expKey.length < 50) {
    console.log('done');
    appData.expenses[expKey] = expValue;
    k++;
} else {
    continue;
}  
} while (k<2);*/

let y = 1; 
let x = [ ] + 1 + 2;
console.log(x);
console.log(null || 2 && 3 || 4);
console.log( "1"[0] );
if (0 || "" || 2 || undefined || true || falsе) {
    console.log('true')
} else {console.log('false')}

let a = '123', b = 123; 
console.log(+"Infinity" );a