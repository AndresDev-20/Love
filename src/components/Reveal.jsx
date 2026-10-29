import { useEffect, useRef, useState } from "react";

// Hace aparecer cada mes con una animación cuando ella llega a él deslizando
function Reveal({ label, children }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className={`reveal ${visible ? "reveal--visible" : ""}`}>
            {label && <span className="reveal__label">{label}</span>}
            {children}
        </section>
    );
}

export default Reveal;
