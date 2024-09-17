import React from 'react';
import './App.css';
import ReactFeatures from './ReactFeatures';
import AngularComparison from './AngularComparison';


function App(){
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to My Web Applicatipon!</h1>
        <p>This is a simple React application...</p>
        <ReactFeatures/>
        <AngularComparison/>
      </header>
    </div>
  )
}


export default App;
