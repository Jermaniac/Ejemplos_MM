import {useMailApp} from '../hooks/useMailApp'
import { useState } from "react";


import {MailAppComponent} from '../components/MailAppComponent'

// Contenedor principal del resto de componentes. Se encarga de llamar al custom hook global
export const MailAppContainer = () => {

    const { allMailsReceived,
      allMailsSent,
      allMailsDeleted,
      mailReceivedSelected,
      setMailReceivedSelected,
      mailSentSelected,
      setMailSentSelected,
      mailDeletedSelected,
      setMailDeletedSelected,
      isSubmit,
      setSubmit,
      filledForm,
      setFilledForm
     } = useMailApp();

    const [open, setOpen] = useState(false);

    const toggleModal = () => {
      setOpen(!open)
    }

    return (
        <MailAppComponent
        allMailsReceived={allMailsReceived}
        allMailsSent={allMailsSent}
        allMailsDeleted={allMailsDeleted}
        mailReceivedSelected={mailReceivedSelected}
        setMailReceivedSelected={setMailReceivedSelected}
        mailSentSelected={mailSentSelected}
        setMailSentSelected={setMailSentSelected}
        mailDeletedSelected={mailDeletedSelected}
        setMailDeletedSelected={setMailDeletedSelected}
        isSubmit={isSubmit}
        setSubmit={setSubmit}
        filledForm={filledForm}
        setFilledForm={setFilledForm}
        toggleModal={toggleModal}
        open={open}
        setOpen={setOpen}></MailAppComponent>
    );

}
