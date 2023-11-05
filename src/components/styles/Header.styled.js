import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  position: absolute;
  z-index: 10;
  // width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

    & img {

    }
`;

export const HamburgerMenu = styled.div`
  position: absolute;
  top: 32px;
  left: 32px;
  z-index: 20;
`;

export const Nav = styled.nav`
  background: white;
  top: 0;
  left: 0;
  width: 100%;

    & ul {
      display:flex;
      align-items: center;
      justify-content: center;
      // flex-wrap: wrap;
      overflow: hidden;

      & li {
        list-style: none;

        button {
          color: black;
          background-color: transparent;
          padding: 50px;
          border: none;
        }
      }
    }
`;

export const NavLi = styled.li`

`;
