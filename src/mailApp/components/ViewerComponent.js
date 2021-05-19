
const wrapperStyle = {
    border: "1px solid black",
};

export const ViewerComponent = ({mailSelected}) => {

    if (mailSelected) {
      return (
        <div className="col">
          <p>Viewer</p>
          <div style={wrapperStyle}>
            <h4>From: {mailSelected.author}</h4>
            <h4>To: {mailSelected.receiver}</h4>
          </div>
          <div style={wrapperStyle}>
            <h5>Title: {mailSelected.title}</h5>
          </div>
          <div style={wrapperStyle}>
            <p>{mailSelected.message}</p>
          </div>
        </div>
      );
    } else {
      return <></>;
    }

}