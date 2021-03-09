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
          <h1 className='app__h'>POWER SIGILS</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
