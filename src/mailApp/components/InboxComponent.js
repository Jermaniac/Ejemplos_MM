
export const InboxComponent = ({allMessages}) => {

    return(
        <>
            <p>Inbox</p>
            <div className="card" >
                {
                   allMessages.map( (msg) => {
                    return(
                        <div className="card">
                            <h4>{msg.title}</h4>
                            <h5>{msg.author}</h5>
                        </div>
                    )
                   }) 
                }
            </div>
        </>
    )

}