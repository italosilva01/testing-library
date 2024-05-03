import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}
export const Content = ({ children }: ContentProps) => {
  return (
    <div className="flex flex-col h-screen bg-blue-royal ">{children}</div>
  );
};
