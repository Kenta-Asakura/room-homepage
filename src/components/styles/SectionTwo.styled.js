import styled from "styled-components";

export const SectionTwoContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
  }

  h2 {
    font-weight: ${({ theme }) => theme.fonts.medium};
    font-size: 30px;
    text-transform: uppercase;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 24px;
    }
  }

  p {
    color: ${({ theme }) => theme.colors['Slate']};
    opacity: 75%;
  }
`;

export const ArticleImg = styled.article`
  img {
    width: 100%;
    heigth: 100%;
  }
`;

export const SectionTwoContents = styled.article`
  padding: 24px;
`
