import React from 'react'

export default class Button extends React.Component {
    constructor (props){
        super (props);
        this.state={curentValue: this.props.startValue}
    }
    static defaultProps={startValue:0, incValue:1};
    render(){
        const clickHandler=()=>{
            this.setState({curentValue:this.state.curentValue+this.props.incValue});
        }
    return <button onClick={clickHandler}>{this.state.curentValue}</button>
    }
}