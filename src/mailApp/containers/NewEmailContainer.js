import { NewEmailComponent } from "../components/NewEmailComponent"
import { moveMailTo } from '../services/mailApp.services'
import { SENT } from '../hooks/useMailApp' 
import { useState } from "react"


export const NewEmailContainer = ({filledForm, setFilledForm, setOpen, callFetchSent}) => {

  const [openDialog, setOpenDialog] = useState(false);

  const handleSendEmail = async (event) => {
    event.preventDefault();
    await moveMailTo(SENT, filledForm);
    callFetchSent();
    handleDialogOpen();
    // event.target.reset();
    // setOpen(false);
    // console.log("Email sent!");
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  }

  const handleDialogClose = () => {
    setOpenDialog(false);
    setOpen(false);
  }

  // Método que rellena el correo con el contenido del formulario con cada modificacion
  const onFormChange = (event) => {
    setFilledForm({
      ...filledForm,
      [event.target.name]: event.target.value,
      category: "sent",
    });
  };

  return (
    <NewEmailComponent
      handleSendEmail={handleSendEmail}
      onFormChange={onFormChange}
      setOpen={setOpen}
      openDialog={openDialog}
      handleDialogClose={handleDialogClose}
    ></NewEmailComponent>
  );
}