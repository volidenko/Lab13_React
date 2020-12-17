import React, {useState} from 'react';

export default function HookBtn(props){
    const [btnText, setBtnText]=useState("beforeClick");
    const [btnColor, setBtnColor]=useState("yellow");
    const clickHandler=()=>{
        setBtnText("After button click");
        setBtnColor("green");
    }
    return <button style={{backgroundColor:btnColor, height: "50px"}} onClick={clickHandler}>{btnText}</button>
}