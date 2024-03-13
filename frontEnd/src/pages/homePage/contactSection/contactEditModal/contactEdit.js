import styled from "styled-components";

export const StyledEditModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledEditModal = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: var(--color-gray-4);

  max-width: 37rem;
  width: 100%;

  .header__editModal {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5rem;

    background-color: var(--color-gray-3);
  }

  .title__editModal {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--color-gray-0);
  }

  .close__editModal {
    font-size: 1.4rem;
    font-weight: 500;

    color: var(--color-gray-2);

    cursor: pointer;
  }

  .form__container {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 1.5rem;
  }

  .input__container {
    display: flex;
    flex-direction: column;
    gap: rem;
  }

  .error__select {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-primary-focus);
  }

  label {
    font-size: 1.4rem;
    font-weight: 600;
    width: 11rem;
    color: var(--color-gray-0);
  }

  input,
  select {
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

  .buttons__container {
    display: flex;
    gap: 3rem;
  }

  .save__button {
    background-color: var(--color-primary);
    color: var(--color-gray-1);

    border-radius: 0.4rem;

    font-size: 1.6rem;
    font-weight: 600;

    padding: 1.5rem 3.5rem;
    margin-top: 2rem;
  }

  .save__button:hover {
    background-color: var(--color-primary-focus);
  }

  .delete__button {
    background-color: #a9a9a9;
    color: var(--color-gray-1);

    border-radius: 0.4rem;

    font-size: 1.6rem;
    font-weight: 600;

    padding: 1.5rem 2.5rem;
    margin-top: 2rem;
  }

  .delete__button:hover {
    background-color: var(--color-gray-2);
  }
`;
