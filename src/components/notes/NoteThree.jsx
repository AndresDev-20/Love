import { useEffect, useRef } from "react";
import "./loveCollageThree.css";

import amorMp3 from "../../assets/music/song_three.mp4";

function NoteThree({ onClose }) {
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

  return (
    <div className="storyLove storyLove--sad">
    <audio ref={audioRef} src={amorMp3} />

    <div className="broken-hearts">
      <span>💔</span>
      <span>🖤</span>
      <span>💔</span>
      <span>🥀</span>
      <span>💔</span>
      <span>🖤</span>
      <span>🥀</span>
      <span>💔</span>
      <span>🖤</span>
      <span>💔</span>
        <span>🥀</span>
    </div>
      <audio ref={audioRef} src={amorMp3} />

      <div className="storyLove__card storyLove__card--sad">
        <button
          className="storyLove__close"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="storyLove__title">
          Nuestro Tercer Mes ❤️
        </h2>

        <div className="storyLove__final">
          <p>
            Mi amor… ❤️
            <br />
            <br />
            Hoy debía ser nuestro tercer mes.
            Y aunque ya no podamos celebrarlo como antes,
            no quería dejar pasar esta fecha
            sin decirte todo lo que aún vive dentro de mi corazón. 🥺
            <br />
            <br />
            Tal vez la vida tomó otro camino para nosotros.
            Tal vez la distancia poco a poco nos fue apagando,
            y entiendo por qué tomaste esa decisión…
            pero hay algo que nunca va a cambiar:
            todo el amor que sigo sintiendo por ti. ❤️
            <br />
            <br />
            Quiero que sepas que jamás voy a arrepentirme
            de haberte conocido.
            Porque contigo viví momentos reales,
            momentos que hicieron feliz a mi corazón
            de una manera que nunca había sentido antes. ✨
            <br />
            <br />
            Y sí… te extraño muchísimo.
            Extraño tu voz,
            tus mensajes,
            tus risas,
            tus celos,
            tus “buenas noches”,
            y hasta las pequeñas cosas que antes parecían normales
            y hoy hacen demasiada falta. 🌙
            <br />
            <br />
            A veces quisiera regresar el tiempo
            solo para abrazarte un poquito más,
            para hablar contigo un rato más,
            o para quedarme unos minutos extra
            dentro de los momentos que más felices nos hicieron.
            <br />
            <br />
            No sé si algún día nuestros caminos volverán a cruzarse,
            pero sí sé algo:
            nunca voy a dejar de quererte.
            Porque hay personas que dejan huellas eternas,
            y tú eres exactamente eso para mí. ❤️
            <br />
            <br />
            Gracias por cada recuerdo,
            por cada sonrisa,
            por cada desvelo,
            por cada momento bonito que vivimos juntos.
            Gracias por haber sido mi hogar
            incluso estando tan lejos. 🥺
            <br />
            <br />
            Y aunque hoy ya no seas “mi novia”…
            en mi corazón siempre vas a ser
            una de las personas más importantes
            que han existido en mi vida.
            <br />
            <br />
            Te amo ayer,
            te amo hoy,
            y probablemente te siga amando
            en cada pedacito de mi alma por muchísimo tiempo más. ✨❤️
          </p>
        </div>

        <div className="storyLove__sign">
          <div className="storyLove__line"></div>

          <p>
            Con todo mi amor para ti mi Fer ❤️
          </p>

          <div className="storyLove__line"></div>
        </div>
      </div>
    </div>
  );
}

export default NoteThree;