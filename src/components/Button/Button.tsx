import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className=" w-36  h-20 flex justify-center items-center md:w-80 md:px-10 gap-5 border-2 border-b-8 border-gray-950 rounded bg-orange text-white-cream text-xl"
    >
      {children}
    </button>
  );
};
