import { useEffect, useRef, useState } from "react";
import "./youTubeSong.css";

// Carga la API de YouTube una sola vez para todas las cartas
let apiPromise;
function loadYouTubeApi() {
    if (window.YT?.Player) return Promise.resolve(window.YT);
    if (!apiPromise) {
        apiPromise = new Promise((resolve) => {
            const previous = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
                previous?.();
                resolve(window.YT);
            };
            const script = document.createElement("script");
            script.src = "https://www.youtube.com/iframe_api";
            document.head.appendChild(script);
        });
    }
    return apiPromise;
}

// Canción de YouTube que suena sola mientras la carta está abierta.
// No tiene controles: no se puede pausar ni adelantar.
function YouTubeSong({ id, fallback, title, artist }) {
    const holderRef = useRef(null);
    const [needsTap, setNeedsTap] = useState(false);

    useEffect(() => {
        let player;
        let checkTimer;
        let cancelled = false;
        let usedFallback = false;

        // Si el celular no deja sonar con audio, arranca en silencio
        // y se activa el sonido con el primer toque de ella.
        const unlock = () => {
            if (!player?.unMute) return;
            player.unMute();
            player.setVolume(70);
            player.playVideo();
            setNeedsTap(false);
        };

        const onVisibility = () => {
            if (!player?.pauseVideo) return;
            if (document.hidden) player.pauseVideo();
            else player.playVideo();
        };

        loadYouTubeApi().then((YT) => {
            if (cancelled || !holderRef.current) return;

            const mount = document.createElement("div");
            holderRef.current.appendChild(mount);

            player = new YT.Player(mount, {
                videoId: id,
                host: "https://www.youtube-nocookie.com",
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    disablekb: 1,
                    fs: 0,
                    playsinline: 1,
                    rel: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                },
                events: {
                    onReady: (e) => {
                        e.target.setVolume(70);
                        e.target.playVideo();

                        // Si después de un momento ni siquiera empezó a cargar,
                        // el navegador bloqueó el sonido: se pone en silencio.
                        checkTimer = setTimeout(() => {
                            const state = e.target.getPlayerState();
                            if (state === YT.PlayerState.UNSTARTED || state === YT.PlayerState.CUED) {
                                e.target.mute();
                                e.target.playVideo();
                                setNeedsTap(true);
                            }
                        }, 2500);
                    },
                    onStateChange: (e) => {
                        // Al terminar vuelve a empezar
                        if (e.data === YT.PlayerState.ENDED) {
                            e.target.seekTo(0);
                            e.target.playVideo();
                        }
                    },
                    onError: (e) => {
                        // Si YouTube no deja reproducir ese video aquí, usa el de respaldo
                        if (fallback && !usedFallback) {
                            usedFallback = true;
                            e.target.loadVideoById(fallback);
                        }
                    },
                },
            });
        });

        document.addEventListener("pointerdown", unlock);
        document.addEventListener("visibilitychange", onVisibility);

        return () => {
            cancelled = true;
            clearTimeout(checkTimer);
            document.removeEventListener("pointerdown", unlock);
            document.removeEventListener("visibilitychange", onVisibility);
            player?.destroy?.();
        };
    }, [id, fallback]);

    return (
        <div className="song">
            <div className="song__info">
                <span className="song__disc" aria-hidden="true">💿</span>
                <div>
                    <p className="song__label">Nuestra canción de este mes</p>
                    <p className="song__title">{title}</p>
                    <p className="song__artist">{artist}</p>
                </div>
                <span className="song__bars" aria-hidden="true">
                    <i></i><i></i><i></i><i></i>
                </span>
            </div>

            <div className="song__frame">
                <div ref={holderRef}></div>
                {needsTap && (
                    <button className="song__tap" type="button">
                        🔊 Toca para escuchar
                    </button>
                )}
            </div>
        </div>
    );
}

export default YouTubeSong;
