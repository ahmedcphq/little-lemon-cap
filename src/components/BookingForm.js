import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./Button";

const bookingSchema = Yup.object({
  date: Yup.string().required("Date is required."),
  time: Yup.string().required("Time is required."),
  guests: Yup.number()
    .min(1, "Guests must be at least 1.")
    .max(10, "Guests cannot exceed 10.")
    .required("Number of guests is required."),
  occasion: Yup.string().required("Please select an occasion."),
});

const BookingForm = ({ availableTimes, setDate, submit }) => {
  const initialValues = { date: "", time: "", guests: 1, occasion: "Birthday" };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={bookingSchema}
      onSubmit={submit}
    >
      {({ isSubmitting, values, setFieldValue, isValid }) => (
        <Form id="booking-form">
          <fieldset className="form-group">
            <label htmlFor="date" className="label" aria-required>
              Choose date
            </label>
            <Field
              type="date"
              id="date"
              name="date"
              className="form-control"
              onChange={(e) => {
                setDate(e.target.value);
                setFieldValue("date", e.target.value);
              }}
              required
            />
            <ErrorMessage name="date" component="span" className="error" />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="time" className="label">
              Choose time
            </label>
            <Field
              as="select"
              id="time"
              name="time"
              className="form-control"
              required
              disabled={!values.date}
            >
              <option value="">Select Time</option>
              {availableTimes && availableTimes < 1 ? (
                <option value="">No Booking available for this day</option>
              ) : (
                availableTimes?.map((t, i) => <option key={i}>{t}</option>)
              )}
            </Field>
            <ErrorMessage name="time" component="span" className="error" />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="guests" className="label">
              Number of guests
            </label>
            <Field
              type="number"
              id="guests"
              name="guests"
              placeholder="1"
              min="1"
              max="10"
              className="form-control"
            />
            <ErrorMessage name="guests" component="span" className="error" />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="occasion" className="label">
              Occasion
            </label>
            <Field
              as="select"
              id="occasion"
              name="occasion"
              className="form-control"
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </Field>
            <ErrorMessage name="occasion" component="span" className="error" />
          </fieldset>

          <Button
            type="submit"
            className={`reserve-button ${
              (isSubmitting || !isValid || !values.date) && "disabled"
            }`}
            disabled={isSubmitting || !isValid || !values.date}
          >
            {isSubmitting ? "Submitting..." : "Make Your Reservation"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default BookingForm;
