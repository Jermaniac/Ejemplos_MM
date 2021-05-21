import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectMailsReceivedMemoized,selectMailsReceived, selectMailsSent, selectMailsSentMemoized } from "../store/mailApp.selectors";

import { fetchMailsReceived, fetchMailsSent } from "../services/mailApp.services";
import { fetchMailsReceivedPending, fetchMailsReceivedSuccess, fetchMailsReceivedError, fetchMailsSentError, fetchMailsSentPending, fetchMailsSentSuccess } from "../store/mailApp.actions";

// Custom hook que engloba a los demas
export const useMailApp = () => {
  const allMailsReceived = useSelector(selectMailsReceived); // Hook para acceder a redux con un selector
  const allMailsSent = useSelector(selectMailsSent);
  useSelector(selectMailsReceivedMemoized); // memoized selector para ordenar lista
  useSelector(selectMailsSentMemoized); // memoized selector para ordenar lista

  const [ mailReceivedSelected, setMailReceivedSelected ] = useState();
  const [ mailSentSelected, setMailSentSelected ] = useState();
  const [ isSubmit, setSubmit] = useState(false);
  const [ filledForm, setFilledForm ] = useState({
      id: '',
      title: '',
      author:'',
      receiver:'',
      message: ''
    }
  );

  // Es un hook que ejecuta las acciones definidas en actions.js
  const dispatch = useDispatch();

  useEffect(() => {
    const initFetchMails = async () => {
      dispatch(fetchMailsReceivedPending()); // ejecuta la accion de pending
      dispatch(fetchMailsSentPending())
      const fetchResultReceived = await fetchMailsReceived(); // llamamos al servicio
      const fetchResultSent = await fetchMailsSent();
      //En funcion del resultado de la peticion http, ejecutamos una accion u otra
      if (fetchResultReceived.length > 0){
        dispatch(fetchMailsReceivedSuccess(fetchResultReceived));
      }
      if (fetchResultSent.length > 0 ){
        dispatch(fetchMailsSentSuccess(fetchResultSent))
      }
      if (fetchResultReceived.length === 0) {
        dispatch(fetchMailsReceivedError(fetchResultReceived));
      }
      if(fetchResultSent.length === 0){
        dispatch(fetchMailsSentError(fetchResultReceived));
      }

    };
    initFetchMails();
  }, [isSubmit , dispatch]);

  return {
    allMailsReceived,
    allMailsSent,
    mailReceivedSelected,
    setMailReceivedSelected,
    mailSentSelected,
    setMailSentSelected,
    isSubmit,
    setSubmit,
    filledForm,
    setFilledForm
  };
};;
