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
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let expKey = prompt('Введите обязательную статью расходов в этом месяце', ''),
            expValue = +prompt('Во сколько обойдется?', '');

        if (typeof (expKey) === 'string' && typeof (expKey) != null && typeof (expValue) != null &&
            expKey != '' && expValue != '' && expKey.length < 50) {
            console.log('done');
            appData.expenses[expKey] = expValue;
        } else {
            i--;
            continue;
        }
    }

    /*let j = 0;
    while (j<2) {
        let expKey = prompt('Введите обязательную статью расходов в этом месяце', ''),
        expValue = +prompt('Во сколько обойдется?', '');

    if (typeof (expKey) === 'string' && typeof (expKey) != null && typeof (expValue) != null &&
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

    if (typeof (expKey) === 'string' && typeof (expKey) != null && typeof (expValue) != null &&
        expKey != '' && expValue != '' && expKey.length < 50) {
        console.log('done');
        appData.expenses[expKey] = expValue;
        k++;
    } else {
        continue;
    }  
    } while (k<2);*/
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.rBud / 30).toFixed(2);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay <= 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка")
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ''),
            percent = +prompt("Под какой процент?", '');
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let expOptKey = prompt('Статья необязательных расходов?', '');
         
        if ((typeof (expOptKey) === 'string') && (typeof (expOptKey)) != null 
        && expOptKey != '' && expOptKey.length < 50) {
            console.log('done');
            appData.optionalExpenses[i+1] = expOptKey;
        } else {
            i--;
            continue;
        }
    }
}
chooseOptExpenses();