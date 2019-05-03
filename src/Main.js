import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Body from './Body';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
    </div>
  );
}

export default App;