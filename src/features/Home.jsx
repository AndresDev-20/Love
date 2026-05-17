import "./home.css";
import MontFourt from "./mont_fourt/MontFourt";
import Mont from "./mont_one/Mont";
import MontThree from "./mont_three/MontThree";
import MontTwo from "./mont_two/MontTwo";

function Home() {
  return (
    <div className="home">
      <div class="hearts">
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
        <span class="heart"></span>
      </div>
      <div className="home__content">
      <MontFourt />
      <MontThree />
      <MontTwo />
      <Mont />
      </div>
    </div>
  );
}

export default Home;
