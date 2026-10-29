import { useEffect } from "react";

// Reproduce la canción solo mientras la carta está abierta.
// Se pausa si ella bloquea el celular o cambia de app, y sigue al volver.
export function useLetterAudio(audioRef, volume = 0.6) {
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = volume;
        audio.play().catch(() => {});

        const onVisibility = () => {
            if (document.hidden) audio.pause();
            else audio.play().catch(() => {});
        };
        document.addEventListener("visibilitychange", onVisibility);

        return () => {
            document.removeEventListener("visibilitychange", onVisibility);
            audio.pause();
            audio.currentTime = 0;
        };
    }, [audioRef, volume]);
}

// Evita que la página de atrás se mueva mientras la carta está abierta.
export function useLockScroll() {
    useEffect(() => {
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previous;
        };
    }, []);
}
