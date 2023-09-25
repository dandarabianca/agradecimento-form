import React from "react";
import "./styles.css";

export default function Menu() {
  return (
    <div className="menu-container">
      <h1>
        Queremos agradecer pela compra e desejar que ela lhe satisfaça e supere
        suas expectativas.
      </h1>

      <h2>Vá ao nosso website e deixe sua avalição</h2>

      <div className="button-container">
        <span>Clique no botão abaixo!</span>
      </div>
      <div className="card-styles">
        <a
          href="https://dandara-formulario.netlify.app/"
          target="_self"
          rel="noreferrer"
          className="styles-a"
        >
          Formulario
        </a>
      </div>
    </div>
  );
}
