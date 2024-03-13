import { Link } from "react-router-dom";
import { StyledHeaderRegister } from "./headerRegister";

export const HeaderRegister = () => {
  return (
    <StyledHeaderRegister>
      <div className="header__container">
        <div className="register">
        Cadastro
        </div>
        <Link to="/" className="button__return"> Voltar </Link>
      </div>
    </StyledHeaderRegister>
  );
};