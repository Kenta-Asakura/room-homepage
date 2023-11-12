import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: absolute;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  padding: 32px 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderLogo = styled.div`
  padding-left: 32px;
`

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
  position: relative;
  top: 0;
  left: 0;
  width: 100%;

    & ul {
      display:flex;
      flex-wrap: wrap;
      overflow: hidden;

      & li {
        list-style: none;

        button {
          color: white;
          font-weight: ${({ theme }) => theme.fonts.medium};
          opacity: 80%;
          background-color: transparent;
          border: none;
          // position: relative;

            &::after {
            content: '';
            width: 100%;
            height: 2px;
            background-color: white;
            display: block;
            // position: absolute;
            left: 0px;
            bottom: 0px;
            opacity: 0;
            transition: all 0.3s;
            pointer-events: none;
            }

            &:hover::after {
              opacity: 1;
            }
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      &ul {
        button {
          font-size: 20px;
        }
      }
    }
`;

export const NavLi = styled.li`
    color: white;
`;
