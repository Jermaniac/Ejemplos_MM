import { NewEmailComponent } from "../components/NewEmailComponent"
import { moveMailTo } from '../services/mailApp.services'
import { SENT } from '../hooks/useMailApp' 


export const NewEmailContainer = ({filledForm, setFilledForm, setOpen, callFetchSent}) => {

    const handleSendEmail = async (event) => {
        event.preventDefault();
        await moveMailTo(SENT, filledForm);
        callFetchSent();
        event.target.reset();
        setOpen(false);
        console.log("Email sent!");
      }

      // Método que rellena el correo con el contenido del formulario con cada modificacion
      const onFormChange = (event) => {
        setFilledForm({
          ...filledForm,
          [event.target.name] : event.target.value,
          category: "sent"
        })
      }


    return (
        <NewEmailComponent
          handleSendEmail={handleSendEmail}
          onFormChange={onFormChange}
        ></NewEmailComponent>
    )
}