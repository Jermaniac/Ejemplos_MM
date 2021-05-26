
import {useMailApp} from '../hooks/useMailApp'

import {MailAppComponent} from '../components/MailAppComponent'

// Contenedor principal del resto de componentes. Se encarga de llamar al custom hook global
export const MailAppContainer = () => {

    const { allMailsReceived,
      allMailsSent,
      allMailsDeleted,
      mailReceivedSelected,
      setMailReceivedSelected,
      mailSentSelected,
      setMailSentSelected,
      mailDeletedSelected,
      setMailDeletedSelected,
      isSubmit,
      setSubmit,
      filledForm,
      setFilledForm } = useMailApp();

    return (
        <MailAppComponent
        allMailsReceived={allMailsReceived}
        allMailsSent={allMailsSent}
        allMailsDeleted={allMailsDeleted}
        mailReceivedSelected={mailReceivedSelected}
        setMailReceivedSelected={setMailReceivedSelected}
        mailSentSelected={mailSentSelected}
        setMailSentSelected={setMailSentSelected}
        mailDeletedSelected={mailDeletedSelected}
        setMailDeletedSelected={setMailDeletedSelected}
        isSubmit={isSubmit}
        setSubmit={setSubmit}
        filledForm={filledForm}
        setFilledForm={setFilledForm}></MailAppComponent>
    );

}
