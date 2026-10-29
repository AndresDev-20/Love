import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./note.css";
import "./loveLetter.css";
import YouTubeSong from "../music/YouTubeSong";
import { useLockScroll } from "../../hooks/useLetter";

function LoveLetter({ title, paragraphs, signature, youtube, onClose }) {
    // Primero se ve el sobre abriéndose, después la carta
    const [opened, setOpened] = useState(false);

    useLockScroll();

    useEffect(() => {
        const timer = setTimeout(() => setOpened(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    // Se monta en el body para que siempre cubra toda la pantalla
    return createPortal(
        <div className="note letter" onClick={onClose}>
            {!opened ? (
                <div className="envelope" aria-hidden="true">
                    <div className="envelope__back"></div>
                    <div className="envelope__paper"></div>
                    <div className="envelope__front"></div>
                    <div className="envelope__flap"></div>
                    <span className="envelope__seal">❤️</span>
                </div>
            ) : (
                <div className="note__card letter__card" onClick={(e) => e.stopPropagation()}>
                    <span className="letter__handle" aria-hidden="true"></span>
                    <button className="note__close" onClick={onClose}>✕</button>

                    <div className="note__decor note__decor--top"></div>

                    <h2 className="note__title">{title}</h2>

                    {youtube && <YouTubeSong {...youtube} />}

                    <div className="note__content">
                        {paragraphs.map((text, index) => (
                            <p
                                key={index}
                                className="letter__line"
                                style={{ animationDelay: `${0.5 + index * 0.35}s` }}
                            >
                                {text}
                            </p>
                        ))}
                    </div>

                    <p className="note__footer">{signature}</p>

                    <div className="note__decor note__decor--bottom"></div>
                </div>
            )}
        </div>,
        document.body
    );
}

export default LoveLetter;
