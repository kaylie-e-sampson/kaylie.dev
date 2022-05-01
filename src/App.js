import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      {/* <hr/> */}
      <About />
    </div>
  );
}

export default App;
