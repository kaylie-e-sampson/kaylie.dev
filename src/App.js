import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import About from './components/About/About';
import WhyDali from './components/WhyDali/WhyDali'

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <About/>
      <WhyDali />
    </div>
  );
}

export default App;
