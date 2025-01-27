import { Link } from "react-router-dom";
import HeroContainer from "./HeroContainer";

const ConfirmedBooking = () => {
  return (
    <>
      <main className="main-booking">
        <section className="booking-wrapper">
          <HeroContainer>
            <Link to="/reservations" style={{ color: "ButtonHighlight" }}>
              <h3>
                <span>{"<"}</span>Back to reservation
              </h3>
            </Link>
            <h2 style={{ padding: "5rem", textAlign: "center" }}>
              Thanks for your booking
            </h2>
          </HeroContainer>
        </section>
      </main>
      <div style={{ maxHeight: "0px" }}></div>
    </>
  );
};
export default ConfirmedBooking;
