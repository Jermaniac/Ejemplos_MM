import { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { GenericMailboxContainer } from "../containers/GenericMailboxContainer";
import { NewEmailContainer } from "../containers/NewEmailContainer";
import { ViewerContainer } from "../containers/ViewerContainer";
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

export const MailAppComponent = (
  { 
    allMailsReceived,
    allMailsSent,
    mailReceivedSelected,
    setMailReceivedSelected,
    mailSentSelected,
    setMailSentSelected,
    isSubmit,
    setSubmit,
    filledForm,
    setFilledForm 
  }) => {

      const classes = useStyles();
      
      const [open, setOpen] = useState(false);

      const toggleModal = () => {
        setOpen(!open)
      }

      return (
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
              </div>
            </Grid>
            <Grid item xs={10}>
              <Modal style={modalStyle}
                open={open}
                onClose={toggleModal}>
                  <div>
                    <NewEmailContainer
                      isSubmit={isSubmit}
                      setSubmit={setSubmit}
                      filledForm={filledForm}
                      setFilledForm={setFilledForm}
                    >
                    </NewEmailContainer>
                  </div>
              </Modal>
              <Switch>
                <Route exact path="/">
                  {!allMailsReceived.pending ? (
                    <Grid container spacing={5}>
                      <Grid item xs={6}>
                        <GenericMailboxContainer
                          title={"Inbox"}
                          mails={allMailsReceived}
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
                        <GenericMailboxContainer
                          title={"Sent"}
                          mails={allMailsSent}
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