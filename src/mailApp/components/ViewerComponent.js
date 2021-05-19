import Card  from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const wrapperStyle = {
    border: "1px solid black",
};

export const ViewerComponent = ({mailSelected}) => {

  return (
    <>
      <h3>Viewer</h3>

      {mailSelected && (
        <div>
          <Card>
            <CardContent>
              <div>
                <h3>Title: {mailSelected.title}</h3>
              </div>
              <div>
                <h5>From: {mailSelected.author}</h5>
                <h5>To: {mailSelected.receiver}</h5>
              </div>
              <div>
                <p>{mailSelected.message}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {!mailSelected && <div>Select one message to show here...</div>}
    </>
  );
}