import "./About.css";
import Owners1 from "../assets/Owners1.jpg";
import Owners2 from "../assets/Owners2.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div className="image-wrapper">
          <img
            src={Owners1}
            alt="food served"
            className="about-img"
            style={{ marginTop: 30 }}
          />
          <img src={Owners2} alt="food served" className="about-img last" />
        </div>
      </div>
    </section>
  );
};
export default About;
