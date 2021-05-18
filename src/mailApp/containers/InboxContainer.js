import {InboxComponent} from "../components/InboxComponent"

import {Spinner} from "../../commons/components/Spinner"

import { ViewerContainer } from "./ViewerContainer";

export const InboxContainer = ({ allMailsReceived, mailSelected, setMailSelected }) => {

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