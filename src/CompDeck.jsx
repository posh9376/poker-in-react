import Cards from "./cards";
import img1 from "./assets/cards/b.svg"
//import img2 from "./assets/cards/5s.svg"
//import img3 from "./assets/cards/6s.svg"
import { useState,  } from "react"



function CompDeck() {
    const [n1, setN] = useState('')
    const [n2, setN2] = useState('')
    //const [style, setStyle] = useState('')

    setTimeout(() => {
        setN(img1)
        setN2(img1)
    }, 4000);



    return <div id="comp-deck" >
        <Cards image={n1}/>
        <Cards image={n2}/>
        </div>;
  }
  
  export default CompDeck