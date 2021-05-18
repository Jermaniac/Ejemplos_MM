import { NewMessageComponent } from "../components/NewMessageComponent"

export const NewMessageContainer = ({isOpen, setOpen}) => {

    const toggleShowSender = () => {
        setOpen(!isOpen);
    }

    return (
      <>
        <NewMessageComponent show={isOpen} toggleShowSender={toggleShowSender}/>
      </>
    );

}