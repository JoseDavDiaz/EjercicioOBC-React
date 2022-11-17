import Contacto from "../models/contacto.class";
import InfoComponent from "./contacto.jsx";

export const EstadoComponent = () => {
  const personaDefault = new Contacto("Jose", "Diaz", "jd@gmail.com", true);

  return (
    <div>
      <p>Información usuario número 1: </p>

      <InfoComponent contacto={personaDefault}> </InfoComponent>
    </div>
  );
};
