import React from "react";

const ButtonPdf = () => {
  const handleClick = () => {
    alert("Botón PDF presionado");
  };

  return <button onClick={handleClick}>ES / EN</button>;
};

export default ButtonPdf;
