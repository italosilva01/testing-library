import React, { useRef, useState } from "react";
import { useAddParticipant } from "hook/useAddPaticipants";
import { useMessageError } from "hook/useMessageError";

import iconPerson from "../../assets/person_add.svg";
import { Title } from "components/Title/Title";
import styled from "styled-components";
export const Form = () => {
  const initialValue = "";
  const [currentNameParticipant, setCurrentNameParticipant] =
    useState(initialValue);
  const inputParticipantRef = useRef<HTMLInputElement>(null);
  const addParticipant = useAddParticipant();
  const messageError = useMessageError();

  const handleAddParticipant = (e: React.FormEvent) => {
    e.preventDefault();
    addParticipant(currentNameParticipant);
    inputParticipantRef.current?.focus();
    clearInput();
  };

  const clearInput = () => {
    setCurrentNameParticipant(initialValue);
  };
  return (
    <form
      onSubmit={handleAddParticipant}
      className="flex flex-col  items-center"
    >
      <Title>Vamos começar!</Title>
      <ContainerInput className=" flex flex-col w-80 gap-2 md:flex-row md:w-726 md:h-20 items-center ">
        <Label className="flex items-center  w-full h-12 border rounded-37px bg-white  md:rounded-t-lg">
          <span className="before:block before:absolute">
            <img src={iconPerson} alt="adicionar pessoal" />
          </span>

          <input
            ref={inputParticipantRef}
            placeholder="Insira os nomes dos participantes"
            value={currentNameParticipant}
            onChange={(e) => setCurrentNameParticipant(e.target.value)}
            className="w-full border-none overflow-hidden outline-none	rounded-37px placeholder:italic placeholder:indent-8 placeholder-opacity-30  "
          />
        </Label>

        <ButtonStyled
          className="w-36 h-12 bg-black	border rounded-37px"
          type="submit"
          disabled={currentNameParticipant === initialValue}
        >
          Adicionar
        </ButtonStyled>
      </ContainerInput>
      {messageError && <p role="alert">{messageError}</p>}
    </form>
  );
};

const ButtonStyled = styled.button`
  background-color: #c4c4c4;

  @media (min-width: 750px) {
    border-radius: 0px 37.5px 37.5px 0px;
  }
`;

const Label = styled.label`
  @media (min-width: 750px) {
    border-radius: 37.5px 0px 0px 37.5px;
  }
`;

const ContainerInput = styled.div`
  @media (min-width: 750px) {
    gap: 0;
  }
`;
