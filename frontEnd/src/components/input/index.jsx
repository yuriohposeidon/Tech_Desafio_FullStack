import { StyledInput } from "./input";

export const Input = ({ label, error, register, ...rest }) => {
  return (
    <StyledInput>
      <label>{label}</label>
      <input {...rest} {...register} />
      {error && <p className="error__input">{error}</p>}
    </StyledInput>
  );
};
