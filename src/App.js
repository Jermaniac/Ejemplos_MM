import logo from './logo.svg';
import './App.css';
import {CounterContainer} from '../src/Counter/containers/CounterContainer'

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CounterContainer initialValue={1}></CounterContainer>
      </header>
    </div>
  );
}
