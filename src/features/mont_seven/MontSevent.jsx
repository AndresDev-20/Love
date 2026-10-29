import { useState } from "react";
import LoveLetter from "../../components/notes/LoveLetter";
import { letterSeven } from "../../components/notes/letters";

function MontSeven() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mont">
      <div className="mont__card">
        <header className="mont__header">
          <h1 className="mont__title">Feliz Séptimo Mes Mi Amor Hermosa</h1>

          <p className="mont__date">09-08-2026</p>
        </header>

        <div className="mont__body">
          <div className="mont__text">
            <p className="mont__paragraph">
              Buenos días, mi amor hermosa. ❤️🥺 Hoy cumplimos 7 meses, y
              qué bonito se siente saber que seguimos escribiendo nuestra
              historia juntos. Gracias por cada momento, cada sonrisa y cada
              recuerdo que hemos compartido. ✨💕 Aunque todavía no hayamos
              podido vivir juntos como lo hemos soñado, quiero que sepas que mi
              amor por ti sigue igual de fuerte. Yo sigo aquí para ti, para
              apoyarte, cuidarte y amarte siempre. ❤️‍🩹🏡 Eres mi reina, mi mujer,
              mi niña hermosa y la persona que mi corazón sigue eligiendo cada
              día. 👑❤️ Felices 7 meses, mi amor. Que sean los primeros de
              muchos más a tu lado. 🥹❤️♾️
            </p>
          </div>

          <button className="mont__button" onClick={() => setOpen(true)}>
            😻💘 Abre Mi Corazón
          </button>

          {open && <LoveLetter {...letterSeven} onClose={() => setOpen(false)} />}

          <h2 className="mont__footer-text">
            Por muchos meses más, mi amor ❤️
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MontSeven;
