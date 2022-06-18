// import logo from './logo.svg';
// import './App.css';

import Header from './components/Header'
import style from './app.css'
//for class based
// import React from 'react' 

//FUNCTION BASED COMPONENT
function App() {
  const name = 'Victor';
  const x = false;

  return (
    <div className="container">
      <h1>Hello From React</h1>
      <h2>Hello {x ? 'Yes' : 'No'} {name}</h2>
      <Header />
    </div>
  );
}

//CLASS BASED COMPONENT
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a classbased world</h1>
//   }
// }

export default App;
