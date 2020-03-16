//'use strict';

let budget = prompt('Ваш бюджет на месяц?', '30000');
let date = prompt('Введите дату в формате YYYY-MM-DD', '2020-01-01');

let appData = {
    rBud : budget,
    rDate : date,
    expenses : {},
    optionalExpenses : {},
    income : []
};

let expKey1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
expValue1 = prompt('Во сколько обойдется?', ''),
expKey2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
expValue2 = prompt('Во сколько обойдется?', '')

appData.expenses[expKey1] = expValue1;
appData.expenses[expKey2] = expValue2;

alert (appData.rBud/30);