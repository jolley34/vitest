import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("should display a 'who.' title", () => {
    render(<App />);

    expect(screen.getByText(/who\./i)).toBeInTheDocument();
  });

  it("should display two img elements", () => {
    render(<App />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2); // Ensure there are exactly two img elements
  });
});
