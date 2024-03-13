import { HeaderLogin } from "./headerLogin";
import { StyledBackGroundLogin } from "../loginPage/backgroundLogin";
import { LoginForm } from "./loginForm";

export const LoginPage = () => {
  return (
    <StyledBackGroundLogin>
      <HeaderLogin />
      <main>
        <LoginForm />
      </main>
    </StyledBackGroundLogin>
  );
};
