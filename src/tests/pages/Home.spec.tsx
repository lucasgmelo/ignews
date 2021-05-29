import { render, screen } from "@testing-library/react";
import Home from "../../pages";

describe("Home page", () => {
  it("renders corretly", () => {
    render(<Home product={{ priceId: "fake-price", amount: 12 }} />);

  });
});
