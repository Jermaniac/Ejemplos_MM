import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { GenericMailboxContainer } from "../containers/GenericMailboxContainer";
import { NewEmailContainer } from "../containers/NewEmailContainer";
import { ViewerContainer } from "../containers/ViewerContainer";
import { FooterContainer } from "../containers/FooterContainer";

import { Spinner} from "../../commons/components/Spinner"

import Grid from '@material-ui/core/Grid';
import { makeStyles, Modal } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import CreateIcon from '@material-ui/icons/Create';
import SendIcon from '@material-ui/icons/Send';

import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles( (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const modalStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const MailAppComponent = ({
  pendingReceived,
  mailsReceived,
  errorReceived,
  pendingSent,
  mailsSent,
  errorSent,
  pendingDeleted,
  mailsDeleted,
  errorDeleted,
  mailReceivedSelected,
  setMailReceivedSelected,
  mailSentSelected,
  setMailSentSelected,
  mailDeletedSelected,
  setMailDeletedSelected,
  filledForm,
  setFilledForm,
  toggleModal,
  open,
  setOpen,
  callFetchReceived,
  callFetchSent,
  callFetchDeleted
}) => {
  const classes = useStyles();

  return (
    <>
      <BrowserRouter>
        <Grid container>
          <Grid item xs={2}>
            <div className={classes.root}>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={toggleModal}>
                  <ListItemIcon>
                    <CreateIcon />
                  </ListItemIcon>
                  <ListItemText primary="New Email" />
                </ListItem>
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  <ListItem button>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItem>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/sent"
                >
                  <ListItem button>
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent" />
                  </ListItem>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/deleted"
                >
                  <ListItem button>
                    <ListItemIcon>
                      <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Deleted" />
                  </ListItem>
                </Link>
              </List>
            </div>
          </Grid>
          <Grid item xs={10}>
            <Modal style={modalStyle} open={open} onClose={toggleModal}>
              <div>
                <NewEmailContainer
                  filledForm={filledForm}
                  setFilledForm={setFilledForm}
                  setOpen={setOpen}
                  callFetchSent={callFetchSent}
                ></NewEmailContainer>
              </div>
            </Modal>
            <Switch>
              <Route exact path="/">
                {!pendingReceived ? (
                  <Grid container spacing={5}>
                    <Grid item xs={6}>
                      <GenericMailboxContainer
                        title={"Inbox"}
                        mails={mailsReceived}
                        setMailSelected={setMailReceivedSelected}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <ViewerContainer
                        title={"Inbox"}
                        mailSelected={mailReceivedSelected}
                        setMailSelected={setMailReceivedSelected}
                        callFetchSent={callFetchSent}
                        callFetchDeleted={callFetchDeleted}
                        callFetchReceived={callFetchReceived}
                      />
                    </Grid>
                  </Grid>
                ) : (
                  <Spinner></Spinner>
                )}
              </Route>
              <Route exact path="/sent">
                {!pendingSent? (
                  <Grid container spacing={5}>
                    <Grid item xs={6}>
                      <GenericMailboxContainer
                        title={"Sent"}
                        mails={mailsSent}
                        setMailSelected={setMailSentSelected}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <ViewerContainer
                        title={"Sent"}
                        mailSelected={mailSentSelected}
                        setMailSelected={setMailSentSelected}
                        callFetchSent={callFetchSent}
                        callFetchDeleted={callFetchDeleted}
                        callFetchReceived={callFetchReceived}
                      />
                    </Grid>
                  </Grid>
                ) : (
                  <Spinner></Spinner>
                )}
              </Route>
              <Route exact path="/deleted">
                {!pendingDeleted ? (
                  <Grid container spacing={5}>
                    <Grid item xs={6}>
                      <GenericMailboxContainer
                        title={"Deleted"}
                        mails={mailsDeleted}
                        setMailSelected={setMailDeletedSelected}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <ViewerContainer
                        title={"Deleted"}
                        mailSelected={mailDeletedSelected}
                        setMailSelected={setMailDeletedSelected}
                        callFetchSent={callFetchSent}
                        callFetchDeleted={callFetchDeleted}
                        callFetchReceived={callFetchReceived}
                      />
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
      <FooterContainer></FooterContainer>
    </>
  );
};