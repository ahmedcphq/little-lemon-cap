import Button from "./Button";
import Salad from "../assets/Salad.jpg";
import Bruchetta from "../assets/Bruchetta.jpg";
import Dessert from "../assets/Dessert.jpg";
import "./Specials.css";
import Card from "./Card";

const cards = [
  {
    image: Salad,
    title: "Greek salad",
    price: "12.99",
    text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: Bruchetta,
    title: "Bruchetta",
    price: "5.99",
    text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    image: Dessert,
    title: "Lemon Dessert",
    price: "5.00",
    text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
  },
];

const Specials = () => {
  return (
    <section class="specials">
      <div className="title">
        <h1>This weeks specials!</h1>
        <Button />
      </div>
      <div className="cards">
        {cards.map(({ image, ...rest }) => {
          return <Card img={image} {...rest} />;
        })}
      </div>
    </section>
  );
};
export default Specials;
