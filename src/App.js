import logo from './logo.svg';
import './App.css';
import Button from './Counter';
import { render } from '@testing-library/react';
import { CounterBtn, Display } from './Display';
import React from 'react';
import HookBtn from './hookBtn';
import HookCounter from './HookCounter';
import ThreeState from './ThreeState';
import BtnClick from './BtnClick';
import BtnColor from './BtnColor';

// function App(){
//   return(
//     <div className="App">
//     <hr/>
//     <BtnClick start={2}></BtnClick>
//     <hr/>
//   </div>
//   )
// }

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { curentValue: 0 };
  }
  render() {
    const clickHandler = incValue => {
      this.setState({ curentValue: this.state.curentValue + incValue });
    }
    return (
      <div className="App">
        {/* <Button startValue={1} incValue={2}></Button>
        <hr/> */}
        {/* <CounterBtn btnIncValue={2} onClickAct={clickHandler}></CounterBtn>
        <Display dispValue={this.state.curentValue}></Display>
        <hr/> */}
        <HookBtn></HookBtn>
        <hr/>
        <HookCounter></HookCounter>
        <hr/>
        {/* <ThreeState></ThreeState>
        <hr/> */}
        <BtnClick start={2}></BtnClick>
        <hr/>
        <BtnColor></BtnColor>
        <hr/>
      </div>
    );
  }
}

export default App;
