import React from "react";

import smallLogo from "../assets/logo-pequeno.png";
import largeLogo from "../assets/logo.png";
import participante from "../assets/participante.png";
import { Form } from "components/Form/Form";
import { Card } from "components/Card/Card";
import { Foot } from "components/Foot/Foot";
export const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-blue-royal ">
      <header className="flex flex-col bg-blue-royal items-center md:px-24 md:flex-row md:justify-between">
        <img
          src={smallLogo}
          alt="Logo Sorteador de Amigo secreto"
          width={186}
          height={157}
          className="block md:hidden"
        />
        <img
          src={largeLogo}
          alt="Logo Sorteador de Amigo secreto"
          width={186}
          height={157}
          className="hidden md:block"
        />
        <img
          src={participante}
          alt="Desenho de um participante"
          width={328}
          height={158}
        />
      </header>

      <Card>
        <Form />
      </Card>
      <Foot />
    </div>
  );
};
