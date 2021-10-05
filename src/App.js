import React from 'react';
import Advertisement from './components/Advertisement'
import Header from './components/Header'
import Main from './components/Main'
import Navigation from './components/Navigation'
import Subcontents from './components/Subcontents'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main />
      <Advertisement />
    </div>
  );
}

export default App;
