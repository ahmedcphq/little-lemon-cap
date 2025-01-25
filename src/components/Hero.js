import { Link } from "react-router-dom";
import HeroPhoto from "../assets/HeroPhoto.jpg";
import Button from "./Button";
import "./Hero.css";
import HeroContainer from "./HeroContainer";
import HeroText from "./HeroText";

const images = [{ img: HeroPhoto, alt: "food served", className: "hero-img" }];

const Hero = () => {
  return (
    <section className="hero">
      <HeroContainer imgs={images}>
        <HeroText />
        <Link to="/reservations">
          <Button className="reserve-button">Reserve a Table</Button>
        </Link>
      </HeroContainer>
    </section>
  );
};
export default Hero;
