import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("should display entered todo", () => {
    render(<App />);

    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Sleep" },
    });
    fireEvent.click(screen.getByText("Save"));

    expect(screen.getByText("Sleep")).toBeInTheDocument();
  });

  it("should be possible to add multiple todos", () => {
    render(<App />);

    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Sleep" },
    });
    fireEvent.click(screen.getByText("Save"));

    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Eat" },
    });
    fireEvent.click(screen.getByText("Save"));

    expect(screen.getByText("Sleep"));
    expect(screen.getByText("Eat"));
  });
});
