import { render, screen, cleanup } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initialzeTimes, updateTimes } from "../utils/helpers";

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
