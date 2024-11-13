
import Step5gs from "./step5gs"


function Step5() {
    return (
        <div id='step5' style={{ height
            : '100vh',
            backgroundColor: 'white'
        }} >
            
            <div id="step5-explanation">
            <h2 style={{textAlign: 'center'}}>Step 5: Showdown</h2>
            <p style={{fontSize: '20px'}}>Each remaining player will participate in the “showdown,” where they reveal their hole cards and the community cards. The player with the best hand wins the pot.</p>
            </div>
            <Step5gs/>
        </div>
    )
}

export default Step5