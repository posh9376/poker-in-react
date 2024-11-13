import img from "./assets/transparent-icon-poker-chips-colorful-poker-chips-stack-of-pok-stack-of-colorful-poker-chips-with-numbers65c5c25b33ff69.642551921707459163213.png";
function Pot () {
    return <div className="pot">
       <img src={img} alt="" className="one"/>
       <img src={img} alt="" className="two"/>
       <p>$3250</p>
    </div>;
}

export default Pot