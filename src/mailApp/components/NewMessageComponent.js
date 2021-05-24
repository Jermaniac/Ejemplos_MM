import { FormControl, Input, Modal, TextareaAutosize } from "@material-ui/core";

import React from 'react';

const modalStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const formStyle = {
  backgroundColor:"white",
  padding:"10px"
}

export const NewMessageComponent = ({ onFormChange, handleSendEmail, open, setOpen}) => {

  const body = (
    <div style={formStyle}>
      <h2 id="modal-title">Send a new message</h2>
      <form id="modal-body" onSubmit={handleSendEmail}>
        <FormControl required>
          <Input
            id="receiver"
            type="text"
            placeholder="To"
            name="receiver"
            onChange={onFormChange}
          />
        </FormControl>
        <br />
        <FormControl required>
          <Input
            id="author"
            type="text"
            placeholder="From"
            name="author"
            onChange={onFormChange}
          />
        </FormControl>
        <br />
        <FormControl required>
          <Input
            // style={{ marginBottom: "10px" }}
            id="title"
            type="text"
            placeholder="Title"
            name="title"
            onChange={onFormChange}
          />
        </FormControl>
        <br />
        <TextareaAutosize
          id="message"
          rowsMin={20}
          rowsMax={20}
          cols="100"
          type="textarea"
          name="message"
          placeholder="Type your message..."
          onChange={onFormChange}
        />
        <br />
        <Input type="submit" value="Submit"></Input>
      </form>
    </div>
  );

  const handleClose = () => {
    console.log("Close window");
    setOpen(false);
  }

        return (
          <>
            <Modal style= {modalStyle}
              open={open}
              onClose={handleClose}
            >
              {body}
            </Modal>
          </>
        );
}
