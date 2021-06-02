import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Input, Slide, TextareaAutosize } from "@material-ui/core";

import React from 'react';
import { MyButton } from "../styles/MyButton";

  const formStyle = {
    backgroundColor:"white",
    padding:"10px"
  }

  const titleModalStyle = {
    fontSize: "30px",
    fontFamily: "Times New Roman"
  }

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  export const NewEmailComponent = ({handleSendEmail, onFormChange, setOpen, openDialog, handleDialogClose}) => {
    return (
      <div style={formStyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={titleModalStyle} id="modal-title">
            Send a new message
          </div>
          <MyButton close={true} onClick={() => setOpen(false)} text="X" />
        </div>
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
              style={{ marginBottom: "10px" }}
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
          <MyButton type="submit" text="Submit" />
          <MyButton type="reset" text="Reset" color="default" />
        </form>
        <Dialog
          open={openDialog}
          TransitionComponent={Transition}
          onClose={handleDialogClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Email sent!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              The user will receive the message in a few seconds
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <MyButton onClick={handleDialogClose} color="primary" text="OK!"/>
          </DialogActions>
        </Dialog>
      </div>
    );
}