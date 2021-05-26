import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectMailsReceivedMemoized, selectMailsSentMemoized, selectMailsDeletedMemoized } from "../store/mailApp.selectors";

//import { fetchMailsDeleted, fetchMailsReceived, fetchMailsSent, fetchMails } from "../services/mailApp.services";
import { fetchMails } from "../services/mailApp.services";
import { fetchMailsReceivedPending, fetchMailsReceivedSuccess, fetchMailsReceivedError, fetchMailsSentError, fetchMailsSentPending, fetchMailsSentSuccess, fetchMailsDeletedPending, fetchMailsDeletedSuccess, fetchMailsDeletedError } from "../store/mailApp.actions";

export const RECEIVED = "received"
export const SENT = "sent"
export const DELETED = "deleted"

// Custom hook que engloba a los demas
export const useMailApp = () => {

  // Hook para acceder a redux con un selector

  // TODO:
  // Constante para cada selector: pending, mails y errors.
  // Cambiar nombres para que tengan sentido
  // Test
  const allMailsReceived = useSelector(selectMailsReceivedMemoized);
  const allMailsSent = useSelector(selectMailsSentMemoized);
  const allMailsDeleted = useSelector(selectMailsDeletedMemoized);

  const [ mailReceivedSelected, setMailReceivedSelected ] = useState();
  const [ mailSentSelected, setMailSentSelected ] = useState();
  const [ mailDeletedSelected, setMailDeletedSelected ] = useState();

  const [ isSubmit, setSubmit] = useState(false);
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

  // Se ejecuta cada vez que enviemos un nuevo mail (cada vez que isSubmit cambia), y va a Enviados
  useEffect(() => {
    const initFetchSentMails = async () => {

       // ejecuta la accion de pending
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
    //Finalmente lo llamamos
    initFetchSentMails();
  }, [isSubmit, dispatch]);

  // useEffect( () => {
    
  // }, []);

  return {
    allMailsReceived,
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
  };
};;
