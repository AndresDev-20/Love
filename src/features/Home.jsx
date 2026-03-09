import "./home.css";
import Mont from "./mont_one/Mont";
import MontTwo from "./Mont_two/montTwo";

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
      <MontTwo />
      <Mont />
      </div>
    </div>
  );
}

export default Home;
