import styled from "styled-components";

export const StyledNewModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledNewModal = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: var(--color-gray-4);

  max-width: 37rem;
  width: 100%;

  .header__newModal {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5rem;

    background-color: var(--color-gray-3);
  }

  .title__newModal {
    font-size: 1.6rem;
    font-weight: 700;
  }

  .close__newModal {
    font-size: 1.4rem;
    font-weight: 500;

    color: var(--color-gray-2);

    cursor: pointer;
  }

  .modal__container {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 1.5rem;
  }

  label {
    font-size: 1.4rem;
    font-weight: 600;
  }

  input {
    border: 0.1rem solid var(--color-gray-0);
    border-radius: 0.4rem;

    padding: 1.5rem;

    font-size: 1.6rem;
    font-weight: 500;
  }

  input {
    color: var(--color-gray-1);
  }

  input::placeholder {
    color: var(--color-gray-2);
  }

  select {
    color: var(--color-gray-2);
  }

  option {
    color: var(--color-gray-4);
    font-size: 1.8rem;
  }

  .error__select {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-primary-focus);
  }

  .register__button {
    background-color: var(--color-primary);
    color: var(--color-gray-1);

    border-radius: 0.4rem;

    font-size: 1.6rem;
    font-weight: 600;

    padding: 1.5rem;
    margin-top: 2rem;
  }

  .register__button:hover {
    background-color: var(--color-primary-focus);
  }
  
  .input__container {
    display: flex;
    flex-direction: column;
    gap: rem;
  }
`;
