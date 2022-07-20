import { render, screen } from "@testing-library/react";
import Img from ".";
import { BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Img src="/assets/Group 105.jpg" height="10px" width="20px" ></Img>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("img");
  expect(linkElement).toBeInTheDocument();
})
