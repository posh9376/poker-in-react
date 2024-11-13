
import Step1gs from "./step1gs"


function Step1() {
    return (
        <div id='step1' style={{ height
            : '100vh',
            backgroundColor: 'white'
        }} >
            
            <div id="step1-explanation">
                <h2>Step 1: Pre-flop</h2>
                <p style={{fontSize: '20px'}}>This is the initial betting round, which occurs after players have been dealt their two hole cards. Players decide whether to fold, call, or raise based on the strength of their cards.</p>
            </div>
            <Step1gs/>
        </div>
    )
}

export default Step1