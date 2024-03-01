import Header from "../components/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("should render Header properly", () => {
  test("Should render title on Header Component", () => {
    render(<Header />);

    const title = screen.getByText("Today's Appointment List");

    expect(title).toBeInTheDocument();
  });

  test("Should switch between light and dark modes in Header Component", () => {
    render(<Header />);

    const lightButton = screen.getByText("Dark", { name: /dark/i });

    fireEvent.click(lightButton);

    const darkButton = screen.getByText("Light", { name: /light/i });

    expect(darkButton).toBeInTheDocument();
  });
});
