import React, {useState} from 'react';

export function DisplayColorBox(props){
    return <div style={{backgroundColor: props.colorFone, color: props.colorText}}><br/><h3>Hello, React!</h3><br/></div>
}

export function ChangeColorBtn(props){
    let colorFone=props.btnText.toString().toLowerCase();
    const clickHandler=()=>{
        props.btnClickAct(colorFone);
    }
    return <button  onClick={clickHandler} style={{backgroundColor:colorFone}}>{props.btnText}</button>
}

export default function ThreeState(props){
    const [textFone, setFonColor]=useState("rgb(217, 180, 255)");
    const [textColor, setTextColor]=useState("black");
    const changeColor=(newColor)=>{
        setFonColor(newColor);
        setTextColor("white")
    }
    return(
        <>
        <ChangeColorBtn btnText="Blue" btnClickAct={changeColor}></ChangeColorBtn>
        <ChangeColorBtn btnText="Red" btnClickAct={changeColor}></ChangeColorBtn>
        <ChangeColorBtn btnText="Green" btnClickAct={changeColor}></ChangeColorBtn>
        <br/>
        <br/>
        <DisplayColorBox colorFone={textFone} colorText={textColor}></DisplayColorBox>
        </>
    )
}