import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectStateReceivedMemoized, selectStateSentMemoized, selectStateDeletedMemoized } from "../store/mailApp.selectors";

//import { fetchMailsDeleted, fetchMailsReceived, fetchMailsSent, fetchMails } from "../services/mailApp.services";
import { fetchMails } from "../services/mailApp.services";
import { fetchMailsReceivedPending, fetchMailsReceivedSuccess, fetchMailsReceivedError, fetchMailsSentError, fetchMailsSentPending, fetchMailsSentSuccess, fetchMailsDeletedPending, fetchMailsDeletedSuccess, fetchMailsDeletedError } from "../store/mailApp.actions";

export const RECEIVED = "received"
export const SENT = "sent"
export const DELETED = "deleted"

// Custom hook que engloba a los demas
export const useMailApp = () => {

  const {pending: pendingReceived, mails: mailsReceived, error: errorReceived} = useSelector(selectStateReceivedMemoized);
  const {pending: pendingSent, mails: mailsSent, error: errorSent} = useSelector(selectStateSentMemoized);
  const {pending: pendingDeleted, mails: mailsDeleted, error: errorDeleted} = useSelector(selectStateDeletedMemoized);

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

  // Hook para el ciclo de vida de los componentes (Equivalente a componentDidMount)
  // Lo que hace es un Get a la bandeja de recibidos y enviados
  useEffect(() => {
    const initFetchAllMails = async () => {

      dispatch(fetchMailsReceivedPending()); // ejecuta la accion de pending
      dispatch(fetchMailsSentPending())
      dispatch(fetchMailsDeletedPending())

      // llamamos al servicio
      const fetchResultReceived = await fetchMails(RECEIVED);
      const fetchResultSent = await fetchMails(SENT);
      const fetchResultDeleted = await fetchMails(DELETED);

      //En funcion del resultado de la peticion http para recibidos, ejecutamos una accion u otra
      if (fetchResultReceived.length > 0){
        dispatch(fetchMailsReceivedSuccess(fetchResultReceived));
      }
      if (fetchResultReceived.length === 0) {
        dispatch(fetchMailsReceivedError(fetchResultReceived));
      }

      //En funcion del resultado de la peticion http para enviados, ejecutamos una accion u otra
      if (fetchResultSent.length > 0 ){
        dispatch(fetchMailsSentSuccess(fetchResultSent))
      }
      if(fetchResultSent.length === 0){
        dispatch(fetchMailsSentError(fetchResultSent));
      }

      if (fetchResultDeleted.length > 0){
        dispatch(fetchMailsDeletedSuccess(fetchResultDeleted));
      }
      if (fetchResultDeleted.length === 0) {
        dispatch(fetchMailsDeletedError(fetchResultDeleted));
      }
    };
    initFetchAllMails();
  }, [dispatch]);

  // Hace fetch de los mails en la carpeta de Sent
  const callFetchSent = async () => {
    dispatch(fetchMailsSentPending())
      // llamamos al servicio
    const fetchResultSent = await fetchMails(SENT);
    //En funcion del resultado de la peticion http para enviados, ejecutamos una accion u otra
    if (fetchResultSent.length > 0 ){
      dispatch(fetchMailsSentSuccess(fetchResultSent))
    }
    if(fetchResultSent.length === 0){
      dispatch(fetchMailsSentError(fetchResultSent));
    }
  };

  // hace fetch de los mails en la carpeta Deleted
  const callFetchDeleted = async () => {
    // ejecuta la accion de pending
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
    callFetchSent,
    callFetchDeleted
  };
};;
