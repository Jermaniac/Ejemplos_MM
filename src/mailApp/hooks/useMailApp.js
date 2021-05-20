import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectMailsReceivedMemoized,selectMailsReceived, selectMailsSent } from "../store/mailApp.selectors";

import { fetchMailsReceived, fetchMailsSent } from "../services/mailApp.services";
import { fetchMailsReceivedPending, fetchMailsReceivedSuccess, fetchMailsReceivedError, fetchMailsSentError, fetchMailsSentPending, fetchMailsSentSuccess } from "../store/mailApp.actions";

// Custom hook que engloba a los demas
export const useMailApp = () => {
  const allMailsReceived = useSelector(selectMailsReceived); // Hook para acceder a redux con un selector

  const allMailsSent = useSelector(selectMailsSent);

  useSelector(selectMailsReceivedMemoized); // Hook para ordenar lista

  const [ mailSelected, setMailSelected ] = useState();
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
      const fetchResult = await fetchMailsReceived(); // llamamos al servicio
      const fetchResultSent = await fetchMailsSent();
      dispatch(fetchMailsSentSuccess(fetchResultSent))
      //En funcion del resultado de la peticion http, ejecutamos una accion u otra
      if (fetchResult.length > 0){
        dispatch(fetchMailsReceivedSuccess(fetchResult));
      }
      else{
        dispatch(fetchMailsReceivedError(fetchResult));
      }

    };
    initFetchMails();
  }, [isSubmit , dispatch]);

  return {
    allMailsReceived,
    allMailsSent,
    mailSelected,
    setMailSelected,
    isSubmit,
    setSubmit,
    filledForm,
    setFilledForm
  };
};;
