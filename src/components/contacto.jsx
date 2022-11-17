import React from "react";
import Contacto from "../models/contacto.class";
import PropTypes from "prop-types";

const InfoComponent = ({ contacto }) => {
  return (
    <div>
      <h2> Nombre: {contacto.Nombre} </h2>
      <h2> Apellido: {contacto.Apellido}</h2>
      <h3> Email: {contacto.Email} </h3>
      <h1>
        {contacto.Conectado ? "Contacto En Linea" : "Contacto No Disponible"}
      </h1>
    </div>
  );
};

InfoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto)
};

export default InfoComponent;
