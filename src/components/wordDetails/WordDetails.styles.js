import styled from "styled-components";

export const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.font};
  }
  div {
    border-top: 1px solid ${({ theme }) => theme.border};
    width: 80%;
  }
`;
export const WordDefinitionsListWrapper = styled.div`
  h3 {
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.gray};
  }
`;

export const WordDefinitionsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    font-size: 1.5rem;
    line-height: 2.4rem;
    display: flex;
    gap: 1.5rem;
    margin-bottom: 13px;
    color: ${({ theme }) => theme.font};

    &::before {
      content: "•";
      color: ${({ theme }) => theme.purple};
      font-size: 25px;
    }
  }
`;

export const WordSynonyms = styled.div`
  display: flex;
  align-items: start;
  gap: 2.5rem;
  margin: 2.4rem 0;
  h3 {
    margin: 0;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.gray};
  }
  p {
    margin: 0;
    font-size: 1.6rem;
    font-weight: 800;
    color: ${({ theme }) => theme.purple};
    line-height: 2.3rem;
  }
`;
