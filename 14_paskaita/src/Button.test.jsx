import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  test("renders component", async () => {
    render(<Button>Test button</Button>);

    const button = await screen.findByText("Test button");
    expect(button).toBeInTheDocument();
  });

  test("check if button accepts additional parameters", async () => {
    render(<Button disabled>Test button</Button>);

    const button = await screen.findByText("Test button");
    expect(button).toBeDisabled();
  });

  //   add few extra cases
});
