
export const SentEmailsContainer = () => {

    const handleClick = (mailId) => {
        const mail = allMailsReceived.mails.find( (item) => item.id === mailId );
        setMailSelected(mail);
    }

    return (
        <>
        {allMailsReceived.mails.length > 0 &&
            <SentEmailsComponent allMailsReceived={allMailsReceived.mails}
            handleClick={handleClick}/>
        }
        {allMailsReceived.pending && <Spinner/>}
    </>
    )
}