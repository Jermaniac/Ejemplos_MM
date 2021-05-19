import {NavigationMenuContainer} from "../../mailApp/containers/NavigationMenuContainer"
import {InboxContainer} from "../../mailApp/containers/InboxContainer";
import {NewMessageContainer} from "./NewMessageContainer";
import {ViewerContainer} from "./ViewerContainer";
import {useMailApp} from '../hooks/useMailApp'
import Grid from '@material-ui/core/Grid';


// Contenedor principal del resto de componentes. Se encarga de llamar al custom hook global
export const MailAppContainer = () => {

    const { allMailsReceived, mailSelected, setMailSelected, isOpen, setOpen, filledForm, setFilledForm} = useMailApp();

    return (
      <>
        <Grid container spacing={5}>
          <Grid item xs={2}>
            <NavigationMenuContainer />
          </Grid>
          <Grid item xs={4}>
            <InboxContainer
              allMailsReceived={allMailsReceived}
              setMailSelected={setMailSelected}
            />
          </Grid>
          <Grid item xs={4}>
            <ViewerContainer mailSelected={mailSelected} />
          </Grid>
          <Grid item xs={2}>
            <NewMessageContainer
              isOpen={isOpen}
              setOpen={setOpen}
              filledForm={filledForm}
              setFilledForm={setFilledForm}
            />
          </Grid>
        </Grid>
      </>
    );

}
