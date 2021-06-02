import axios from "axios";

const baseUrl = "http://localhost:3000/";

// Peticion http que devuelve los mails
export const fetchMails = (targetDestination) => {
  return (
    axios
    .get(`${baseUrl}${targetDestination}`)
  )
};

// Servicio para mover un mail de una bandeja a otra, o crearlo en una bandeja
export const moveMailTo = (targetDestination, email) => {
  axios
  .post(`${baseUrl}${targetDestination}`,email)
  .then((response) => response
  )
}

// Servicio para mandar un mail a la papelera desde cualquier bandeja
export const deleteMailFrom = (targetSource, mail) => {
  axios({
    method: 'delete',
    url: `${baseUrl}${targetSource}/${mail.id}`,
    data: mail
    })
}