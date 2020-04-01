import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="for">
          <input type="text" onChange={()=>{console.log('momoko!');}} />
        </label>
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
