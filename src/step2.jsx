import Step2gs from './step2gs'

function Step2 (){
    return (
<div id='step2' style={{ height
            : '100vh',
            backgroundColor: 'white'
        }} >
            
            <div id="step2-explanation">
                <h2>Step 2: Flop</h2>
                <p style={{fontSize: '20px'}}>The first three community cards are dealt face-up in the center of the table. This is followed by another round of betting. Players now have five cards to consider (their two hole cards plus the three community cards).</p>
            </div> 
             <Step2gs/>
            </div>  

          )
}
export default Step2