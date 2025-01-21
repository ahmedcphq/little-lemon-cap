import "./Testimonials.css";
import Sam from "../assets/Sam.png";
import John from "../assets/John.webp";
import Rose from "../assets/Rose.png";
import Ralph from "../assets/Ralph.png";
import Review from "./Review";

const reviews = [
  {
    image: Sam,
    name: "Sam",
    rate: 5,
    review: "Delicious food, great service!",
  },
  {
    image: John,
    name: "John",
    rate: 5,
    review: "Loved everything, highly recommend!",
  },
  {
    image: Rose,
    name: "Rose",
    rate: 5,
    review: "Amazing flavors, will return!",
  },
  {
    image: Ralph,
    name: "Ralph",
    rate: 5,
    review: "Perfect spot, great vibes!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="reviews">
        {reviews.map(({ ...props }, i) => (
          <Review key={i} {...props} />
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
