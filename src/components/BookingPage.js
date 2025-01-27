import HeroContainer from "./HeroContainer";
import "./Booking.css";
import BookingForm from "./BookingForm";
import { useEffect, useReducer, useState } from "react";
import { submitAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { initialzeTimes, updateTimes } from "../utils/helpers";

const BookingPage = () => {
  const [date, setDate] = useState("");

  const [response, setResponse] = useState(false);

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initialzeTimes
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (date) {
      dispatch({ type: "UPDATE_TIMES", date: date });
    }
  }, [date]);

  useEffect(() => {
    if (response) {
      navigate("/confirmation");
    }
  }, [response, navigate]);

  const submitForm = (formData) => {
    const res = submitAPI(formData);

    setResponse(res);
  };

  return (
    <>
      <main className="main-booking">
        <section className="booking-wrapper">
          <HeroContainer>
            <BookingForm
              availableTimes={availableTimes}
              dispatch={dispatch}
              setDate={setDate}
              submit={submitForm}
            />
          </HeroContainer>
        </section>
      </main>
      <div style={{ maxHeight: "0px" }}></div>
    </>
  );
};
export default BookingPage;
