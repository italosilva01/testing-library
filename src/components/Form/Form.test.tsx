import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Form } from "./Form";
import { RecoilRoot } from "recoil";
describe("Form component", () => {
  test("when input empty, new participants don't should add", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    //encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //Encontrar o botão por sua função
    const button = screen.getByRole("button");
    //garantir que o input esteja no documento

    expect(input).toBeInTheDocument();
    //garantir que o botão esteja no documento
    expect(button).toBeInTheDocument();
    //garantir que o botão está desabilitado

    expect(button).toBeDisabled();
  });

  test("add participant when a input is not empty", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    //Inserir o valor do input
    fireEvent.change(input, { target: { value: "Ana Catarina" } });
    //Clicar no botão
    fireEvent.click(button);
    //Garantir que o form tem o foco
    expect(input).toHaveFocus();
    //Garantrir que o input está vazio
    expect(input).toHaveValue("");
  });

  test("Duplicate names are not allowed on the list", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "Ana Catarina" } });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: "Ana Catarina" } });
    fireEvent.click(button);
    const messageError = screen.getByRole("alert");
    expect(messageError.textContent).toBe(
      "Nome duplicados não são permitidos!"
    );
  });

  test("The error message should disappear after 3 seconds.", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "Ana Catarina" } });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: "Ana Catarina" } });
    fireEvent.click(button);
    let messageError = screen.queryByRole("alert");
    expect(messageError).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    messageError = screen.queryByRole("alert");
    expect(messageError).toBeNull();
  });
});
