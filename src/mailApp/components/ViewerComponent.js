import Card  from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import { CardHeader, IconButton } from '@material-ui/core';

export const ViewerComponent = ({mailSelected, handleDeleteMail}) => {

  const cardStyles = {
    maxHeight:"500px",
    overflowY:"auto",
    overflowX: "hidden",
    textAlign:"justify",
    padding: "20px"
  }
  const paragraphStyle= {
    whiteSpace:"pre-line",
    overflowWrap: "break-word"
  }

  return (
    <>
      <h3>Viewer</h3>

      {mailSelected && (
        <div style={cardStyles}>
          <Card>
            <CardHeader title={mailSelected.title}></CardHeader>
            <CardContent>
              <IconButton onClick={() => {
                console.log("ACCION DEL ICONBUTTON DE ELIMINAR");
                handleDeleteMail(mailSelected);
                }}>
                <DeleteIcon></DeleteIcon>
              </IconButton>
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