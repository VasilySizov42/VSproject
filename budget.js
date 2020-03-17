//'use strict';

let budget = +prompt('Ваш бюджет на месяц?', '30000');
let date = prompt('Введите дату в формате YYYY-MM-DD', '2020-01-01');

let appData = {
    rBud: budget,
    rDate: date,
    expenses: {},
    optionalExpenses: {},
    income: []
};

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

appData.moneyPerDay = appData.rBud / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay <= 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {console.log("Произошла ошибка")}