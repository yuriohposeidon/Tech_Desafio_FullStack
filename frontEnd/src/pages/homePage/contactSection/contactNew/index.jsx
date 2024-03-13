import { useContext } from "react";
import plus from "../../../../assets/plus.svg";
import { StyledNewContainer } from "./newContainer";
import { ContactContext } from "../../../../providers/ContactContext";

export const ContactNew = () => {
  const { setModalNew } = useContext(ContactContext);

  return (
    <StyledNewContainer>
      <h2 className="new__title">Contatos</h2>
      <button className="new__button" onClick={() => setModalNew(true)}>
        {" "}
        <img src={plus} alt="Adicionar" />{" "}
      </button>
    </StyledNewContainer>
  );
};
