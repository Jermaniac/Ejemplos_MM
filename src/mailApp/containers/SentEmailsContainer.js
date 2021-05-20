import Card  from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

export const SentEmailsContainer = (props) => {

    const handleClick = (mailId) => {
        const mail = props.allMails.mails.find( (item) => item.id === mailId );
        props.setMailSelected(mail);
    }

    console.log(props.allMailsSent)
    return (
        <>
        <h3>Sent</h3>
        <div>
          <Card>
            {props.allMailsSent.mails.map((msg) => {
              return (
                <Card key={msg.id}>
                  <CardActionArea onClick={() => handleClick(msg.id)} >
                    <CardContent>
                      <h4>{msg.title}</h4>
                      <h5>{msg.author}</h5>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </Card>
        </div>
        </>
      );
}