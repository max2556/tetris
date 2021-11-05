//Рекомендую использовать этот скрипт для всех ваших фронтенд приколов
//Конкретно здесь в список выводятся имена первых 8 игроков и их счет
//(не знаю как сделать сортировку :3)
//TODO: СДЕЛАТЬ СОРТИРОВКУ


import { listOfRecords } from "./databaseScript.js";
import { Init } from "./tetris.js";
//Элементы
const scoresTable = document.getElementById("scoresTable");
const version = document.querySelector(".version");
const startButton = document.getElementById("startButton");
const menuOverlay = document.getElementById("menuOverlay");

//Переменные
let lengthOfTable = 10;
let versionString = "1.002v";








//Основная часть
fillTheTable(lengthOfTable);
version.textContent = versionString;
startButton.onclick = startTheGame;
document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && isGameStarted) {
        isPaused = !isPaused;
        switchMenu(isPaused);
    }
})



function fillTheTable(count) {
    //const allScores = getScores();
    const sortedScores = sortData(listOfRecords);
    let a = 0;

    for (let i = 0; i < count; i++) {
        let newLi = document.createElement("li");
        let item = sortedScores[i];
        newLi.textContent = item[0] + ": " + item[1];
        scoresTable.append(newLi);
    }
}

function sortData(list) {
    let inputArr = [];
    for (let item in list) {
        inputArr.push([list[item]["name"], list[item]["score"]]);
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

function startTheGame() {
    Init();
    hideMenu();
}

function hideMenu() {
    menuOverlay.hidden = true;
}

function openMenu() {
    menuOverlay.hidden = false;
}

function switchMenu(state) {
    if (state) { openMenu(); } else { hideMenu(); }
}