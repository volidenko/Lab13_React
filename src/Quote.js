import React, { useState } from 'react';

export function Display(props) {
    let stl = {textAlign:"left"};
    return (
        <>
        <blockquote style={stl}>{props.text}</blockquote>
        <div style={{ textAlign: "right"}}>{props.author}</div>
        </>
    )
}

export function CounterBtn(props) {
    let colorFone="green";
    const clickHandler = () => {
        props.btnClickAct(colorFone);
    }
    return <button style={{backgroundColor:colorFone, color:"white", width: "auto"}} onClick={clickHandler}>Цитата дня</button>
}

export default function Quote(props) {
    const [textValue, setTextValue] = useState("");
    const [authorValue, setAuthorValue] = useState("");
    const realclickHandler = () => {
        setTextValue("Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно.");
        setAuthorValue("Альберт Эйнштейн");
    }
    return (
        <>
            <CounterBtn btnClickAct={realclickHandler}></CounterBtn>
            <Display text={textValue} author={authorValue}></Display>
        </>
    )
}