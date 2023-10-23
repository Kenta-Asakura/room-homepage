import React from "react";
import aboutDark from "../images/image-about-dark.jpg";
import aboutLight from "../images/image-about-light.jpg";
import { ArticleImg, SectionTwoContainer, SectionTwoContents } from "./styles/SectionTwo.styled";

export default function SectionTwo() {
  return (
    <>
      <SectionTwoContainer>
        <ArticleImg>
          <img src={aboutDark} alt="" />
        </ArticleImg>

        <SectionTwoContents>
          <h2>About our furniture</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </SectionTwoContents>

        <ArticleImg>
          <img src={aboutLight} alt="" />
        </ArticleImg>
      </SectionTwoContainer>
    </>
  );
}
