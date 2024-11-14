function About() {
    return (
      <div id="about" style={{ padding: 20 }}>
        <h2 style={{ fontSize: '34px'}}>About</h2>
        <p style={{ fontSize: 18 }}>
          Poker is a classic card game that combines skill, strategy, and luck, captivating players worldwide. There are many variants of poker, but <span>Texas Hold’em </span>is the most popular in casinos and tournaments. In poker, players compete to form the best hand using a combination of personal and community cards (cards shared among all players), and they aim to win chips or money through strategic betting. Unlike many other card games, poker involves a psychological aspect where players can bluff, or mislead others about the strength of their hand, making it both intellectually challenging and thrilling.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '40%', textAlign: 'left' }}>
            <h3 style={{ fontSize: 24, color: '#00698f', textAlign: 'center' }}>Main Aim of Poker</h3>
            <p style={{ fontSize: 18 }}>
              The primary objective of poker is to win chips (or money) by having either:
            </p>
            <ol style={{ fontSize: 18, lineHeight: 1.5 }}>
              <li>The best five-card hand at the showdown (when players reveal their cards) or</li>
              <li>Convincing all other players to fold (give up their hand) through strategic betting, which results in you winning the pot by default.</li>
            </ol>
            <p style={{ fontSize: 18 }}>
              Poker’s dynamic nature means that, over time, a winning player will apply a mix of skill, strategy, and reading opponents to maximize winnings and minimize losses.
            </p>
            <h3>Common poker Terms</h3>
            <ul style={{ fontSize: 18, lineHeight: 1.5 }}>
              <li>Call (match he current betting amount)</li>
              <li>Raise (increase the bet by a certain amount)</li>
              <li>Fold (give up the hand and any bets they have already placed)</li>
              <li>Check (pass the action without betting)</li>
            </ul>
          </div>
          <div style={{ width: '50%'}}>
            <p style={{ fontSize: 18, textDecoration: 'underline'}}>Here are the winning poker hands, from highest to lowest:</p>
            <img
              src="https://www.wikihow.com/images/thumb/6/65/Play-Poker-Step-1-Version-6.jpg/v4-373px-Play-Poker-Step-1-Version-6.jpg.webp"
              alt="poker winning hands"
              style={{ margin: 10 }}
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default About;