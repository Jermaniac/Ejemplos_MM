import { NewEmailComponent } from "../components/NewEmailComponent"
import {moveMailTo} from '../services/mailApp.services'
import { SENT } from '../hooks/useMailApp' 

export const NewEmailContainer = ({isSubmit, setSubmit, filledForm, setFilledForm, setOpen}) => {

    const handleSendEmail = (event) => {
        event.preventDefault();
        moveMailTo(SENT, filledForm);
        console.log(filledForm)
        setSubmit(!isSubmit);
        
        event.target.reset();
        setOpen(false);
        console.log("Email sent!");
      }

      const onFormChange = (event) => {
        setFilledForm({
          ...filledForm,
          [event.target.name] : event.target.value
        })
      }

    return (
        <NewEmailComponent
          handleSendEmail={handleSendEmail}
          onFormChange={onFormChange}
        ></NewEmailComponent>
    )
}