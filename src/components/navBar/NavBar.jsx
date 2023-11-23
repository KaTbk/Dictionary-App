import { BtnsWrapper, StyledNav, ToggleThemeBtn } from "./NavBar.styles";
import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import { ReactComponent as MoonIcon } from "../../assets/images/icon-moon.svg";

const NavBar = ({ toggleTheme, isDarkTheme }) => {
  return (
    <StyledNav>
      <LogoIcon />
      <BtnsWrapper>
        <ToggleThemeBtn onClick={toggleTheme} isDarkTheme={isDarkTheme}>
          <button></button>
          <MoonIcon />
        </ToggleThemeBtn>
      </BtnsWrapper>
    </StyledNav>
  );
};

export default NavBar;
