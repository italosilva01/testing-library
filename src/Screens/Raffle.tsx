import { Content } from "components/Content/Content";
import { Header } from "components/Header/Header";
import { useListParticipants } from "hook/useListParticipants";
import { useResultDraw } from "hook/useResultDraw";
import { useState } from "react";

export const Raffle = () => {
  const options = useListParticipants();
  const result = useResultDraw();
  const [currentParticipant, setCurrentParticipant] = useState("");
  const [secretFriend, setSecretFriend] = useState("");

  const raffle = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setSecretFriend(result.get(currentParticipant)!);
  };

  return (
    <Content>
      <Header />
      <form onSubmit={raffle}>
        <select
          required
          name="currentParticipant"
          id="currentParticipant"
          placeholder="Selecione o seu nome"
          value={currentParticipant}
          onChange={(e) => {
            setCurrentParticipant(e.target.value);
          }}
        >
          {options.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <p>Clique em em sortear para ver quem é seu amigo secreto!</p>

        <button>Sortear</button>
      </form>
      {secretFriend && (
        <p className="resultado" role="alert">
          {secretFriend}
        </p>
      )}
    </Content>
  );
};
