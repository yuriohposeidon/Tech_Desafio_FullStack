import { RegisterForm } from "./registerForm";
import { HeaderRegister } from "./headerRegister";
import { StyledBackGroundRegister } from "../registerPage/backgroundRegister";

export const RegisterPage = () => {
  return (
    <StyledBackGroundRegister>
      <HeaderRegister />
      <main>
        <RegisterForm />
      </main>
    </StyledBackGroundRegister>
  );
};
