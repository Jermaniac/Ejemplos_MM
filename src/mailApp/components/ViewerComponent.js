import Card  from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import { CardHeader, IconButton } from '@material-ui/core';

export const ViewerComponent = ({mailSelected}) => {

  const cardStyles = {
    maxHeight:"500px",
    overflowY:"auto",
    overflowX: "hidden",
    textAlign:"justify",
    padding: "20px"
  }
  const paragraphStyle= {
    whiteSpace:"pre-line"
  }

  return (
    <>
      <h3>Viewer</h3>

      {mailSelected && (
        <div style={cardStyles}>
          <Card>
            <CardHeader
            title={mailSelected.title}
            action={
                <IconButton
                  onClick={() => console.log(`Deleted mail with id: ${mailSelected.id}`)}
                >
                  <DeleteIcon></DeleteIcon>
                </IconButton>
              }
            ></CardHeader>
            <CardContent>
              <div>
                <h5>From: {mailSelected.author}</h5>
                <h5>To: {mailSelected.receiver}</h5>
              </div>
              <div>
                <p style={paragraphStyle}>{mailSelected.message}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {!mailSelected && <div>Select one message to show here...</div>}
    </>
  );
}