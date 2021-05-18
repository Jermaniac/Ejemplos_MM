import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectMailsReceived } from "../store/mailApp.selectors";

import { fetchMailsReceived } from "../services/mailApp.services";

export const useMailApp = () => {
  const allMailsReceived = useSelector(selectMailsReceived);
  const [ mailSelected, setMailSelected ] = useState();
  const [ isOpen, setOpen ] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const initFetchMails = async () => {
      await fetchMailsReceived(dispatch);
    };
    initFetchMails();
  }, []); // = componentDidMount

  return {
    allMailsReceived,
    mailSelected,
    setMailSelected,
    isOpen,
    setOpen
  };
};
