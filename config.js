//Переменные указывающие состояние игры: старт, поражение, пауза
let isGameStarted = true;
let isLose = false;
let isPaused = false;



//Стандартные значения переменных, можно редактировать
let defaultSettings = {
    "cellSize": 40,
    "traceBlockColor": "#888888",
    "backgroundColor": "#444444",
    "emptyColor": "#444444",
    "deltaLight": 5,
    "border": 5,
    "gradientBlocks": false,
    "colors": [
        "hsl(0, 100%, 50%)",
        "hsl(30, 100%, 60%)",
        "hsl(50, 100%, 50%)",
        "hsl(110, 100%, 50%)",
        "hsl(180, 100%, 50%)",
        "hsl(230, 100%, 65%)",
        "hsl(285, 100%, 50%)"
    ]
};

//Для загрузки стандартных настроек впишите в консоли браузера cleanTheStorage();
//И перезагрузите страницу