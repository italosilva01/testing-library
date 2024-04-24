import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Home } from "./Home";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe("The settings' page", () => {
  test("The page should be rendered correctly", () => {
    const { container } = render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
