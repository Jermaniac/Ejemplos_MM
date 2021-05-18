import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { InboxContainer } from "../src/mailApp/containers/InboxContainer";
import { SenderContainer } from "../src/mailApp/containers/SenderContainer";

// rama de reduxExample
export function App() {
  return (
    <>
      <InboxContainer />
      <SenderContainer />
    </>
  );
}
