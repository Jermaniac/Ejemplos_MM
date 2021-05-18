import { InboxContainer } from "../../mailApp/containers/InboxContainer";
import { NewMessageContainer } from "./NewMessageContainer";

import {useMailApp} from '../hooks/useMailApp'

// Contenedor principal del resto de componentes. Se encarga de llamar al custom hook global
export const MailAppContainer = () => {
    
    const { allMailsReceived, mailSelected, setMailSelected, isOpen, setOpen} = useMailApp();

    return (
        <>
            <InboxContainer allMailsReceived={allMailsReceived} mailSelected={mailSelected} setMailSelected={setMailSelected}/>
            <NewMessageContainer isOpen={isOpen} setOpen={setOpen}/>
        </>
    )
        
}
