import "./montNine.css";
import { useState } from "react";
import Farewell from "./Farewell";

function MontNine() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mont">
      <div className="mont__card nine">
        <header className="mont__header">
          <p className="nine__eyebrow">Capítulo final</p>
          <h1 className="mont__title nine__title">Nuestro Noveno Mes...</h1>
          <p className="mont__date">09-10-2026</p>
        </header>

        <div className="mont__body">
          <div className="nine__heart" aria-hidden="true">
            <span className="nine__half nine__half--left">❤️</span>
            <span className="nine__half nine__half--right">❤️</span>
          </div>

          <div className="mont__text">
            <p className="mont__paragraph">
              Este mes no hubo un "feliz mes" de vuelta. Esperé todo el día
              tu mensaje… y no llegó. 🤍
            </p>
            <p className="mont__paragraph">
              A mitad de camino, nuestra historia se detuvo. No alcanzamos a
              llegar al décimo.
            </p>
          </div>

          <button className="mont__button nine__button" onClick={() => setOpen(true)}>
            🤍 Leer mi despedida
          </button>

          {open && <Farewell onClose={() => setOpen(false)} />}

          <h2 className="mont__footer-text nine__footer">Fue algo hermoso</h2>
        </div>
      </div>
    </div>
  );
}

export default MontNine;
