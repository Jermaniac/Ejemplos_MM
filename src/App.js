import "./App.css";
import { CounterContainer } from "../src/Counter/containers/CounterContainer";
import { BrowserBarContainer } from "../src/Browser/containers/BrowserBarContainer";
import { JobFinderContainer } from "../src/JobFinder/containers/JobFinderContainer";

export function App() {
  return (
    <>
      <div className="App">
        {/* <CounterContainer initialValue={1}></CounterContainer> */}
      </div>
      <div>
        {/* <BrowserBarContainer>
        </BrowserBarContainer> */}
        <JobFinderContainer />
      </div>
    </>
  );
}
