import Cards from "./cards";
import img1 from "../assets/cards/8c.svg"
import img2 from "../assets/cards/9c.svg"
import { useState } from "react"
function PlayersDeck() {
    const [n1, setN] = useState('')
    const [n2, setN2] = useState('')

    setTimeout(() => {
        setN(img1)
        setN2(img2)
    }, 3000);
    return <div id="players-deck">
        <Cards image={n1}/>
        <Cards image={n2}/>
        
    </div>;
}

export default PlayersDeck