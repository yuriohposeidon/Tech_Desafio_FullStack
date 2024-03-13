import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaRegister } from "../schema/schemaRegister";
import { Input } from "../../../components/input";
import { StyledFormRegister } from "./formRegister";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(schemaRegister),
  });

  const submit = async (formData) => {
    await registerUser(formData);
    reset();
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit(submit)}>
      <div className="title__container">
        <h1 className="title__register">Crie sua conta</h1>

        <h3 className="subTitle__register">Vamos começar !</h3>
      </div>

      <Input
        label="Nome Completo"
        type="text"
        register={register("fullname")}
        placeholder="Digite aqui seu nome completo"
        error={errors.fullname?.message}
      />

      <Input
        label="Email"
        type="email"
        register={register("email")}
        placeholder="Digite aqui seu email"
        error={errors.email?.message}
      />

      <Input
        label="Senha"
        type="password"
        register={register("password")}
        placeholder="Digite aqui sua senha"
        error={errors.password?.message}
      />

      <Input
        label="Confirmar Senha"
        type="password"
        register={register("confirmPassword")}
        placeholder="Digite novamente sua senha"
        error={errors.confirmPassword?.message}
      />

      <Input
        label="Telefone"
        type="text"
        register={register("phone")}
        placeholder="Fale sobre você"
        error={errors.phone?.message}
      />

      <button className="button__register">Cadastrar</button>
    </StyledFormRegister>
  );
};
