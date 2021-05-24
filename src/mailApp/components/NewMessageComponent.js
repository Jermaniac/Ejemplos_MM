import { Modal } from "@material-ui/core";

export const NewMessageComponent = ({ onFormChange, handleSendEmail, open, setOpen}) => {

  const body = (
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
  )

  const handleClose = () => {
    console.log("Close window");
    setOpen(false);
  }

        return (
          <>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
            
          </>
        );
}
