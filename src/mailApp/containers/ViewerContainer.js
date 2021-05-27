import { ViewerComponent } from "../components/ViewerComponent"
import { deleteMailFrom, moveMailTo } from '../services/mailApp.services'


export const ViewerContainer = ({mailSelected, callFetchSent, callFetchDeleted}) => {
    

    const handleDeleteMail = (mailSelected) => {
      console.log(`Intentando borrar correo con id: ${mailSelected.id}`);

      const targetDestination = "deleted";
      const targetSource = "sent";

      const mailObject = {
        ...mailSelected,
        id:""
      }
      moveMailTo(targetDestination, mailObject);
      callFetchDeleted();
      deleteMailFrom(targetSource, mailSelected.id);
      callFetchSent();
    };

    return(
            <ViewerComponent mailSelected={mailSelected} handleDeleteMail={handleDeleteMail}/>
    )
}