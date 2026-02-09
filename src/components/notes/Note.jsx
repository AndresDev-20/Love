import { useEffect, useRef } from "react";
import "./note.css";
import amorMp3 from "../../assets/music/song.mp4";

function Note({ onClose }) {
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


    return (
        <div className="note">
            <audio ref={audioRef} src={amorMp3} />

            <div className="note__card">
                <button className="note__close" onClick={onClose}>✕</button>

                <div className="note__decor note__decor--top"></div>

                <h2 className="note__title">Para Mi Amor</h2>

                <div className="note__content">
                    <p>Querida mía,</p>

                    <p>
                        En este día tan especial, quiero expresarte todo lo que
                        siento en mi corazón.
                    </p>

                    <p>
                        Eres la luz que ilumina mis días más oscuros, la melodía
                        que da ritmo a mi vida. Cada momento a tu lado es un
                        tesoro que atesoro profundamente.
                    </p>

                    <p>
                        Recuerdo la primera vez que te vi, cómo tu sonrisa
                        iluminó mi vida en aquel parque y cómo desde ese instante supe
                        que quería pasar el resto de mi vida contigo.
                    </p>

                    <p>
                        Tus ojos reflejan la profundidad del océano, y en ellos
                        me pierdo cada día. Tu risa es la música más dulce que
                        he escuchado, y tu amor es el regalo más valioso que he
                        recibido.
                    </p>

                    <p>
                        En este día, quiero prometerte que siempre estaré a tu
                        lado, en las buenas y en las malas, apoyándote,
                        amándote y construyendo un futuro juntos.
                    </p>

                    <p>
                        Eres mi inspiración, mi fortaleza y mi razón para ser
                        mejor cada día. Gracias por elegirme, por amarme y por
                        ser tú.
                    </p>
                </div>

                <p className="note__footer">Con todo mi amor pra ti mi Fer</p>

                <div className="note__decor note__decor--bottom"></div>
            </div>
        </div>
    );
}

export default Note;
