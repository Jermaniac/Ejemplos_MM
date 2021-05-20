import {InboxContainer} from "../containers/InboxContainer";
import {NewMessageContainer} from "../containers/NewMessageContainer";
import {ViewerContainer} from "../containers/ViewerContainer";
import Grid from '@material-ui/core/Grid';
import {Spinner} from "../../commons/components/Spinner"

import {InParentContainer} from '../containers/InParentContainer'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Button } from "@material-ui/core";
import { SentEmailsContainer } from "../containers/SentEmailsContainer";

export const MailAppComponent = ({ allMailsReceived,
    allMailsSent,
    mailSelected,
    setMailSelected,
    isSubmit,
    setSubmit,
    filledForm,
    setFilledForm }) => {
    return (
        <BrowserRouter>
          <Grid container>
            <Grid item xs={2}>
              <Link to="/newEmail">
                <Button>New Email</Button>
              </Link>
              <Link to="/">
                <Button>Inbox</Button>
              </Link>
              <Link to="/sent">
                <Button>Sent</Button>
              </Link>
            </Grid>
            <Grid item xs={10}>
              <Switch>
                <Route exact path="/">
                  {!allMailsReceived.pending ? (
                    <Grid container spacing={5}>
                      <Grid item xs={12}>
                        <InParentContainer label="inbox"
                        allMails={allMailsReceived}
                        setMailSelected={setMailSelected}>
                        </InParentContainer>
                      </Grid>
                      {/* <Grid item xs={6}>
                        <InboxContainer
                          allMailsReceived={allMailsReceived}
                          setMailSelected={setMailSelected}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <ViewerContainer mailSelected={mailSelected} />
                      </Grid> */}
                    </Grid>
                  ) : (<Spinner></Spinner>)}
                </Route>
                <Route exact path="/sent">
                  {!allMailsSent.pending ? (
                    <Grid container spacing={5}>
                      <Grid item xs={12}>
                        <InParentContainer label="sent"
                        allMails={allMailsSent}
                        setMailSelected={setMailSelected}>
                        </InParentContainer>
                      </Grid>
                    </Grid>
                  ) : (<Spinner></Spinner>)}
                </Route>
                <Route exact path="/newEmail">
                  <Grid container>
                    <NewMessageContainer
                      isSubmit={isSubmit}
                      setSubmit={setSubmit}
                      filledForm={filledForm}
                      setFilledForm={setFilledForm}
                    />
                  </Grid>
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </BrowserRouter>
    );
}