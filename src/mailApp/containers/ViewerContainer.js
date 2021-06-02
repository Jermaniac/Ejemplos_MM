import { ViewerComponent } from "../components/ViewerComponent"
import { deleteMailFrom, moveMailTo } from '../services/mailApp.services'


export const ViewerContainer = ({ title, mailSelected, setMailSelected, callFetchSent, callFetchDeleted , callFetchReceived}) => {
  // TODO: VERIFICAR QUE EL EMAIL A BORRAR EXISTE

    const handleDeleteMail = async (mailSelected) => {
      if (title==="Sent"||title==="Inbox"){
        const newMailSelected = {
          ...mailSelected,
          id: ""
        }

        console.log(mailSelected + "mailSelected nuevo");

        console.log(`Intentando borrar correo con id: ${mailSelected.id}`);
        await moveMailTo("deleted", newMailSelected);
        callFetchDeleted();
        console.log("Movido el mail a la papelera");
        await deleteMailFrom(mailSelected.category, mailSelected);

        if(mailSelected.category === "sent"){
          callFetchSent();
        }
        else if(mailSelected.category === "received"){
          callFetchReceived();
        }
        console.log("Borrado de la bandeja de origen");

      }
      else {
        await deleteMailFrom("deleted", mailSelected);
        callFetchDeleted();
        console.log("Borrado definitivamente");
      }
      setMailSelected(false); // para actualizar el viewer
    };

    const handleRestoreMail = async (mailSelected) => {
      
      const newMailSelected = {
        ...mailSelected,
        id: ""
      }
      moveMailTo(newMailSelected.category, newMailSelected);

      if(newMailSelected.category === "sent"){
        callFetchSent();
      }
      else if(newMailSelected.category === "received"){
        callFetchReceived();
      }

      await deleteMailFrom("deleted", mailSelected);
      callFetchDeleted();
      setMailSelected(false); 
    }

    return(
            <ViewerComponent mailSelected={mailSelected} handleDeleteMail={handleDeleteMail} mailboxTitle={title} handleRestoreMail={handleRestoreMail}/>
    )
}