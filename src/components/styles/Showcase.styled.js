import styled from "styled-components";

export const PictureContainer = styled.picture`
width: 100%;
`;

export const DesktopImageSource = styled.source`
object-fit: cover;
width: 100%;
`;

export const Image = styled.img`
object-fit: cover;
  width: 100%;
`;

export const Contents = styled.div`
  padding: 48px;

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
