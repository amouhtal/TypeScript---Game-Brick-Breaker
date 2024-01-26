import { createBricks } from "./helpers";
import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";

import PADDLE_IMAGE from "./images/paddle.png";
import BALL_IMAGE from "./images/ball.png";

import {
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY,
} from "./setup";

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
    view.drawInfo("Game Ovet!");
    gameOver = false;
}

function setGameWin(view: CanvasView) {
    view.drawInfo("Game Won!");
    gameOver = false;
}

function gameLoop(
    view: CanvasView,
    bricks: Brick[],
    paddle: Paddle,
    ball: Ball
) {}

// create a new view

const view = new CanvasView("#playField");
view.initStartButton(startGame);

function startGame(view: CanvasView) {
    // reset display
    score = 0;

    view.drawInfo("");
    view.drawScore(0);
    // create all bricks

    const bricks = createBricks();
    gameLoop(view, bricks);
}
