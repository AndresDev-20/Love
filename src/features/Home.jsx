import "./home.css";
import MontFive from "./mont_five/MontFive";
import MontFourt from "./mont_fourt/MontFourt";
import Mont from "./mont_one/Mont";
import MontSeven from "./mont_seven/MontSevent";
import MontSix from "./mont_six/MontSix";
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
        <MontSeven/>
        <MontSix/>
        <MontFive/>
      <MontFourt />
      <MontThree />
      <MontTwo />
      <Mont />
      </div>
    </div>
  );
}

export default Home;
