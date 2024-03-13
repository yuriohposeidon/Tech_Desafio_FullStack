import { useContext, useEffect } from "react";
import { StyledBackGroundLogin } from "../loginPage/backgroundLogin";
import { StyledMainHome } from "./mainHome";
import { NavHome } from "./navHome";
import { StyledHeaderHome } from "./headerHome/headerHome";
import { UserContext } from "../../providers/UserContext";
import { ContactSection } from "./contactSection";
import { ContactContext } from "../../providers/ContactContext";
import { UserEditModal } from "./headerHome/perfilEditModal";

export const HomePage = () => {
  const { user, getUser, setModalPerfilEdit, modalPerfilEdit } = useContext(UserContext);
  const { getAllContact } = useContext(ContactContext);
  useEffect(() => {
    (async () => {
      await getUser();
      await getAllContact();
    })();
  }, []);

  const openPerfilModal = () => {
    setModalPerfilEdit(true);
  };

  return (
    <StyledBackGroundLogin>
      {modalPerfilEdit && <UserEditModal/>}
      <NavHome />

      <StyledHeaderHome className="profile__container">
        <div className="header__container">
          <h2 className="title__home">Ola, {user&&user.fullname} </h2>
          <button className="perfil__edit" onClick={() => openPerfilModal()}> Editar </button>
        </div>
      </StyledHeaderHome>

      <StyledMainHome>
        <ContactSection />
      </StyledMainHome>
    </StyledBackGroundLogin>
  );
};
