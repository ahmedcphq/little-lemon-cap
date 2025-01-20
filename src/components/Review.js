import Star from "../assets/Star.svg";

const Review = ({ image, rate, name, review }) => {
  return (
    <div className="review">
      <div id="stars">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={Star} alt="star" />
        ))}
      </div>
      <div>
        <img src={image} alt={name} />
        <h5>{name}</h5>
      </div>
      <p>
        <q>{review}</q>
      </p>
    </div>
  );
};
export default Review;
