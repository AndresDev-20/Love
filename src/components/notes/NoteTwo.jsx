import { useEffect, useRef } from "react";
import "./loveCollageTwo.css";

import amorMp3 from "../../assets/music/music_two.mp4";

import foto1 from "../../assets/images/f1.jpeg";
import foto2 from "../../assets/images/f2.jpeg";
import foto3 from "../../assets/images/f3.jpeg";
import foto4 from "../../assets/images/f4.jpeg";
import foto5 from "../../assets/images/f5.jpeg";

function LoveCollageTwo({ onClose }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.play().catch(() => {});
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  const items = [
    {
      img: foto1,
      text: "Desde que llegaste a mi vida todo cambió, cada día contigo es más bonito que el anterior y mi corazón es más feliz cuando estás conmigo.",
    },
    {
      img: foto2,
      text: "Dos meses contigo y siento que nuestro amor crece más fuerte cada día, eres mi paz, mi alegría y la persona con la que quiero seguir todo.",
    },
    {
      img: foto3,
      text: "A tu lado encontré lo que siempre soñé, alguien que me entiende, que me cuida y que hace que mi vida tenga sentido.",
    },
    {
      img: foto4,
      text: "Gracias por estar conmigo, por apoyarme, por amarme y por hacerme sentir que contigo quiero quedarme para siempre.",
    },
    {
      img: foto5,
      text: "Y esta foto me hace soñar aún más contigo, porque sé que algún día Dios nos mandará una bendición así, y quiero que sea contigo con quien forme una familia.",
    },
  ];

  return (
    <div className="storyLove">
      <audio ref={audioRef} src={amorMp3} />

      <div className="storyLove__card">
        <button className="storyLove__close" onClick={onClose}>
          ✕
        </button>

        <h2 className="storyLove__title">Nuestro Segundo Mes ❤️</h2>

        <div className="storyLove__list">
          {items.map((item, i) => (
            <div
              key={i}
              className={
                i % 2 === 0
                  ? "storyLove__row"
                  : "storyLove__row storyLove__row--reverse"
              }
            >
              <div className="storyLove__text">{item.text}</div>

              <img src={item.img} className="storyLove__img" />
            </div>
          ))}
        </div>

        <div className="storyLove__final">
          <p>
            Mi amor ❤️ Hoy celebramos nuestro segundo mes juntos, y quiero que
            sepas lo feliz que me haces cada día. Desde que llegaste a mi vida
            todo cambió, todo tiene más sentido, todo es más bonito cuando estás
            conmigo. Gracias por amarme, por apoyarme, por entenderme, por estar
            en los momentos buenos y también en los difíciles. Contigo aprendí
            que el amor verdadero sí existe, y que cuando dos personas se
            quieren de verdad, todo se vuelve posible. ✨ Me encanta tu sonrisa,
            tu forma de ser, tu manera de mirarme, tu voz, tus abrazos, todo de
            ti me hace sentir en casa. 🥺❤️ Quiero que sepas que no solo te amo
            por lo que eres hoy, sino también por todo lo que vamos a construir
            juntos. Sueño con un futuro contigo, con una familia contigo, con
            una vida entera a tu lado. 👶❤️ Gracias por estos dos meses tan
            hermosos, y gracias por ser la persona que quiero elegir todos los
            días de mi vida. Te amo más de lo que puedo explicar, más de lo que
            puedo escribir, y más de lo que cualquier palabra pueda decir. ❤️✨
          </p>
        </div>
        <div className="storyLove__sign">
          <div className="storyLove__line"></div>

          <p>Con todo mi amor para ti mi Fer ❤️</p>

          <div className="storyLove__line"></div>
        </div>
      </div>
    </div>
  );
}

export default LoveCollageTwo;
