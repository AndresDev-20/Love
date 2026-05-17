import "./montFour.css";
import imagen from "../../assets/images/love.png";
import { useState } from "react";
import NoteFour from "../../components/notes/NoteFour";

function MontFourt() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mont">
      <div className="mont__card">
        <header className="mont__header">
          <h1 className="mont__title">
            Feliz Cuarto Mes Mi Amor Hermosa
          </h1>

          <p className="mont__date">
            09-05-2026
          </p>
        </header>

        <div className="mont__body">
          <figure className="mont__image-container4">
            <img
              className="mont__image4"
              src={imagen}
              alt="hogar"
            />
          </figure>

          <div className="mont__text">
            <p className="mont__paragraph">
              el amor encontró el camino
              para volvernos a juntar.🥺💘
            </p>

            <p className="mont__paragraph">
              Y esa semana viviendo juntos
              me hizo sentir lo bonito que sería
              compartir una vida entera contigo. ✨🏡
            </p>
          </div>

          <button
            className="mont__button"
            onClick={() => setOpen(true)}
          >
            ❤️ Abre Mi Corazón
          </button>

          {open && (
            <NoteFour
              onClose={() => setOpen(false)}
            />
          )}

          <h2 className="mont__footer-text">
            Para ti, con amor ❤️
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MontFourt;