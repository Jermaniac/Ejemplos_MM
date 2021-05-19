import axios from "axios";

const urlMailReceived = "http://localhost:3000/received";
// const urlMailSent = "http://localhost:3000/sent";
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

export const sendMailToReceived = (email) => axios.post(urlMailReceived,email).then((response) => console.log(response));

// export const fetchMailsDeleted = () => axios.get(urlMailDeleted).then((response) => response.data);
