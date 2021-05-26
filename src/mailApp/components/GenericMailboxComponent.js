import Card  from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

const cardStyles = {
  maxHeight:"500px",
  overflowY:"auto",
  overflowX: "hidden",
  padding: "20px"
}

export const GenericMailboxComponent = ({title, mails, handleClick}) => {
  return (
    <>
      <h3>{title}</h3>
      <div style={cardStyles}>
        <Card>
          {mails.mails.map((msg) => {
            return (
              <Card key={msg.id}>
                <CardActionArea onClick={() => handleClick(msg.id)}>
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