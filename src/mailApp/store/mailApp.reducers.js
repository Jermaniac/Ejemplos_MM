import {
  FETCH_MAILS_RECEIVED_PENDING,
  FETCH_MAILS_RECEIVED_SUCCESS,
  FETCH_MAILS_RECEIVED_ERROR,
  FETCH_MAILS_SENT_ERROR,
  FETCH_MAILS_SENT_SUCCESS,
  FETCH_MAILS_SENT_PENDING,
  FETCH_MAILS_DELETED_ERROR,
  FETCH_MAILS_DELETED_PENDING,
  FETCH_MAILS_DELETED_SUCCESS
  } from "./mailApp.actions";

  const initialState = {
    pending: false,
    mails: [],
    error: null
  }

  // en funcion de la accion, el reducer cambia el estado general de Redux
  export const fetchReceivedReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MAILS_RECEIVED_PENDING:
        return {
          ...state,
          pending:true
        }
      case FETCH_MAILS_RECEIVED_SUCCESS:
        return {
          ...state,
          pending: false,
          mails: action.payload
        }
      case FETCH_MAILS_RECEIVED_ERROR:
        return {
          ...state,
          pending: false,
          error: action.error
        }
      default:
        return state;
    }
  };

  export const fetchSentReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MAILS_SENT_PENDING:
        return {
          ...state,
          pending:true
        }
      case FETCH_MAILS_SENT_SUCCESS:
        return {
          ...state,
          pending: false,
          mails: action.payload
        }
      case FETCH_MAILS_SENT_ERROR:
        return {
          ...state,
          pending: false,
          error: action.error
        }
      default:
        return state;
    }
  };

  export const fetchDeletedReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MAILS_DELETED_PENDING:
        return {
          ...state,
          pending:true
        }
      case FETCH_MAILS_DELETED_SUCCESS:
        return {
          ...state,
          pending: false,
          mails: action.payload
        }
      case FETCH_MAILS_DELETED_ERROR:
        return {
          ...state,
          pending: false,
          error: action.error
        }
      default:
        return state;
    }
  };
