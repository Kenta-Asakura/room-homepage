import React, {useState} from 'react'
import arrow from '../images/icon-arrow.svg'
import left from '../images/icon-angle-left.svg'
import right from '../images/icon-angle-right.svg'
import { ArticleContainer, SlidesContainer, PictureContainer, DesktopImageSource, Image, ArrowButton, ArrowsList, ArrowsImg, Contents, ContentsH1, ContentsP, ShopButton } from './styles/Showcase.styled'
// import { Container } from './styles/Container.styled'

const data = [
  {
    id: 1,
    title: 'Discover innovative ways to decorate',
    description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    mobile: './images/mobile-image-hero-1.jpg',
    desktop: './images/desktop-image-hero-1.jpg',
  },
  {
    id: 2,
    title: 'We are available all across the globe',
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    mobile: './images/mobile-image-hero-2.jpg',
    desktop: './images/desktop-image-hero-2.jpg',
  },
  {
    id: 3,
    title: 'Manufactured with the best materials',
    description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    mobile: './images/mobile-image-hero-3.jpg',
    desktop: './images/desktop-image-hero-3.jpg',
  }
]

export default function Showcase() {
  const [items] = useState(data)

  return (
    <>
      <section>
        {items.map((item, index) => (
          <ArticleContainer key={item.id}>
            <SlidesContainer>
              <PictureContainer>
                <DesktopImageSource media='(min-width: 768px)' srcSet={item.desktop} />
                <Image src={item.mobile} alt={item.title} />
              </PictureContainer>

              <ArrowsList>
                <li>
                  <ArrowButton>
                    <ArrowsImg src={left} alt=''></ArrowsImg>
                  </ArrowButton>
                </li>
                <li>
                  <ArrowButton>
                    <ArrowsImg src={right} alt=''></ArrowsImg>
                  </ArrowButton>
                </li>
              </ArrowsList>
            </SlidesContainer>

            <Contents>
              <ContentsH1>{item.title}</ContentsH1>
              <ContentsP>{item.description}</ContentsP>
              <ShopButton>SHOP NOW <img src={arrow} alt='' /></ShopButton>
            </Contents>
          </ArticleContainer>
        ))}
      </section>
    </>
  )
}
