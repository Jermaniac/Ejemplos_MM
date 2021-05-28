import Card  from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

const cardStyles = {
  maxHeight:"500px",
  overflowY:"auto",
  overflowX: "hidden",
  padding: "20px"
}

const titleStyle = {
  color: "#111",
  fontFamily: "Open Sans, arial",
  fontSize: "40px",
  fontWeight: "300",
  lineHeight: "32px",
  textAlign: "center"
}

export const GenericMailboxComponent = ({title, mails, handleSelectMail}) => {
  
  return (
    <>
      <h3 style={titleStyle}>{title}</h3>
      <div style={cardStyles}>
        <Card>
          {mails.map((msg) => {
            return (
              <Card key={msg.id}>
                <CardActionArea onClick={() => handleSelectMail(msg.id)}>
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