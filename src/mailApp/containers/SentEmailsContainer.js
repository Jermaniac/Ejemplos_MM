import {SentEmailsComponent} from '../components/SentEmailsComponent'

export const SentEmailsContainer = (props) => {
    const handleClick = (mailId) => {
        const mail = props.allMailsSent.mails.find( (item) => item.id === mailId );
        props.setMailSelected(mail);
    }

    return (
      <SentEmailsComponent
      allMailsSent = {props.allMailsSent}
      handleClick={handleClick}
      />
      );
}