import * as React from "react";
import "./ListadoLugaresStyles.css";

function Listado() {
  return (
    <div className="listadoLugares">
      <div className="cabecera">
        <h1>LUGARES SEGUROS</h1>
      </div>

      <div className="listado">
        <div className="lugar">
          <div className="imagenLugar">
            <p>La imagen</p>
          </div>

          <div className="infoLugar">
            <p>Nombre Lugar Seguro</p>
            <p>
              <span>Descripción lugar seguro:</span> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptate, eaque quisquam sit
              dolorum sed doloremque necessitatibus vitae soluta ipsum fuga quas
              ea quam inventore quia modi rerum eius dolore alias.
            </p>
          </div>

          <div className="opcionesLugar">
            <p>Dirección del lugar</p>
            <p>Calificación del lugar</p>
            <a href="google.com">Ver Comentarios</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listado;
