
export const NewMessageComponent = ({show, toggleShowSender, onFormChange, handleSendEmail}) => {

        return (
          <>
            <form onSubmit={handleSendEmail}>
              <label>
                <input
                  id="receiver"
                  type="text"
                  placeholder="To"
                  name="receiver"
                  onChange={onFormChange}
                />
              </label>
              <br />
              <label>
                <input
                  id="author"
                  type="text"
                  placeholder="From"
                  name="author"
                  onChange={onFormChange}
                />
              </label>
              <br />
              <label>
                <input
                  id="title"
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={onFormChange}
                />
              </label>
              <br />
              <label>
                <textarea
                  id="message"
                  rows="4"
                  cols="25"
                  name="message"
                  placeholder="Type your message..."
                  onChange={onFormChange}
                />
              </label>
              <br />
              <input type="submit" value="Submit"></input>
            </form>
          </>
        );


}