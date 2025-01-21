import HeroPhoto from "../assets/HeroPhoto.jpg";
import Button from "./Button";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <article className="content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button />
        </article>
        <div className="image-wrapper">
          <img src={HeroPhoto} alt="food served" className="hero-img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
