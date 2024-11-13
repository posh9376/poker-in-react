import Step3gs from './Step3gs'

function Step3 (){
    return (

        <div id='step3' style={{ height
            : '100vh',
            backgroundColor: 'white'
            }} >

            <div id="step3-explanation">
                <h2 style={{textAlign: 'center'}}>Step 3: The Turn</h2>
                <p style={{fontSize: '20px'}}>Check the “turn” card after the second round of betting. The dealer will burn the top card, then they will place 1 card face up next to the flop. This is called the “turn” card or the “fourth street” card. Check all of the cards on the table and the cards in your hand to see if you want to bet, call, or raise.</p>
            </div> 
             <Step3gs/>
        </div>  


      )
}
export default Step3