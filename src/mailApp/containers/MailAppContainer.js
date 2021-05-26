import {useMailApp} from '../hooks/useMailApp'
import { useState } from "react";

import {moveMailTo} from '../services/mailApp.services'
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

    const handleDeleteMail = (mailSelected) => {

      console.log(`Intentando borrar correo con id: ${mailSelected.id}`)
      
      const targetDestination = "deleted";
      const targetSource = "sent"

      moveMailTo(targetDestination, mailSelected);
      //deleteMailFrom(targetSource, mailSelected.id);
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
        handleDeleteMail={handleDeleteMail}
        open={open}
        setOpen={setOpen}></MailAppComponent>
    );

}
