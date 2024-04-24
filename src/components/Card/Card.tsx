import React from "react";
export const Card = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className=" flex  flex-1 bg-white-cream mt-n16 justify-center rounded-t-64px border-t-2  p-20 border-black"
      role="container"
    >
      {children}
    </div>
  );
};
