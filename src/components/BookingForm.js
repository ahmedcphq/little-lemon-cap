// import { useFormik } from "formik";
import Button from "./Button";
// import * as Yup from "yup";

const BookingForm = ({ availableTimes, inputs, setInputs, submit }) => {
  // const formik = useFormik({
  //   initialValues: {
  //     resDate: "",
  //     resTime: "",
  //     guests: 2,
  //     occasion: "",
  //   },
  //   onSubmit: (values) => {
  //     submit("url", values);
  //   },
  //   validationSchema: Yup.object({
  //     resDate: Yup.string().datetime().required("Required"),
  //     resTime: Yup.string().datetime().required("Required"),
  //     guests: Yup.number()
  //       .min(2, "Reservations require minimun 2 guests")
  //       .required("Required"),
  //     occasion: Yup.string().optional(),
  //   }),
  // });

  return (
    <form id="booking-form">
      <fieldset className="form-group">
        <label htmlFor="res-date" className="label" aria-required>
          Choose date
        </label>
        <input
          type="date"
          id="res-date"
          value={inputs?.date}
          onChange={(e) =>
            setInputs((prev) => ({ ...prev, date: e.target.value }))
          }
          required
        />
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="res-time" className="label">
          Choose time
        </label>
        <select
          id="res-time"
          value={inputs?.time}
          onChange={(e) =>
            setInputs((prev) => ({ ...prev, time: e.target.value }))
          }
          required
          disabled={!inputs?.date}
        >
          <option value="">Select Time</option>
          {availableTimes && availableTimes < 1 ? (
            <option value="">No Booking available for this day</option>
          ) : (
            availableTimes?.map((t, i) => <option key={i}>{t}</option>)
          )}
        </select>
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="guests" className="label">
          Number of guests
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={inputs?.guests}
          onChange={(e) =>
            setInputs((prev) => ({
              ...prev,
              guests: Number(e.target.value),
            }))
          }
        />
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="occasion" className="label">
          Occasion
        </label>
        <select
          id="occasion"
          value={inputs?.occasion}
          onChange={(e) =>
            setInputs((prev) => ({
              ...prev,
              occasion: e.target.value,
            }))
          }
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </fieldset>
      <Button
        type="submit"
        className="reserve-button"
        onClick={(e) => {
          e.preventDefault();
          submit(inputs);
        }}
      >
        Make Your reservation
      </Button>
    </form>
  );
};
export default BookingForm;
