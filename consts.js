const FPS = 30;
const FRICTION = 0.7; // трение (0 = отсутствие, 1 = макс)
const GAME_LIVES = 3; // нач. кол-во жизней
const LASER_DIST = 0.6; // максимальное разтояние, на которое лазер может пройти
const LASER_EXPLODE_DUR = 0.1; // проколжительность взрыва лазера в сек
const LASER_MAX = 10; // макс кол-во лазеров на экране
const LASER_SPD = 500; // скорость лазеров в секундах 
const ROID_JAG = 0.4; // неровность астеройдов (0 = отсутствие, 1 = макс)
const ROID_PTS_LGE = 20; // очки за большие астеройды
const ROID_PTS_MED = 50; // очки за средние астеройды
const ROID_PTS_SML = 100; // очки за маленькие астеройды
const ROID_NUM = 3; // начальное кол-во астероидов  
const ROID_SIZE = 100; // начальный размер астеройдов в px
const ROID_SPD = 50; // начальная скорость астеройдов в pps
const ROID_VERT = 10; // среднее количество вершин на каждом астероиде
const SAVE_KEY_SCORE = "highscore"; // ключ сохранения для локального хранения рекордов
const SHIP_BLINK_DUR = 0.1; // частота мигания iframe
const SHIP_EXPLODE_DUR = 0.3; // продолжительность взрыва корабля
const SHIP_INV_DUR = 3; // продолжительность iframe
const SHIP_SIZE = 30; // высота корабля в px
const SHIP_THRUST = 5; // ускорение корабля в pps^2
const SHIP_TURN_SPD = 360; // скорость поворота в градусах в сек
const SHOW_BOUNDING = false; // вкл/выкл границ столкновения
const SHOW_CENTRE_DOT = false; // вкл/выкл центральную точку корабля 
const TEXT_FADE_TIME = 2.5; // исчезновение текста в секунду 
const TEXT_SIZE = 40; // высота шрифта текста в px