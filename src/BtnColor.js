import React, {useState} from 'react';

export function DisplayColorBox(props){
    return <div style={{backgroundColor: props.color}}>Hello, React!</div>
}

export function ChangeColorBtn(props){
    let color=props.btnText.toString().toLowerCase();
    const clickHandler=()=>{
        props.btnClickAct(color)
    }
    return <button  onClick={clickHandler} style={{backgroundColor:color}}>{props.btnText}</button>
}

export default function ThreeState(props){
    const [textColor, setTextColor]=useState("white");
    const changeColor=(newColor)=>{
        setTextColor(newColor);
    }
    return(
        <>
        <ChangeColorBtn btnText="Red" btnClickAct={changeColor}></ChangeColorBtn>
        <ChangeColorBtn btnText="Yellow" btnClickAct={changeColor}></ChangeColorBtn>
        <ChangeColorBtn btnText="Green" btnClickAct={changeColor}></ChangeColorBtn>
        <DisplayColorBox color={textColor}></DisplayColorBox>
        </>
    )
}