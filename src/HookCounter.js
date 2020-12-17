import React, {useState} from 'react';

export default function HookCounter(props){
    const [counterValue, setCounterValue]=useState(0);
    const clickHandler=()=>{
        setCounterValue(counterValue+1);
    }
    return <button  onClick={clickHandler}>{counterValue}</button>
}