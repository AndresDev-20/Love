import "./loveCollageFive.css";

import { useEffect, useRef } from "react";

import amorMp3 from "../../assets/music/song_five.mp3";

// ===================
// IMÁGENES
// ===================

import foto1 from "../../assets/images/mont_05/a1.jpeg";
import foto2 from "../../assets/images/mont_05/a2.jpeg";
import foto3 from "../../assets/images/mont_05/a3.jpeg";
import foto4 from "../../assets/images/mont_05/a4.jpeg";
import foto5 from "../../assets/images/mont_05/a5.jpeg";
import foto6 from "../../assets/images/mont_05/a6.jpeg";
import foto7 from "../../assets/images/mont_05/a7.jpeg";
import foto8 from "../../assets/images/mont_05/a8.jpeg";

function NoteFive({ onClose }) {

    const audioRef = useRef(null);

    useEffect(() => {

        const audio = audioRef.current;

        if (audio) {

            audio.volume = 0.15;

            audio.play().catch(() => {});

            let volume = 0.15;

            const interval = setInterval(() => {

                if (volume < 0.65) {

                    volume += 0.02;

                    audio.volume = volume;

                }

            },500);

            return () => {

                clearInterval(interval);

                audio.pause();

                audio.currentTime = 0;

            };

        }

    },[]);

    const memories=[

        {

            img:foto1,

            title:"Un recuerdo hermoso ❤️",

            text:"Aquí escribirás el primer recuerdo del quinto mes."

        },

        {

            img:foto2,

            title:"Mi lugar favorito 🥹",

            text:"Aquí escribirás el segundo recuerdo."

        },

        {

            img:foto3,

            title:"Siempre tú ✨",

            text:"Aquí escribirás el tercero."

        },

        {

            img:foto4,

            title:"Nuestro camino 🛵",

            text:"Texto del cuarto recuerdo."

        },

        {

            img:foto5,

            title:"Momentos pequeños ❤️",

            text:"Texto del quinto."

        },

        {

            img:foto6,

            title:"Tu sonrisa 🌸",

            text:"Texto del sexto."

        },

        {

            img:foto7,

            title:"Lo que somos 💖",

            text:"Texto del séptimo."

        },

        {

            img:foto8,

            title:"Nuestro futuro ✨",

            text:"Texto del octavo."

        }

    ];

    return(

        <div className="storyFive">

            <audio
                ref={audioRef}
                src={amorMp3}
                loop
            />

            <div className="storyFive__particles">

                <span>❤️</span>
                <span>💕</span>
                <span>✨</span>
                <span>🌸</span>
                <span>💖</span>
                <span>💞</span>
                <span>🤍</span>
                <span>🌙</span>

            </div>

            <div className="storyFive__card">

                <button

                    className="storyFive__close"

                    onClick={onClose}

                >

                    ✕

                </button>

                <header className="storyFive__hero">

                    <p className="storyFive__mini">

                        ❤️ CINCO MESES ❤️

                    </p>

                    <h1>

                        Gracias por seguir aquí

                    </h1>

                    <p>

                        Cinco meses pueden parecer pocos para muchas personas.

                        Para mí...

                        han sido suficientes para descubrir

                        que eres el amor más bonito

                        que ha llegado a mi vida.

                    </p>

                </header>

                <section className="storyFive__gallery">

                    {

                        memories.map((item,index)=>(

                            <article

                                key={index}

                                className="storyFive__memory"

                                style={{

                                    animationDelay:`${index*0.35}s`

                                }}

                            >

                                <div className="storyFive__photo">

                                    <img

                                        src={item.img}

                                        alt={item.title}

                                    />

                                </div>

                                <div className="storyFive__info">

                                    <h2>

                                        {item.title}

                                    </h2>

                                    <p>

                                        {item.text}

                                    </p>

                                </div>

                            </article>

                        ))

                    }

                </section>

                <section className="storyFive__letter">

                    <h2>

                        Una carta para ti ❤️

                    </h2>

                    <p>

                        Aquí irá la carta grande.

                        Esta vez será muchísimo más bonita que la del cuarto mes.

                        La vamos a dividir en capítulos para que parezca escrita como un libro.

                    </p>

                </section>

                <section className="storyFive__final">

                    <h2>

                        Gracias por existir.

                    </h2>

                    <p>

                        Si algún día vuelves a abrir esta aplicación...

                        quiero que recuerdes que aquí quedó guardado un pedacito de todo el amor que siento por ti.

                        ❤️

                    </p>

                    <div className="storyFive__signature">

                        Con todo mi amor,

                        <br />

                        Andrés ❤️

                    </div>

                </section>

            </div>

        </div>

    );

}

export default NoteFive;