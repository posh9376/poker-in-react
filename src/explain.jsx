function Game(){
    return(
        <div id="explanation">
            <h2>Game play Explanation</h2>
            <ol>
                <li>
                    <h3>Step 1: Pre-Flop</h3>
                    <p>This is the initial betting round, which occurs after players have been dealt their two hole cards (face down). Players decide whether to fold, call, or raise based on the strength of their cards.</p>
                    
                </li>
                <li>
                    <h3>Step 2: Flop</h3>
                    <p>The first three community cards are dealt face-up in the center of the table. This is followed by another round of betting. Players now have five cards to consider (their two hole cards plus the three community cards).</p>
                </li>
                <li>
                    <h3>Step 3: Turn</h3>
                    <p>Check the “turn” card after the second round of betting. The dealer will burn the top card, then they will place 1 card face up next to the flop. This is called the “turn” card or the “fourth street” card. Check all of the cards on the table and the cards in your hand to see if you want to bet, call, or raise.</p>

                </li>
                <li>
                    <h3>Step 4: River</h3>
                    <p>Examine the river card and decide on the hand you will play. After the dealer burns the top card on the deck, they will put 1 last card face up next to the “turn” card. This final card is called the “river.” Check your hand and the community cards to decide on your best 5-card hand. Then, bet, call, or fold.

                    If the rules allow it, you may be able to exchange your hand 1 final time before or after betting. However, this isn’t common in professional games.</p>
                </li>
                <li>
                    <h3>Step 5: Showdown</h3>
                    <p>Each remaining player will participate in the “showdown,” where they reveal their hole cards and the community cards. The player with the best hand wins the pot.</p>
                </li>
            </ol>
        </div>
    )
}

export default Game