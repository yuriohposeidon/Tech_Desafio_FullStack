import styled from "styled-components";

export const StyledHeaderHome = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  border-top: 0.1rem solid var(--color-gray-4);
  border-bottom: 0.1rem solid var(--color-gray-4);

  margin: 0 auto;
  padding: 4rem 0rem;

  max-width: 140rem;
  width: 75%;

  color: var(--color-gray-1);

  .header__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;

    width: 100%;
  }

  .title__home {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .course__module {
    font-size: 1.2rem;
    font-weight: 600;

    color: var(--color-gray-2);
  }

  .perfil__edit{
    font-size: 1.2rem;
    font-weight: 600;

    background-color: var(--color-gray-4);
    color: var(--color-gray-1);

    border-radius: 0.4rem;
    padding: 1rem 2rem;

    max-width: 7.5rem;

  }

  @media (min-width: 750px) {
    .header__container {
      flex-direction: row;
      align-items: center;
    }
  }
`;
