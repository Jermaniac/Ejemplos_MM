import {useMailApp} from '../hooks/useMailApp'
import {useState} from "react";
import {MailAppComponent} from '../components/MailAppComponent'


// Contenedor principal del resto de componentes. Se encarga de llamar al custom hook global
export const MailAppContainer = () => {

    const {
      pendingReceived,
      mailsReceived,
      errorReceived,
      pendingSent,
      mailsSent,
      errorSent,
      pendingDeleted,
      mailsDeleted,
      errorDeleted,
      mailReceivedSelected,
      setMailReceivedSelected,
      mailSentSelected,
      setMailSentSelected,
      mailDeletedSelected,
      setMailDeletedSelected,
      filledForm,
      setFilledForm,
      callFetchReceived,
      callFetchSent,
      callFetchDeleted
    } = useMailApp();

    const [open, setOpen] = useState(false);

    const toggleModal = () => {
      setOpen(!open)
    }

    

    return (
        <MailAppComponent
        pendingReceived={pendingReceived} 
        mailsReceived={mailsReceived}
        errorReceived={errorReceived}
        pendingSent={pendingSent}
        mailsSent={mailsSent}
        errorSent={errorSent}
        pendingDeleted={pendingDeleted}
        mailsDeleted={mailsDeleted}
        errorDeleted={errorDeleted}
        mailReceivedSelected={mailReceivedSelected}
        setMailReceivedSelected={setMailReceivedSelected}
        mailSentSelected={mailSentSelected}
        setMailSentSelected={setMailSentSelected}
        mailDeletedSelected={mailDeletedSelected}
        setMailDeletedSelected={setMailDeletedSelected}
        filledForm={filledForm}
        setFilledForm={setFilledForm}
        toggleModal={toggleModal}
        open={open}
        setOpen={setOpen}
        callFetchReceived={callFetchReceived}
        callFetchSent={callFetchSent}
        callFetchDeleted={callFetchDeleted}
      ></MailAppComponent>
    );

}
