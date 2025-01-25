import "./About.css";
import Owners1 from "../assets/Owners1.jpg";
import Owners2 from "../assets/Owners2.jpg";
import HeroContainer from "./HeroContainer";
import HeroText from "./HeroText";

const images = [
  { img: Owners1, alt: "owners photo", className: "about-img first" },
  { img: Owners2, alt: "2nd owners photo", className: "about-img last" },
];

const About = () => {
  return (
    <section id="about">
      <HeroContainer imgs={images} img2={images}>
        <HeroText />
      </HeroContainer>
    </section>
  );
};
export default About;
