
import woodenFloor from "./assets/wood-floor-background.jpg";
import PlayerComp from "./playComp";
import Me from "./me";
import "./style.css"
import Step1Table from "./step1Table";

function Step1gs() {
    return <div style={{
        position: 'relative',
        height: '80vh',
        width: '70%',
        border: '1px solid black',
        backgroundImage: 'url("' + woodenFloor + '")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        marginLeft: '13%',
    }}>
        <PlayerComp/>
        <Step1Table/>
        <Me/>

    </div>;
}

export default Step1gs;