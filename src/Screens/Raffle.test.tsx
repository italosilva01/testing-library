import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListParticipants } from "hook/useListParticipants";
import { Raffle } from "./Raffle";
import { useResultDraw } from "hook/useResultDraw";

jest.mock("hook/useListParticipants", () => {
  return {
    useListParticipants: jest.fn(),
  };
});
jest.mock("hook/useResultDraw", () => {
  return {
    useResultDraw: jest.fn(),
  };
});
describe("In the page of Raffle", () => {
  const participants = ["italo", "rodolfo", "aroldo", "natanael"];

  const resultDraw = new Map([
    ["italo", "rodolfo"],
    ["rodolfo", "aroldo"],
    ["aroldo", "natanael"],
    ["natanael", "italo"],
  ]);
  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue(participants);
    (useResultDraw as jest.Mock).mockReturnValue(resultDraw);
  });
  test("All participants may show your secret friend", () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(participants.length);
  });

  test("The secret friend is shown on request ", () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");

    fireEvent.change(select, {
      target: { value: participants[0] },
    });

    const button = screen.getByRole("button");
    fireEvent.click(button);
    const secretFriend = screen.getByRole("alert");

    expect(secretFriend).toBeInTheDocument();
  });
});
