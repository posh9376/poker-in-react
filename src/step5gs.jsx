import Step5Table from "./step5Table";
import woodenFloor from "./assets/wood-floor-background.jpg";
import PlayerComp from "./playComp";
import Me from "./me";
import "./style.css"

function Step5gs() {
    return <div style={{
        position: 'relative',
        width: '70%',
        height: '80vh',
        border: '1px solid black',
        backgroundImage: 'url("' + woodenFloor + '")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        margin: '13%',
        marginTop: '0px'
    }}>
        <PlayerComp/>
        <Step5Table/>
        <Me/>

    </div>;
}

export default Step5gs;