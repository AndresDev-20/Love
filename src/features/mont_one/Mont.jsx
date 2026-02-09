import "./mont.css";
import ramo from "../../assets/images/ramo.png";
import { useState } from "react";
import Note from "../../components/notes/Note";


function Mont() {
    const [open, setOpen] = useState(false);

  return (
    <div className="mont">
      <div className="mont__card">
        <header className="mont__header">
          <h1 className="mont__title">Feliz Primer Mes Mi Amor Hermosa</h1>
          <p className="mont__date">09-01-2026</p>
        </header>

        <div className="mont__body">
          <figure className="mont__image-container">
            <img className="mont__image" src={ramo} alt="ramo" />
          </figure>

          <div className="mont__text">
            <p className="mont__paragraph">
              En este día especial, quiero que sepas...
            </p>
            <p className="mont__paragraph">
              Eres el amor que ilumina mi vida como el rosa en esta oscuridad.
            </p>
          </div>

          <button className="mont__button" onClick={() => setOpen(true)}>
    ❤️ Abre Mi Corazón
</button>

{open && <Note onClose={() => setOpen(false)} />}


          <h2 className="mont__footer-text">Para ti, con amor</h2>
        </div>
      </div>
    </div>
  );
}

export default Mont;
