import React from "react";
import { useListParticipants } from "hook/useListParticipants";

export const ListParticipants = () => {
  const participants: string[] = useListParticipants();
  return (
    <>
      <ul>
        {participants.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
