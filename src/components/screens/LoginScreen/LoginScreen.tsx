import { FC } from "react";
import { LoginScreenProps } from "./types";
import LoginPage from "@/components/pages/LoginPage";
import AuthenticationLayout from "@/components/layouts/AuthenticationLayout";

const LoginScreen: FC<LoginScreenProps> = (props) => {
  return (
    <AuthenticationLayout>
      <LoginPage />
    </AuthenticationLayout>
  );
};

export default LoginScreen;
