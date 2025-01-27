// import { useFormik } from "formik";
// import * as Yup from "yup";

import HeroContainer from "./HeroContainer";
import "./Booking.css";
import BookingForm from "./BookingForm";
import { useEffect, useReducer, useState } from "react";
import { submitAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { initialzeTimes, updateTimes } from "../utils/helpers";

const BookingPage = () => {
  const [inputs, setInputs] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [response, setResponse] = useState(false);

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initialzeTimes
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (inputs.date) {
      dispatch({ type: "UPDATE_TIMES", date: inputs.date });
    }
  }, [inputs.date]);

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
              inputs={inputs}
              setInputs={setInputs}
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
