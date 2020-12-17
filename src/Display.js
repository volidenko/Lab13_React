import React from 'react';

export class CounterBtn extends React.Component {
    render(){
        const btnClick=()=>{
            this.props.onClickAct(this.props.btnIncValue);
        }
    return <button onClick={btnClick}>+ {this.props.btnIncValue}</button>
    }
}

export class Display extends React.Component {
    
    render(){
    return <div > {this.props.dispValue}</div>
    }
}
