import axios from "axios";

const baseUrl = "http://localhost:3000/";

// aqui se hace la peticion http y devolvera los mails o un error
export const fetchMails = (targetDestination) => {
  return (
    axios
    .get(`${baseUrl}${targetDestination}`)
    .then( (response) => response.data )
    .catch( (error) => error )
  )
};

// Servicio para mover un mail de una bandeja a otra, o crearlo en una bandeja
export const moveMailTo = (targetDestination, email) => {
  axios
  .post(`${baseUrl}${targetDestination}`,email)
  .then((response) => console.log(response)
  )
}

// Servicio para mandar un mail a la papelera desde cualquier bandeja
export const deleteMailFrom = (targetSource, mail) => {
  axios({
    method: 'delete',
    url: `${baseUrl}${targetSource}/${mail.id}`,
    data: mail
    })
  // axios
  // .delete(`${baseUrl}${targetSource}/${id}`)
  // .then( (response) => response.data )
}