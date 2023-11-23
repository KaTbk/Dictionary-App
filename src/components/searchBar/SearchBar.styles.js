import styled from "styled-components";

export const SearchBarContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.bg.secondary};
  border-radius: 16px;
  padding: 1.5rem 2.4rem;
  max-width:750px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.bg.primary};
  transition: border .2s ease-in-out;
  input {
    border: none;
    width: 80%;
    background-color: transparent;
    outline: none;
    color: ${({ theme }) => theme.font};
    font-weight: 600;
    font-size: 1.6rem;
  }
  button {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  &:hover{
    border: 1px solid ${({ theme }) => theme.purple};;
  }
`;
