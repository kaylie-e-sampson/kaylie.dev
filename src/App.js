import emoji from './kaylieEmoji.png';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <img src={emoji} alt="emoji"/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kaylie Sampson's Personal Website
        </p>
      </header> */}
    </div>
  );
}

export default App;
