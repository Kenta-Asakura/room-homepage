import styled from "styled-components";

export const SectionContainer = styled.section`

`;

export const SlidesContainer = styled.div`
  position: relative;
`
export const ArticleContainer = styled.article`
  display: grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const PictureContainer = styled.picture`
  width: 100%;
`;

export const DesktopImageSource = styled.source`
  object-fit: cover;
  width: 100%;
  height: 100%
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%
`;

export const ArrowsList = styled.ul`
  display: flex;
  list-style: none;
  position: absolute;
  bottom: -9px;
  right: 0;
`;

export const ArrowButton= styled.button`
  background-color: black;
  border: none;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: rgb(64 64 64);
  }
`;

export const ArrowsImg = styled.img`
  padding: 16px;
`;

export const Contents = styled.div`
  padding: 48px;
  display: grid;
  align-content: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 32px;
  }
`;

export const ContentsH1 = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.colors['Slate']};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 21px;
  }
`;

export const ContentsP = styled.p`
  opacity: 75%;
  margin: 24px 0;
  color: ${({ theme }) => theme.colors['Slate']};
`;

export const ShopButton = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  letter-spacing: 0.7rem;
  font-weight: ${({ theme }) => theme.fonts.light};

  &:hover {
    opacity: 75%;
  }
`;
