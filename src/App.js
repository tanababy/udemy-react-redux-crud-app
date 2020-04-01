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


const App = () => {
  const profiles = [
    {name: "Momoko",age: 21},
    {name: "Reno",age: 18},
    {name: "No Name"}
  ]
  return (
    <React.Fragment>
      {
        profiles.map((profile,index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </React.Fragment>
  )
}

const User = (props) => {
  return <div>i see {props.name}! and {props.age} years old.</div>
}

User.defaultProps = {
  age: 10
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
