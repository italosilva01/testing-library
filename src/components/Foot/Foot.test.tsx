import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Foot } from "./Foot";
import { useListParticipants } from "hook/useListParticipants";

jest.mock("hook/useListParticipants", () => {
  return {
    useListParticipants: jest.fn(),
  };
});
const mockNavigate = jest.fn();
const mockRaffle = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

jest.mock("hook/useDraw", () => {
  return {
    useDraw: () => mockRaffle,
  };
});

describe("when there are insufficient participants in the list", () => {
  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue([]);
  });
  test("the game can't initiate", () => {
    render(
      <RecoilRoot>
        <Foot />
      </RecoilRoot>
    );

    const buttonIniciate = screen.getByRole("button");
    expect(buttonIniciate).toBeDisabled();
  });
});

describe("when there are sufficient participants in the list", () => {
  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue([
      "italo",
      "madruguinha",
      "douglas",
    ]);
  });
  test("the game can initiate", () => {
    render(
      <RecoilRoot>
        <Foot />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    expect(button).toBeEnabled();
  });

  test("The game has initiated", () => {
    render(
      <RecoilRoot>
        <Foot />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalled();
    expect(mockRaffle).toHaveBeenCalledTimes(1);
  });
});
