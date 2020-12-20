import React, {useState} from 'react';

export default function HookBtn(props){
    const [btnText, setBtnText]=useState("beforeClick");
    const [btnColor, setBtnColor]=useState("yellow");
    const [textColor, setTextColor]=useState("red");

    const clickHandler=()=>{
        setBtnText("After button click");
        setBtnColor("green");
        setTextColor("white");
    }
    return <button style={{backgroundColor:btnColor, color:textColor, height: "30px"}} onClick={clickHandler}>{btnText}</button>
}