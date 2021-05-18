
export const InboxComponent = ({allMailsReceived, handleClick}) => {

    if (allMailsReceived) {
      return (
        <div className="col">
          <p>Inbox</p>
          <div className="card">
            {allMailsReceived.map((msg) => {
              return (
                <button onClick={() => handleClick(msg.id)} className="card" key={msg.id}>
                  <h4>{msg.title}</h4>
                  <h5>{msg.author}</h5>
                </button>
              );
            })}
          </div>
        </div>
      );
    }
    else {
        return (
            <div></div>
        )
    }

}