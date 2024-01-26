import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import { createBricks } from "./helpers";
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
    paddle: Paddle
    // ball: Ball
) {
    view.clear();
    view.drawBricks(bricks);
    view.drawSprite(paddle);
    // Mode paddle and check so it won't exit the playfield
    requestAnimationFrame(() => gameLoop(view, bricks, paddle));

    if (
        (paddle.isMovingLeft && paddle.pos.x > 0) ||
        (paddle.isMovingRight &&
            paddle.pos.x < view.canvas.width - paddle.width)
    ) {
        paddle.movePaddle();
    }
}

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

    // create a paddle
    const paddle = new Paddle(
        PADDLE_SPEED,
        PADDLE_WIDTH,
        PADDLE_HEIGHT,
        {
            x: PADDLE_STARTX,
            y: view.canvas.height - PADDLE_HEIGHT - 5,
        },

        PADDLE_IMAGE
    );
    gameLoop(view, bricks, paddle);
}
