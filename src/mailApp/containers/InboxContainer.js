
import {InboxComponent} from "../components/InboxComponent"

export const InboxContainer = () => {

    const allMessages = [
        {
            title: "mensaje1",
            author: "miprimo"
        },
        {
            title: "mensaje2",
            author: "miprima"
         }
    ];
                   

    return(
        <>
            <InboxComponent allMessages={allMessages}></InboxComponent>
        </>
    )

}