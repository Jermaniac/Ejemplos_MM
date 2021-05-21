import Card  from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

export const SentEmailsComponent = ({allMailsSent, handleClick}) => {

    return (
        <>
        <h3>Sent</h3>
        <div>
          <Card>
            {allMailsSent.mails.map((msg) => {
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
    )
}