import Table from "./table";
import woodenFloor from "../assets/wood-floor-background.jpg";
import PlayerComp from "./playComp";
import Me from "./me";
import "./style.css"

function GameSide() {
    return <div style={{
        position: 'relative',
        width: '70%',
        height: '100vh',
        border: '1px solid black',
        backgroundImage: 'url("' + woodenFloor + '")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
    }}>
        <PlayerComp/>
        <Table/>
        <Me/>

    </div>;
}

export default GameSide;