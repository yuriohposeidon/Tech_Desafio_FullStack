import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ContactContext } from "../../../../providers/ContactContext";
import { schemaModalEdit } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledEditModal, StyledEditModalContainer } from "../contactEditModal/contactEdit";

export const ContactEditModal = () => {
  const { setModalEdit, removeContact, contactEditId, updateContacts, updateContact } =
    useContext(ContactContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: updateContact.title,
      status: updateContact.status,
    },
    resolver: zodResolver(schemaModalEdit),
  });

  const contactSubmit = (formData) => {
    updateContacts(formData, updateContact.id);
  };

  console.log(updateContact)

  return (
    <StyledEditModalContainer>
      <StyledEditModal onSubmit={handleSubmit(contactSubmit)}>
        <div className="header__editModal">
          <h2 className="title__editModal">Contato Detalhes</h2>
          <button className="close__editModal" onClick={() => setModalEdit(false)}>
            X
          </button>
        </div>

        <div className="form__container">
          <div className="input__container">
            <label htmlFor="fullname">Nome Completo</label>
            <input
              defaultValue={updateContact.fullname}
              type="text"
              {...register("fullname")}
              id="fullname"
              placeholder="Edite aqui o nome completo"
            />
          </div>

          <div className="input__container">
            <label htmlFor="email">Email</label>
            <input
              defaultValue={updateContact.email}
              type="text"
              {...register("email")}
              id="email"
              placeholder="Edite aqui o seu email"
            />
          </div>

          <div className="input__container">
            <label htmlFor="phone">Telefone</label>
            <input
              defaultValue={updateContact.phone}
              type="text"
              {...register("phone")}
              id="phone"
              placeholder="Edite aqui o seu telefone"
            />
          </div>

          <div className="buttons__container">
            <button type="submit" className="save__button">
              Salvar Alterações
            </button>
            <button
              type="button"
              className="delete__button"
              onClick={() => removeContact(contactEditId)}
            >
              Excluir
            </button>
          </div>
        </div>
      </StyledEditModal>
    </StyledEditModalContainer>
  );
};
