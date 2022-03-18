import { FC } from "react";

type TButton = {
  text: string;
};

const Button: FC<TButton> = ({ text }) => {
  return <button>{text}</button>;
};

export default Button;
