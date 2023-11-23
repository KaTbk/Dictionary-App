import styled from "styled-components";

export const StyledNav = styled.nav`
  padding: 1rem 0;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 790px;
  margin: 0 auto 3rem;
`;

export const BtnsWrapper = styled.div``;

export const ToggleThemeBtn = styled.div`
  display: flex;
  gap: 20px;
  button {
    width: 40px;
    height: 22px;
    border: none;
    border-radius: 10px;
    position: relative;
    background-color: ${({ theme, isDarkTheme }) =>
      isDarkTheme ? theme.purple : theme.gray};
     transition: background-color 0.2s ease-in-out;
     cursor: pointer;
    &::before {
      content: "";
      width: 14px;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: #ffffff;
      position: absolute;
      left: 4px;
      top: 4px;
      transform: ${({ isDarkTheme }) => isDarkTheme && "translateX(18px)"};
      transition: transform 0.5s;
    }
    &:hover {
      background-color: ${({ theme, isDarkTheme }) =>
        !isDarkTheme ? theme.purple : theme.gray};
    }
  }
  svg {
    stroke: ${({ theme, isDarkTheme }) =>
      isDarkTheme ? theme.purple : theme.gray};
  }
`;
