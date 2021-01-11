document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(/** @type {KeyboardEvent} */ ev) {

    if (ship.dead) {
        return;
    }

    switch (ev.keyCode) {
        case 32: // пробел (выстрел)
            shootLaser();
            break;
        case 37: // стрелка влево (поворот)
            ship.rot = SHIP_TURN_SPD / 180 * Math.PI / FPS;
            break;
        case 38: // стрелка вперёд (вперёд)
            ship.thrusting = true;
            break;
        case 39: // стрелка вправо (поворот)
            ship.rot = -SHIP_TURN_SPD / 180 * Math.PI / FPS;
            break;
    }
}

function keyUp(/** @type {KeyboardEvent} */ ev) {

    if (ship.dead) {
        return;
    }

    switch (ev.keyCode) {
        case 32: // пробел (разрешить стрельбу)
            ship.canShoot = true;
            break;
        case 37: // стрелка влево (остановка поворота)
            ship.rot = 0;
            break;
        case 38: // стрелка вперёд (остановка)
            ship.thrusting = false;
            break;
        case 39: // стрелка вправо (остановка поворота)
            ship.rot = 0;
            break;
    }
}