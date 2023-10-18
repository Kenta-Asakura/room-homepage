import { HeaderContainer } from "./styles/Header.styled";
import logo from "../images/logo.svg"
import menu from "../images/icon-hamburger.svg"

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <div>
          <img src={logo} alt='' />
        </div>

        <nav></nav>

        <div>
          <button>
            <img src={menu} alt='' />
          </button>
        </div>
      </HeaderContainer>
    </>
  );
}
