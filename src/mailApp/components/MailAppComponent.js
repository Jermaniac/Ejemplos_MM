import {InboxContainer} from "../containers/InboxContainer";
import {NewMessageContainer} from "../containers/NewMessageContainer";
import {ViewerContainer} from "../containers/ViewerContainer";
import Grid from '@material-ui/core/Grid';
import {Spinner} from "../../commons/components/Spinner"

import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import { SentEmailsContainer } from "../containers/SentEmailsContainer";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

export const MailAppComponent = ({ allMailsReceived,
    allMailsSent,
    mailReceivedSelected,
    setMailReceivedSelected,
    mailSentSelected,
    setMailSentSelected,
    isSubmit,
    setSubmit,
    filledForm,
    setFilledForm }) => {
    
      const classes = useStyles();

      return (
        <BrowserRouter>
          <Grid container>
            <Grid item xs={2}>
              <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                  <Link to="/newMessage">
                    <ListItem button>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText primary="New Message" />
                    </ListItem>
                  </Link>
                  <Link to="/">
                    <ListItem button>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary="Inbox" />
                    </ListItem>
                  </Link>
                  <Link to="/sent">
                    <ListItem button>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <ListItemText primary="Sent" />
                    </ListItem>
                  </Link>
                </List>
                {/* <Divider />
                <List component="nav" aria-label="secondary mailbox folders">
                  <ListItem button>
                    <ListItemText primary="Trash" />
                  </ListItem>
                  <ListItemLink href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemLink>
                </List> */}
              </div>
            </Grid>
            <Grid item xs={10}>
              <Switch>
              <Route exact path="/newMessage">
                  <Grid container>
                    <NewMessageContainer
                      isSubmit={isSubmit}
                      setSubmit={setSubmit}
                      filledForm={filledForm}
                      setFilledForm={setFilledForm}
                    />
                  </Grid>
                </Route>
                <Route exact path="/">
                  {!allMailsReceived.pending ? (
                    <Grid container spacing={5}>
                      <Grid item xs={6}>
                        <InboxContainer
                          allMailsReceived={allMailsReceived}
                          setMailSelected={setMailReceivedSelected}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <ViewerContainer mailSelected={mailReceivedSelected} />
                      </Grid>
                    </Grid>
                  ) : (
                    <Spinner></Spinner>
                  )}
                </Route>
                <Route exact path="/sent">
                  {!allMailsSent.pending ? (
                    <Grid container spacing={5}>
                      <Grid item xs={6}>
                        <SentEmailsContainer
                          allMailsSent={allMailsSent}
                          setMailSelected={setMailSentSelected}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <ViewerContainer mailSelected={mailSentSelected} />
                      </Grid>
                    </Grid>
                  ) : (
                    <Spinner></Spinner>
                  )}
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </BrowserRouter>
      );
}