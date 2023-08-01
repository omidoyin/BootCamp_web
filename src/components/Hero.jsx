import "../styles/hero.css";
import img3 from "../assets/img3.jpg";
const Hero = () => {
  return (
    <section className="hero">
      <img src={img3} alt="" width='800' height='800'/>
      <h1>It's Bootcamp's time..... let's Code Together</h1>
    </section>
  );
};

export default Hero;
