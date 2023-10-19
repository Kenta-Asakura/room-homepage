import React from "react";
import aboutDark from "../images/image-about-dark.jpg";
import aboutLight from "../images/image-about-light.jpg";
import { SectionTwoContainer } from "./styles/SectionTwo.styled";

export default function SectionTwo() {
  return (
    <>
      <SectionTwoContainer>
        <article>
          <img src={aboutDark} alt="" />
        </article>

        <article>
          <h2>About our furniture</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </article>

        <article>
          <img src={aboutLight} alt="" />
        </article>
      </SectionTwoContainer>
    </>
  );
}
