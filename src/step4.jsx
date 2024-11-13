
import Step4gs from "./step4gs"


function Step4() {
    return (
        <div id='step1' style={{ height
            : '100vh',
            backgroundColor: 'white'
        }} >
            
            <div id="step4-explanation">
                <h2>Step 4: River</h2>
                <p style={{fontSize: '20px'}}>Examine the "river" card and decide on the hand you'll play. After the dealer "burns" the top card on the deck, they'll put 1 last card face up next to the “turn” card. This final card is called the “river.” Check your hand and the community cards to decide on your best 5-card hand. Then, bet, call, or fold If the rules allow it, you may be able to exchange your hand 1 final time before or after betting. However, this isn’t common in professional games.

.
                </p>
            </div>
            <Step4gs/>
        </div>
    )
}

export default Step4