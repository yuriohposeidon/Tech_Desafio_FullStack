import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .error__input {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-primary-focus);
  }
`;
