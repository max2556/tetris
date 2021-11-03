//Рекомендую использовать этот скрипт для всех ваших фронтенд приколов
//Конкретно здесь в список выводятся имена первых 8 игроков и их счет
//(не знаю как сделать сортировку :3)
//TODO: СДЕЛАТЬ СОРТИРОВКУ


import { listOfRecords } from "./databaseScript.js";

let scoresTable = document.getElementById("scoresTable");



fillTheTable(8);

function fillTheTable(count) {
    //const allScores = getScores();
    const sortedScores = sortData(listOfRecords);
    let a = 0;
    for (let item of sortedScores) {
        if (a < count) {
            let newLi = document.createElement("li");
            newLi.textContent = item[0] + ": " + item[1];
            scoresTable.append(newLi);
        } else {
            break;
        }
        a++;
    }
}


function sortData(list) {
    let inputArr = [];
    for (let item in list) {
        inputArr.push([item, list[item]]);
    }
    let len = inputArr.length - 1;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i][1] < inputArr[i + 1][1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
}