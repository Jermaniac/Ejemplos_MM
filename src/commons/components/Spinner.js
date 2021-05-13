import React from "react";

export const Spinner = () => {

  const wrapperStyle = {
    width: "50%",
    margin: "auto"
    };
    
  return (  
  <div style={wrapperStyle}>
    <img alt="Spinner" src="../loading.gif"></img>
  </div>
  );

};
