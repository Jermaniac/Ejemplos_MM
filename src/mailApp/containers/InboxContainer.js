import {InboxComponent} from "../components/InboxComponent"

import {Spinner} from "../../commons/components/Spinner"

import {useMailApp} from '../hooks/useMailApp'

export const InboxContainer = () => {

    const { allMailsReceived } = useMailApp();
    return(
        <>
            <InboxComponent allMailsReceived={allMailsReceived.mails}></InboxComponent>
            {allMailsReceived.pending && <Spinner/>}
        </>
    )

}