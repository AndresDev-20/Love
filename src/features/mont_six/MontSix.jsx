import { useState } from "react";
import LoveLetter from "../../components/notes/LoveLetter";
import { letterSix } from "../../components/notes/letters";

function MontSix() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mont">
      <div className="mont__card">
        <header className="mont__header">
          <h1 className="mont__title">
            Feliz Sexto Mes Mi Amor Hermosa
          </h1>

          <p className="mont__date">
            09-07-2026
          </p>
        </header>

        <div className="mont__body">
         

          <div className="mont__text">
            <p className="mont__paragraph"> seis meses contigo y todavía me emociona pensar en todo lo que nos falta por vivir juntos. 🥺❤️ Me hace tanta ilusión imaginar el día en que podamos despertar juntos, compartir nuestro hogar y construir poquito a poquito la vida que tanto hemos soñado. 🏡✨ </p> <p className="mont__paragraph"> hemos pasado por momentos hermosos y también por días difíciles, pero cada experiencia me ha hecho querer aún más que llegue ese momento de tenerte a mi lado. Qué emoción pensar en nosotros viviendo juntos, haciendo nuestro hogar y creando recuerdos que sean solamente nuestros. 💘🥺🏡✨ </p>
          </div>

          <button className="mont__button" onClick={() => setOpen(true)}>
            😻💘 Abre Mi Corazón
          </button>

          {open && (
            <LoveLetter {...letterSix} onClose={() => setOpen(false)} />
          )}

          <h2 className="mont__footer-text">
            Por muchos meses más, mi amor ❤️
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MontSix;