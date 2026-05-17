/* NoteFour.jsx */

import { useEffect, useRef } from "react";
import "./loveCollageFour.css";

import amorMp3 from "../../assets/music/song_four.mp3";

import foto1 from "../../assets/images/mont_04/a1.jpeg";
import foto2 from "../../assets/images/mont_04/a2.jpeg";
import foto3 from "../../assets/images/mont_04/a3.jpeg";
import foto4 from "../../assets/images/mont_04/a4.jpeg";
import foto5 from "../../assets/images/mont_04/a5.jpeg";
import foto6 from "../../assets/images/mont_04/a6.jpeg";
import foto7 from "../../assets/images/mont_04/a7.jpeg";

function NoteFour({ onClose }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.7;

      audio.play().catch(() => {});
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

 /* ========================================= */
/* ITEMS NOTE FOUR */
/* Reemplaza SOLO el const items */
/* ========================================= */

const items = [
  {
    img: foto1,
    text: "Ese día en nuestro mirador entendí que no importa el lugar mientras sea contigo… porque incluso el viento, el cielo y el silencio se sentían más bonitos cuando estabas abrazada a mí. ❤️🌙",
  },

  {
    img: foto2,
    text: "Esta foto en la cocina parece algo simple… pero para mí significa muchísimo. Porque ahí me sentía en familia, en paz, feliz de compartir pequeños momentos contigo como si ya fueras mi hogar. 🏡🥺",
  },

  {
    img: foto3,
    text: "Todavía recuerdo lo feliz que me sentía cargándote entre mis brazos. Verte abrazada a mí hacía que el mundo desapareciera por completo… y en ese momento no necesitaba nada más que tenerte cerquita. ❤️✨",
  },

  {
    img: foto4,
    text: "Viajar contigo incluso por los caminos más simples se volvió una aventura hermosa. Porque contigo cualquier carretera, cualquier paisaje y cualquier momento se convertía en uno de los recuerdos más felices de mi vida. 🛵🌄",
  },

  {
    img: foto5,
    text: "Hay segundos que duran para siempre… y este fue uno de ellos. Justo antes de besarte sentí esa mezcla de nervios, felicidad y amor que solamente tú eres capaz de provocar en mi corazón. 💋❤️",
  },

  {
    img: foto6,
    text: "No sé cómo haces para verte tan hermosa incluso en los momentos más simples… pero esa flor en tu cabello y esa sonrisa tuya hicieron que te vieras literalmente como la niña más preciosa del universo. 🌸🥺",
  },

  {
    img: foto7,
    text: "Hacer este cuadro fue mi manera de guardar un pedacito de nosotros para siempre. Porque nuestra historia merece quedarse viva incluso en los pequeños detalles que nacen desde el amor. 🖼️❤️",
  }
  ];

  return (
    <div className="storyFour">
      <audio ref={audioRef} src={amorMp3} />

      <div className="hearts-bg">
        <span>❤️</span>
        <span>💕</span>
        <span>💖</span>
        <span>✨</span>
        <span>❤️</span>
        <span>🏡</span>
        <span>💞</span>
        <span>🌙</span>
      </div>

      <div className="storyFour__card">
        <button
          className="storyFour__close"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="storyFour__title">
          Nuestro Cuarto Mes ❤️
        </h2>

        <div className="storyFour__list">
  {items.map((item, i) => (
    <div
      key={i}
      className={
        i % 2 === 0
          ? "storyFour__memory"
          : "storyFour__memory storyFour__memory--reverse"
      }
    >
      <div className="storyFour__image-box">
        <img
          src={item.img}
          className="storyFour__img"
          alt=""
        />

        <div className="storyFour__image-glow"></div>
      </div>

      <div className="storyFour__content">
        <div className="storyFour__number">
          0{i + 1}
        </div>

        <p className="storyFour__text">
          {item.text}
        </p>
      </div>
    </div>
  ))}
</div>

        <div className="storyFour__final">
          <p>
            Mi amor hermosa ❤️
            <br />
            <br />
            Hoy cumplimos nuestro cuarto mes juntos…
            y sinceramente siento que este mes fue
            uno de los más especiales de todos. 🥺✨
            <br />
            <br />
            Porque después de todo lo que vivimos,
            después de las dudas, la distancia
            y los momentos difíciles…
            aquí seguimos.
            Más fuertes.
            Más unidos.
            Más enamorados. ❤️
            <br />
            <br />
            Y vivir contigo esta semana
            me hizo entender algo muy bonito:
            no necesito grandes cosas para ser feliz…
            mientras esté contigo,
            cualquier lugar se siente como hogar. 🏡
            <br />
            <br />
            Me encantó compartir contigo
            esos pequeños momentos simples,
            dormir juntos,
            despertar a tu lado,
            abrazarte,
            molestarte,
            reír contigo,
            verte cerquita…
            todo eso quedó guardado
            en una parte muy especial de mi corazón. 🥺
            <br />
            <br />
            Gracias por seguir aquí conmigo.
            Gracias por volver.
            Gracias por amarme incluso en mis peores momentos.
            ❤️
            <br />
            <br />
            Y aunque no seamos perfectos,
            quiero que nunca olvides algo:
            yo sí quiero seguir construyendo
            una vida contigo. ✨
            <br />
            <br />
            Te amo muchísimo mi niña hermosa.
            Y ojalá este sea apenas
            uno de muchísimos meses más juntos. ❤️🌙
          </p>
        </div>

        <div className="storyFour__sign">
          <div className="storyFour__line"></div>

          <p>
            Con todo mi amor para ti mi Fer❤️
          </p>

          <div className="storyFour__line"></div>
        </div>
      </div>
    </div>
  );
}

export default NoteFour;