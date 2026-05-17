import "./montThree.css";
import imagen from "../../assets/images/frasco.png";
import { useState } from "react";
import NoteTwo from "../../components/notes/NoteTwo";
import NoteThree from "../../components/notes/NoteThree";

function MontThree() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mont">
      <div className="mont__card">
        <header className="mont__header">
          <h1 className="mont__title">Nuestro Tercer Mes...</h1>
          <p className="mont__date"> 09-04-2026</p>
        </header>

        <div className="mont__body">
          <figure className="mont__image-container2">
            <img className="mont__image3" src={imagen} alt="luna" />
          </figure>

          <div className="mont__text">
            <p className="mont__paragraph">
              Aunque la distancia cambió muchas cosas...
            </p>
            <p className="mont__paragraph">
              Hay sentimientos que el tiempo,
              la tristeza y la ausencia jamás podrán borrar. 🥺🌙
            </p>
          </div>

          <button className="mont__button" onClick={() => setOpen(true)}>
            ❤️ Abre Mi Corazón
          </button>

          {open && <NoteThree onClose={() => setOpen(false)} />}

          <h2 className="mont__footer-text">Para ti, con amor</h2>
        </div>
      </div>
    </div>
  );
}

export default MontThree;
