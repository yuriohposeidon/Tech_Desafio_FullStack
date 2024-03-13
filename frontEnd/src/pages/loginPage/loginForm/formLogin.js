import styled from "styled-components";

export const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  min-width: 29rem;
  max-width: 37rem;
  width: 100%;
  height: 100%;

  margin: 0 auto;

  background-color: var(--color-gray-4);
  color: var(--color-gray-1);

  border-radius: 0.4rem;

  padding: 4rem 2rem 4rem 2rem;

  .title__login {
    font-size: 1.8rem;
    font-weight: 700;

    text-align: center;
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

  input {
    background-color: var(--color-gray-3);

    padding: 1.5rem;

    border: 0.15rem solid var(--color-gray-1);
    color: var(--color-gray-1);

    font-size: 1.6rem;
  }

  .enter__button {
    font-size: 1.6rem;
    font-weight: 500;

    color: var(--color-gray-0);
    background-color: var(--color-primary);

    padding: 1.5rem;

    border-radius: 0.4rem;

    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .suggestion__span {
    font-size: 1.2rem;
    font-weight: 600;

    text-align: center;

    color: var(--color-gray-2);

    margin-bottom: 1rem;
  }

  .register__button {
    font-size: 1.6rem;
    font-weight: 500;

    color: var(--color-gray-0);
    background-color: var(--color-gray-2);

    padding: 1.5rem;

    border-radius: 0.4rem;

    text-align: center;
  }

  .register__button:hover {
    background-color: var(--color-primary-focus);
  }
`;
