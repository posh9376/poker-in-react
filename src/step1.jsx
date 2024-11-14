
import Step1gs from "./step1gs"


function Step1() {
    return (
        <div id='step1'  className="step">
            
            <div className="step-exp">
                <h2>Step 1: Pre-flop</h2>
                <p>Each player is dealt two private cards (known as “hole cards”).These hole cards are unique to each player and are only revealed at showdown or if the player folds.</p>
                <p>After being dealt the cards the firts round of betting will begin and each player can either <span>fold</span>, <span>call</span>, or <span>raise</span></p>
            </div>
            <Step1gs />
        </div>
    )
}

export default Step1