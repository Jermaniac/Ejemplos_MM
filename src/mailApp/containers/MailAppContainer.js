
import {useMailApp} from '../hooks/useMailApp'

import {MailAppComponent} from '../components/MailAppComponent'

// Contenedor principal del resto de componentes. Se encarga de llamar al custom hook global
export const MailAppContainer = () => {

    const { allMailsReceived,
      allMailsSent,
      mailSelected,
      setMailSelected,
      isSubmit,
      setSubmit,
      filledForm,
      setFilledForm } = useMailApp();

    return (
        <MailAppComponent
        allMailsReceived={allMailsReceived}
        allMailsSent={allMailsSent}
        mailSelected={mailSelected}
        setMailSelected={setMailSelected}
        isSubmit={isSubmit}
        setSubmit={setSubmit}
        filledForm={filledForm}
        setFilledForm={setFilledForm}></MailAppComponent>
    );

}
