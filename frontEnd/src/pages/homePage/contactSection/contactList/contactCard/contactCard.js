import styled from "styled-components";

export const StyledContactCard = styled.div`
  .card__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    padding: 2rem;

    background-color: var(--color-gray-5);

    border-radius: 0.4rem;
  }

  .card__container:hover {
    background-color: var(--color-gray-3);
    cursor: pointer;
  }

  .contact__title {
    font-size: 1.4rem;
    font-weight: 700;
  }
  @media (min-width: 750px) {
    .card__container {
      flex-direction: row;
    }
  }
`;
