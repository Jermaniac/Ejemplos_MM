
export const InboxComponent = ({allMailsReceived}) => {

    if (allMailsReceived) {
      return (
        <>
          <p>Inbox</p>
          <div className="card">
            {allMailsReceived.map((msg) => {
              return (
                <div className="card">
                  <h4>{msg.title}</h4>
                  <h5>{msg.author}</h5>
                </div>
              );
            })}
          </div>
        </>
      );
    }
    else {
        return (
            <div></div>
        )
    }

}