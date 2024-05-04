import { Button } from "components/Button/Button";
import { Card } from "components/Card/Card";
import { Content } from "components/Content/Content";
import { Header } from "components/Header/Header";
import { Title } from "components/Title/Title";
import { useListParticipants } from "hook/useListParticipants";
import { useResultDraw } from "hook/useResultDraw";
import { useState } from "react";
import airplane from "../assets/airplane.svg";

export const Raffle = () => {
  const options = useListParticipants();
  const result = useResultDraw();
  const [currentParticipant, setCurrentParticipant] = useState("");
  const [secretFriend, setSecretFriend] = useState("");

  const raffle = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setSecretFriend(result.get(currentParticipant)!);
    setTimeout(() => {
      setSecretFriend("");
    }, 5000);
  };

  return (
    <Content>
      <Header />
      <Card>
        <Title>Quem vai tirar o papelzinho?</Title>
        <form onSubmit={raffle} className="flex flex-col items-center gap-8">
          <select
            required
            name="currentParticipant"
            id="currentParticipant"
            placeholder="Selecione o seu nome"
            value={currentParticipant}
            onChange={(e) => {
              setCurrentParticipant(e.target.value);
            }}
            className="w-full border-none overflow-hidden outline-none	rounded-37px placeholder:italic placeholder:indent-8 placeholder-opacity-30  h-12  bg-white border-2 border-orange"
          >
            <option value="Selecione seu nome">Selecione seu nome</option>
            {options.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <p className="text-lg w-80 text-center	">
            Clique em em sortear para ver quem é seu amigo secreto!
          </p>

          <Button>Sortear</Button>
          {secretFriend && (
            <p className="resultado text-orange text-lg" role="alert">
              {secretFriend}
            </p>
          )}
        </form>

        <img src={airplane} alt="" className="w-36 h-32 mx-auto" />
      </Card>
    </Content>
  );
};
