import styled from "styled-components";

export const StyledFormRegister = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 0.4rem;

  min-width: 29rem;
  max-width: 37rem;
  width: 100%;
  height: 100%;

  margin: 0 auto;
  padding: 4rem 2rem 3rem 2rem;

  background-color: var(--color-gray-4);
  color: var(--color-gray-1);

  .title__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    margin-bottom: 1rem;
  }

  .title__register {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .subTitle__register {
    font-size: 1.2rem;
    font-weight: 400;

    color: var(--color-gray-2);
  }

  .input__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    font-size: 1.2rem;
    font-weight: 400;
  }

  input,
  select {
    background-color: var(--color-gray-3);

    padding: 1.5rem;

    border-radius: 0.4rem;

    color: var(--color-gray-1);

    font-size: 1.6rem;
  }

  input::placeholder {
    color: var(--color-gray-2);
  }

  select {
    color: var(--color-gray-2);
  }

  option {
    color: var(--color-gray-1);

    font-size: 1.8rem;
  }

  .button__register {
    font-size: 1.6rem;
    font-weight: 500;

    color: var(--color-gray-1);
    background-color: var(--color-primary);

    padding: 1.5rem;
    margin-top: 1rem;

    border-radius: 0.4rem;
  }

  .button__register:hover {
    background-color: var(--color-primary-focus);
  }

  .error__select {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-primary-focus);
  }
`;
