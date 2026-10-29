import "./home.css";
import { useEffect } from "react";
import Reveal from "../components/Reveal";
import MontTen from "./mont_nine/MontTen";
import MontNine from "./mont_nine/MontNine";
import MontEight from "./mont_eight/MontEight";
import MontSeven from "./mont_seven/MontSevent";
import MontSix from "./mont_six/MontSix";
import MontFive from "./mont_five/MontFive";
import MontFourt from "./mont_fourt/MontFourt";
import MontThree from "./mont_three/MontThree";
import MontTwo from "./mont_two/MontTwo";
import Mont from "./mont_one/Mont";

// Posiciones fijas para que cada corazón caiga con su propio ritmo
const hearts = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 41) % 100}%`,
  duration: `${7 + (i % 6)}s`,
  delay: `${(i * 0.7) % 9}s`,
  scale: 0.6 + (i % 4) * 0.15,
}));

const months = [
  { label: "Mes 9", content: <MontNine /> },
  { label: "Mes 8", content: <MontEight /> },
  { label: "Mes 7", content: <MontSeven /> },
  { label: "Mes 6", content: <MontSix /> },
  { label: "Mes 5", content: <MontFive /> },
  { label: "Mes 4", content: <MontFourt /> },
  { label: "Mes 3", content: <MontThree /> },
  { label: "Mes 2", content: <MontTwo /> },
  { label: "Mes 1", content: <Mont /> },
];

// Lluvia de corazoncitos cada vez que ella toca un botón
function burstHearts(x, y) {
  const emojis = ["❤️", "💕", "💖", "✨", "💗"];
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("span");
    heart.className = "burst";
    heart.textContent = emojis[i % emojis.length];
    const angle = (Math.PI * 2 * i) / 10;
    const distance = 50 + (i % 3) * 22;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    heart.style.setProperty("--dy", `${Math.sin(angle) * distance - 30}px`);
    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}

function Home() {
  useEffect(() => {
    const onPointerDown = (e) => {
      if (e.target.closest(".mont__button")) burstHearts(e.clientX, e.clientY);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <div className="home">
      <div className="hearts">
        {hearts.map((heart, index) => (
          <span
            key={index}
            className="heart"
            style={{
              left: heart.left,
              animationDuration: heart.duration,
              animationDelay: heart.delay,
              scale: heart.scale,
            }}
          ></span>
        ))}
      </div>

      <header className="home__intro">
        <span className="home__beat" aria-hidden="true">💗</span>
        <h1 className="home__title">Nuestra Historia</h1>
        <p className="home__subtitle">enero — octubre 2026</p>
        <p className="home__subtitle home__subtitle--soft">
          nueve meses que se quedan guardados aquí
        </p>
        <span className="home__scroll" aria-hidden="true">
          desliza
          <br />⌄
        </span>
      </header>

      <div className="home__content">
        <Reveal>
          <MontTen />
        </Reveal>

        {months.map(({ label, content }) => (
          <Reveal key={label} label={label}>
            {content}
          </Reveal>
        ))}
      </div>

      <footer className="home__footer">
        hecho con amor, por Andrés 🤍
      </footer>
    </div>
  );
}

export default Home;
