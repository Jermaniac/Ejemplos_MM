import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectMailsReceived } from "../store/mailApp.selectors";

import { fetchMailsReceived } from "../services/mailApp.services";
import { fetchMailsPending, fetchMailsSuccess, fetchMailsError } from "../store/mailApp.actions";

// Custom hook que engloba a los demas
export const useMailApp = () => {
  const allMailsReceived = useSelector(selectMailsReceived); // Hook para acceder a redux con un selector
  const [ mailSelected, setMailSelected ] = useState();
  const [ isOpen, setOpen ] = useState(false);
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
      dispatch(fetchMailsPending()); // ejecuta la accion de pending
      const fetchResult = await fetchMailsReceived(); // llamamos al servicio

      //En funcion del resultado de la peticion http, ejecutamos una accion u otra
      if (fetchResult.length > 0){
        dispatch(fetchMailsSuccess(fetchResult));
      }
      else{
        dispatch(fetchMailsError(fetchResult));
      }

    };
    initFetchMails();
  }, [dispatch]);

  return {
    allMailsReceived,
    mailSelected,
    setMailSelected,
    isOpen,
    setOpen,
    filledForm,
    setFilledForm
  };
};;
