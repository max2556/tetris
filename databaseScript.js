//Скрипт для считывания и записи счета игроков
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";


const database = getDatabase();
const _ = "scores/"
export const listOfRecords = await getScores();


export function updateDatabase(score_val) {
    let name = prompt("Введите имя", "Тарас");
    if (name !== null && name.length >= 3) {
        set(ref(database, _ + name), score_val);
    }
}

async function getScores() {
    let l = await get(ref(database, _)).then((snapshot) => {
        if (snapshot.exists()) {
            let scores = snapshot.val();
            console.log(scores);
            return scores
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    return l;
}