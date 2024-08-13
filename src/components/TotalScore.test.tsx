import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import mockedData from "../MockedData";
import TotalScore from "./TotalScore";

describe("TotalScore", () => {
  it("should display the correct score and total number of questions", () => {
    const score = 5;
    const currentQuestionIndex = 10;

    render(
      <TotalScore score={score} currentQuestionIndex={currentQuestionIndex} />
    );

    expect(
      screen.getByText(
        `You got ${score} of ${mockedData.length} right answers!`
      )
    ).toBeInTheDocument();
  });

  it("should reload window when clicking try again", () => {
    const score = 5;
    const currentQuestionIndex = 10;

    render(
      <TotalScore score={score} currentQuestionIndex={currentQuestionIndex} />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(window.location.reload).toHaveBeenCalled;
  });
});
