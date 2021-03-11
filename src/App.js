import uranus from './uranus2.png'
import './styles/App.css';
import { Component } from 'react';
import Main from './Main'

class App extends Component {
  render(){

    return (
      <div className="app">
        <header className="app__header">
          <img src={uranus} className="app__logo" alt="Symbol for Uranus" />
          <h1 className='app__h'>
            <span>P</span><span>W</span><span>R</span><span>S</span><span>G</span><span>L</span>         
          </h1>
        </header>
        <Main />
        <footer className='app__footer'>
          <p>Your sigil can be printed on objects, carved into candles, written on your skin, or otherwise used for good intentions or affirmations.</p>
        </footer>
      </div>
    );
  }
}

export default App;
