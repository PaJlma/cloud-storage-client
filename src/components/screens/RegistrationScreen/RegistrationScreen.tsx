import RegistrationPage from "@/components/pages/RegistrationPage";
import { FC } from "react";
import { RegistrationScreenProps } from "./types";
import AuthenticationLayout from "@/components/layouts/AuthenticationLayout";

const RegistrationScreen: FC<RegistrationScreenProps> = (props) => {
  return (
    <AuthenticationLayout>
      <RegistrationPage />
    </AuthenticationLayout>
  );
};

export default RegistrationScreen;
