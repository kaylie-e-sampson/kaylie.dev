import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import About from './components/About/About';
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <About/>
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
