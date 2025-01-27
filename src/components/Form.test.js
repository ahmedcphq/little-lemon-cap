import { render, screen, cleanup } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initialzeTimes, updateTimes } from "../utils/helpers";
import * as Yup from "yup";

afterEach(cleanup);

describe("Form label", () => {
  test("Renders the BookingForm label for date input", () => {
    render(<BookingForm />);
    const dateElement = screen.getByLabelText("Choose date");
    expect(dateElement).toBeInTheDocument();
  });
});

describe("Initialize times", () => {
  test("Update times correctly", () => {
    const initialTimes = initialzeTimes();

    expect(initialTimes).toBeInstanceOf(Array);
    expect(initialTimes.length).toBeGreaterThan(0);
  });
});

describe("Update times", () => {
  test("Update times when choosing Today", () => {
    const initialTimes = initialzeTimes();

    const mockToday = new Date().getDate();
    const action = { type: "UPDATE_TIMES", date: mockToday };
    const updatedTimes = updateTimes(initialTimes, action);

    expect(updatedTimes).toBeInstanceOf(Array);
    expect(updatedTimes.length).toBeGreaterThan(0);
  });
});

const availableTimes = ["12:00", "13:00", "14:00"];
const setDate = jest.fn();
const submit = jest.fn();

describe("BookingForm", () => {
  test("Date input field has correct attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        setDate={setDate}
        submit={submit}
      />
    );
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("id", "date");
    expect(dateInput).toHaveAttribute("name", "date");
    expect(dateInput).toHaveAttribute("required");
  });

  test("Time select field has correct attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        setDate={setDate}
        submit={submit}
      />
    );
    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toHaveAttribute("id", "time");
    expect(timeSelect).toHaveAttribute("name", "time");
    expect(timeSelect).toHaveAttribute("required");
  });

  test("Guests input field has correct attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        setDate={setDate}
        submit={submit}
      />
    );
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("id", "guests");
    expect(guestsInput).toHaveAttribute("name", "guests");
    expect(guestsInput).toHaveAttribute("placeholder", "1");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("Occasion select field has correct attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        setDate={setDate}
        submit={submit}
      />
    );
    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).toHaveAttribute("id", "occasion");
    expect(occasionSelect).toHaveAttribute("name", "occasion");
  });

  test("Submit button is disabled when form is invalid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        setDate={setDate}
        submit={submit}
      />
    );
    const submitButton = screen.getByRole("button", {
      name: /Make Your Reservation/i,
    });
    expect(submitButton).toBeDisabled();
  });
});

describe("Validation schema", () => {
  const bookingSchema = Yup.object({
    date: Yup.string().required("Date is required."),
    time: Yup.string().required("Time is required."),
    guests: Yup.number()
      .min(1, "Guests must be at least 1.")
      .max(10, "Guests cannot exceed 10.")
      .required("Number of guests is required."),
    occasion: Yup.string().required("Please select an occasion."),
  });

  test("Validates date correctly", async () => {
    await expect(
      bookingSchema.isValid({
        date: "",
        time: "12:00",
        guests: 2,
        occasion: "Birthday",
      })
    ).resolves.toBe(false);
    await expect(
      bookingSchema.isValid({
        date: "2023-10-10",
        time: "12:00",
        guests: 2,
        occasion: "Birthday",
      })
    ).resolves.toBe(true);
  });

  test("Validates time correctly", async () => {
    await expect(
      bookingSchema.isValid({
        date: "2023-10-10",
        time: "",
        guests: 2,
        occasion: "Birthday",
      })
    ).resolves.toBe(false);
    await expect(
      bookingSchema.isValid({
        date: "2023-10-10",
        time: "12:00",
        guests: 2,
        occasion: "Birthday",
      })
    ).resolves.toBe(true);
  });

  test("Validates guests correctly", async () => {
    await expect(
      bookingSchema.isValid({
        date: "2023-10-10",
        time: "12:00",
        guests: 0,
        occasion: "Birthday",
      })
    ).resolves.toBe(false);
    await expect(
      bookingSchema.isValid({
        date: "2023-10-10",
        time: "12:00",
        guests: 11,
        occasion: "Birthday",
      })
    ).resolves.toBe(false);
    await expect(
      bookingSchema.isValid({
        date: "2023-10-10",
        time: "12:00",
        guests: 5,
        occasion: "Birthday",
      })
    ).resolves.toBe(true);
  });

  test("Validates occasion correctly", async () => {
    await expect(
      bookingSchema.isValid({
        date: "2023-10-10",
        time: "12:00",
        guests: 2,
        occasion: "",
      })
    ).resolves.toBe(false);
    await expect(
      bookingSchema.isValid({
        date: "2023-10-10",
        time: "12:00",
        guests: 2,
        occasion: "Birthday",
      })
    ).resolves.toBe(true);
  });
});
