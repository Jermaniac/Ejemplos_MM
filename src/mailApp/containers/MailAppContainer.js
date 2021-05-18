import {useMailApp} from '../hooks/useMailApp'
import {InboxContainer} from '../containers/InboxContainer'
import {SenderContainer} from '../containers/SenderContainer'

export function MailAppContainer() {
    const { allMailsReceived, mailSelected, setMailSelected, isOpen, setOpen } = useMailApp();

    return (
      <>
        <InboxContainer allMailsReceived={allMailsReceived}
        mailSelected={mailSelected}
        setMailSelected={setMailSelected}
        />
        <SenderContainer isOpen={isOpen} setOpen={setOpen}/>
      </>
    );
  }