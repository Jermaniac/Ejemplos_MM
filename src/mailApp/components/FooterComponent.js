
const footerStyle = {
    position:"fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "#e6e6ff",
    color: " #000000",
    textAlign: "center",
}

export const FooterComponent = ( {calculateDate, calculateNames} ) => {

    return (
        <div style={footerStyle}>
            {calculateDate()} {calculateNames()} &copy;
        </div>
    )
}