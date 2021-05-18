import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectMailsReceived } from "../store/mailApp.selectors";

import { fetchMailsReceived } from "../services/mailApp.services";

import {
  fetchMailsError,
  fetchMailsPending,
  fetchMailsSuccess,
} from "../store/mailApp.actions";

export const useMailApp = () => {
  const allMailsReceived = useSelector(selectMailsReceived);
  // MAILSELECTED DENTRO DE REDUX (???)
  const [mailSelected, setMailSelected] = useState();
  const [isOpen, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const initFetchMails = async () => {
      dispatch(fetchMailsPending());
      const emailsReceivedFetched = await fetchMailsReceived();
      if (emailsReceivedFetched.length > 0) {
        dispatch(fetchMailsSuccess(emailsReceivedFetched));
      } else {
        dispatch(fetchMailsError(emailsReceivedFetched));
      }
    };
    initFetchMails();
  }, [dispatch]); // = componentDidMount

  return {
    allMailsReceived,
    mailSelected,
    setMailSelected,
    isOpen,
    setOpen,
  };
};;
