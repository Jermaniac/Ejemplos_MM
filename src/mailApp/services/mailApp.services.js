import axios from "axios";

const baseUrl = "http://localhost:3000/";

// aqui se hace la peticion http y devolvera los mails o un error
export const fetchMails = (target) => {
  return (
    axios
    .get(`${baseUrl}${target}`)
    .then( (response) => response.data )
    .catch( (error) => error )
  )
};

// Servicio para mover un mail de una bandeja a otra, o crearlo en una bandeja
export const moveMailTo = (target, email) => {
  axios
  .post(`${baseUrl}${target}`,email)
  .then((response) => console.log(response)
  )
}

// Servicio para mandar un mail a la papelera desde cualquier bandeja
export const deleteMailFrom = (target) => {
  axios
  .delete(target)
  .then( (response) => response.data )
  .catch( (error) => error )}