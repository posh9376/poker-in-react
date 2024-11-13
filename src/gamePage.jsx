
import GameSide from "./gameSide";
import Game from "./explain";

function GamePage() {
    return (
        <div id='gameplay' style={{display: 'flex', height
            : '100vh',
        }} >
            <GameSide/>
            <Game/>
        </div>
    )
}

export default GamePage