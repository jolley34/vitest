import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import mockedData from "../MockedData";
import Header from "./Header";
import PictureGrid from "./PictureGrid";

describe("PictureGrid", () => {
  it("should start at question 1", () => {
    render(<Header currentQuestion={0} totalQuestions={10} />);
    expect(screen.getByText(/Question 1\/10/)).toBeInTheDocument();
  });

  it("should increment question index on option click", () => {
    render(<PictureGrid />);
    const options = screen.getAllByRole("img");

    options.forEach((option, index) => {
      fireEvent.click(option);
      expect(
        screen.getByText(
          `Question ${Math.min(index + 2, mockedData.length)}/10`
        )
      ).toBeInTheDocument();
    });
  });
});
