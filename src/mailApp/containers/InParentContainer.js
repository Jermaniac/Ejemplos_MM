import {InboxComponent} from "../components/InboxComponent"
import { InboxContainer } from "./InboxContainer";
import { SentEmailsContainer } from "./SentEmailsContainer";

//{allMailsReceived, setMailSelected}

// Componente que muestra la lista de correos en la Inbox
export const InParentContainer = (props) => {

    // En la lista de emails recibidos, busca uno por id para marcarlo como "seleccionado" y mostrarlo en el viewer
    const handleClick = (mailId) => {
        const mail = props.allMails.mails.find( (item) => item.id === mailId );
        props.setMailSelected(mail);
    }

    // Se pinta la lista de emails y si no hay recibidos, sale el spinner
    console.log(props.children)
    if (props.label==="inbox") {
        return (
            <InboxContainer allMailsReceived={props.allMails}
            setMailSelected={props.setMailSelected}></InboxContainer>
        )
    }
    if (props.label==="sent"){
        return (
            <SentEmailsContainer allMailsSent={props.allMails}
            setMailSelected={props.setMailSelected}>

            </SentEmailsContainer>
        )
    }


}