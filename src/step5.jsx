
import Step5gs from "./step5gs"


function Step5() {
    return (
        <div id='step5' className="step">
            
            <div className="step-exp">
            <h2 >Step 5: Showdown</h2>
            <p >After the final betting round, if there are still players remaining, it’s time for the <span>showdown</span>.Each remaining player reveals their best five-card hand using any combination of their two hole cards and the five community cards on the table.The player with the highest-ranking hand wins the pot (all chips bet in that round). If hands are tied, the pot is split.</p>
            </div>
            <Step5gs />
        </div>
    )
}

export default Step5