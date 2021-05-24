import {GenericMailboxComponent} from "../components/GenericMailboxComponent"


// Componente que representa una bandeja de correo genérica
export const GenericMailboxContainer = ({title, mails, setMailSelected}) => {

    // En la lista de emails recibidos, busca uno por id para marcarlo como "seleccionado" y mostrarlo en el viewer
    const handleClick = (mailId) => {
        const mail = mails.find( (item) => item.id === mailId );
        setMailSelected(mail);
    }

    // Se pinta la lista de emails y si no hay recibidos, sale el spinner
    return(
        <>
            <GenericMailboxComponent
            title={title}
            mails={mails}
            handleClick={handleClick}/>
        </>

    )

}