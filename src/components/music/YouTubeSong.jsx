import { useEffect, useRef } from "react";
import "./youTubeSong.css";

// Canción de YouTube que vive solo mientras la carta está abierta:
// al cerrar la carta el iframe se desmonta y la música se detiene.
function YouTubeSong({ id, title, artist }) {
    const frameRef = useRef(null);

    const send = (func, args = []) => {
        frameRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func, args }),
            "*"
        );
    };

    useEffect(() => {
        const onVisibility = () => send(document.hidden ? "pauseVideo" : "playVideo");
        document.addEventListener("visibilitychange", onVisibility);
        return () => document.removeEventListener("visibilitychange", onVisibility);
    }, []);

    const params = new URLSearchParams({
        autoplay: "1",
        loop: "1",
        playlist: id,
        playsinline: "1",
        enablejsapi: "1",
        rel: "0",
        modestbranding: "1",
    });

    return (
        <div className="song">
            <div className="song__info">
                <span className="song__disc" aria-hidden="true">💿</span>
                <div>
                    <p className="song__label">Nuestra canción de este mes</p>
                    <p className="song__title">{title}</p>
                    <p className="song__artist">{artist}</p>
                </div>
            </div>

            <div className="song__frame">
                <iframe
                    ref={frameRef}
                    src={`https://www.youtube-nocookie.com/embed/${id}?${params}`}
                    title={title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    onLoad={() => send("setVolume", [60])}
                />
            </div>

            <p className="song__hint">Si no suena sola, tócala ▶</p>
        </div>
    );
}

export default YouTubeSong;
