import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initialzeTimes, updateTimes } from "./components/BookingPage";

describe("Form label", () => {
  test("Renders the BookingForm label for date input", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
  });
});

describe("Inotialize the booking times", () => {
  test("should return the standard initial times", () => {
    const datesInput = screen.getAllByLabelText(/Choose date/);

    fireEvent.change(datesInput, { target: { value: "2025-01-24" } });

    const expectedValue = {
      init: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    };

    const result = initialzeTimes();
    expect(result).toEqual(expectedValue);
  });
});
