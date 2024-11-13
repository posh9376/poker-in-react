import PlayersDeck from "./playersdeck";
import CommunityCards from "./communityCards";
import Chips from "./chips";
import CompDeck from "./CompDeck";

function Table () {

        
        return <div style={{
            width: '80%',
            height: '60%',
            border: '15px solid #6a4a3a',
            boxShadow: ' 0 0 10px black inset', 'inset': ' 0 0 10px black',
            backgroundColor: 'green',
            borderRadius: '60%',
            position: 'absolute',
            top: '17%',
            left: '8%'
        }}>
            <PlayersDeck/>
            <CompDeck />
            <CommunityCards/>
            <Chips top="83%" left="58%" amount='300' pleft={'37%'} ptop='14%'/>
            <Chips top="5%" left="37%" amount='400' pleft={'65%'} ptop='83%'/>
            
        </div>;
  
    
}

export default Table