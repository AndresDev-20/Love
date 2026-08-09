import "./montFive.css";
import imagen from "../../assets/images/love.png";
import { useState } from "react";
import NoteFour from "../../components/notes/NoteFour";

function MontFive() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mont">
      <div className="mont__card">
        <header className="mont__header">
          <h1 className="mont__title">
            Feliz Quinto Mes Mi Amor Hermosa
          </h1>

          <p className="mont__date">
            09-06-2026
          </p>
        </header>

        <div className="mont__body">
          

          <div className="mont__text">
            <p className="mont__paragraph">
             Cinco meses a tu lado y todavía siento que elegirte ha sido una de las decisiones más bonitas que me ha regalado la vida. ❤️

Hemos compartido momentos hermosos, hemos pasado por días difíciles y, aun así, mi corazón sigue encontrando en ti ese lugar al que siempre quiere volver. Porque entre tantas personas, tantas historias y tantos caminos, yo volvería a elegirte a ti. 🥹💘

Gracias por estos cinco meses, mi amor. Por cada sonrisa, cada abrazo, cada recuerdo y por todo lo que poco a poco hemos construido juntos. ✨🏡

Y si estos cinco meses han sido así de bonitos, no imagino todo lo que nos espera por vivir. ❤️‍🩹♾️

            </p>
          </div>

          <button className="mont__button">😻💘</button>

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

export default MontFive;