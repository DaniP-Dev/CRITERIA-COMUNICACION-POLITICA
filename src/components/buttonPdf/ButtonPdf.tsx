import React from "react";

const ButtonPdf = () => {
  const handleClick = () => {
    alert("Botón PDF presionado");
  };

  return <button onClick={handleClick}>Generar PDF</button>;
};

export default ButtonPdf;
