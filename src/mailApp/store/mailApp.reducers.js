import {
  FETCH_MAILS_PENDING,
  FETCH_MAILS_SUCCESS,
  FETCH_MAILS_ERROR
  } from "./mailApp.actions";

  const initialState = {
    pending: false,
    mails: [],
    error: null
  }

  export const fetchMailsReceived = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MAILS_PENDING:
        return {
          ...state,
          pending:true
        }
      case FETCH_MAILS_SUCCESS:
        return {
          ...state,
          pending: false,
          mails: action.payload
        }
      case FETCH_MAILS_ERROR:
        return {
          ...state,
          pending: false,
          error: action.error
        }
      default:
        return state;
    }
  };
