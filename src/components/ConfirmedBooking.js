import HeroContainer from "./HeroContainer";

const ConfirmedBooking = () => {
  return (
    <>
      <main className="main-booking">
        <section className="booking-wrapper">
          <HeroContainer>
            <h2 style={{ padding: "5rem", textAlign: "center" }}>
              Thanks for you booking on {`date`}
            </h2>
          </HeroContainer>
        </section>
      </main>
      <div style={{ maxHeight: "0px" }}></div>
    </>
  );
};
export default ConfirmedBooking;
