import { NewEmailComponent } from "../components/NewEmailComponent"
import {sendMailToSent} from '../services/mailApp.services'

export const NewEmailContainer = ({isSubmit, setSubmit, filledForm, setFilledForm}) => {

    const handleSendEmail = (event) => {
        event.preventDefault();
        sendMailToSent(filledForm);
        setSubmit(!isSubmit);
        // setOpen(false);
        console.log("Email sent!");
        event.target.reset();
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