import { NewMessageComponent } from "../components/NewMessageComponent"
import {sendMailToSent} from '../services/mailApp.services'


export const NewMessageContainer = ({isSubmit, setSubmit, filledForm, setFilledForm, open, setOpen}) => {

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
      <>
        <NewMessageComponent
        handleSendEmail={handleSendEmail}
        onFormChange={onFormChange}
        open={open}
        setOpen={setOpen}/>
      </>
    );

}