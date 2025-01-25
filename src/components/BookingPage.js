// import { useFormik } from "formik";
// import * as Yup from "yup";

import HeroContainer from "./HeroContainer";
import "./Booking.css";
import BookingForm from "./BookingForm";
import { useReducer, useState } from "react";

export const initialzeTimes = () => {
  return { init: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] };
};

const checkTimes = (date, times) => {
  if (!times[date]) {
    return { ...times, [date]: [...initialzeTimes().init] };
  }
  return times;
};

export function updateTimes(times, action) {
  const initTimes = times[0];

  switch (action.type) {
    case "UPDATE_TIMES":
      const { date, time } = action;
      const updatedTimes = times[date].filter((t) => t !== time);
      return { ...times, [date]: updatedTimes };

    case "CHECK_TIMES":
      const checkedTimes = checkTimes(action.date, times);

      return checkedTimes;
    default:
      return initTimes;
  }
}

const BookingPage = () => {
  const [inputs, setInputs] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initialzeTimes
  );

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
            />
          </HeroContainer>
        </section>
      </main>
      <div style={{ maxHeight: "0px" }}></div>
    </>
  );
};
export default BookingPage;
