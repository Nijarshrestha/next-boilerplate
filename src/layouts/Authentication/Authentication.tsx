import { FC } from "react";

type TAuthenticationLayout = {
  children: any;
};

const AuthenticationLayout: FC<TAuthenticationLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default AuthenticationLayout;
