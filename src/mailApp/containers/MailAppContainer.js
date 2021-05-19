import {InboxContainer} from "../../mailApp/containers/InboxContainer";
import {NewMessageContainer} from "./NewMessageContainer";
import {ViewerContainer} from "./ViewerContainer";
import {useMailApp} from '../hooks/useMailApp'
import Grid from '@material-ui/core/Grid';


import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  const buttonStyle = {
    margin:"5px 10px"
}

const newMessageStyle ={
    color: "black",
    background: "lightblue",
    marginTop: "10px",
    marginBottom: "20px",
    marginLeft: "10px",
    marginRight: "10px"

}

// Contenedor principal del resto de componentes. Se encarga de llamar al custom hook global
export const MailAppContainer = () => {

    const { allMailsReceived, mailSelected, setMailSelected, isOpen, setOpen, filledForm, setFilledForm} = useMailApp();

    return (
      <>
        <BrowserRouter>
          <div>
            <ul>
              <li>
                <Link to="/newMessage">New Message</Link>
              </li>
              <li>
                <Link to="/">Inbox</Link>
              </li>
            </ul>

            <hr />

            {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
            <Switch>
              <Route exact path="/">
                <Grid container spacing={5}>
                  <Grid item xs={6}>
                    <InboxContainer
                      allMailsReceived={allMailsReceived}
                      setMailSelected={setMailSelected}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <ViewerContainer mailSelected={mailSelected} />
                  </Grid>
                </Grid>
              </Route>
              <Route exact path="/newMessage">
                <Grid container>
                  <NewMessageContainer
                    isOpen={isOpen}
                    setOpen={setOpen}
                    filledForm={filledForm}
                    setFilledForm={setFilledForm}
                  />
                </Grid>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );

}
