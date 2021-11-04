//Переменные указывающие состояние игры: старт, поражение, пауза
let isGameStarted = false;
let isLose = false;
let isPaused = false;



//Стандартные значения переменных, можно редактировать
let defaultSettings = {
    "cellSize": 40,
    "traceBlockColor": "#888888",
    "backgroundColor": "#333333",
    "emptyColor": "#333333",
    "deltaLight": 2,
    "border": 0,
    "gradientBlocks": false,
    "colors": [
        "hsl(0, 100%, 70%)",
        "hsl(30, 100%, 70%)",
        "hsl(50, 100%, 70%)",
        "hsl(110, 100%, 70%)",
        "hsl(180, 100%, 70%)",
        "hsl(230, 100%, 75%)",
        "hsl(285, 100%, 70%)"
    ]
};

//Для загрузки стандартных настроек впишите в консоли браузера localstorage.removeItem("settings");
//И перезагрузите страницу