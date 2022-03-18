import { FC } from "react";
import Login from "../../feature/Login/login";
import AuthenticationLayout from "../../layouts/Authentication/Authentication";

const LoginPage: FC = () => {
  return (
    <AuthenticationLayout>
      <Login />
    </AuthenticationLayout>
  );
};

export default LoginPage;
