import "./montTwo.css";
import luna from "../../assets/images/luna.png";
import { useState } from "react";
import NoteTwo from "../../components/notes/NoteTwo";

function MontTwo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mont">
      <div className="mont__card">
        <header className="mont__header">
          <h1 className="mont__title">Feliz Segundo Mes Mi Amor Hermosa</h1>
          <p className="mont__date">09-03-2026</p>
        </header>

        <div className="mont__body">
          <figure className="mont__image-container2">
            <img className="mont__image2" src={luna} alt="luna" />
          </figure>

          <div className="mont__text">
            <p className="mont__paragraph">
              En estos dos meses, mi amor por ti crece cada día más.
            </p>
            <p className="mont__paragraph">
              Eres el amor que ilumina mi vida como la luna iluminando la noche
              más oscura 🥺❤️🌙.
            </p>
          </div>

          <button className="mont__button" onClick={() => setOpen(true)}>
            ❤️ Abre Mi Corazón
          </button>

          {open && <NoteTwo onClose={() => setOpen(false)} />}

          <h2 className="mont__footer-text">Para ti, con amor</h2>
        </div>
      </div>
    </div>
  );
}

export default MontTwo;
