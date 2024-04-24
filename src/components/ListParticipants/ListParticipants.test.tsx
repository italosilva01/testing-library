import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { ListParticipants } from "./Listparticipants";
import { useListParticipants } from "state/hook/useListParticipants";
const zero = 0;
//mokando uma hook
//aqui simula a utlização do hoook useListParticipants
// Todo codigo que está sendo testado, caso use o useListParticipants, a função será simulada pelo jest.
jest.mock("state/hook/useListParticipants", () => {
  return {
    useListParticipants: jest.fn(),
  };
});

describe("A list participants empty", () => {
  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue([]);
  });
  test("should render with an empty", () => {
    render(
      <RecoilRoot>
        <ListParticipants />
      </RecoilRoot>
    );

    const itemsList = screen.queryAllByRole("listitem");
    expect(itemsList).toHaveLength(zero);
  });
});
describe("A list participants not empty", () => {
  const participants = ["italo", "joel"];

  // a cada teste
  // estamos adicionando a lista de participants na simulação do hook
  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue(participants);
  });
  test("should render with two participants", () => {
    render(
      <RecoilRoot>
        <ListParticipants />
      </RecoilRoot>
    );

    const itemsList = screen.queryAllByRole("listitem");
    expect(itemsList).toHaveLength(participants.length);
  });
});
