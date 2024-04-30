import { useListParticipants } from "hook/useListParticipants";
import { useResultDraw } from "hook/useResultDraw";
import { useState } from "react";

export const Raffle = () => {
  const options = useListParticipants();
  const result = useResultDraw();
  const [currentParticipant, setCurrentParticipant] = useState("");
  const [secretFriend, setSecretFriend] = useState("");

  const raffle = (ev: React.FormEvent<HTMLSelectElement>) => {
    ev.preventDefault();
    if (result.has(currentParticipant)) {
      console.log("ASAI");
      setSecretFriend(result.get(currentParticipant)!);
    }
  };

  return (
    <section>
      <form>
        <select
          required
          name="currentParticipant"
          id="currentParticipant"
          placeholder="Selecione o seu nome"
          onSubmit={raffle}
          value={currentParticipant}
          onChange={(e) => setCurrentParticipant(e.target.value)}
        >
          {options.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <button>Sortear</button>
      </form>
      {secretFriend && <p role="alert">{secretFriend}</p>}
    </section>
  );
};
