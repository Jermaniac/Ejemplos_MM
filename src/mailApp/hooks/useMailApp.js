import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectStateReceived, selectStateSent, selectStateDeleted } from "../store/mailApp.selectors";

import { fetchMails } from "../services/mailApp.services";
import { fetchMailsReceivedPending, fetchMailsReceivedSuccess, fetchMailsReceivedError, fetchMailsSentError, fetchMailsSentPending, fetchMailsSentSuccess, fetchMailsDeletedPending, fetchMailsDeletedSuccess, fetchMailsDeletedError } from "../store/mailApp.actions";

export const RECEIVED = "received"
export const SENT = "sent"
export const DELETED = "deleted"

// Custom hook que engloba a los demas
export const useMailApp = () => {

  const {pending: pendingReceived, mails: mailsReceived, error: errorReceived} = useSelector(selectStateReceived);
  const {pending: pendingSent, mails: mailsSent, error: errorSent} = useSelector(selectStateSent);
  const {pending: pendingDeleted, mails: mailsDeleted, error: errorDeleted} = useSelector(selectStateDeleted);

  const [ mailReceivedSelected, setMailReceivedSelected ] = useState();
  const [ mailSentSelected, setMailSentSelected ] = useState();
  const [ mailDeletedSelected, setMailDeletedSelected ] = useState();

  const [ filledForm, setFilledForm ] = useState({
      id: '',
      title: '',
      author:'',
      receiver:'',
      message: '',
      category:''
    }
  );

  // Es un hook que ejecuta las acciones definidas en actions.js
  const dispatch = useDispatch();

  // Hook equivalente a componentDidMount
  // Lo que hace es un Get a la bandeja de recibidos y enviados
  useEffect(() => {

    const initFetchAllMails = async () => {

      dispatch(fetchMailsReceivedPending()); // ejecuta la accion de pending
      dispatch(fetchMailsSentPending())
      dispatch(fetchMailsDeletedPending())

      // llamamos al servicio
      await fetchMails(RECEIVED)
      .then(( (response) => dispatch(fetchMailsReceivedSuccess(response.data)) ))
      .catch( (error) => dispatch(fetchMailsReceivedError(error)) );

      // llamamos al servicio
      await fetchMails(SENT)
      .then(( (response) => dispatch(fetchMailsSentSuccess(response.data)) ))
      .catch( (error) => dispatch(fetchMailsSentError(error)) );

      // llamamos al servicio
      await fetchMails(DELETED)
      .then(( (response) => dispatch(fetchMailsDeletedSuccess(response.data)) ))
      .catch( (error) => dispatch(fetchMailsDeletedError(error)) );

    };
    initFetchAllMails();
  }, [dispatch]);

  // Funciones para hacer fetch en Received, Sent y Deleted

  const callFetchReceived = async () => {
    dispatch(fetchMailsReceivedPending());
    // llamamos al servicio
    await fetchMails(RECEIVED)
    .then(( (response) => dispatch(fetchMailsReceivedSuccess(response.data)) ))
    .catch( (error) => dispatch(fetchMailsReceivedError(error)) );
}

  const callFetchSent = async () => {
    dispatch(fetchMailsSentPending())
    // llamamos al servicio
    await fetchMails(SENT)
    .then(( (response) => dispatch(fetchMailsSentSuccess(response.data)) ))
    .catch( (error) => dispatch(fetchMailsSentError(error)) );
  }

  const callFetchDeleted = async () => {
    dispatch(fetchMailsDeletedPending());
    // llamamos al servicio
    await fetchMails(DELETED)
    .then(( (response) => dispatch(fetchMailsDeletedSuccess(response.data)) ))
    .catch( (error) => dispatch(fetchMailsDeletedError(error)) );
  }

  return {
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
  };
};;
