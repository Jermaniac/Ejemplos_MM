import { SenderComponent } from "../components/SenderComponent"

export const SenderContainer = ({ isOpen, setOpen}) => {

    const onClose = () => {
        setOpen(!isOpen);
    }

    return (
      <>
        <SenderComponent show={isOpen} onClose={onClose}/>
      </>
    );

}