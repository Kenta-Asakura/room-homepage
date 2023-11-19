import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: absolute;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
    padding: 28px 0;
  }
`;

export const HeaderLogo = styled.div`
  padding-left: 28px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-left: 0;
  }
`

export const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
    position: absolute;
    top: 27px;
    left: 22px;
    z-index: 20;

    & button {
      background: none;
      border: none;
    }
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
      margin-left: -18px;

      & li {
        list-style: none;

        button {
          color: white;
          font-weight: ${({ theme }) => theme.fonts.medium};
          opacity: 80%;
          background-color: transparent;
          border: none;

            &::after {
            content: '';
            width: 100%;
            height: 2px;
            background-color: white;
            display: block;
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
      display: none;

        button {
          font-size: 20px;
        }
      }
    }
`;

export const NavLi = styled.li`
    color: white;
`;
