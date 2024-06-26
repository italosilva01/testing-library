import React from "react";

import { Form } from "components/Form/Form";
import { Card } from "components/Card/Card";
import { Foot } from "components/Foot/Foot";
import { useListParticipants } from "hook/useListParticipants";
import { Content } from "components/Content/Content";
import { Header } from "components/Header/Header";
export const Home = () => {
  const participants = useListParticipants();
  return (
    <Content>
      <Header />
      <Card>
        <Form />
        <ul className="flex flex-col  flex-1 bg-white-cream border-none items-center my-4">
          {participants.map((participant) => (
            <li key={participant}>{participant}</li>
          ))}
        </ul>
        <Foot />
      </Card>
    </Content>
  );
};
