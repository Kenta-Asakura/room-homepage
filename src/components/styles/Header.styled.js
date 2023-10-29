import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: absolute;
  z-index: 10;
  padding: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HamburgerMenu = styled.div`
  position: absolute;
  top: 32px;
  left: 32px;
`;

export const Nav = styled.nav`
  & li {
    list-style: none;

    button {
      color: white;
      background-color: transparent;
      padding: 50px;
      border: none;
    }
  }
`;

export const NavLi = styled.li`
`;
