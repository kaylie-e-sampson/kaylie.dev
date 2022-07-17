import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import About from './components/About/About';
import Experience from './components/Experience/Experience'

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <About/>
      <Experience />
    </div>
  );
}

export default App;
