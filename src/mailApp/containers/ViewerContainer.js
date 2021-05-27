import { ViewerComponent } from "../components/ViewerComponent"
import { deleteMailFrom, moveMailTo } from '../services/mailApp.services'


export const ViewerContainer = ({mailSelected, callFetchSent, callFetchDeleted , callFetchReceived}) => {
    
    // TODO: REFRESCAR BANDEJA DE SENT 
    // VERIFICAR QUE EL EMAIL A BORRAR EXISTE
    const handleDeleteMail = (mailSelected) => {
      console.log(`Intentando borrar correo con id: ${mailSelected.id}`);
      deleteMailFrom(mailSelected.category, mailSelected)
      // const targetDestination = "deleted";

      // const mailObject = {
      //   ...mailSelected,
      //   id:""
      // }
      // moveMailTo(targetDestination, mailObject);
      // callFetchDeleted();
      // console.log(mailSelected.category+" CATEGORIA")
      // deleteMailFrom(mailSelected.category, mailSelected.id);
      // if (mailSelected.category === "sent"){
      //   callFetchSent();
      // }
      // else if(mailSelected.category === "received"){
      //   callFetchReceived();
      // }
    };

    return(
            <ViewerComponent mailSelected={mailSelected} handleDeleteMail={handleDeleteMail}/>
    )
}