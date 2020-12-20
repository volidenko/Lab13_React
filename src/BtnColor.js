import React, {useState} from 'react';

export function DisplayColorBox(props){
    return <div style={{backgroundColor: props.colorFone, color: props.colorText}}>Hello, React!</div>
    //return <div style={{backgroundColor: props.colorFone}}>Hello, React!</div>
}

export function ChangeColorBtn(props){
    let colorFone=props.btnText.toString().toLowerCase();
    const [colorText, setTextColor]=useState("red");
    const clickHandler=()=>{
        props.btnClickAct(colorFone);
        setTextColor("white");
    }
    return <button  onClick={clickHandler} style={{backgroundColor:colorFone, height: "30px"}}>{props.btnText}</button>
}

export default function ThreeState(props){
    const [textFone, setFonColor]=useState("white");
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