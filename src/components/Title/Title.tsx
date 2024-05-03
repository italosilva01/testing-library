import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}
export const Title = ({ children }: TitleProps) => {
  return <h2 className="text-blue-royal text-2xl text-center">{children}</h2>;
};
