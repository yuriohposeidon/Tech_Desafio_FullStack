import { useContext } from "react";
import { StyledNavHome } from "./navHome";
import { UserContext } from "../../../providers/UserContext";

export const NavHome = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <StyledNavHome>
      <div className="nav__container">
        <p className="title_nav">Bem vindo à sua HomePage</p>
        <button onClick={userLogout}>Sair</button>
      </div>
    </StyledNavHome>
  );
};
