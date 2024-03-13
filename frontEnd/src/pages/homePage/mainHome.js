import styled from "styled-components";

export const StyledMainHome = styled.main`
  max-width: 140rem;
  width: 75%;

  color: var(--color-gray-1);

  .profile__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    border-top: 0.1rem solid var(--color-gray-4);
    border-bottom: 0.1rem solid var(--color-gray-4);

    padding: 4rem 0rem;
    margin-bottom: 3rem;

    width: 100%;
  }
  .title__home {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .maintenance__home {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .alert__home {
    font-size: 1.6rem;
    font-weight: 400;
  }

  @media (min-width: 750px) {
    .profile__container {
      flex-direction: row;
      align-items: center;
    }

    .alert__container {
      display: flex;
    }
  }
`;
