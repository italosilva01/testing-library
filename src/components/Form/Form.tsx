import React, { useRef, useState } from "react";
import { useAddParticipant } from "state/hook/useAddPaticipants";
import { useMessageError } from "state/hook/useMessageError";

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
    <form onSubmit={handleAddParticipant}>
      <h2 className="text-blue-royal text-2xl text-center">Vamos começar!</h2>
      <input
        ref={inputParticipantRef}
        placeholder="Insira os nomes dos participantes"
        value={currentNameParticipant}
        onChange={(e) => setCurrentNameParticipant(e.target.value)}
      />
      <button type="submit" disabled={currentNameParticipant === initialValue}>
        Adicionar
      </button>
      {messageError && <p role="alert">{messageError}</p>}
    </form>
  );
};
