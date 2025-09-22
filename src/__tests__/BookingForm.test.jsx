import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm"; // Adjust path if BookingForm is in another folder
import React from "react";

describe("BookingForm Component", () => {
  test("renders all input fields and submit button", () => {
    const mockSubmit = jest.fn(); // mock function for onSubmit
    render(<BookingForm onSubmit={mockSubmit} />);

    // Check inputs
    expect(screen.getByPlaceholderText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /name/i })).toBeInTheDocument; // optional
    expect(screen.getByDisplayValue("1")).toBeInTheDocument(); // guests input default value
    expect(screen.getByRole("button", { name: /Reserve Table/i })).toBeInTheDocument();
  });

  test("submits form with correct data", () => {
    const mockSubmit = jest.fn();
    render(<BookingForm onSubmit={mockSubmit} />);

    // Fill form
    fireEvent.change(screen.getByPlaceholderText(/Your Name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByDisplayValue(""), { target: { value: "2025-09-25" } }); // date
    fireEvent.change(screen.getByDisplayValue(""), { target: { value: "18:30" } }); // time
    fireEvent.change(screen.getByDisplayValue("1"), { target: { value: "4" } }); // guests

    // Submit form
    fireEvent.click(screen.getByRole("button", { name: /Reserve Table/i }));

    // Ensure onSubmit was called once with correct data
    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      name: "John",
      date: "2025-09-25",
      time: "18:30",
      guests: 4,
    });
  });
});
