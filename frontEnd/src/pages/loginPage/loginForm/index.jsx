import { useForm } from "react-hook-form";
import { StyledFormLogin } from "./formLogin";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaLogin } from "../schema/schemaLogin";
import { Input } from "../../../components/input";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext.jsx";

export const LoginForm = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schemaLogin),
  });

  const submit = async (formData) => {
    loginUser(formData);
    reset();
  };

  return (
    <div>
      <StyledFormLogin onSubmit={handleSubmit(submit)}>
        <h1 className="title__login">Login</h1>

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

        <button className="enter__button">Entrar</button>

        <span className="suggestion__span">Ainda não possui uma conta?</span>

        <Link to="/register" className="register__button">
          Cadastre-se
        </Link>
      </StyledFormLogin>{" "}
    </div>
  );
};
