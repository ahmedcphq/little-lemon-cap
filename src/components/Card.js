import Delivery from "../assets/Delivery.jpg";

const Card = ({ img, title, price, text }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className="head">
        <h5>{title}</h5>
        <p className="highlight">${price}</p>
      </div>
      <article>
        <p>{text}</p>
      </article>
      <div className="card-footer">
        <h5>Order a delivery</h5>
        <img src={Delivery} alt="Delivery icon" height={20} />
      </div>
    </div>
  );
};
export default Card;
