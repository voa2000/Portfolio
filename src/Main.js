import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Body from './Body';


import './App.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;