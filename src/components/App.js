import React, { Component } from 'react';


const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props);//親クラスのコンストラクタの参照。それでthisが使える。
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    this.setState({count: this.state.count + 1});
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1});
  }

  render() {
    console.log("render");
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )

  }
}

export default App;
