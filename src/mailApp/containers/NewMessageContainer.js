import { NewMessageComponent } from "../components/NewMessageComponent"
import {sendMailToReceived} from '../services/mailApp.services'
export const NewMessageContainer = ({isOpen, setOpen, filledForm, setFilledForm}) => {

    const toggleShowSender = () => {
        setOpen(!isOpen);
    }

    const handleSendEmail = () => {
      console.log(filledForm)
      sendMailToReceived(filledForm)
    }

    const onFormChange = (event) => {
      setFilledForm({
        ...filledForm,
        [event.target.name] : event.target.value
    })
    }

    return (
      <>
        <NewMessageComponent show={isOpen}
        toggleShowSender={toggleShowSender}
        handleSendEmail={handleSendEmail}
        onFormChange={onFormChange}/>
      </>
    );

}