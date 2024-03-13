import { useForm } from "react-hook-form";
import { useContext } from "react";
import { schemaPerfilEditModal } from "./schemaPerfilEdit";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  StyledEditModal,
  StyledEditModalContainer,
} from "../../contactSection/contactEditModal/contactEdit";
import { UserContext } from "../../../../providers/UserContext";

export const UserEditModal = () => {
  const { setModalPerfilEdit, removeUser, user, updateUser} = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaPerfilEditModal),
  });

  const userSubmit = (formData) => {
    updateUser(formData);
  };

  return (
    <StyledEditModalContainer>
      <StyledEditModal onSubmit={handleSubmit(userSubmit)}>
        <div className="header__editModal">
          <h2 className="title__editModal">User Detalhes</h2>
          <button className="close__editModal" onClick={() => setModalPerfilEdit(false)}>
            X
          </button>
        </div>

        <div className="form__container">
          <div className="input__container">
            <label htmlFor="fullname">Nome Completo</label>
            <input
              defaultValue={user.fullname}
              type="text"
              {...register("fullname")}
              id="fullname"
              placeholder="Edite aqui o nome completo"
            />
          </div>

          <div className="input__container">
            <label htmlFor="email">Email</label>
            <input
              defaultValue={user.email}
              type="text"
              {...register("email")}
              id="email"
              placeholder="Edite aqui o seu email"
            />
          </div>

          <div className="input__container">
            <label htmlFor="phone">Telefone</label>
            <input
              defaultValue={user.phone}
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
            <button type="button" className="delete__button" onClick={() => removeUser()}>
              Excluir
            </button>
          </div>
        </div>
      </StyledEditModal>
    </StyledEditModalContainer>
  );
};
