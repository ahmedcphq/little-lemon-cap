import Button from "./Button";

const BookingForm = ({ availableTimes, dispatch, inputs, setInputs }) => {
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
  //   }),
  //   occasion: Yup.string().optional(),
  // });

  const handleDateChange = (e) => {
    const date = e.target.value;

    setInputs((prev) => ({ ...prev, date: date }));
    dispatch({ type: "CHECK_TIMES", date: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE_TIMES", time: inputs?.time, date: inputs?.date });

    setInputs({
      date: "",
      time: "",
      guests: 1,
      occasion: "Birthday",
    });
  };

  console.log(inputs.date);

  return (
    <form id="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="res-date" className="label" aria-required>
          <h4>Choose date</h4>
        </label>
        <input
          type="date"
          id="res-date"
          value={inputs?.date}
          onChange={handleDateChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="res-time">
          <h4>Choose time</h4>
        </label>
        <select
          id="res-time "
          value={inputs?.time}
          onChange={(e) =>
            setInputs((prev) => ({ ...prev, time: e.target.value }))
          }
          required
          disabled={!inputs?.date}
        >
          <option value="">Select Time</option>
          {availableTimes?.[inputs?.date] &&
          availableTimes?.[inputs.date] < 1 ? (
            <option value="">No Booking available for this day</option>
          ) : availableTimes?.[inputs?.date] ? (
            availableTimes?.[inputs?.date].map((t, i) => (
              <option key={i}>{t}</option>
            ))
          ) : (
            availableTimes?.init.map((t, i) => <option key={i}>{t}</option>)
          )}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="guests">
          <h4>Number of guests</h4>
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
      </div>
      <div className="form-group">
        <label htmlFor="occasion">
          <h4>Occasion</h4>
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
      </div>
      <Button type="submit" className="reserve-button">
        Make Your reservation
      </Button>
    </form>
  );
};
export default BookingForm;
