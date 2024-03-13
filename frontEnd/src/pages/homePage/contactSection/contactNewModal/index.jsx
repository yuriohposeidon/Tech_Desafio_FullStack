import { useForm } from "react-hook-form";
import { useContext } from "react";
import { StyledNewModal, StyledNewModalContainer } from "./newModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaModalNew } from "./schema";
import { ContactContext } from "../../../../providers/ContactContext";

export const ContactNewModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaModalNew),
  });
  const { setModalNew, addContact } = useContext(ContactContext);

  return (
    <StyledNewModalContainer>
      <StyledNewModal onSubmit={handleSubmit(addContact)}>
        <div className="header__newModal">
          <h2 className="title__newModal">Cadastrar Contato</h2>
          <button className="close__newModal" onClick={() => setModalNew(false)}>
            X
          </button>
        </div>

        <div className="modal__container">
          <div className="input__container">
            <label htmlFor="fullname">Nome Completo</label>
            <input
              type="text"
              {...register("fullname")}
              id="fullname"
              placeholder="Digite aqui o nome completo"
            />
          </div>

          <div className="input__container">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              {...register("email")}
              id="email"
              placeholder="Digite aqui o seu email"
            />
          </div>

          <div className="input__container">
            <label htmlFor="phone">Telefone</label>
            <input
              type="text"
              {...register("phone")}
              id="phone"
              placeholder="Digite aqui o seu telefone"
            />
          </div>

          <button className="register__button" type="submit">
            Cadastrar Contato
          </button>
        </div>
      </StyledNewModal>
    </StyledNewModalContainer>
  );
};
