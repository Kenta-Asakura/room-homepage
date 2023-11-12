import { useState } from "react";
import { HeaderContainer, HeaderLogo, HamburgerMenu, Nav } from "./styles/Header.styled";
import logo from "../images/logo.svg"
import menu from "../images/icon-hamburger.svg"

export default function Header() {
  const [isSetOpen, setisSetOpen] = useState(false);



  return (
      <HeaderContainer>
        <HeaderLogo>
          <img src={logo} alt='' />
        </HeaderLogo>

        <div>
          <Nav>
            {/* is li component necessary ? */}
            {/* or just make nested li component ? */}
            <ul>
              <li><button>home</button></li>
              <li><button>shop</button></li>
              <li><button>about</button></li>
              <li><button>contact</button></li>
            </ul>
          </Nav>
        </div>

        <HamburgerMenu>
          <button>
            <img src={menu} alt='' />
          </button>
        </HamburgerMenu>
      </HeaderContainer>
  );
}
