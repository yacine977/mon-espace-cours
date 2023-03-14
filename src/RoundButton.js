import React from "react";

const RoundButton = () => {
  const buttonStyles = {
    position: "absolute",
    top: "50px",
    right: "30px",
    
    border: "none",
    color: "#FFA500",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    borderRadius: "25px",
    width: "150px",
    height: "50px",
    
  };

  return <button style={buttonStyles}>Se deconnecter</button>;
};

export default RoundButton;
