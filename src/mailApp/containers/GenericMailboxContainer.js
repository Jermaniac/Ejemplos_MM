import {GenericMailboxComponent} from "../components/GenericMailboxComponent"


// Componente que representa una bandeja de correo genérica
export const GenericMailboxContainer = ({title, mails, setMailSelected}) => {

    // En la lista de emails recibidos, busca uno por id para marcarlo como "seleccionado" y mostrarlo en el viewer
    const handleClick = (mailId) => {
        const mail = mails.mails.find( (item) => item.id === mailId );
        setMailSelected(mail);
    }

    return(
        <>
            <GenericMailboxComponent
            title={title}
            mails={mails}
            handleClick={handleClick}/>
        </>

    )

}