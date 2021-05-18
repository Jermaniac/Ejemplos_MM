import { SenderComponent } from "../components/SenderComponent"
import {useMailApp} from '../hooks/useMailApp'


export const SenderContainer = () => {

    const { isOpen, setOpen} = useMailApp();

    const onClose = () => {
        setOpen(!isOpen);
    }

    return (
      <>
        <SenderComponent show={isOpen} onClose={onClose}/>
      </>
    );

}