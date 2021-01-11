        /** @type {HTMLCanvasElement} */
        var canv = document.getElementById("gameCanvas");
        var ctx = canv.getContext("2d");

        // параметры игры
        var level, lives, roids, score, scoreHigh, ship, text, textAlpha;
        newGame();

        // игровой цикл
        setInterval(update, 1000 / FPS);

        function distBetweenPoints(x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        }

        function gameOver() {
            ship.dead = true;
            text = "Game Over";
            textAlpha = 1.0;
        }

        function newGame() {
            level = 0;
            lives = GAME_LIVES;
            score = 0;
            ship = newShip();

            // get the high score from local storage
            var scoreStr = localStorage.getItem(SAVE_KEY_SCORE);
            if (scoreStr == null) {
                scoreHigh = 0;
            } else {
                scoreHigh = parseInt(scoreStr);
            }

            newLevel();
        }

        function newLevel() {
            text = "Level " + (level + 1);
            textAlpha = 1.0;
            createAsteroidBelt();
        }

        function update() {
            var blinkOn = ship.blinkNum % 2 == 0;
            var exploding = ship.explodeTime > 0;
            drawSpace();
            drawAsteroids();
            thrustShip(exploding, blinkOn);
            drawUpdateShip(exploding, blinkOn);
            drawLasers();
            drawGameText(textAlpha);
            drawLives(exploding);
            drawScore();
            drawHighScore();
            detectLaserHits();
            checkAsteroidCollisions(exploding)
            shipHandleScreen();
            moveLasers();
            moveAsteroid();
            
            shipDeveloperTool();
        }