import styled from "styled-components";

export const CardWrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;

export const DefinitionsSource = styled.div`
  margin-bottom: 4rem;
  div {
    &:first-of-type {
      width: 100%;
      border-top: 1px solid ${({ theme }) => theme.border};
      margin: 2.4rem 0;
    }
    &:last-of-type {
      display: flex;
      gap: 2.5rem;
      flex-wrap: wrap;
      align-items: center;

      h4 {
        margin: 0;
        color: ${({ theme }) => theme.gray};
        font-size: 1.4rem;
        font-weight: 400;
      }
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.font};
        font-size: 1.4rem;
        display: flex;
        align-self: center;
        gap: 10px;
        svg{
          font-size: 12px;
        }
      }
    }
  }
`;
