import {InboxComponent} from "../components/InboxComponent"

import {Spinner} from "../../commons/components/Spinner"

import {useMailApp} from '../hooks/useMailApp'
import { ViewerContainer } from "./ViewerContainer";

export const InboxContainer = () => {
    const { allMailsReceived, mailSelected, setMailSelected } = useMailApp();

    const handleClick = (mailId) => {
        const mail = allMailsReceived.mails.find( (item) => item.id === mailId );
        setMailSelected(mail);
    }

    return(
        <>
            {allMailsReceived.mails.length > 0 &&
            <div className="row">
                <InboxComponent allMailsReceived={allMailsReceived.mails}
                handleClick={handleClick}/>
                <ViewerContainer mailSelected={mailSelected}/>
            </div>}
            {allMailsReceived.pending && <Spinner/>}
        </>
    )

}