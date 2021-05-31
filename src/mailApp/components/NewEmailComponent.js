import { FormControl, Input, TextareaAutosize } from "@material-ui/core";

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

  export const NewEmailComponent = ({handleSendEmail, onFormChange, setOpen}) => {
    return (
      <div style={formStyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={titleModalStyle} id="modal-title">
            Send a new message
          </div>
          <MyButton close={true} onClick={()=>setOpen(false)} text="X"/>
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
          <MyButton type="submit" text="Submit"/>
          <MyButton type="reset" text="Reset" color="default"/>
        </form>
      </div>
    );
}