import "./montEight.css";
import ramo from "../../assets/images/ramo.png";
import { useState } from "react";
import LoveLetter from "../../components/notes/LoveLetter";
import { letterEight } from "../../components/notes/letters";

function MontEight() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mont">
      <div className="mont__card mont__card--eight">
        <header className="mont__header">
          <p className="eight__badge">📍 Fui a verte</p>
          <h1 className="mont__title">Feliz Octavo Mes Mi Amor Hermosa</h1>
          <p className="mont__date">09-09-2026</p>
        </header>

        <div className="mont__body">
          <figure className="mont__image-container">
            <img className="mont__image mont__image--bloom" src={ramo} alt="ramo" />
            <span className="eight__spark eight__spark--1" aria-hidden="true">✨</span>
            <span className="eight__spark eight__spark--2" aria-hidden="true">💕</span>
            <span className="eight__spark eight__spark--3" aria-hidden="true">✨</span>
          </figure>

          <div className="mont__text">
            <p className="mont__paragraph">
              Este mes no te celebré desde lejos: viajé para verte, para
              abrazarte y para estar contigo. 🥹❤️
            </p>
            <p className="mont__paragraph">
              Fueron pocos días, pero de los más bonitos de mi vida. Por fin
              sin pantallas de por medio, solo tú y yo. ✨🫶
            </p>
          </div>

          <button className="mont__button" onClick={() => setOpen(true)}>
            💌 Abre Mi Corazón
          </button>

          {open && <LoveLetter {...letterEight} onClose={() => setOpen(false)} />}

          <h2 className="mont__footer-text">Los días más bonitos ❤️</h2>
        </div>
      </div>
    </div>
  );
}

export default MontEight;
