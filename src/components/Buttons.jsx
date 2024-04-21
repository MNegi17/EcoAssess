import react from "react"

const Buttons = (props) =>{
    const {text,style} =props;
    return (
<button className="text-black shadow-sm text-sm p-2 rounded-2xl font-semi-bold hover:bg-lime-300 absolute" style={style} >{props.text}</button>
    )
}

export default Buttons;