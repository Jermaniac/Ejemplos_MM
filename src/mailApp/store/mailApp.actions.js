export const FETCH_MAILS_RECEIVED_PENDING = "MAILAPP/FETCH_MAILS_RECEIVED_PENDING";
export const FETCH_MAILS_RECEIVED_SUCCESS = "MAILAPP/FETCH_MAILS_RECEIVED_SUCCESS";
export const FETCH_MAILS_RECEIVED_ERROR = "MAILAPP/FETCH_MAILS_RECEIVED_ERROR";

export const FETCH_MAILS_SENT_PENDING = "MAILAPP/FETCH_MAILS_SENT_PENDING";
export const FETCH_MAILS_SENT_SUCCESS = "MAILAPP/FETCH_MAILS_SENT_SUCCESS";
export const FETCH_MAILS_SENT_ERROR = "MAILAPP/FETCH_MAILS_SENT_ERROR";

export const FETCH_MAILS_DELETED_PENDING = "MAILAPP/FETCH_MAILS_DELETED_PENDING";
export const FETCH_MAILS_DELETED_SUCCESS = "MAILAPP/FETCH_MAILS_DELETED_SUCCESS";
export const FETCH_MAILS_DELETED_ERROR = "MAILAPP/FETCH_MAILS_DELETED_ERROR";

export const fetchMailsReceivedPending = () => ({
  type: FETCH_MAILS_RECEIVED_PENDING,
  payload: {},
});

export const fetchMailsReceivedSuccess = (mails) => ({
  type: FETCH_MAILS_RECEIVED_SUCCESS,
  payload: mails,
});

export const fetchMailsReceivedError = (error) => ({
  type: FETCH_MAILS_RECEIVED_ERROR,
  error: error,
});

export const fetchMailsSentPending = () => ({
  type: FETCH_MAILS_SENT_PENDING,
  payload: {},
});

export const fetchMailsSentSuccess = (mails) => ({
  type: FETCH_MAILS_SENT_SUCCESS,
  payload: mails,
});

export const fetchMailsSentError = (error) => ({
  type: FETCH_MAILS_SENT_ERROR,
  error: error,
});

export const fetchMailsDeletedPending = () => ({
  type: FETCH_MAILS_DELETED_PENDING,
  payload: {},
});

export const fetchMailsDeletedSuccess = (mails) => ({
  type: FETCH_MAILS_DELETED_SUCCESS,
  payload: mails,
});

export const fetchMailsDeletedError = (error) => ({
  type: FETCH_MAILS_DELETED_ERROR,
  error: error,
});

