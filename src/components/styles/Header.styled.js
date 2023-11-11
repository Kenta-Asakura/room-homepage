import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: absolute;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  padding: 32px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: center;
    justify-content: center;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
    position: absolute;
    top: 32px;
    left: 32px;
    z-index: 20;
  }
`;

export const Nav = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  // padding: 32px 0;

    & ul {
      display:flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      overflow: hidden;

      & li {
        list-style: none;

      & li:hover {
        border-bottom:
      }

        button {
          color: white;
          background-color: transparent;
          // padding: 50px;
          border: none;
        }
      }
    }
`;

export const NavLi = styled.li`
    color: white;
`;
