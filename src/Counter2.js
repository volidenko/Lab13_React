import React from "react";

class Button extends React.Component {
    render() {
        const btnClick = () => {
            this.props.onClickAct(this.props.btText);
        };
        return (
            <button className="Button" onClick={btnClick}> +{this.props.btText} </button>
        );
    }
}

class Display extends React.Component {
    render() {
        return <div className="Display">{this.props.displayText}</div>;
    }
}

export default class Appr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentValue: ""};
    }
    render() {
        const incButtonVal = 1;
        //const [btnText, setBtnText]=useState("");
        const handlerClick = () => {
            //setBtnText("After button click");
            this.setState({ currentValue: "After button click"});
        };
        return (
            <>
                <Button btText={incButtonVal} onClickAct={handlerClick} />
                <Display displayText={this.state.currentValue} />
            </>
        );
    }
}