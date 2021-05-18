export const FETCH_MAILS_PENDING = "MAILAPP/FETCH_MAILS_PENDING";
export const FETCH_MAILS_SUCCESS = "MAILAPP/FETCH_MAILS_SUCCESS";
export const FETCH_MAILS_ERROR = "MAILAPP/FETCH_MAILS_ERROR";

export const fetchMailsPending = () => ({
  type: FETCH_MAILS_PENDING,
  payload: {},
});

export const fetchMailsSuccess = (mails) => ({
  type: FETCH_MAILS_SUCCESS,
  payload: mails,
});

export const fetchMailsError = (error) => ({
  type: FETCH_MAILS_ERROR,
  error: error,
});
