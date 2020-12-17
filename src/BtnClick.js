import React, { useState } from 'react';

export function Display(props) {
    return <div> {props.dispValue}</div>
}

export function CounterBtn(props) {
    const clickHandler = () => {
        props.btnClickAct(props.incValue);
    }
    return <button onClick={clickHandler}> {props.incValue >0 ? "+" +props.incValue : props.incValue}</button>
}

export default function BtnClick(props) {
    const [counterValue, setCounterValue] = useState(props.start);
    const realclickHandler = (newValue) => {
        setCounterValue(counterValue + newValue);
    }
    return (
        <>
            <CounterBtn btnClickAct={realclickHandler} incValue={10}></CounterBtn>
            <CounterBtn btnClickAct={realclickHandler} incValue={-100}></CounterBtn>
            <CounterBtn btnClickAct={realclickHandler} incValue={25}></CounterBtn>
            <Display dispValue={counterValue}></Display>
        </>
    )
}