import React from 'react'
import { Container, LogoPage, Footer } from './styles'
import ImageOne from 'C:/Users/igorn/Documents/landing-page/src/Asset/Image/Image One.png'
import ImageTwo from 'C:/Users/igorn/Documents/landing-page/src/Asset/Image/Image Two.png'
import ImageThree from 'C:/Users/igorn/Documents/landing-page/src/Asset/Image/Image Three.png'

export const Build: React.FC = () => {
  return (
    <Container>
      <LogoPage>
        <h1>Build Your Own Site like a Lego Constructor</h1>
        <span>
          We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
        </span>
        <button>
          Create an Account
        </button>
      </LogoPage>
      <Footer>
        <div>
          <img src={ImageOne} alt="Image1" />
          <p>A high-quality solution for a beautiful startup website.</p>
        </div>
        <div>
          <img src={ImageTwo} alt="Image1" />
          <p>Startups can save money on design and code and use those savings to develop the business.</p>
        </div>
        <div>
          <img src={ImageThree} alt="Image3" />
          <p>Startup Framework includes great form options for your startup projects.</p>
        </div>
      </Footer>
    </Container>
  )
}
