import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 800px;
  margin: 9rem auto;
  span{
    font-size: 40px;
  }
  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.font};
  }
  p {
    font-size: 1.8rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.gray};
    text-align: center;
  }
`;
