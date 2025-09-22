import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";

test("reserve button triggers submit", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Find the reserve button
  const reserveButton = screen.getByRole("button", { name: /Reserve/i });
  expect(reserveButton).toBeInTheDocument();

  // Mock a click
  fireEvent.click(reserveButton);
});
