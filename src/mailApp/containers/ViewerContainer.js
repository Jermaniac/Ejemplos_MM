import { ViewerComponent } from "../components/ViewerComponent"
import { deleteMailFrom, moveMailTo } from '../services/mailApp.services'


export const ViewerContainer = ({mailSelected, setMailSelected, callFetchSent, callFetchDeleted , callFetchReceived}) => {
    
  // TODO: VERIFICAR QUE EL EMAIL A BORRAR EXISTE

    const handleDeleteMail = async (mailSelected) => {
      
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

      setMailSelected(false); // para actualizar el viewer
      console.log("Borrado de la bandeja de origen");
    
    };

    return(
            <ViewerComponent mailSelected={mailSelected} handleDeleteMail={handleDeleteMail}/>
    )
}