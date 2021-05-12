import './App.css';
import {CounterContainer} from '../src/Counter/containers/CounterContainer'
import {BrowserBarContainer} from '../src/Browser/containers/BrowserBarContainer'


export function App() {
  return (
  <>
    <div className="App">
        <CounterContainer initialValue={1}></CounterContainer>
    </div>
    <div>
      <BrowserBarContainer></BrowserBarContainer>
    </div>
  </>
  );
}
