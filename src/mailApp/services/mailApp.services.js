import axios from "axios";
import {
  fetchMailsError,
  fetchMailsPending,
  fetchMailsSuccess,
} from "../store/mailApp.actions";
const urlMailReceived = "http://localhost:3000/received";
// const urlMailSent = "http://localhost:3000/sent";
// const urlMailDeleted = "http://localhost:3000/deleted";

export const fetchMailsReceived = (dispatch) => {
  dispatch(fetchMailsPending());
  axios
    .get(urlMailReceived)
    .then((response) => dispatch(fetchMailsSuccess(response.data)))
    .catch((error) => {
      dispatch(fetchMailsError(error));
    });
};

// export const fetchMailsSent = () => axios.get(urlMailSent).then((response) => response.data);

// export const fetchMailsDeleted = () => axios.get(urlMailDeleted).then((response) => response.data);
