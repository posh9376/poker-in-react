import Cards from "./cards"
import img1 from "./assets/cards/8c.svg"
import img2 from "./assets/cards/9c.svg"
import img3 from "./assets/cards/10c.svg"
import img4 from "./assets/cards/3s.svg"
import { useState } from "react"

function Step3CC() {
    const [n1, setN] = useState('')
    const [n2, setN2] = useState('')
    const [n3, setN3] = useState('')
    const [n4, setN4] = useState('')

setTimeout(() => {
    setN(img1)
    setN2(img2)
    setN3(img3)
}, 3000);

setTimeout(() => {
    setN4(img4)
}, 5000);

   

return (
    <div id="community-cards">
        <Cards image={n1}/>
        <Cards image={n2}/>
        <Cards image={n3}/>
        <Cards image={n4}/>
       

    </div>
)
}
export default Step3CC