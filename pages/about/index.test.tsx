import { render, screen } from "@testing-library/react";
import About from "."; // Update the path as necessary

describe("About component", () => {
  it("renders without crashing", () => {
    render(<About />);
  });

  it("should have title text", () => {
    render(<About />);
    const title = screen.getByText("About Us");
    expect(title).toBeInTheDocument();
  });
});
