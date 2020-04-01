import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="for">
//           <input type="text" onChange={()=>{console.log('momoko!');}} />
//         </label>
//       </React.Fragment>
//     )
//   }
// }


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

// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Ozono Momoko!!"
//     )
//   }
// }

export default App;
