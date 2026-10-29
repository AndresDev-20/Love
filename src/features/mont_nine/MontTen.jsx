import "./montNine.css";

// El décimo mes que no alcanzamos a vivir
function MontTen() {
  return (
    <div className="ten">
      <div className="ten__card">
        <p className="ten__month">Mes diez</p>
        <p className="ten__date">09-11-2026</p>
        <p className="ten__text">
          Aquí iba la carta del décimo mes.
          <br />
          Este espacio se queda vacío, pero lo que vivimos no.
        </p>
        <span className="ten__candle" aria-hidden="true">🕯️</span>
      </div>
    </div>
  );
}

export default MontTen;
