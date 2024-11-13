import Cards from "./cards"
import img1 from "./assets/cards/8c.svg"
import img2 from "./assets/cards/9c.svg"
import img3 from "./assets/cards/10c.svg"
import img4 from "./assets/cards/7c.svg"
import img5 from "./assets/cards/3c.svg"
import { useState } from "react"

function Step5CC() {
    const [n1, setN] = useState('')
    const [n2, setN2] = useState('')
    const [n3, setN3] = useState('')
    const [c4, setC4] = useState('')
    const [c5, setC5] = useState('')
    setTimeout(() => {
        setN(img1)
        setN2(img2)
        setN3(img3)
        setC4(img4)
        setC5(img5)
    }, 3000);



    return (
        <div id="community-cards">
            <Cards image={n1}/>
            <Cards image={n2}/>
            <Cards image={n3}/>
            <Cards image={c4}/>
            <Cards image={c5}/>

        </div>
    )
}
export default Step5CC