import {InboxComponent} from "../components/InboxComponent"


// Componente que muestra la lista de correos en la Inbox
export const InboxContainer = ({allMailsReceived, setMailSelected}) => {

    // En la lista de emails recibidos, busca uno por id para marcarlo como "seleccionado" y mostrarlo en el viewer
    const handleClick = (mailId) => {
        const mail = allMailsReceived.mails.find( (item) => item.id === mailId );
        setMailSelected(mail);
    }

    // Se pinta la lista de emails y si no hay recibidos, sale el spinner
    return(
        <>
            <InboxComponent
            allMailsReceived={allMailsReceived.mails}
            handleClick={handleClick}/>
        </>

    )

}