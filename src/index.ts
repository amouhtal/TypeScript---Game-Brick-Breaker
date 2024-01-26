import { createBricks } from "./helpers";
import { CanvasView } from "./view/CanvasView";

function startGame(view: CanvasView) {
    // reset display
    score = 0;

    view.drawInfo("");
    view.drawScore(0);
    // create all bricks

    const bricks = createBricks();
    gameLoop(view, bricks);
    
}
