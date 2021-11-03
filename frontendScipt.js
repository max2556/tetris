//Рекомендую использовать этот скрипт для всех ваших фронтенд приколов
//Конкретно здесь в список выводятся имена первых 8 игроков и их счет
//(не знаю как сделать сортировку :3)
//TODO: СДЕЛАТЬ СОРТИРОВКУ


import { listOfRecords } from "./databaseScript.js";

let scoresTable = document.getElementById("scoresTable");



fillTheTable(8);

function fillTheTable(count) {
    //const allScores = getScores();
    const allScores = listOfRecords;
    let a = 0;
    for (let item in allScores) {
        if (a < count) {
            let newLi = document.createElement("li");
            newLi.textContent = item + ": " + allScores[item];
            scoresTable.append(newLi);
        } else {
            break;
        }
        a++;
    }
}