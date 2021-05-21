import { NewMessageComponent } from "../components/NewMessageComponent"
import {sendMailToReceived} from '../services/mailApp.services'


export const NewMessageContainer = ({isSubmit, setSubmit, filledForm, setFilledForm}) => {

    // const toggleShowSender = () => {
    //     setOpen(!isOpen);
    // }

    const handleSendEmail = (event) => {
      event.preventDefault();
      sendMailToReceived(filledForm);
      setSubmit(!isSubmit);
      alert("Email sent!")
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
        // show={isOpen}
        // toggleShowSender={toggleShowSender}
        handleSendEmail={handleSendEmail}
        onFormChange={onFormChange}/>
      </>
    );

}