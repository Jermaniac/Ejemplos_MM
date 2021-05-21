import axios from "axios";

const urlMailReceived = "http://localhost:3000/received";
const urlMailSent = "http://localhost:3000/sent";
// const urlMailDeleted = "http://localhost:3000/deleted";

// aqui se hace la peticion http y devolvera los mails o un error
export const fetchMailsReceived = () => {
  return (
    axios
    .get(urlMailReceived)
    .then( (response) => response.data )
    .catch( (error) => error )
  )
};

export const fetchMailsSent = () => {
  return (
    axios
    .get(urlMailSent)
    .then( (response) => response.data )
    .catch( (error) => error )
  )
};

export const sendMailToSent = (email) => axios.post(urlMailSent,email).then((response) => console.log(response));

