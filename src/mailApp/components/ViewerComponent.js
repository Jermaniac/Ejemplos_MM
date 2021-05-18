
const wrapperStyle = {
    border: "1 px black solid",
};
export const ViewerComponent = ({mailSelected}) => {

    if (mailSelected){
        return (
          <div className="col">
            <p>Viewer</p>
            <p style={wrapperStyle}>
              {mailSelected.message}
            </p>
          </div>
        );
    }
    else {
        return (
            <>
            </>
        )
    }

}