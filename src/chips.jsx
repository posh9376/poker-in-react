/* eslint-disable react/prop-types */
import img from "../assets/transparent-icon-poker-chips-colorful-poker-chips-stack-of-pok-stack-of-colorful-poker-chips-with-numbers65c5c25b33ff69.642551921707459163213.png";

function Chips({top, left, amount, ptop, pleft}) {
    return <div className="chips">
        <img src={img} alt="chips image" style={{
            top: top,
            left: left
        }} />
        <p style={{top: ptop, left: pleft}}>$ {amount}</p>
    </div>;
}

export default Chips