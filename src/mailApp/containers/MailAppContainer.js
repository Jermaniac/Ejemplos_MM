import {useMailApp} from '../hooks/useMailApp'
import { useState } from "react";

import {fetchMails, moveMailTo} from '../services/mailApp.services'
import {MailAppComponent} from '../components/MailAppComponent'
import { fetchMailsDeletedError, fetchMailsDeletedPending, fetchMailsDeletedSuccess } from '../store/mailApp.actions';
import { useDispatch } from 'react-redux';

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

    const dispatch = useDispatch();

    const callFetchDeleted = async () => {
      dispatch(fetchMailsDeletedPending());
      // llamamos al servicio
      const fetchResultDeleted = await fetchMails("deleted");
      //En funcion del resultado de la peticion http para enviados, ejecutamos una accion u otra
      if (fetchResultDeleted.length > 0) {
        dispatch(fetchMailsDeletedSuccess(fetchResultDeleted));
      }
      if (fetchResultDeleted.length === 0) {
        dispatch(fetchMailsDeletedError(fetchResultDeleted));
      }
  }

    const handleDeleteMail = (mailSelected) => {
      console.log(`Intentando borrar correo con id: ${mailSelected.id}`);

      const targetDestination = "deleted";
      const targetSource = "sent";

      const mailObject = {
        ...mailSelected,
        id:""
      }
      moveMailTo(targetDestination, mailObject);
      callFetchDeleted();
      //deleteMailFrom(targetSource, mailSelected.id);
    };

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
