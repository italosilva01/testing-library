import React from "react";
import styled from "styled-components";
export const Card = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Container
      className=" flex  flex-1 flex-col bg-white-cream  rounded-t-64px border-t-2  p-20 border-black"
      role="container"
    >
      {children}
    </Container>
  );
};

const Container = styled.div`
  margin-top: -22px;
  z-index: 1;
`;
