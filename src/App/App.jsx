import React from 'react';
import './App.css';
import Header from '../Header/header.jsx';
import Visual from '../Visual/visual';
function App() {
  return (
    <div className="App container-fluid">
      <Header/>
      <Visual/>
      {/*<div style={{backgroundColor: 'green', height: '400px'}}>
      </div>
      <div style={{backgroundColor: 'yellow', height: '400px'}}>
      </div>
      <div style={{backgroundColor: 'blue', height: '400px'}}>
      </div>*/}
    </div>      
  );
}

export default App;
