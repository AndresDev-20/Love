import { createPortal } from "react-dom";
import YouTubeSong from "../../components/music/YouTubeSong";
import { useLockScroll } from "../../hooks/useLetter";

const song = {
  id: "5hIrpj25JX4",
  title: "Adiós",
  artist: "Sebastián Yatra",
};

const paragraphs = [
  "Mi amor,",
  "Esta es la última carta, y es la que más me costó escribir.",
  "Fue algo hermoso. Desde aquel parque donde vi tu sonrisa por primera vez, la luna que nos acompañó en las noches, el frasco lleno de recuerdos, la semana viviendo juntos… y ese octavo mes en que por fin fui a verte y te tuve entre mis brazos. Esos días fueron de los más felices de mi vida.",
  "Por eso dolió tanto el noveno. Llegó nuestra fecha y esta vez no te acordaste. No te lo digo con rabia, te lo digo porque ahí entendí que algo se había ido apagando, aunque yo no quisiera verlo.",
  "Y a mitad de ese mes se acabó todo. No alcanzamos a llegar al décimo. Yo lo intenté, te lo prometo. Lo intenté con todo lo que tenía.",
  "Gracias por todo. Por cada abrazo, por cada risa, por cada buenos días, por recibirme en tu ciudad y por enseñarme a amar de una forma tan bonita. Nada de lo que vivimos fue en vano.",
  "Te amo. Y creo que una parte de mí siempre lo hará. Pero el amor necesita de dos para sostenerse… y solito no puedo.",
  "Te deseo lo más bonito del mundo. Que nunca se te apague esa luz que tienes, y que la vida te cuide como yo soñé hacerlo. Esto no es un te odio, es un adiós con el corazón en la mano.",
];

function Farewell({ onClose }) {
  useLockScroll();

  // Se monta en el body para que siempre cubra toda la pantalla
  return createPortal(
    <div className="farewell" onClick={onClose}>
      <div className="farewell__petals" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
          <span
            key={i}
            style={{
              left: `${(i * 53) % 100}%`,
              animationDuration: `${9 + (i % 5) * 2}s`,
              animationDelay: `${(i * 1.3) % 8}s`,
            }}
          >
            {i % 3 === 0 ? "🤍" : "🌸"}
          </span>
        ))}
      </div>

      <div className="farewell__card" onClick={(e) => e.stopPropagation()}>
        <span className="letter__handle" aria-hidden="true"></span>
        <button className="note__close farewell__close" onClick={onClose}>
          ✕
        </button>

        <p className="farewell__eyebrow">casi nueve meses · una historia</p>
        <h2 className="farewell__title">Fue algo hermoso</h2>

        <YouTubeSong {...song} />

        <div className="farewell__content">
          {paragraphs.map((text, index) => (
            <p key={index} style={{ animationDelay: `${1 + index * 1.4}s` }}>
              {text}
            </p>
          ))}
        </div>

        <div
          className="farewell__end"
          style={{ animationDelay: `${1 + paragraphs.length * 1.4}s` }}
        >
          <div className="nine__heart nine__heart--small" aria-hidden="true">
            <span className="nine__half nine__half--left">❤️</span>
            <span className="nine__half nine__half--right">❤️</span>
          </div>

          <p className="farewell__quote">
            Fue algo hermoso, pero no funcionó.
            <br />
            Gracias por todo. Te amo… pero solito no puedo.
          </p>

          <p className="farewell__signature">
            Con todo el amor que aún queda,
            <br />
            Andrés 🤍
          </p>

          <p className="farewell__fin">— fin —</p>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Farewell;
